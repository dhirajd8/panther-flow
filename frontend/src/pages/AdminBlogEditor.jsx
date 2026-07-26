import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Bold, Heading2, Heading3, Link2, Image as ImageIcon, Youtube, Table as TableIcon, Trash2, Plus } from 'lucide-react';

const BACKEND_URL = 'https://panther-flow-backend.onrender.com';

const AdminBlogEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const token = localStorage.getItem('admin_token');
  const textareaRef = useRef(null);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    author: 'Panther Flow',
    category: 'Digital Marketing',
    metaDescription: '',
    coverImage: '',
    content: '',
    status: 'draft',
    faqs: [],
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
              coverImage: post.coverImage || '',
              content: post.content || '',
              status: post.status || 'draft',
              faqs: post.faqs || [],
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

  // Insert text at the current cursor position in the content textarea
  const insertAtCursor = (before, after = '', placeholder = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = form.content.substring(start, end) || placeholder;
    const newContent =
      form.content.substring(0, start) + before + selected + after + form.content.substring(end);
    handleChange('content', newContent);
    setTimeout(() => {
      textarea.focus();
      const cursorPos = start + before.length + selected.length + after.length;
      textarea.setSelectionRange(cursorPos, cursorPos);
    }, 0);
  };

  const handleImageInsert = () => {
    const url = window.prompt('Image URL:');
    if (!url) return;
    const alt = window.prompt('Alt text (describe the image for SEO/accessibility):') || 'image';
    insertAtCursor(`\n![${alt}](${url})\n`);
  };

  const handleLinkInsert = () => {
    const url = window.prompt('Link URL (internal e.g. /blog or external e.g. https://...):');
    if (!url) return;
    insertAtCursor('[', `](${url})`, 'link text');
  };

  const handleYoutubeInsert = () => {
    const url = window.prompt('YouTube video URL:');
    if (!url) return;
    insertAtCursor(`\n{{youtube:${url}}}\n`);
  };

  const handleTableInsert = () => {
    const template = `\n| Column 1 | Column 2 | Column 3 |\n|---|---|---|\n| Row 1 | Data | Data |\n| Row 2 | Data | Data |\n`;
    insertAtCursor(template);
  };

  const addFaq = () => {
    setForm((prev) => ({ ...prev, faqs: [...prev.faqs, { question: '', answer: '' }] }));
  };

  const updateFaq = (index, field, value) => {
    setForm((prev) => {
      const faqs = [...prev.faqs];
      faqs[index] = { ...faqs[index], [field]: value };
      return { ...prev, faqs };
    });
  };

  const removeFaq = (index) => {
    setForm((prev) => ({ ...prev, faqs: prev.faqs.filter((_, i) => i !== index) }));
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

  const toolbarBtn = (icon, label, onClick) => (
    <button
      type="button"
      onClick={onClick}
      title={label}
      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
      style={{ background: '#f3f4f6', color: '#374151' }}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: '#f7f7fb', fontFamily: 'Poppins, sans-serif' }}>
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => navigate('/admin/blogs')}
          className="text-sm mb-6"
          style={{ color: '#FF5A09', background: 'none', border: 'none', cursor: 'pointer' }}
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
            <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Cover Image URL (shown on blog card and top of article)</label>
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) => handleChange('coverImage', e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ border: '1.5px solid #e5e7eb' }}
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Cover Image URL (shown on blog card and top of article)</label>
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) => handleChange('coverImage', e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ border: '1.5px solid #e5e7eb' }}
            />
          </div>

          <div>
            <label className="text-sm font-semibold block mb-1.5" style={{ color: '#374151' }}>Cover Image URL (shown on blog card and top of article)</label>
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) => handleChange('coverImage', e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ border: '1.5px solid #e5e7eb' }}
            />
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
              Article Body
            </label>

            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 mb-2 p-2 rounded-xl" style={{ background: '#f9fafb', border: '1px solid #f0f0f5' }}>
              {toolbarBtn(<Heading2 className="w-4 h-4" />, 'H2', () => insertAtCursor('\n## ', '', 'Heading'))}
              {toolbarBtn(<Heading3 className="w-4 h-4" />, 'H3', () => insertAtCursor('\n### ', '', 'Subheading'))}
              {toolbarBtn(<Bold className="w-4 h-4" />, 'Bold', () => insertAtCursor('**', '**', 'bold text'))}
              {toolbarBtn(<Link2 className="w-4 h-4" />, 'Link', handleLinkInsert)}
              {toolbarBtn(<ImageIcon className="w-4 h-4" />, 'Image', handleImageInsert)}
              {toolbarBtn(<Youtube className="w-4 h-4" />, 'YouTube', handleYoutubeInsert)}
              {toolbarBtn(<TableIcon className="w-4 h-4" />, 'Table', handleTableInsert)}
            </div>

            <textarea
              ref={textareaRef}
              value={form.content}
              onChange={(e) => handleChange('content', e.target.value)}
              rows={16}
              placeholder="Write your article here. Use the toolbar above, or leave a blank line between paragraphs."
              className="w-full px-4 py-3 rounded-xl text-sm outline-none font-mono"
              style={{ border: '1.5px solid #e5e7eb' }}
            />
            <p className="text-xs mt-1.5" style={{ color: '#9ca3af' }}>
              Tip: blank line = new paragraph. ## = H2, ### = H3. Toolbar buttons insert formatting at your cursor.
            </p>
          </div>

          {/* FAQ section */}
          <div className="pt-4" style={{ borderTop: '1px solid #f0f0f5' }}>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-semibold" style={{ color: '#374151' }}>FAQs (optional — adds an FAQ section + SEO schema)</label>
              <button
                type="button"
                onClick={addFaq}
                className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg"
                style={{ background: 'rgba(255,90,9,0.08)', color: '#FF5A09' }}
              >
                <Plus className="w-3.5 h-3.5" /> Add FAQ
              </button>
            </div>

            {form.faqs.length === 0 && (
              <p className="text-xs" style={{ color: '#9ca3af' }}>No FAQs yet.</p>
            )}

            <div className="space-y-3">
              {form.faqs.map((faq, idx) => (
                <div key={idx} className="p-3 rounded-xl" style={{ background: '#f9fafb', border: '1px solid #f0f0f5' }}>
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-2">
                      <input
                        type="text"
                        placeholder="Question"
                        value={faq.question}
                        onChange={(e) => updateFaq(idx, 'question', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                        style={{ border: '1.5px solid #e5e7eb' }}
                      />
                      <textarea
                        placeholder="Answer"
                        value={faq.answer}
                        onChange={(e) => updateFaq(idx, 'answer', e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                        style={{ border: '1.5px solid #e5e7eb' }}
                      />
                    </div>
                    <button type="button" onClick={() => removeFaq(idx)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <Trash2 className="w-4 h-4" style={{ color: '#ef4444' }} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
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
              style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}
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