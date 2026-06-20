import React from 'react';
import { CheckCircle2 } from 'lucide-react';
// price hardcoded to avoid import path issues
const coursePrice = 998;

const ThankYou = () => {
  const openWhatsApp = () => {
    window.open('https://chat.whatsapp.com/LmFZzat6inPK3LvFKGHhHB', '_blank', 'noopener,noreferrer');
  };

  // Fix 2: Get payment ID from URL if Razorpay passes it
  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get('razorpay_payment_id');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden" style={{
      backgroundColor: '#f8faff',
      backgroundImage: 'radial-gradient(circle, #c7d7ff 1.2px, transparent 1.2px)',
      backgroundSize: '28px 28px'
    }}>

      {/* Ambient gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)'
      }}></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)'
      }}></div>

      {/* Success Icon */}
      <div className="ty-success-icon w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl relative z-10" style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
      }}>
        <CheckCircle2 className="w-10 h-10 text-white" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 relative z-10" style={{
        fontFamily: 'Poppins, sans-serif',
        color: '#0f172a'
      }}>
        Payment Successful! 🎉
      </h1>

      {/* Fix 2: Order reference */}
      <div className="ty-card-1 flex items-center gap-3 mb-4 relative z-10">
        <span className="ty-badge-shimmer text-xs px-3 py-1 rounded-full font-medium" style={{
          border: '1px solid rgba(79,70,229,0.2)',
          color: '#4F46E5',
          fontFamily: 'Poppins, sans-serif'
        }}>
          ✓ Payment Confirmed · ₹{coursePrice}
        </span>
        {paymentId && (
          <span className="text-xs" style={{ color: '#94a3b8', fontFamily: 'Poppins, sans-serif' }}>
            ID: {paymentId.slice(-8).toUpperCase()}
          </span>
        )}
      </div>

      {/* Gradient highlight */}
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 relative z-10" style={{
        fontFamily: 'Poppins, sans-serif',
        background: 'linear-gradient(135deg, #2563eb 0%, #a855f7 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Welcome to Panther Flow AI Labs!
      </h2>

      <p className="text-base text-center mb-2 max-w-lg relative z-10" style={{
        fontFamily: 'Poppins, sans-serif',
        color: '#334155',
        opacity: 0.8
      }}>
        तुम्हाला Class चे सर्व details WhatsApp वर मिळतील. खाली दिलेल्या Group मध्ये Join व्हा.
      </p>

      {/* Fix 4: Email confirmation note */}
      <p className="text-xs text-center mb-8 relative z-10" style={{
        fontFamily: 'Poppins, sans-serif',
        color: '#94a3b8'
      }}>
        📧 Check your inbox — we've sent your booking confirmation there too.
      </p>

      {/* Workflow Steps */}
      <div className="ty-card-3 w-full max-w-lg mb-8 relative z-10">
        <p className="text-sm font-bold mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif', color: '#0f172a' }}>
          Your next 3 steps ⭐
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center" style={{ maxWidth: '160px' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="text-xs font-bold mb-1" style={{ color: '#4F46E5', fontFamily: 'Poppins, sans-serif' }}>Step 1</span>
            <p className="text-xs leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', color: '#334155' }}>WhatsApp Group मध्ये Join व्हा</p>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 mx-3 my-3 sm:my-0 rotate-90 sm:rotate-0 text-2xl font-bold" style={{ color: '#c4b5fd' }}>→</div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center" style={{ maxWidth: '160px' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg" style={{ background: 'linear-gradient(135deg, #7C3AED, #a855f7)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <span className="text-xs font-bold mb-1" style={{ color: '#7C3AED', fontFamily: 'Poppins, sans-serif' }}>Step 2</span>
            <p className="text-xs leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', color: '#334155' }}>Class चे सर्व details Group मध्ये मिळतील</p>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 mx-3 my-3 sm:my-0 rotate-90 sm:rotate-0 text-2xl font-bold" style={{ color: '#c4b5fd' }}>→</div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center" style={{ maxWidth: '160px' }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg" style={{ background: 'linear-gradient(135deg, #a855f7, #EC4899)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              </svg>
            </div>
            <span className="text-xs font-bold mb-1" style={{ color: '#a855f7', fontFamily: 'Poppins, sans-serif' }}>Step 3</span>
            <p className="text-xs leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', color: '#334155' }}>1 जुलैपासून Live Session सुरू होईल</p>
          </div>

        </div>
      </div>

      {/* WhatsApp Join Button */}
      <button
        onClick={openWhatsApp}
        className="ty-wa-btn flex items-center gap-3 px-8 py-4 rounded-2xl shadow-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative z-10"
        style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', fontFamily: 'Poppins, sans-serif' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp Group Join करा →
      </button>

      {/* Fix 3: WhatsApp fallback contact */}
      <p className="text-xs text-center mt-3 mb-10 relative z-10" style={{ fontFamily: 'Poppins, sans-serif', color: '#94a3b8' }}>
        Group link not opening? Reach us directly on{' '} +91 9307378191
        <a href="tel:+919307378191" style={{ color: '#4F46E5', textDecoration: 'underline' }}>
          +91 9307378191
        </a>
      </p>

      {/* Fix 6: Personal touch from instructor */}
      <p className="text-sm text-center italic mb-10 max-w-sm relative z-10" style={{
        fontFamily: 'Poppins, sans-serif',
        color: '#475569'
      }}>
        "Can't wait to see you in the group. Let's build something great together! — Dhiraj"
      </p>

      {/* Fix 8: De-emphasized social section */}
      <div className="mt-4 relative z-10" style={{ paddingTop: '24px', borderTop: '1px solid rgba(79,70,229,0.1)', width: '100%', maxWidth: '400px' }}>
        <p className="text-sm font-semibold text-center mb-4" style={{
          fontFamily: 'Poppins, sans-serif',
          color: '#94a3b8'
        }}>
          Connect With Us
        </p>
        {/* Fix 8: smaller icons */}
        <div className="flex gap-3 justify-center mb-8">
          <a href="https://www.facebook.com/profile.php?id=61590443666474" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            style={{ background: '#1877F2' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/_pantherflow/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@DhirajDayanand" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            style={{ background: '#FF0000' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/panther-flow/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
            style={{ background: '#0077B5' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      <a href="https://pantherflow.in" className="text-sm underline relative z-10" style={{
        fontFamily: 'Poppins, sans-serif',
        color: '#2563eb',
        opacity: 0.7
      }}>
        ← Back to Home
      </a>

    </div>
  );
};

export default ThankYou;