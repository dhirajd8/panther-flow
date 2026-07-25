import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const BACKEND_URL = 'https://panther-flow-backend.onrender.com';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${BACKEND_URL}/api/blog/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('not found');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        document.title = `${data.title} — Panther Flow AI Labs`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', data.metaDescription);
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" style={{ color: '#6366f1' }}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => navigate('/blog')}
          className="text-sm mb-8"
          style={{ color: '#6366f1', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ← Back to Blog
        </button>

        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0f0f0f' }}>
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm mb-8" style={{ color: '#9ca3af' }}>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
        </div>

        <div
          className="prose max-w-none text-base leading-relaxed whitespace-pre-line"
          style={{ color: '#374151' }}
        >
          {post.content}
        </div>

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
          <p className="text-white font-bold mb-3">Meta Ads शिकायला तयार आहात?</p>
          <button
            onClick={() => navigate('/checkout')}
            className="px-6 py-3 rounded-xl font-bold"
            style={{ background: '#ffffff', color: '#4F46E5' }}
          >
            Join the Course →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;