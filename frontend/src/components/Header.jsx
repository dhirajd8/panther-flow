import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-auto max-w-[calc(100%-1rem)]">
      <nav
        className="backdrop-blur-xl rounded-3xl sm:rounded-full shadow-2xl border border-gray-200 px-3 sm:px-4 py-2"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 10px 40px rgba(79, 70, 229, 0.15)',
        }}
      >
        <div className="flex flex-row items-center justify-center w-full gap-0.5">
          <div className="flex items-center gap-0.5 sm:gap-1">
            <button
              onClick={() => navigate('/')}
              className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Home
            </button>
            <button
              onClick={() => navigate('/about')}
              className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About
            </button>
            <button
              onClick={() => navigate('/course')}
              className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Course
            </button>
            <button
              onClick={() => navigate('/blog')}
              className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Blogs
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;