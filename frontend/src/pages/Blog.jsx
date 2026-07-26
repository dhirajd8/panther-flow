import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Sparkles, Megaphone } from 'lucide-react';

const BACKEND_URL = 'https://panther-flow-backend.onrender.com';

const Blog = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = React.useState([]);

  React.useEffect(() => {
    document.title = 'Blogs — Panther Flow AI Labs | Meta Ads Tips in Marathi';
    window.scrollTo(0, 0);
    fetch(`${BACKEND_URL}/api/blog`)
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch(() => setBlogPosts([]));
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>

      {/* Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] py-2 px-3 text-center shadow-lg" style={{
        background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold flex-wrap">
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="hidden sm:inline">🔥 New Batch Starting on <strong>1st August</strong> · Limited Seats Available!</span>
          <span className="sm:hidden">🔥 New Batch · <strong>1st August</strong> · Limited Seats!</span>
          <button
            onClick={() => navigate('/checkout')}
            className="font-bold text-white whitespace-nowrap"
          >
            Join Now →
          </button>
        </div>
      </div>

      {/* Nav */}
      <header className="fixed top-16 sm:top-14 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-auto max-w-[calc(100%-1rem)]">
        <nav className="backdrop-blur-xl rounded-3xl sm:rounded-full shadow-2xl border border-gray-200 px-3 sm:px-4 py-2" style={{
          background: 'rgba(255, 255, 255, 0.95)',
          boxShadow: '0 10px 40px rgba(79, 70, 229, 0.15)'
        }}>
          <div className="flex items-center gap-0.5 sm:gap-1">
            <button onClick={() => navigate('/')} className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap">Home</button>
            <button onClick={() => navigate('/')} className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap">About</button>
            <button onClick={() => navigate('/')} className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap">Course</button>
            <button className="font-bold px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap" style={{ color: '#4F46E5', background: 'rgba(79,70,229,0.08)' }}>Blogs</button>
            <button onClick={() => navigate('/')} className="text-gray-700 hover:bg-indigo-50 font-medium px-1.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-base whitespace-nowrap">Contact</button>
          </div>
        </nav>
      </header>

      {/* Hero banner */}
      <section className="pt-32 sm:pt-36 pb-16 px-4 relative overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

        <div className="relative z-10 container mx-auto max-w-3xl">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            style={{ border: '1.5px solid rgba(139,92,246,0.5)', background: 'rgba(139,92,246,0.1)', color: '#c4b5fd' }}
          >
            <Sparkles className="w-4 h-4" />
            Insights &amp; Tips
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: '#ffffff' }}>
            <span style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Blogs</span>
          </h1>

          <p className="text-base sm:text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Meta Ads, Digital Marketing आणि Growth Tips — मराठीत, practical अनुभवातून.
          </p>
        </div>
      </section>

      {/* Card grid */}
      <section className="py-16 px-4" style={{ background: '#f7f7fb' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] flex flex-col"
                style={{ background: '#ffffff', textDecoration: 'none', boxShadow: '0 8px 24px rgba(15,15,26,0.08)' }}
              >
                {/* Banner */}
                <div
                  className="relative h-44 flex items-center justify-center"
                  style={
                    post.coverImage
                      ? { backgroundImage: `url(${post.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                      : { background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)' }
                  }
                >
                  {!post.coverImage && <Megaphone className="w-12 h-12" style={{ color: 'rgba(255,255,255,0.35)' }} />}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)' }}>
                      {post.category || 'Digital Marketing'}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: 'rgba(34,197,94,0.85)' }}>
                      <Sparkles className="w-3 h-3" /> Latest
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-lg font-bold mb-2 leading-snug" style={{ color: '#0f0f0f' }}>{post.title}</h2>
                  <p className="text-sm mb-4 flex-1" style={{ color: '#6b7280' }}>{post.metaDescription}</p>

                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs pt-3" style={{ borderTop: '1px solid #f0f0f5', color: '#9ca3af' }}>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{post.author || 'Panther Flow'}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs mt-1.5" style={{ color: '#9ca3af' }}>
                    <Clock className="w-3.5 h-3.5" />{post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;