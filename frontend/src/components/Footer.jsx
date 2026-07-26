import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Users, Star } from 'lucide-react';

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
    <footer id="footer" className="py-16 px-4" style={{ background: '#13103a', color: 'rgba(255,255,255,0.95)' }}>
      <div className="container mx-auto max-w-6xl">

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Clock className="w-4 h-4" style={{ color: '#a78bfa' }} />
            <span className="text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.85)' }}>Response within 24 hours</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Users className="w-4 h-4" style={{ color: '#a78bfa' }} />
            <span className="text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.85)' }}>45+ Students Trained</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
            <Star className="w-4 h-4" style={{ color: '#a78bfa' }} />
            <span className="text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.85)' }}>₹4.5L+ Ad Spend Managed</span>
          </div>
        </div>

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
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.5)' }}>Email</p>
                <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#a78bfa' }}>contactpantherflow@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919307378191" className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.5)' }}>Phone</p>
                <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#a78bfa' }}>+91 9307378191</p>
              </div>
            </a>

            <a href="https://www.google.com/maps/search/?api=1&query=Barmachiwadi+Tal+Kalamb+Dist+Dharashiv+413525" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.5)' }}>Address · View on map</p>
                <p className="font-semibold text-sm" style={{ fontFamily: 'Poppins, sans-serif', color: '#a78bfa' }}>Barmachiwadi, Tal- Kalamb, Dist - Dharashiv धाराशिव 413525</p>
              </div>
            </a>
          </div>

          <div className="p-6 rounded-2xl flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(124,58,237,0.1) 100%)', border: '1px solid rgba(139,92,246,0.25)' }}>
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
                  style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
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