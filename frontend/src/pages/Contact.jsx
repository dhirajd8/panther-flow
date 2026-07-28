import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GmailIcon, PhoneCallIcon, MapPinRealIcon } from '../components/icons';

const Contact = () => {
  const navigate = useNavigate();

  const openWhatsApp = () => {
    window.open('https://wa.link/7wd6u7', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen" style={{ background: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
      <Helmet>
        <title>Contact Us | Panther Flow — Meta Ads Course in Marathi</title>
        <meta name="description" content="प्रश्न आहेत? Panther Flow च्या Meta Ads Marathi Course बद्दल अधिक माहितीसाठी आम्हाला संपर्क करा — Email, Phone किंवा WhatsApp वर." />
      </Helmet>
      <Header />

     {/* Hero */}
      <section className="pt-36 sm:pt-44 pb-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0d0d0d 60%, #000000 100%)' }}>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl mb-4 uppercase" style={{ color: '#ffffff', fontFamily: 'Helvetica', fontWeight: 900, WebkitTextStroke: '1px #ffffff' }}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact cards */}
      <section className="px-4 pt-16 pb-20">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8">
          <a
            href="mailto:contactpantherflow@gmail.com"
            className="flex flex-col items-center text-center gap-3 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#f7f7fb', border: '1px solid #f0f0f5' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#ffffff', border: '1.5px solid #f0f0f5' }}>
              <GmailIcon />
            </div>
            <div className="font-bold" style={{ color: '#0f0f0f' }}>Email</div>
            <div className="text-sm break-all" style={{ color: '#FF5A09' }}>contactpantherflow@gmail.com</div>
          </a>

          <a
            href="tel:+919307378191"
            className="flex flex-col items-center text-center gap-3 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#f7f7fb', border: '1px solid #f0f0f5' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#ffffff', border: '1.5px solid #f0f0f5' }}>
              <PhoneCallIcon />
            </div>
            <div className="font-bold" style={{ color: '#0f0f0f' }}>Phone</div>
            <div className="text-sm" style={{ color: '#FF5A09' }}>+91 9307378191</div>
          </a>

          <div
            className="flex flex-col items-center text-center gap-3 rounded-2xl p-6"
            style={{ background: '#f7f7fb', border: '1px solid #f0f0f5' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#ffffff', border: '1.5px solid #f0f0f5' }}>
              <MapPinRealIcon />
            </div>
            <div className="font-bold" style={{ color: '#0f0f0f' }}>Address</div>
            <div className="text-sm" style={{ color: '#6b7280' }}>At - Barmachiwadi, Tal- Kalamb, Dist - Dharashiv धाराशिव 413525</div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl text-center">
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl shadow-xl text-white font-bold text-lg transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp वर बोला →
          </button>
        </div>
      </section>

      {/* Socials */}
      <section className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0d0d0d 60%, #000000 100%)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,90,9,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,90,9,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#ffffff' }}>
            <span style={{ background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Follow</span> Us
          </h2>
          <p className="mb-10 text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Free Meta Ads tips, real campaign results आणि updates साठी आम्हाला follow करा 👇
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <a href="https://www.facebook.com/profile.php?id=61590443666474" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ background: 'rgba(24,119,242,0.12)', border: '1.5px solid rgba(24,119,242,0.35)' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#1877F2' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm">Facebook</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Page Follow करा</div>
              </div>
            </a>

            <a href="https://www.instagram.com/_pantherflow/" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ background: 'rgba(220,39,67,0.1)', border: '1.5px solid rgba(220,39,67,0.3)' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm">Instagram</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Reels & Tips</div>
              </div>
            </a>

            <a href="https://www.linkedin.com/company/panther-flow/" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ background: 'rgba(0,119,181,0.1)', border: '1.5px solid rgba(0,119,181,0.3)' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#0077B5' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm">LinkedIn</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Updates & News</div>
              </div>
            </a>

            <a href="https://www.youtube.com/@DhirajDayanand" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ background: 'rgba(255,0,0,0.1)', border: '1.5px solid rgba(255,0,0,0.25)' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#FF0000' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-sm">YouTube</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Free Videos</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;