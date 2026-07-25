from fastapi import FastAPI, APIRouter, HTTPException, Header, Depends
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import requests as http_requests
import razorpay
import jwt

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

JWT_SECRET = os.environ.get('JWT_SECRET', 'change-me-please')


# ---------------- Models ----------------

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


class LoginRequest(BaseModel):
    username: str
    password: str


class FAQItem(BaseModel):
    question: str
    answer: str


class BlogPostCreate(BaseModel):
    title: str
    slug: Optional[str] = None
    author: Optional[str] = "Panther Flow"
    category: Optional[str] = "Digital Marketing"
    metaDescription: Optional[str] = ""
    content: str
    status: Optional[str] = "draft"  # "draft" or "published"
    faqs: Optional[List[FAQItem]] = []


class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    author: Optional[str] = None
    category: Optional[str] = None
    metaDescription: Optional[str] = None
    content: Optional[str] = None
    status: Optional[str] = None
    faqs: Optional[List[FAQItem]] = None


# ---------------- Helpers ----------------

def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text)
    return text.strip('-')


def estimate_read_time(content: str) -> str:
    words = len(content.split())
    minutes = max(1, round(words / 200))
    return f"{minutes} min read"


def create_token(username: str) -> str:
    payload = {
        "sub": username,
        "exp": datetime.now(timezone.utc) + timedelta(days=7),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm="HS256")


def verify_token(authorization: Optional[str] = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = authorization.split(" ", 1)[1]
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        return payload["sub"]
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Session expired, please log in again")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid session")


# ---------------- Routes ----------------

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


# ---------------- Newsletter ----------------

class SubscribeRequest(BaseModel):
    email: str


import smtplib
from email.mime.text import MIMEText


def send_email(to_address: str, subject: str, body: str):
    gmail_address = os.environ.get('GMAIL_ADDRESS')
    gmail_password = os.environ.get('GMAIL_APP_PASSWORD')

    if not gmail_address or not gmail_password:
        logging.getLogger(__name__).error("Gmail credentials not configured")
        return False

    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = gmail_address
    msg['To'] = to_address

    try:
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(gmail_address, gmail_password)
            server.sendmail(gmail_address, [to_address], msg.as_string())
        return True
    except Exception as e:
        logging.getLogger(__name__).error(f"Email send failed: {str(e)}")
        return False


@api_router.post("/subscribe")
async def subscribe(payload: SubscribeRequest):
    email = payload.email.strip().lower()

    existing = await db.newsletter_subscribers.find_one({"email": email})
    if existing:
        return {"success": True, "message": "Already subscribed"}

    await db.newsletter_subscribers.insert_one({
        "email": email,
        "subscribed_at": datetime.now(timezone.utc).isoformat()
    })

    gmail_address = os.environ.get('GMAIL_ADDRESS', 'contactpantherflow@gmail.com')

    send_email(
        gmail_address,
        "New Newsletter Subscriber - Panther Flow",
        f"New subscriber: {email}"
    )

    send_email(
        email,
        "Welcome to Panther Flow! 🚀",
        "नमस्कार!\n\nPanther Flow च्या updates साठी subscribe केल्याबद्दल धन्यवाद.\n\n"
        "तुम्हाला लवकरच free Meta Ads tips आणि नवीन batch information मिळेल.\n\n"
        "काही प्रश्न असतील तर आम्हाला कधीही reply करा.\n\n"
        "धन्यवाद,\nPanther Flow AI Labs"
    )

    return {"success": True}


# ---------------- Admin Auth ----------------

@api_router.post("/admin/login")
async def admin_login(payload: LoginRequest):
    admin_username = os.environ.get('ADMIN_USERNAME')
    admin_password = os.environ.get('ADMIN_PASSWORD')

    if not admin_username or not admin_password:
        raise HTTPException(status_code=500, detail="Admin credentials not configured on server")

    if payload.username != admin_username or payload.password != admin_password:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    token = create_token(payload.username)
    return {"token": token}


# ---------------- Blog: Admin (protected) ----------------

@api_router.get("/admin/blog")
async def admin_list_blog(user: str = Depends(verify_token)):
    posts = await db.blog_posts.find({}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
    return posts


@api_router.post("/admin/blog")
async def admin_create_blog(payload: BlogPostCreate, user: str = Depends(verify_token)):
    slug = payload.slug.strip() if payload.slug else slugify(payload.title)

    existing = await db.blog_posts.find_one({"slug": slug})
    if existing:
        raise HTTPException(status_code=400, detail="A post with this slug already exists")

    now = datetime.now(timezone.utc)
    post = {
        "id": str(uuid.uuid4()),
        "title": payload.title,
        "slug": slug,
        "author": payload.author or "Panther Flow",
        "category": payload.category or "Digital Marketing",
        "metaDescription": payload.metaDescription or "",
        "content": payload.content,
        "status": payload.status or "draft",
        "faqs": [f.model_dump() for f in (payload.faqs or [])],
        "readTime": estimate_read_time(payload.content),
        "date": now.strftime("%Y-%m-%d"),
        "createdAt": now.isoformat(),
        "updatedAt": now.isoformat(),
    }
    await db.blog_posts.insert_one(post)
    post.pop("_id", None)
    return post


@api_router.put("/admin/blog/{post_id}")
async def admin_update_blog(post_id: str, payload: BlogPostUpdate, user: str = Depends(verify_token)):
    existing = await db.blog_posts.find_one({"id": post_id})
    if not existing:
        raise HTTPException(status_code=404, detail="Post not found")

    update_data = {k: v for k, v in payload.model_dump().items() if v is not None}
    if "faqs" in update_data and update_data["faqs"] is not None:
        update_data["faqs"] = [f if isinstance(f, dict) else f.model_dump() for f in update_data["faqs"]]

    if "slug" in update_data:
        slug_conflict = await db.blog_posts.find_one({"slug": update_data["slug"], "id": {"$ne": post_id}})
        if slug_conflict:
            raise HTTPException(status_code=400, detail="A post with this slug already exists")

    if "content" in update_data:
        update_data["readTime"] = estimate_read_time(update_data["content"])

    update_data["updatedAt"] = datetime.now(timezone.utc).isoformat()

    await db.blog_posts.update_one({"id": post_id}, {"$set": update_data})
    updated = await db.blog_posts.find_one({"id": post_id}, {"_id": 0})
    return updated


@api_router.delete("/admin/blog/{post_id}")
async def admin_delete_blog(post_id: str, user: str = Depends(verify_token)):
    result = await db.blog_posts.delete_one({"id": post_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"success": True}


# ---------------- Blog: Public ----------------

@api_router.get("/blog")
async def public_list_blog():
    posts = await db.blog_posts.find({"status": "published"}, {"_id": 0}).sort("createdAt", -1).to_list(1000)
    return posts


@api_router.get("/blog/{slug}")
async def public_get_blog(slug: str):
    post = await db.blog_posts.find_one({"slug": slug, "status": "published"}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


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