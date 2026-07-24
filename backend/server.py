from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import requests as http_requests
import razorpay

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Razorpay client
razorpay_client = razorpay.Client(
    auth=(os.environ.get('RAZORPAY_KEY_ID'), os.environ.get('RAZORPAY_KEY_SECRET'))
)


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class VerifyPaymentRequest(BaseModel):
    razorpay_payment_id: str


class CreateOrderRequest(BaseModel):
    amount: int
    name: str
    phone: str


# Routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


@api_router.post("/create-order")
async def create_order(payload: CreateOrderRequest):
    try:
        order = razorpay_client.order.create({
            "amount": payload.amount,
            "currency": "INR",
            "notes": {
                "name": payload.name,
                "phone": payload.phone,
            }
        })
        return order
    except Exception as e:
        logging.getLogger(__name__).error(f"Razorpay order creation failed: {str(e)}")
        return {"error": "Order creation failed"}


@api_router.post("/verify-payment")
async def verify_payment(payload: VerifyPaymentRequest):
    """
    Verifies a Razorpay payment server-side before the frontend fires
    the Meta Pixel Purchase event.
    """
    payment_id = payload.razorpay_payment_id

    razorpay_key_id = os.environ.get('RAZORPAY_KEY_ID')
    razorpay_key_secret = os.environ.get('RAZORPAY_KEY_SECRET')

    if not razorpay_key_id or not razorpay_key_secret:
        logger.error("Razorpay API keys not configured in environment variables")
        return {"verified": False, "error": "Server configuration error"}

    try:
        response = http_requests.get(
            f"https://api.razorpay.com/v1/payments/{payment_id}",
            auth=(razorpay_key_id, razorpay_key_secret),
            timeout=10
        )

        if response.status_code != 200:
            logger.warning(f"Razorpay verification failed for payment_id={payment_id}, status={response.status_code}")
            return {"verified": False}

        payment = response.json()
        is_verified = payment.get("status") == "captured"

        if is_verified:
            existing = await db.verified_payments.find_one({"payment_id": payment_id})
            if not existing:
                await db.verified_payments.insert_one({
                    "payment_id": payment_id,
                    "amount": payment.get("amount"),
                    "status": payment.get("status"),
                    "verified_at": datetime.now(timezone.utc).isoformat()
                })

        return {"verified": is_verified, "status": payment.get("status")}

    except http_requests.exceptions.RequestException as e:
        logger.error(f"Razorpay API request failed: {str(e)}")
        return {"verified": False, "error": "Verification request failed"}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()