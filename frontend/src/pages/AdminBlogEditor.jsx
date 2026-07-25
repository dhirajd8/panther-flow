import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BACKEND_URL = 'https://panther-flow-backend.onrender.com';

const AdminBlogEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const token = localStorage.getItem('admin_token');

  const [form, setForm] = useState({
    title: '',
    slug: '',
    author: 'Panther Flow',
    category: 'Digital Marketing',
    metaDescription: '',
    content: '',
    status: 'draft',
  });
  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    if (isEdit) {
      fetch(`${BACKEND_URL}/api/admin/blog`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((posts) => {
          const post = posts.find((p) => p.id === id);
          if (post) {
            setForm({
              title: post.title || '',
              slug: post.slug || '',
              author: post.author || 'Panther Flow',
              category: post.category || 'Digital Marketing',
              metaDescription: post.metaDescription || '',
              content: post.content || '',
              status: post.status || 'draft',
            });
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async (publish) => {
    setSaving(true);
    setError('');
    const payload = { ...form, status: publish ? 'published' : 'draft' };

    try {
      const url = isEdit ? `${BACKEND_URL}/api/admin/blog/${id}` : `${BACKEND_URL}/api/admin/blog`;
      const method = isEdit ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || 'Save failed');
      }
      navigate('/admin/blogs');
    } catch (err) {
      setError(err.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Loading...</div>;
  }

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: '#f7f7fb', fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => navigate('/admin/blogs')}
          className="text-sm mb-6"
          style={{ color: '#6366f1', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ← Back to Blog Posts
        </button>

        <h1 className="text-2xl font-bold mb-6" style={{ color: '#0f0f0f' }}>
          {isEdit ? 'Edit Blog' : 'New Blog'}
        </h1>

        <div className="rounded-2xl p-6 space-y-4" style={{ background: '#ffffff', boxShadow: '0 8px 24px rgba(15,15,26,0.06)' }}>
          <div>
            <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ border: '1.5px solid #e5e7eb' }}
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>URL Slug (optional — auto-generated from title if left blank)</label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => handleChange('slug', e.target.value)}
              placeholder="auto-derived from title"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ border: '1.5px solid #e5e7eb' }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Author</label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => handleChange('author', e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ border: '1.5px solid #e5e7eb' }}
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Category</label>
              <input
                type="text"
                value={form.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ border: '1.5px solid #e5e7eb' }}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Meta Description (shown in search results & blog card)</label>
            <textarea
              value={form.metaDescription}
              onChange={(e) => handleChange('metaDescription', e.target.value)}
              rows={2}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ border: '1.5px solid #e5e7eb' }}
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>
              Article Body (plain text — leave a blank line between paragraphs, use ## for a heading)
            </label>
            <textarea
              value={form.content}
              onChange={(e) => handleChange('content', e.target.value)}
              rows={16}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none font-mono"
              style={{ border: '1.5px solid #e5e7eb' }}
            />
          </div>

          {error && <p className="text-sm" style={{ color: '#ef4444' }}>{error}</p>}

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => handleSave(false)}
              disabled={saving}
              className="px-5 py-3 rounded-xl font-bold text-sm disabled:opacity-60"
              style={{ background: '#f3f4f6', color: '#374151' }}
            >
              Save as Draft
            </button>
            <button
              onClick={() => handleSave(true)}
              disabled={saving}
              className="px-5 py-3 rounded-xl font-bold text-white text-sm disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
            >
              {saving ? 'Saving...' : 'Publish'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogEditor;