import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Course', path: '/course' },
  { label: 'Blogs', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-auto max-w-[calc(100%-1rem)]">
      <nav
        className="flex items-center gap-1 sm:gap-2 backdrop-blur-xl rounded-3xl sm:rounded-full shadow-2xl px-2 sm:px-2.5 py-2"
        style={{
          background: 'rgba(15, 15, 26, 0.75)',
          border: '1px solid rgba(139,92,246,0.35)',
        }}
      >
        {/* Brand mark */}
        <button
          onClick={() => navigate('/')}
          className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 font-black text-xs text-white"
          style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED, #EC4899)', fontFamily: 'Poppins, sans-serif' }}
          aria-label="Panther Flow Home"
        >
          PF
        </button>

        <div className="hidden sm:block w-px h-5 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }}></div>

        {/* Nav links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="relative font-medium px-2.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.65)',
                  background: isActive ? 'linear-gradient(135deg, #4F46E5, #7C3AED)' : 'transparent',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="hidden sm:block w-px h-5 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }}></div>

        {/* CTA */}
        <button
          onClick={() => navigate('/checkout')}
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #EC4899, #7C3AED)', fontFamily: 'Poppins, sans-serif' }}
        >
          Join Now →
        </button>
      </nav>
    </header>
  );
};

export default Header;