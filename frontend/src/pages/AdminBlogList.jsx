import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = 'https://panther-flow-backend.onrender.com';

const AdminBlogList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('admin_token');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/blog`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401) {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
        return;
      }
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post?')) return;
    try {
      await fetch(`${BACKEND_URL}/api/admin/blog/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert('Failed to delete post');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: '#f7f7fb', fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" style={{ color: '#0f0f0f' }}>Blog Posts</h1>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/admin/blogs/new')}
              className="px-4 py-2 rounded-xl font-bold text-white text-sm"
              style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}
            >
              + New Blog
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl font-medium text-sm"
              style={{ background: '#ffffff', border: '1px solid #e5e7eb', color: '#374151' }}
            >
              Sign Out
            </button>
          </div>
        </div>

        {loading && <p style={{ color: '#6b7280' }}>Loading...</p>}
        {error && <p style={{ color: '#ef4444' }}>{error}</p>}

        {!loading && posts.length === 0 && (
          <p style={{ color: '#6b7280' }}>No posts yet. Click "+ New Blog" to create one.</p>
        )}

        <div className="rounded-2xl overflow-hidden" style={{ background: '#ffffff', boxShadow: '0 8px 24px rgba(15,15,26,0.06)' }}>
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #f0f0f5' }}>
              <div>
                <p className="font-semibold" style={{ color: '#0f0f0f' }}>{post.title}</p>
                <p className="text-xs" style={{ color: '#9ca3af' }}>{post.slug}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: post.status === 'published' ? 'rgba(34,197,94,0.12)' : 'rgba(156,163,175,0.15)',
                    color: post.status === 'published' ? '#16a34a' : '#6b7280',
                  }}
                >
                  {post.status}
                </span>
                <span className="text-xs" style={{ color: '#9ca3af' }}>{post.date}</span>
                <button
                  onClick={() => navigate(`/admin/blogs/edit/${post.id}`)}
                  className="text-sm font-semibold"
                  style={{ color: '#FF5A09', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-sm font-semibold"
                  style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogList;