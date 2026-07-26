import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Sparkles, Megaphone } from 'lucide-react';

const BACKEND_URL = 'https://panther-flow-backend.onrender.com';

const Blog = () => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = React.useState([]);

  React.useEffect(() => {
    fetch(`${BACKEND_URL}/api/blog`)
      .then((res) => res.json())
      .then((data) => setBlogPosts(data))
      .catch(() => setBlogPosts([]));
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
      <Helmet>
        <title>Blogs — Panther Flow AI Labs | Meta Ads Tips in Marathi</title>
        <meta name="description" content="Meta Ads, Digital Marketing आणि Growth Tips — मराठीत, practical अनुभवातून. Panther Flow च्या blog मधून शिका." />
      </Helmet>
      <Header />

      {/* Hero banner */}
      <section className="pt-36 sm:pt-44 pb-16 px-4 relative overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
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
            Blogs
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

      <Footer />
    </div>
  );
};

export default Blog;