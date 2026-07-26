import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Video, Award, Lock, Users, Calendar } from 'lucide-react';

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
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Enroll Now — Meta Ads Marathi Course | Panther Flow AI Labs';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Complete your enrollment for the Meta Ads Marathi Course by Panther Flow AI Labs. 15 days live training, ₹799 only, secure payment via Razorpay.');
  }, []);

  React.useEffect(() => {
    fetch(`${BACKEND_URL}/api/`).catch(() => {});
  }, []);

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
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#ffffff' }}>

      {/* Hero strip */}
      <section className="pt-16 pb-10 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm mb-6"
            style={{ color: '#c4b5fd', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            ← Back to Home
          </button>

          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
            Complete Your Enrollment
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Details भरा आणि secure payment करा — फक्त ५ मिनिटांत.
          </p>
        </div>
      </section>

      {/* Main content: two columns on desktop, stacked on mobile */}
      <section className="py-12 sm:py-16 px-4" style={{ background: '#f7f7fb' }}>
        <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Left: form, dominant */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl p-6 sm:p-8" style={{ background: '#ffffff', boxShadow: '0 8px 32px rgba(15,15,26,0.08)' }}>
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
                  {loading ? 'Processing...' : `Pay ₹${COURSE_PRICE} & Enroll →`}
                </button>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <ShieldCheck className="w-4 h-4" style={{ color: '#818cf8' }} />
                  <span className="text-xs" style={{ color: '#9ca3af' }}>100% Secure Payment via Razorpay</span>
                </div>
              </form>
            </div>

            {/* Trust strip */}
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
          </div>

          {/* Right: course highlights sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl p-6 sm:p-8 lg:sticky lg:top-8" style={{ background: '#0f0f1a' }}>
              <h2 className="text-xl font-bold mb-1" style={{ color: '#ffffff' }}>Master Meta Ads</h2>
              <p className="text-sm mb-6" style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700
              }}>From Zero to Expert</p>

              <ul className="space-y-3">
                {highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#818cf8' }} />
                    <span className="text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>{point}</span>
                  </li>
                ))}
              </ul>

              <div
                className="flex items-center gap-3 mt-6 pt-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Calendar className="w-4 h-4" style={{ color: '#818cf8' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>New Batch Starting 1st August</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;