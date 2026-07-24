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

// Particles spread across the whole width, fading out as they approach
// the white side so the transition feels continuous rather than a hard cut.
const useParticles = (count = 55) =>
  useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 68; // keep mostly left of the white zone
        return {
          id: i,
          left,
          size: 1.2 + Math.random() * 2.4,
          duration: 16 + Math.random() * 18,
          delay: Math.random() * 22,
          driftX: (Math.random() - 0.5) * 70,
          // fade particles out the further right (closer to white) they start
          baseOpacity: Math.max(0.08, 0.55 - (left / 68) * 0.5),
        };
      }),
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
        theme: { color: '#111111' },
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
        background:
          'linear-gradient(90deg, #000000 0%, #000000 22%, #0a0a0a 32%, #1c1c1c 40%, #3a3a3a 47%, #6b6b6b 52%, #9c9c9c 57%, #cfcfcf 63%, #ececec 70%, #f8f8f8 78%, #ffffff 88%, #ffffff 100%)',
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
          box-shadow: 0 0 4px rgba(255,255,255,0.5);
        }
      `}</style>

      {/* Soft ambient glow, kept subtle and monochrome */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', filter: 'blur(90px)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', filter: 'blur(90px)' }}
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
            '--p-opacity': p.baseOpacity,
          }}
        />
      ))}

      {/* Left: Highlights */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 py-16 relative z-10">
        <div className="max-w-md">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ background: '#ffffff', color: '#111111' }}
          >
            <Award className="w-4 h-4" style={{ color: '#111111' }} />
            Meta Ads Marathi Course
          </span>

          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Master Meta Ads
            <br />
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>From Zero to Expert</span>
          </h1>

          <ul className="space-y-4 mt-8">
            {highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.75)' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <div
            className="flex items-center gap-6 mt-10 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.7)' }} />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Live Sessions
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.7)' }} />
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
            style={{ color: '#111111', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
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
            style={{ background: '#f5f5f5', border: '1px solid #e0e0e0' }}
          >
            <span className="text-lg line-through" style={{ color: '#9ca3af' }}>
              ₹4,999
            </span>
            <span className="text-2xl font-black" style={{ color: '#111111' }}>
              ₹{COURSE_PRICE}
            </span>
            <span
              className="text-xs font-bold px-2 py-1 rounded-full text-white"
              style={{ background: 'linear-gradient(135deg, #2a2a2a, #000000)' }}
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
              className="w-full py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              style={{
                background: 'linear-gradient(135deg, #2b2b2b 0%, #000000 100%)',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {loading ? 'Processing...' : `Pay ₹${COURSE_PRICE} & Enroll →`}
            </button>

            <div className="flex items-center justify-center gap-2 pt-2">
              <ShieldCheck className="w-4 h-4" style={{ color: '#9ca3af' }} />
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