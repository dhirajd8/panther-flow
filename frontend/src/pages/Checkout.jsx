import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Video, Award } from 'lucide-react';

const COURSE_PRICE = 799;
const BACKEND_URL = 'https://panther-flow-backend.onrender.com';
const RAZORPAY_KEY = 'YOUR_RAZORPAY_KEY_ID'; // TODO: replace with your live/test key

const highlights = [
  '15 Days Live Classes — 100% Marathi मध्ये',
  'Real Meta Ads Campaigns सोबत Hands-on Practice',
  'Basic ते Advanced — पूर्ण Structured Curriculum',
  'Live Doubt Solving — रोज नवीन concept',
  '₹4.5L+ Ad Spend Managed अनुभवातून शिकवलं जातं',
  'Lifetime Access to Recorded Sessions',
  'WhatsApp Community Support',
];

const loadRazorpayScript = () =>
  new Promise((resolve) => {
    if (document.getElementById('razorpay-checkout-js')) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.id = 'razorpay-checkout-js';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

const Checkout = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validate = () => {
    if (!name.trim()) return 'कृपया तुमचं नाव टाका';
    if (!/^[6-9]\d{9}$/.test(phone.trim())) return 'कृपया valid 10-digit phone number टाका';
    return '';
  };

  const handlePay = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    setLoading(true);

    const sdkLoaded = await loadRazorpayScript();
    if (!sdkLoaded) {
      setError('Payment SDK load होऊ शकलं नाही. पुन्हा प्रयत्न करा.');
      setLoading(false);
      return;
    }

    try {
      const orderRes = await fetch(`${BACKEND_URL}/api/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: COURSE_PRICE * 100, name, phone }),
      });

      if (!orderRes.ok) {
        throw new Error(`Order creation failed: ${orderRes.status}`);
      }

      const orderData = await orderRes.json();

      if (!orderData.id) {
        throw new Error('No order id returned from backend');
      }

      const options = {
        key: RAZORPAY_KEY,
        amount: COURSE_PRICE * 100,
        currency: 'INR',
        name: 'Panther Flow AI Labs',
        description: 'Meta Ads Marathi Course',
        order_id: orderData.id,
        prefill: { name, contact: phone },
        theme: { color: '#4F46E5' },
        handler: function (response) {
          navigate(`/thank-you?razorpay_payment_id=${response.razorpay_payment_id}`);
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      setError('काहीतरी चूक झाली. पुन्हा प्रयत्न करा किंवा आम्हाला WhatsApp करा.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-stretch" style={{ background: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
      {/* Left: Highlights */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

        <div className="relative z-10 max-w-md">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: '#ffffff' }}
          >
            <Award className="w-4 h-4" style={{ color: '#7C3AED' }} />
            <span style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Meta Ads Marathi Course</span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Master Meta Ads<br />
            <span style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>From Zero to Expert</span>
          </h1>

          <ul className="space-y-4 mt-8">
            {highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#818cf8' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{point}</span>
              </li>
            ))}
          </ul>

            <div
  className="flex items-center gap-6 mt-10 pt-6"
  style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
>
  <div className="flex items-center gap-2">
    <Video className="w-4 h-4" style={{ color: '#818cf8' }} />
    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
      Live Sessions
    </span>
  </div>

  <div className="flex items-center gap-2">
    <ShieldCheck className="w-4 h-4" style={{ color: '#818cf8' }} />
    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
      Secure Payment
    </span>
          </div>   {/* relative z-10 */}
      </div>     {/* Left panel */}

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <button
            onClick={() => navigate('/')}
            className="text-sm mb-6"
            style={{ color: '#6366f1', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            ← Back to Home
          </button>

          <h2 className="text-2xl font-bold mb-1" style={{ color: '#0f0f0f' }}>Complete Your Enrollment</h2>
          <p className="text-sm mb-8" style={{ color: '#6b7280' }}>Details भरा आणि secure payment करा.</p>

          <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl" style={{ background: 'rgba(79,70,229,0.06)', border: '1px solid rgba(79,70,229,0.15)' }}>
            <span className="text-lg line-through" style={{ color: '#9ca3af' }}>₹4,999</span>
            <span className="text-2xl font-black" style={{
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>₹{COURSE_PRICE}</span>
            <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>84% OFF</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="तुमचं नाव"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ border: '1.5px solid #e5e7eb' }}
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ border: '1.5px solid #e5e7eb' }}
              />
            </div>

            {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}

            <button
              onClick={handlePay}
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
            >
              {loading ? 'Processing...' : `Pay ₹${COURSE_PRICE} & Enroll →`}
            </button>

            <div className="flex items-center justify-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4" style={{ color: '#818cf8' }} />
              <span className="text-xs" style={{ color: '#9ca3af' }}>100% Secure Payment via Razorpay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;