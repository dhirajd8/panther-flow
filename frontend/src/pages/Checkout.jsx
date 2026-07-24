import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Video, Award } from 'lucide-react';

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

// Generates a stable set of particles once per mount (kept mostly within
// the left/dark half of the screen so they read as part of that panel).
const useParticles = (count = 45) =>
  useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 46, // percentage, biased to left half
        size: 1.5 + Math.random() * 2.5,
        duration: 14 + Math.random() * 16,
        delay: Math.random() * 20,
        driftX: (Math.random() - 0.5) * 60,
        opacity: 0.25 + Math.random() * 0.45,
      })),
    [count]
  );

const Checkout = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const particles = useParticles();

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
    <div
      className="min-h-screen flex items-stretch relative overflow-hidden"
      style={{
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(90deg, #06060a 0%, #0a0a12 40%, #ffffff 62%, #ffffff 100%)',
      }}
    >
      <style>{`
        @keyframes driftUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          8% { opacity: var(--p-opacity); }
          92% { opacity: var(--p-opacity); }
          100% { transform: translateY(-115vh) translateX(var(--drift-x)); opacity: 0; }
        }
        .particle {
          position: absolute;
          bottom: -10px;
          border-radius: 50%;
          background: #ffffff;
          pointer-events: none;
          animation: driftUp linear infinite;
        }
      `}</style>

      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.14) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      {/* Drifting particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift-x': `${p.driftX}px`,
            '--p-opacity': p.opacity,
          }}
        />
      ))}

      {/* Left: Highlights */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 py-16 relative z-10">
        <div className="max-w-md">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: '#ffffff' }}
          >
            <Award className="w-4 h-4" style={{ color: '#7C3AED' }} />
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Meta Ads Marathi Course
            </span>
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Master Meta Ads
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              From Zero to Expert
            </span>
          </h1>

          <ul className="space-y-4 mt-8">
            {highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#818cf8' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {point}
                </span>
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
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16 relative z-10">
        <div className="w-full max-w-sm">
          <button
            onClick={() => navigate('/')}
            className="text-sm mb-6"
            style={{ color: '#6366f1', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            ← Back to Home
          </button>

          <h2 className="text-2xl font-bold mb-1" style={{ color: '#0f0f0f' }}>
            Complete Your Enrollment
          </h2>
          <p className="text-sm mb-8" style={{ color: '#6b7280' }}>
            Details भरा आणि secure payment करा.
          </p>

          <div
            className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(79,70,229,0.06)', border: '1px solid rgba(79,70,229,0.15)' }}
          >
            <span className="text-lg line-through" style={{ color: '#9ca3af' }}>
              ₹4,999
            </span>
            <span
              className="text-2xl font-black"
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ₹{COURSE_PRICE}
            </span>
            <span
              className="text-xs font-bold px-2 py-1 rounded-full text-white"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
            >
              84% OFF
            </span>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()} autoComplete="on">
            <div>
              <label htmlFor="fullName" className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>
                Full Name
              </label>
              <input
                id="fullName"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="तुमचं नाव"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ border: '1.5px solid #e5e7eb' }}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="tel"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ border: '1.5px solid #e5e7eb' }}
              />
            </div>

            {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}

            <button
              type="button"
              onClick={handlePay}
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
            >
              {loading ? 'Processing...' : `Pay ₹${COURSE_PRICE} & Enroll →`}
            </button>

            <div className="flex items-center justify-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4" style={{ color: '#818cf8' }} />
              <span className="text-xs" style={{ color: '#9ca3af' }}>
                100% Secure Payment via Razorpay
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;