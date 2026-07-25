import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Video, Award, Lock, Users } from 'lucide-react';

const COURSE_PRICE = 799;
const BACKEND_URL = 'https://panther-flow-backend.onrender.com';
const RAZORPAY_KEY = 'rzp_live_T5MCyPPJShFkS5';

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

  // Scroll to top the moment this page mounts, so it never opens mid-page.
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Wake the backend as soon as this page loads, so it's warm by the time
  // the person finishes filling the form and clicks Pay.
  React.useEffect(() => {
    fetch(`${BACKEND_URL}/api/`).catch(() => {});
  }, []);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [slowLoading, setSlowLoading] = useState(false);
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
    setSlowLoading(false);

    const slowTimer = setTimeout(() => setSlowLoading(true), 4000);

    const sdkLoaded = await loadRazorpayScript();
    if (!sdkLoaded) {
      clearTimeout(slowTimer);
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
      clearTimeout(slowTimer);
      setSlowLoading(false);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:py-14" style={{ background: '#f7f7fb', fontFamily: 'Poppins, sans-serif' }}>
      <div className="w-full max-w-lg mx-auto">

        <button
          onClick={() => navigate('/')}
          className="text-sm mb-4"
          style={{ color: '#6366f1', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ← Back to Home
        </button>

        {/* Main event: the form, elevated and prominent */}
        <div
          className="rounded-3xl p-6 sm:p-8"
          style={{ background: '#ffffff', boxShadow: '0 20px 60px rgba(15,15,26,0.12)', border: '1px solid #f0f0f5' }}
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit"
            style={{ background: 'rgba(79,70,229,0.08)' }}
          >
            <Award className="w-3.5 h-3.5" style={{ color: '#7C3AED' }} />
            <span style={{ color: '#4F46E5' }}>Meta Ads Marathi Course</span>
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: '#0f0f0f' }}>Complete Your Enrollment</h1>
          <p className="text-sm mb-6" style={{ color: '#6b7280' }}>Details भरा आणि secure payment करा.</p>

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

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()} autoComplete="on">
            <div>
              <label htmlFor="fullName" className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Full Name</label>
              <input
                id="fullName"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="तुमचं नाव"
                className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-colors"
                style={{ border: '1.5px solid #e5e7eb' }}
                onFocus={(e) => e.target.style.borderColor = '#818cf8'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Phone Number</label>
              <input
                id="phoneNumber"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-colors"
                style={{ border: '1.5px solid #e5e7eb' }}
                onFocus={(e) => e.target.style.borderColor = '#818cf8'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}

            <button
              type="button"
              onClick={handlePay}
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow: '0 8px 24px rgba(79,70,229,0.3)' }}
            >
              {loading ? (slowLoading ? 'Almost there, setting things up...' : 'Processing...') : `Pay ₹${COURSE_PRICE} & Enroll →`}
            </button>

            <div className="flex items-center justify-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4" style={{ color: '#818cf8' }} />
              <span className="text-xs" style={{ color: '#9ca3af' }}>100% Secure Payment via Razorpay</span>
            </div>
          </form>
        </div>

        {/* Trust strip right under the form */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="flex flex-col items-center gap-1.5 py-3 rounded-xl" style={{ background: '#ffffff', border: '1px solid #f0f0f5' }}>
            <Lock className="w-4 h-4" style={{ color: '#7C3AED' }} />
            <span className="text-[11px] text-center font-medium" style={{ color: '#4b5563' }}>Secure Checkout</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 py-3 rounded-xl" style={{ background: '#ffffff', border: '1px solid #f0f0f5' }}>
            <Video className="w-4 h-4" style={{ color: '#7C3AED' }} />
            <span className="text-[11px] text-center font-medium" style={{ color: '#4b5563' }}>Live Sessions</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 py-3 rounded-xl" style={{ background: '#ffffff', border: '1px solid #f0f0f5' }}>
            <Users className="w-4 h-4" style={{ color: '#7C3AED' }} />
            <span className="text-[11px] text-center font-medium" style={{ color: '#4b5563' }}>45+ Students</span>
          </div>
        </div>

        {/* Course highlights, secondary, below the form */}
        <div className="rounded-2xl p-6 mt-4" style={{ background: '#0f0f1a' }}>
          <h3 className="text-sm font-bold mb-4" style={{ color: '#ffffff' }}>What's included</h3>
          <ul className="space-y-3">
            {highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#818cf8' }} />
                <span className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;