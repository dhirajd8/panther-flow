import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = 'Blog — Panther Flow AI Labs | Meta Ads Tips in Marathi';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto max-w-4xl">
        <button
          onClick={() => navigate('/')}
          className="text-sm mb-8"
          style={{ color: '#6366f1', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: '#0f0f0f' }}>
          Blog
        </h1>
        <p className="text-lg mb-12" style={{ color: '#6b7280' }}>
          Meta Ads, Digital Marketing आणि Growth Tips — मराठीत.
        </p>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block p-6 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
              style={{ background: '#f7f7fb', textDecoration: 'none', border: '1px solid #f0f0f5' }}
            >
              <h2 className="text-xl font-bold mb-2" style={{ color: '#0f0f0f' }}>{post.title}</h2>
              <p className="text-sm mb-4" style={{ color: '#6b7280' }}>{post.metaDescription}</p>
              <div className="flex items-center gap-4 text-xs" style={{ color: '#9ca3af' }}>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                <span className="flex items-center gap-1 font-semibold" style={{ color: '#4F46E5' }}>
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;