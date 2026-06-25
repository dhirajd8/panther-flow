import React from 'react';
import { courseData } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Target,
  Infinity,
  Laptop,
  Rocket,
  DollarSign,
  Wifi,
  BookOpen,
  Store,
  Briefcase,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  Play,
  Users,
  Sparkles,
  Activity,
  Award,
  Clock,
  Video,
  Quote,
  Calendar
} from 'lucide-react';

const iconMap = {
  Target,
  Infinity,
  Laptop,
  Wifi,
  BookOpen,
  Store,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Rocket,      // ← Add this
  DollarSign   // ← Add this
};
const ModuleShowcaseCarousel = ({ modules }) => {
  const [active, setActive] = React.useState(0);
  const touchStartX = React.useRef(null);
  const touchEndX = React.useRef(null);

  const prev = () => setActive((a) => (a - 1 + modules.length) % modules.length);
  const next = () => setActive((a) => (a + 1) % modules.length);

  const getPosition = (idx) => {
    const diff = idx - active;
    const len = modules.length;
    const wrapped = ((diff + Math.floor(len / 2) + len) % len) - Math.floor(len / 2);
    return wrapped;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full py-8 px-2" style={{ minHeight: '420px', overflowX: 'clip', overflowY: 'visible' }}>
      {/* Cards */}
      <div
        className="relative flex items-center justify-center overflow-visible"
        style={{ height: '340px', touchAction: 'pan-y', padding: '0 2px' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {modules.map((module, idx) => {
          const pos = getPosition(idx);
          const isActive = pos === 0;
          const isVisible = Math.abs(pos) <= 2;
          if (!isVisible) return null;

          const scale = isActive ? 1 : Math.abs(pos) === 1 ? 0.78 : 0.62;
          const opacity = isActive ? 1 : Math.abs(pos) === 1 ? 0.7 : 0.4;
          const translateX = pos * 280;
          const zIndex = isActive ? 10 : Math.abs(pos) === 1 ? 5 : 1;

          return (
            <div
              key={module.id}
              onClick={() => !isActive && setActive(idx)}
              style={{
                position: 'absolute',
                transform: `translateX(${translateX}px) scale(${scale})`,
                opacity,
                zIndex,
                transition: 'all 0.45s cubic-bezier(0.4,0,0.2,1)',
                cursor: isActive ? 'default' : 'pointer',
                width: '300px',
              }}
            >
              <div
                className="rounded-3xl p-7 shadow-2xl"
                style={{
                  background: '#1e1b4b',
                  border: isActive
                    ? '2px solid #7C3AED'
                    : '1.5px solid rgba(124,58,237,0.3)',
                  boxShadow: isActive
                    ? '0 0 0 1px rgba(139,92,246,0.15), 0 25px 60px rgba(79,70,229,0.25)'
                    : '0 4px 16px rgba(79,70,229,0.1)',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Module label */}
                <div
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: '#ffffff',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  <span style={{
                    background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {module.module}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: '#ffffff'
                  }}
                >
                  {module.title}
                </h3>

                {/* Topics — only on active */}
                {isActive && (
                  <ul className="space-y-2 w-full text-left mt-2">
                    {module.topics.slice(0, 4).map((topic, i) => (
                      <li key={i} className="flex items-start gap-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff', fontSize: '13px' }}>
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#818cf8' }} />
                        <span>{topic}</span>
                      </li>
                    ))}
                    {module.topics.length > 4 && (
                      <li className="text-xs font-semibold" style={{ color: '#818cf8', fontFamily: 'Poppins, sans-serif', paddingLeft: '22px' }}>
                        +{module.topics.length - 4} more topics
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Arrows + Dots — clearly separated below cards */}
      <div className="flex items-center justify-center gap-6 mt-10 relative z-20">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', border: '2px solid rgba(255,255,255,0.4)', color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {modules.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                borderRadius: '999px',
                background: i === active ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : 'rgba(124,58,237,0.3)',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', border: '2px solid rgba(255,255,255,0.4)', color: '#ffffff', fontSize: '20px', fontWeight: 'bold' }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

const ModuleAccordion = ({ modules }) => {
  const ModuleCarousel = ({ modules }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselRef = React.useRef(null);

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, modules.length - 1));
    setActiveIndex(clamped);
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll('.module-card');
      if (cards[clamped]) {
        cards[clamped].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative w-full">
      {/* Carousel Track */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {modules.map((module, index) => (
          <div
            key={module.id}
            className="module-card flex-shrink-0 snap-center rounded-3xl p-8 flex flex-col gap-4 transition-all duration-500"
            style={{
              width: 'min(340px, 85vw)',
              background: index === activeIndex
                ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)'
                : 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
              border: index === activeIndex
                ? '2px solid rgba(139, 92, 246, 0.6)'
                : '2px solid rgba(255,255,255,0.08)',
              boxShadow: index === activeIndex
                ? '0 0 40px rgba(99, 102, 241, 0.3), 0 20px 60px rgba(0,0,0,0.4)'
                : '0 8px 32px rgba(0,0,0,0.3)',
              transform: index === activeIndex ? 'scale(1.03)' : 'scale(0.97)',
            }}
            onClick={() => goTo(index)}
          >
            {/* Module Badge */}
            <div className="flex justify-center">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {module.module}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold text-center leading-snug"
              style={{
                fontFamily: 'Poppins, sans-serif',
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {module.title}
            </h3>

            {/* Topics — only show on active */}
            {index === activeIndex && (
              <ul className="space-y-3 mt-2">
                {module.topics.map((topic, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Poppins, sans-serif' }}
                  >
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#818cf8' }}
                    />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {modules.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="rounded-full transition-all duration-300"
            style={{
              width: idx === activeIndex ? '24px' : '8px',
              height: '8px',
              background: idx === activeIndex
                ? 'linear-gradient(135deg, #4F46E5, #7C3AED)'
                : 'rgba(255,255,255,0.2)'
            }}
          />
        ))}
      </div>

      {/* Arrow Buttons — OUTSIDE the cards */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-30"
          style={{
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            border: '2px solid rgba(255,255,255,0.2)'
          }}
        >
          <span className="text-white font-bold text-lg">‹</span>
        </button>
        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === modules.length - 1}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-30"
          style={{
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            border: '2px solid rgba(255,255,255,0.2)'
          }}
        >
          <span className="text-white font-bold text-lg">›</span>
        </button>
      </div>
    </div>
  );



};
  const [openModule, setOpenModule] = React.useState(null);

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <div key={module.id}>
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full rounded-2xl px-6 py-4 text-center transition-all duration-300 hover:opacity-90 shadow-xl"
              style={{
                background: openModule === module.id
                  ? 'linear-gradient(135deg, #0f0f0f 0%, #1e1b4b 100%)'
                  : 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
                border: openModule === module.id ? '3px solid rgba(79,70,229,0.8)' : '2px solid rgba(79,70,229,0.2)',
                boxShadow: openModule === module.id ? '0 0 20px rgba(79,70,229,0.4), 0 0 40px rgba(79,70,229,0.2)' : '',
                transform: openModule === module.id ? 'scale(1.03)' : 'scale(1)',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              <div className="text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {module.module}
              </div>
              <div className="text-base font-bold leading-snug" style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {module.title}
              </div>
            </button>

            {/* Mobile: opens below each card */}
            {openModule === module.id && (
              <div className="mt-2 rounded-2xl px-6 py-6 lg:hidden shadow-xl border-2" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', borderColor: 'rgba(79,70,229,0.6)' }}>
                <div className="inline-block px-4 py-2 rounded-lg mb-4 text-base font-bold w-full text-center" style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                  {module.title}
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.85)', fontSize: '14px' }}>
<CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#818cf8' }} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop: opens below all 6 buttons */}
      {openModule && (
        <div className="hidden lg:block rounded-2xl px-8 py-8 shadow-xl border-2" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', borderColor: 'rgba(79,70,229,0.6)' }}>
          {modules.filter(m => m.id === openModule).map(module => (
            <div key={module.id}>
              <div className="inline-block px-6 py-3 rounded-xl mb-6 text-xl font-bold" style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
                {module.title}
              </div>
              <ul className="space-y-4">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}>
<CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#818cf8' }} />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const Home = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', phone: '' });
  const [formError, setFormError] = React.useState('');

  const openRazorpay = (name, phone) => {
  const options = {
    key: 'rzp_live_T5MCyPPJShFkS5',
    amount: 99800, // ₹998 in paise
    currency: 'INR',
    name: 'Panther Flow AI Labs',
    description: 'मराठी Meta Ads Live Course — 1 July Batch',
    image: 'https://raw.githubusercontent.com/dhirajd8/panther-flow/main/frontend/public/favicon_1_.png',
    handler: function (response) {
      if (typeof fbq === 'function') {
        fbq('track', 'Purchase', {
          value: 998,
          currency: 'INR',
          content_name: 'Panther Flow Meta Ads Course',
        });
      }
      window.location.href = `/thank-you?razorpay_payment_id=${response.razorpay_payment_id}`;
    },
    prefill: {
      name: name,
      contact: phone,
    },
    notes: {
      name: name,
      phone: phone,
    },
    theme: {
      color: '#4F46E5',
    },
    modal: {
      ondismiss: function () {
        // User closed the modal without paying — do nothing
        console.log('Payment modal closed');
      },
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

  const handleEnrollClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    if (!formData.name.trim()) { setFormError('नाव टाका'); return; }
    if (!formData.phone.trim() || formData.phone.length < 10) { setFormError('Valid phone number टाका'); return; }
    setShowForm(false);
    setFormError('');
    openRazorpay(formData.name, formData.phone);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 3000); // shows after 3 seconds
    return () => clearTimeout(timer);
  }, []);



  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
React.useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rise-up').forEach((el, i) => {
    el.dataset.delay = (i % 6) * 80;
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
  const openWhatsApp = () => {
    window.open('https://wa.link/bh0lm8', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen" style={{ 
  background: '#ffffff',
  position: 'relative'
}}>
      {/* Radial gradient overlays for premium AI-site feel */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
background: 'none',        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://customer-assets.emergentagent.com/job_panther-training/artifacts/jsyr9xb6_ChatGPT%20Image%20May%2023%2C%202026%2C%2012_08_42%20AM.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 0,
        mixBlendMode: 'overlay'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Announcement Bar */}
        <div className="fixed top-0 left-0 right-0 z-[60] py-2 px-3 text-center shadow-lg" style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          fontFamily: 'Poppins, sans-serif'
        }} data-testid="announcement-bar">
          <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold flex-wrap">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-#edebde"></span>
            </span>
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">🔥 New Batch Starting on <strong>1st July</strong> · Limited Seats Available!</span>
            <span className="sm:hidden">🔥 New Batch · <strong>1st July</strong> · Limited Seats!</span>
            <button 
              onClick={handleEnrollClick}
              className="font-bold text-white whitespace-nowrap announcement-pulse"
              data-testid="announcement-cta"
            >
              Join Now →
            </button>
          </div>
        </div>

       <header className="fixed top-16 sm:top-14 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-auto max-w-[calc(100%-1rem)]">
  <nav className="backdrop-blur-xl rounded-3xl sm:rounded-full shadow-2xl border border-gray-200 px-3 sm:px-4 py-2" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 10px 40px rgba(79, 70, 229, 0.15)'
          }}>
    <div className="flex flex-row items-center justify-between w-full gap-0.5">
      <div className="flex items-center justify-between gap-0.5">
        {/* Brand - hidden on mobile */}
        <button
          onClick={() => scrollToSection('footer')}
          className="hidden md:inline-block text-gray-800 font-bold px-3 lg:px-4 py-2 text-base tracking-wide whitespace-nowrap"
          style={{ fontFamily: 'Poppins, sans-serif', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Panther Flow
        </button>
        <div className="hidden md:block w-px h-6 bg-white/20"></div>

        {/* Nav Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('course-overview')}
            className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Course
          </button>
          <button
    onClick={() => scrollToSection('socials')}
    className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
    style={{ fontFamily: 'Poppins, sans-serif' }}
  >
    Connect
  </button>
        </div>
      </div>

      {/* Join Now Button */}
      <Button
        onClick={handleEnrollClick}
        className="text-white font-bold px-3 sm:px-5 py-1.5 rounded-full transition-all duration-300 text-xs sm:text-sm h-auto whitespace-nowrap flex-shrink-0 btn-blue btn-animated-border"
        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
      >
        Join Now
      </Button>
    </div>
  </nav>
</header>

        {/* Hero Section */}
        <section className="pt-36 sm:pt-44 pb-10 px-4 relative overflow-hidden" style={{ background: '#ffffff' }}>
  {/* Grid lines */}
  <div className="absolute inset-0 pointer-events-none" style={{
    backgroundImage: 'linear-gradient(rgba(79,70,229,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.15) 1px, transparent 1px)',
    backgroundSize: '48px 48px',
    zIndex: 1
  }}></div>
  {/* Scattered confetti dots */}
  <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
    {[...Array(40)].map((_, i) => {
      const size = [3, 4, 5, 6][i % 4];
      const colors = ['rgba(99,102,241,0.4)', 'rgba(124,58,237,0.35)', 'rgba(236,72,153,0.3)'];
      const color = colors[i % colors.length];
      const top = (i * 37) % 100;
      const left = (i * 53) % 100;
      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            background: color,
          }}
        ></div>
      );
    })}
  </div>
  <div className="absolute inset-0 pointer-events-none" style={{
    background: 'radial-gradient(ellipse at 20% 30%, rgba(79,70,229,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 60%, rgba(236,72,153,0.05) 0%, transparent 60%)',
  }}></div>
          
          {/* Premium ambient gradient orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full animate-pulse-glow pointer-events-none" style={{
            background: 'none',
            filter: 'blur(40px)'
          }}></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full animate-pulse-glow pointer-events-none" style={{
            background: 'none',
            animationDelay: '2s',
            filter: 'blur(40px)'
          }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full animate-pulse-glow pointer-events-none" style={{
            background: 'none',
            animationDelay: '1s',
            filter: 'blur(60px)'
          }}></div>

          {/* Decorative gradient lines */}
          <div className="absolute top-1/4 left-0 w-32 h-px opacity-30 pointer-events-none" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
          }}></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-px opacity-30 pointer-events-none" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
          }}></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              {/* New Batch Urgency Banner */}

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black rise-up" style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                color: '#0f0f0f',
                lineHeight: '1.2',
              }}>
                Master Meta Ads<br />
                <span className="gradient-text">From Zero to Expert</span><br />
                <span className="hero-line-3" style={{ color: '#0f0f0f' }}>
                  <span style={{ fontSize: 'clamp(1rem, 4vw, 1.2em)', whiteSpace: 'nowrap' }}>In Marathi, Next Batch{' '}
                    <span style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#ffffff', padding: '0.05em 0.4em', borderRadius: '0.25em', display: 'inline-block', boxShadow: '0 4px 16px rgba(79,70,229,0.4)', fontSize: 'clamp(0.9rem, 3.5vw, 1em)' }}>1 July</span>
                  </span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl rise-up rise-up-delay-1 max-w-2xl mx-auto" style={{
                fontFamily: "'Poppins', 'Noto Sans Devanagari', sans-serif",
                color: '#4b5563'
              }}>
                फक्त Theory नाही. Live Sessions, Practical Training आणि Real Campaign Setup सह Meta Ads शिका.
              </p>
              <div className="flex flex-col items-center gap-6 pt-4 rise-up rise-up-delay-2">
                <Button
                  onClick={handleEnrollClick}
                  size="lg"
                  className="text-white text-lg px-8 py-6 rounded-full font-bold btn-blue btn-animated-border rise-up rise-up-delay-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  data-testid="hero-join-now"
                >
                  {`Join Now - फक्त ${courseData.currency}${courseData.price}`}
                </Button>

                {/* Trust Signal Cards */}
                <div className="flex flex-col sm:flex-row gap-3 rise-up rise-up-delay-4">
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl" style={{
                    background: 'rgba(79,70,229,0.07)',
                    border: '1.5px solid rgba(79,70,229,0.18)',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#1e293b' }}>45+ Students</div>
                      <div className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: '#6366f1' }}>Trained & Running Ads</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl" style={{
                    background: 'rgba(79,70,229,0.07)',
                    border: '1.5px solid rgba(79,70,229,0.18)',
                    backdropFilter: 'blur(8px)'
                  }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}>
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ fontFamily: 'Poppins, sans-serif', color: '#1e293b' }}>Limited Seats</div>
                      <div className="text-xs" style={{ fontFamily: 'Poppins, sans-serif', color: '#6366f1' }}>1st July Batch</div>
                    </div>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
        </section>

        
        {/* Course Overview Section */}
       <section id="course-overview" className="py-20 px-4 relative overflow-hidden" style={{ background: '#ffffff' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 rise-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#0f0f0f' }}>
  COURSE <span className="gradient-text">OVERVIEW</span>
</h2>
             <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif', color: '#4b5563' }}>
                संपूर्ण Meta Ads Training — Basic ते Advanced. Live sessions, practical campaigns, आणि hands-on projects.
              </p>
            </div>


            {/* 25 Days Live Classes Banner */}
            <div className="max-w-sm sm:max-w-3xl mx-auto mb-16 rise-up">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{
                background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)'
              }}>
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none" style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)'
                }}></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full pointer-events-none" style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)'
                }}></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-8">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl flex flex-col items-center justify-center shadow-xl" style={{
                      background: '#ffffff'
                    }}>
                      <div className="text-2xl sm:text-4xl font-bold leading-none" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>25</div>
                      <div className="text-[10px] sm:text-xs uppercase tracking-wider mt-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#7C3AED' }}>Days</div>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold shadow-md" style={{
                        background: '#ffffff',
                        color: '#7C3AED',
                        fontFamily: 'Poppins, sans-serif'
                      }}>
                        <span className="w-2 h-2 rounded-full live-dot"></span>
                        <span style={{ color: '#ef4444', fontWeight: 800 }}>LIVE</span>
                      </span>
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>
                      25 Days Live Classes
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed mb-3" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.9)' }}>
                      <strong>२५ दिवस संपूर्ण Live Training</strong> — रोज नवीन concept, real-time doubts solve, आणि practical examples सोबत Meta Ads मास्टर बना!
                    </p>
                    <button
                      onClick={handleEnrollClick}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold shadow-md transition-all duration-300 batch-date-btn"
                      style={{
                        fontFamily: 'Poppins, sans-serif'
                      }}
                    >
                      <Calendar className="w-4 h-4 batch-date-icon" />
                      <span className="batch-date-text">New Batch Starting on 1st July</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rise-up rise-up-delay-1">
              <ModuleShowcaseCarousel modules={courseData.courseContent} />
            </div>
          </div>
        </section>

{/* Right For You Section */}
        <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center rise-up" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>
              Right For <span style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>You?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Business Owner */}
              <div className="rounded-2xl p-6 relative flex flex-col gap-4 rise-up" style={{ background: '#1a1a2e', border: '1.5px solid rgba(123,94,167,0.25)', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.7)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(168,85,247,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(123,94,167,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>FOR YOU</span>
                <div style={{ fontSize: '2.8rem', lineHeight: 1 }}>🛍️</div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Business Owner</h3>
                <p className="text-sm" style={{ color: '#a0a0b8', fontFamily: 'Poppins, sans-serif', lineHeight: 1.5 }}>तुमचा product promote करायला कुठून सुरुवात करावी कळत नाही?</p>
                <p className="text-sm font-medium" style={{ color: '#c4b5fd', fontFamily: 'Poppins, sans-serif', lineHeight: 1.5 }}>Meta Ads ने directly customers मिळवा — खर्च कमी, result जास्त.</p>
              </div>

              {/* Freelancers */}
              <div className="rounded-2xl p-6 relative flex flex-col gap-4 rise-up" style={{ background: '#1a1a2e', border: '1.5px solid rgba(123,94,167,0.25)', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.7)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(168,85,247,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(123,94,167,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>FOR YOU</span>
                <div style={{ fontSize: '2.8rem', lineHeight: 1 }}>💻</div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Freelancers</h3>
                <p className="text-sm" style={{ color: '#a0a0b8', fontFamily: 'Poppins, sans-serif', lineHeight: 1.5 }}>Clients मिळत नाहीत, income unstable आहे?</p>
                <p className="text-sm font-medium" style={{ color: '#c4b5fd', fontFamily: 'Poppins, sans-serif', lineHeight: 1.5 }}>Meta Ads skill शिका आणि premium clients साठी नवीन service add करा.</p>
              </div>

              {/* Students */}
              <div className="rounded-2xl p-6 relative flex flex-col gap-4 rise-up" style={{ background: '#1a1a2e', border: '1.5px solid rgba(123,94,167,0.25)', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.7)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(168,85,247,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(123,94,167,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>FOR YOU</span>
                <div style={{ fontSize: '2.8rem', lineHeight: 1 }}>🎓</div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Students</h3>
                <p className="text-sm" style={{ color: '#a0a0b8', fontFamily: 'Poppins, sans-serif', lineHeight: 1.5 }}>Degree आहे पण job-ready skill नाही?</p>
                <p className="text-sm font-medium" style={{ color: '#c4b5fd', fontFamily: 'Poppins, sans-serif', lineHeight: 1.5 }}>Real campaigns शिकून digital marketing career सुरू करा.</p>
              </div>

              {/* Marketers */}
              <div className="rounded-2xl p-6 relative flex flex-col gap-4 rise-up" style={{ background: '#1a1a2e', border: '1.5px solid rgba(123,94,167,0.25)', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.7)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(168,85,247,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(123,94,167,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>FOR YOU</span>
                <div style={{ fontSize: '2.8rem', lineHeight: 1 }}>📣</div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>Marketers</h3>
                <p className="text-sm" style={{ color: '#a0a0b8', fontFamily: 'Poppins, sans-serif', lineHeight: 1.5 }}>Boosting करतोय पण ROAS कमी येतो?</p>
                <p className="text-sm font-medium" style={{ color: '#c4b5fd', fontFamily: 'Poppins, sans-serif', lineHeight: 1.5 }}>Advanced targeting आणि strategy शिकून results दुप्पट करा.</p>
              </div>

            </div>
          </div>
        </section>

{/* Trainer Section */}
        <section id="about" className="py-20 px-4 relative overflow-hidden" style={{ background: '#ffffff' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="relative rounded-3xl overflow-hidden p-8 md:p-12 rise-up" style={{
              background: '#1e1b4b',
              boxShadow: '0 20px 60px rgba(30,27,75,0.4)'
            }}>
              {/* Decorative gradient orbs */}
              <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(23, 36, 90, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-150px',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(106, 127, 199, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>

              <div className="grid md:grid-cols-5 gap-10 items-center relative z-10">
                {/* Photo Column - 2/5 width */}
                <div className="md:col-span-2 relative">
                  <div className="relative">
      
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10" style={{
                      border: '4px solid #edebde',
                      background: '#ffffff'
                    }}>
                      <img 
  src="https://raw.githubusercontent.com/dhirajd8/panther-flow/main/frontend/public/image.png" 
  alt="Dhiraj - Panther Flow Founder" 
  className="w-full h-auto object-cover"
/>
      

            </div>
                    {/* Floating Stats Badge - 45+ Students */}
                    <div className="absolute -bottom-6 -right-6 rounded-2xl p-3 sm:p-6 shadow-2xl z-20" style={{
                      background: 'linear-gradient(135deg, rgba(79,70,229,0.95) 0%, rgba(124,58,237,0.95) 100%)',
                      border: '1px solid rgba(255,255,255,0.35)',
                      backdropFilter: 'blur(10px)',
                      webkitBackdropFilter: 'blur(10px)'
                    }}>
                      <div className="text-xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>45+</div>
                      <div className="text-xs text-white/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>Happy Students</div>
                    </div>
                    {/* Floating Stats Badge - 1.5 Lakhs Ad Spend */}
                    <div className="absolute -bottom-6 -left-6 rounded-2xl p-3 sm:p-6 shadow-2xl z-20" style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                      border: '1px solid rgba(255,255,255,0.35)',
                      backdropFilter: 'blur(10px)',
                      webkitBackdropFilter: 'blur(10px)'
                    }}>
                      <div className="text-xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>₹4.5L+</div>
                      <div className="text-xs text-white/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>Ad Spend Managed</div>
                    </div>
                    {/* Floating Top Badge */}
                    <div className="absolute -top-4 -left-4 rounded-full px-5 py-2 shadow-2xl z-20" style={{
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                      border: '1px solid rgba(255,255,255,0.35)',
                      backdropFilter: 'blur(10px)',
                      webkitBackdropFilter: 'blur(10px)'
                    }}>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" style={{ color: '#ffffff' }} />
                        <span className="text-sm font-bold" style={{ color: '#ffffff', fontFamily: 'Google Sans, sans-serif' }}>Meta Ads Strategist</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column - 3/5 width */}
                <div className="md:col-span-3 space-y-5">
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{
                      fontFamily: 'Google Sans, sans-serif',
                      background: '#ffffff'
                    }}>
                      <Award className="w-4 h-4" style={{ color: '#7C3AED' }} />
                      <span style={{
                        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>Meet Your Instructor</span>
                    </span>
                    <h2 className="font-bold mb-2" style={{ 
                      fontSize: '24px',
                      fontFamily: 'Poppins, sans-serif',
                      color: '#ffffff'
                    }}>
                      धिरज दयानंद
                    </h2>
                    <p className="inline-block text-lg font-medium px-3 py-1 rounded-lg" style={{
                      fontFamily: 'Poppins, sans-serif',
                      background: '#ffffff'
                    }}>
                      <strong style={{
                        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>Panther Flow AI Labs · Facebook Ads Strategist</strong>
                    </p>
                  </div>

                  <div className="space-y-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>
                    <p className="text-base leading-relaxed">
                      Internet वर हजारो Marketing courses उपलब्ध आहेत, पण <strong className="gradient-text">आपल्या भाषेत आणि आपल्या लोकांसाठी समजेल आणि affordable</strong> असा course मिळणं कठीण आहे. हीच गोष्ट मनात ठेवून Panther Flow सुरू केलं, जिथे प्रत्येक concept मराठीमध्ये सोप्या पद्धतीने समजावून सांगण्याचा प्रयत्न असतो. <strong className="gradient-text">मराठी मातीतला, धाराशिव मधून आलेला एक २२ वर्षांचा तरुण</strong>, जो Performance Marketing क्षेत्रात स्वतःचं छोटंसं स्थान निर्माण करत आहे आणि हेच knowledge आपल्या मराठी बांधवांपर्यंत सोप्या भाषेत पोहोचवण्याचा प्रयत्न करतोय. आणि हा एक recorded course नाही, तर हे <strong className="gradient-text">live शिकवलं जातं</strong>.
                    </p>
                    <p className="text-base leading-relaxed">
                      Client च्या कामातून जे practical learnings मिळाल्या, जे छोटे छोटे अनुभव आले, तेच सगळं या course मध्ये मांडलं आहे. त्यामुळे इथे फक्त theory नाही, तर खऱ्या कामातून आलेले <strong className="gradient-text">raw अनुभव</strong> मिळतील, मग ते चांगले असोत किंवा mistakes असोत.
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative pl-6 py-4 rounded-2xl" style={{
                    background: '#ffffff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}>
            
                    <p className="italic text-lg leading-relaxed" style={{ 
                      fontFamily: 'Aparajita, serif',
                      color: '#1e1b4b',
                      fontWeight: 400
                    }}>
                      पुणे-मुंबईच्या Digital Marketing Institutes ची Fees प्रत्येकाला Affordable नाहीये.
लवकर Job पाहिजे म्हणून बघून Admission ही घेतात, पण Course संपून गेला तरी Skills येत नाहीत, Confidence येत नाही.
आणि हाच Problem आम्ही Solve करतोय.
Affordable Price मध्ये, Practical Marathi मध्ये शिकवणारा Meta Ads + AI Complete Course. 🚀
                    </p>
                  </div>

                  {/* Stats Row */}
                 <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                      <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Poppins, sans-serif' }}>100%</div>
                      <div className="text-xs mt-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1e1b4b' }}>मराठी</div>
                    </div>
                    <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                      <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Poppins, sans-serif' }}>Live</div>
                      <div className="text-xs mt-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1e1b4b' }}>Sessions</div>
                    </div>
                    <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                      <div className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Poppins, sans-serif' }}>Real</div>
                      <div className="text-xs mt-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#1e1b4b' }}>Campaigns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 px-4 relative overflow-hidden" style={{ background: '#ffffff' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(79,70,229,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            zIndex: 1
          }}></div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="space-y-6 rounded-3xl p-6 sm:p-12 rise-up" style={{
              background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1040 50%, #13103a 100%)',
              border: '1.5px solid rgba(139,92,246,0.35)',
              boxShadow: '0 0 0 1px rgba(139,92,246,0.08), 0 25px 60px rgba(79,70,229,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.18) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
              {/* Urgency Banner */}
              <button 
                onClick={handleEnrollClick}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 urgency-banner-btn rise-up"
                style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.3) 0%, rgba(124,58,237,0.3) 100%)', border: '1.5px solid rgba(139,92,246,0.6)', fontFamily: 'Poppins, sans-serif' }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#fbbf24' }}></span>
                </span>
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-sm font-bold tracking-wide text-white">
                  New Batch Starting on 1st July · Limited Seats!
                </span>
              </button>

             <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 rise-up rise-up-delay-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff', lineHeight: '1.25' }}>
                Join the Next Batch and Start Advertising Smarter
              </h2>
              <p className="text-xl max-w-2xl mx-auto rise-up rise-up-delay-2" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.85)' }}>
                Join our live Marathi training, get hands-on experience, and master Meta Ads from zero to expert.
              </p>

              {/* Price Anchor */}
              <div className="flex items-center justify-center gap-4 rise-up rise-up-delay-2">
                <span className="text-lg line-through" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Poppins, sans-serif' }}>₹4,999</span>
                <div className="flex items-center gap-2 px-5 py-2 rounded-2xl" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(139,92,246,0.4)' }}>
                  <span className="text-3xl font-black" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #a78bfa, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹998</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>80% OFF</span>
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  onClick={handleEnrollClick}
                  size="lg"
                  className="text-white text-xl px-12 py-8 rounded-full font-bold btn-blue btn-animated-border rise-up rise-up-delay-3"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                  data-testid="cta-join-now"
                >
                  {`Join Now - ${courseData.currency}${courseData.price}`}
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 pt-4 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" style={{ color: '#818cf8' }} />
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>100% Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" style={{ color: '#818cf8' }} />
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Live Course</span>
                </div>
              </div>
            </div>
                  
          </div>
        </section>
{/* Socials Section */}
<section id="socials" className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
  <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>

  <div className="container mx-auto max-w-4xl text-center relative z-10">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold mb-3 rise-up" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>
      <span style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Follow</span> Us
    </h2>

    {/* Purpose line */}
    <p className="mb-4 text-base rise-up rise-up-delay-1" style={{ fontFamily: 'Poppins, sans-serif', color: 'rgba(255,255,255,0.7)' }}>
      Free Meta Ads tips, real campaign results आणि updates साठी आम्हाला follow करा 👇
    </p>

    {/* Social Cards */}
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

      {/* Facebook */}
      <a href="https://www.facebook.com/profile.php?id=61590443666474" target="_blank" rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 rise-up rise-up-delay-1"
        style={{ background: 'rgba(24,119,242,0.12)', border: '1.5px solid rgba(24,119,242,0.35)' }}>
        <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#1877F2' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
        <div>
          <div className="font-bold text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Facebook</div>
          <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Poppins, sans-serif' }}>Page Follow करा</div>
        </div>
      </a>

      {/* Instagram */}
      <a href="https://www.instagram.com/_pantherflow/" target="_blank" rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 rise-up rise-up-delay-2"
        style={{ background: 'rgba(220,39,67,0.1)', border: '1.5px solid rgba(220,39,67,0.3)' }}>
        <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </div>
        <div>
          <div className="font-bold text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>Instagram</div>
          <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Poppins, sans-serif' }}>Reels & Tips</div>
        </div>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/company/panther-flow/" target="_blank" rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 rise-up rise-up-delay-3"
        style={{ background: 'rgba(0,119,181,0.1)', border: '1.5px solid rgba(0,119,181,0.3)' }}>
        <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#0077B5' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <div>
          <div className="font-bold text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>LinkedIn</div>
          <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Poppins, sans-serif' }}>Updates & News</div>
        </div>
      </a>

      {/* YouTube */}
      <a href="https://www.youtube.com/@DhirajDayanand" target="_blank" rel="noopener noreferrer"
        className="flex flex-col items-center gap-3 px-4 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 rise-up rise-up-delay-4"
        style={{ background: 'rgba(255,0,0,0.1)', border: '1.5px solid rgba(255,0,0,0.25)' }}>
        <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#FF0000' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
          </svg>
        </div>
        <div>
          <div className="font-bold text-white text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>YouTube</div>
          <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Poppins, sans-serif' }}>Free Videos</div>
        </div>
      </a>

    </div>
  </div>
</section>
        {/* Footer */}
        <footer id="footer" className="py-12 px-4" style={{
          background: '#13103a',
          color: 'rgba(255,255,255,0.95)'
        }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4">
              {/* Footer Nav Links */}
              <div className="flex justify-center gap-8 flex-wrap pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <button onClick={() => scrollToSection('about')} className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>About</button>
                <button onClick={() => scrollToSection('course-overview')} className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>Course</button>
                <button onClick={() => scrollToSection('socials')} className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>Connect</button>
                <a href="/privacy-policy" className="text-sm hover:opacity-100 transition-opacity" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontFamily: 'Poppins, sans-serif' }}>Privacy Policy</a>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>Contact Email</p>
                <a href="mailto:contactpantherflow@gmail.com" className="hover:opacity-80" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  contactpantherflow@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>Contact Number</p>
                <a href="tel:+919307378191" className="hover:opacity-80" style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  +91 9307378191
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif', color: '#ffffff' }}>Address</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>At - Barmachiwadi, Tal- Kalamb, Dist - Dharashiv धाराशिव 413525</p>
              </div>
              <div className="pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <p className="text-sm" style={{ fontFamily: 'Google Sans, sans-serif', color: 'rgba(255,255,255,0.8)', opacity: 0.9 }}>
                  © 2026 Panther Flow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
{showForm && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
    <div className="w-full max-w-sm rounded-3xl p-8 shadow-2xl relative" style={{ background: '#1e1b4b', border: '1.5px solid rgba(124,58,237,0.5)', fontFamily: 'Poppins, sans-serif' }}>
      <button onClick={() => setShowForm(false)} style={{ position: 'absolute', top: '14px', right: '16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', fontSize: '18px', lineHeight: 1, flexShrink: 0, zIndex: 10 }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.8)'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.border = '1px solid rgba(239,68,68,0.9)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.15)'; }}>✕</button>
      <h3 className="text-xl font-bold text-white text-center mb-1" style={{ paddingRight: '36px', paddingLeft: '4px' }}>⚡ Live Meta Ads Course. ONLY FEW SEATS LEFT !</h3>
      <p className="text-xs text-center mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>फक्त ₹998 मध्ये Meta Ads Mastery. मर्यादित Seats उपलब्ध असून जागा लवकर भरत आहेत. ⏳</p>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold mb-1 block" style={{ color: '#a5b4fc' }}>तुमचं नाव *</label>
          <input type="text" name="name" autoComplete="name" placeholder="तुमचं नाव" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(124,58,237,0.4)', fontFamily: 'Poppins, sans-serif' }} />
        </div>
        <div>
          <label className="text-xs font-semibold mb-1 block" style={{ color: '#a5b4fc' }}>Phone Number *</label>
          <input type="tel" name="tel" autoComplete="tel-national" placeholder="10 digit mobile number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })} className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none" style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(124,58,237,0.4)', fontFamily: 'Poppins, sans-serif' }} />
        </div>
        {formError && <p className="text-xs text-center" style={{ color: '#f87171' }}>{formError}</p>}
        <button onClick={handleFormSubmit} className="w-full py-4 rounded-xl text-white font-bold text-base transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
          Book Your Seat → ₹998
        </button>
        <button onClick={() => setShowForm(false)} className="w-full py-2 text-xs text-center" style={{ color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer' }}>
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

{/* Bottom Sticky Bar */}
<div className="fixed bottom-0 left-0 right-0 z-50 px-2 sm:px-4 py-1.5 flex items-center justify-between gap-2 shadow-2xl overflow-hidden" style={{
  fontFamily: 'Poppins, sans-serif',
  background: '#1e1b4b',
  boxShadow: '0 -10px 30px rgba(30,27,75,0.4)'
}}>
  <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
    <span className="flex-shrink-0 text-sm sm:text-base" style={{ color: '#ffffff' }}>⚡</span>
    <span className="text-[10px] sm:text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis" style={{ color: '#ffffff' }}>
      💰<span className="gradient-tick">✓</span>&nbsp;पुणे-मुंबईच्या classes पेक्षा कितीतरी affordable आणि practical!
    </span>
  </div>
  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
    <div className="hidden sm:flex items-center gap-1">
      <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
      <span className="text-xs" style={{ color: '#ffffff' }}>फक्त 10 Seats उरल्या!</span>
    </div>
    <button
      onClick={handleEnrollClick}
      className="sticky-bar-btn px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0"
    >
      <span>आजच Join करा →</span>
    </button>
  </div>
</div>
      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-16 left-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 whatsapp-floating"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          fontFamily: 'Google Sans, sans-serif'
        }}
        data-testid="floating-whatsapp-btn"
        aria-label="WhatsApp Us"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-8 h-8 text-[#810100]"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  );
};

export default Home;
