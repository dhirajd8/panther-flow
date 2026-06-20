import React from 'react';
import { CheckCircle2, Calendar, Users } from 'lucide-react';
import { courseData } from '../data/mock';

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
      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl relative z-10" style={{
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
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <span className="text-xs px-3 py-1 rounded-full font-medium" style={{
          background: 'rgba(79,70,229,0.08)',
          border: '1px solid rgba(79,70,229,0.2)',
          color: '#4F46E5',
          fontFamily: 'Poppins, sans-serif'
        }}>
          ✓ Payment Confirmed · ₹{courseData.price}
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
        📧 Confirmation email वर पण पाठवला आहे, तो पण check करा.
      </p>

      {/* Fix 1: Batch Info Card — using courseData */}
      <div className="w-full max-w-md rounded-2xl p-6 mb-6 shadow-xl relative z-10" style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
      }}>
        <div className="flex items-center gap-3 mb-3">
          <Calendar className="w-6 h-6 text-white" />
          <span className="text-white font-bold text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            New Batch — 1st July
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-white" />
          <span className="text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif', opacity: 0.9 }}>
            Class details WhatsApp Group मध्ये share केले जातील
          </span>
        </div>
      </div>

      {/* Fix 5: 3-step next steps */}
      <div className="w-full max-w-md rounded-2xl p-6 mb-8 relative z-10" style={{
        background: '#ffffff',
        border: '1.5px solid rgba(79,70,229,0.15)',
        boxShadow: '0 4px 24px rgba(79,70,229,0.08)'
      }}>
        <p className="text-sm font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#0f172a' }}>
          पुढे काय करायचं?
        </p>
        {[
          'खाली दिलेल्या WhatsApp Group मध्ये Join व्हा',
          'Group मध्ये class चे सर्व details मिळतील',
          '1 जुलैपासून Live Session सुरू होईल'
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style={{
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              minWidth: '28px'
            }}>
              {i + 1}
            </div>
            <p className="text-sm pt-0.5" style={{ fontFamily: 'Poppins, sans-serif', color: '#334155' }}>
              {step}
            </p>
          </div>
        ))}
      </div>

      {/* WhatsApp Join Button */}
      <button
        onClick={openWhatsApp}
        className="flex items-center gap-3 px-8 py-4 rounded-2xl shadow-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl relative z-10"
        style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', fontFamily: 'Poppins, sans-serif' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp Group Join करा →
      </button>

      {/* Fix 3: WhatsApp fallback contact */}
      <p className="text-xs text-center mt-3 mb-10 relative z-10" style={{ fontFamily: 'Poppins, sans-serif', color: '#94a3b8' }}>
        Link काम करत नाहीये? Call किंवा WhatsApp करा{' '}
        <a href="tel:+919307378191" style={{ color: '#4F46E5', textDecoration: 'underline' }}>
          +91 9307378191
        </a>
      </p>

      {/* Fix 6: Personal touch from instructor */}
      <p className="text-sm text-center italic mb-10 max-w-sm relative z-10" style={{
        fontFamily: 'Aparajita, serif',
        color: '#475569'
      }}>
        "मी स्वतः group मध्ये तुमचं स्वागत करेन 🙏 - धिरज"
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