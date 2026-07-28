import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';

// Real-style branded icons (replaces generic Lucide outlines)
const GmailIcon = () => (
  <svg viewBox="0 0 48 48" width="20" height="20">
    <path fill="#fff" d="M6 12h36v24H6z"/>
    <path fill="#4285F4" d="M42 12l-18 13L6 12h36z" opacity="0"/>
    <path fill="#EA4335" d="M6 12l18 13L42 12H6z"/>
    <path fill="#FBBC05" d="M6 12v24l12-16z"/>
    <path fill="#34A853" d="M42 12v24L30 20z"/>
    <path fill="#C5221F" d="M6 36l12-16 6 4.5 6-4.5 12 16H6z" opacity="0"/>
  </svg>
);

const PhoneCallIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.981 1.288 2.981.858 3.519.804.537-.053 1.734-.709 1.979-1.393.246-.684.246-1.27.172-1.393-.074-.124-.272-.198-.57-.347"/>
  </svg>
);

const MapPinRealIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#EA4335" d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z"/>
    <circle cx="12" cy="10" r="3.2" fill="#fff"/>
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="footer" className="py-16 px-4" style={{ background: '#0d0d0d', color: 'rgba(255,255,255,0.95)' }}>
      <div className="container mx-auto max-w-6xl">


        {/* Footer Nav Links */}
        <div className="flex justify-center gap-8 flex-wrap pb-8 mb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <button onClick={() => navigate('/about')} className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>About</button>
          <button onClick={() => navigate('/course')} className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>Course</button>
          <button onClick={() => navigate('/blog')} className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>Blogs</button>
          <button onClick={() => navigate('/contact')} className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>Contact</button>
          <a href="/privacy-policy" className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontFamily: 'Poppins, sans-serif' }}>Privacy Policy</a>
        </div>

        {/* Contact cards + Newsletter grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          <div className="space-y-4">
            <a href="mailto:contactpantherflow@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#ffffff', border: '1px solid rgba(255,255,255,0.15)' }}>
                <GmailIcon />
              </div>
              <div>
                <p className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.5)' }}>Email</p>
                <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>contactpantherflow@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919307378191" className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#ffffff', border: '1px solid rgba(255,255,255,0.15)' }}>
                <PhoneCallIcon />
              </div>
              <div>
                <p className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.5)' }}>Phone</p>
                <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>+91 9307378191</p>
              </div>
            </a>

            <a href="https://www.google.com/maps/search/?api=1&query=Barmachiwadi+Tal+Kalamb+Dist+Dharashiv+413525" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#ffffff', border: '1px solid rgba(255,255,255,0.15)' }}>
                <MapPinRealIcon />
              </div>
              <div>
                <p className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.5)' }}>Address · View on map</p>
                <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>Barmachiwadi, Tal- Kalamb, Dist - Dharashiv धाराशिव 413525</p>
              </div>
            </a>
          </div>

          <div className="p-6 rounded-2xl flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, rgba(255,90,9,0.15) 0%, rgba(255,90,9,0.1) 100%)', border: '1px solid rgba(255,90,9,0.25)' }}>
            <h3 className="font-bold text-lg mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>Stay Updated</h3>
            <p className="text-sm mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.65)' }}>
              Free Meta Ads tips आणि नवीन batch updates थेट तुमच्या inbox मध्ये.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.35)' }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: '#4ade80' }} />
                <span className="text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>Thanks! You're subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="तुमचा email"
                  className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: 'rgba(255,255,255,0.9)', border: 'none' }}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
                  style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}
                >
                  <Send className="w-4 h-4" />
                  Get Updates
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-6 border-t text-center" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-sm" style={{ fontFamily: 'Google Sans, sans-serif', color: 'rgba(255,255,255,0.8)', opacity: 0.9 }}>
            © 2026 Panther Flow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;