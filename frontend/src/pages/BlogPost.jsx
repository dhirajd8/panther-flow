import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ChevronDown } from 'lucide-react';

const BACKEND_URL = 'https://panther-flow-backend.onrender.com';

const getYoutubeEmbedUrl = (url) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const FaqItem = ({ faq }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #f0f0f5' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
        style={{ background: '#ffffff', border: 'none', cursor: 'pointer' }}
      >
        <span className="text-sm font-semibold" style={{ color: '#0f0f0f' }}>{faq.question}</span>
        <ChevronDown className="w-4 h-4 flex-shrink-0" style={{ color: '#6b7280', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm" style={{ color: '#6b7280' }}>{faq.answer}</div>
      )}
    </div>
  );
};

const markdownComponents = {
  img: ({ node, ...props }) => (
    <img {...props} className="rounded-xl my-4 w-full" loading="lazy" />
  ),
  a: ({ node, href, children, ...props }) => {
    const isExternal = href && href.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={{ color: '#FF5A09', fontWeight: 600 }}
        {...props}
      >
        {children}
      </a>
    );
  },
  h2: ({ node, ...props }) => (
    <h2 {...props} className="text-2xl font-bold mt-8 mb-3" style={{ color: '#0f0f0f' }} />
  ),
  h3: ({ node, ...props }) => (
    <h3 {...props} className="text-xl font-bold mt-6 mb-2" style={{ color: '#0f0f0f' }} />
  ),
  table: ({ node, ...props }) => (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm" {...props} style={{ borderCollapse: 'collapse' }} />
    </div>
  ),
  th: ({ node, ...props }) => (
    <th {...props} className="text-left px-3 py-2 font-bold" style={{ background: '#f7f7fb', border: '1px solid #f0f0f5' }} />
  ),
  td: ({ node, ...props }) => (
    <td {...props} className="px-3 py-2" style={{ border: '1px solid #f0f0f5' }} />
  ),
};

const renderContent = (content) => {
  const youtubeRegex = /\{\{youtube:(.+?)\}\}/g;
  const segments = [];
  let lastIndex = 0;
  let match;

  while ((match = youtubeRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'markdown', value: content.slice(lastIndex, match.index) });
    }
    segments.push({ type: 'youtube', url: match[1].trim() });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < content.length) {
    segments.push({ type: 'markdown', value: content.slice(lastIndex) });
  }

  return segments.map((seg, idx) => {
    if (seg.type === 'youtube') {
      const embedUrl = getYoutubeEmbedUrl(seg.url);
      if (!embedUrl) return null;
      return (
        <div key={idx} className="my-6 rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <iframe
            src={embedUrl}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      );
    }
    if (!seg.value.trim()) return null;
    return (
      <ReactMarkdown key={idx} remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {seg.value}
      </ReactMarkdown>
    );
  });
};

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
        <Link to="/blog" style={{ color: '#FF5A09' }}>← Back to Blog</Link>
      </div>
    );
  }

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  } : null;

  return (
    <div className="min-h-screen px-4 py-16" style={{ background: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}

      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => navigate('/blog')}
          className="text-sm mb-8"
          style={{ color: '#FF5A09', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ← Back to Blog
        </button>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-2xl mb-8"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        )}

        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0f0f0f' }}>
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm mb-8" style={{ color: '#9ca3af' }}>
          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
        </div>

        <div className="prose max-w-none text-base leading-relaxed" style={{ color: '#374151' }}>
          {renderContent(post.content)}
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#0f0f0f' }}>Frequently Asked Questions</h2>
            <div className="space-y-3">
              {post.faqs.map((faq, idx) => (
                <FaqItem key={idx} faq={faq} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 p-6 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}>
          <p className="text-white font-bold mb-3">Meta Ads शिकायला तयार आहात?</p>
          <button
            onClick={() => navigate('/checkout')}
            className="px-6 py-3 rounded-xl font-bold"
            style={{ background: '#ffffff', color: '#FF5A09' }}
          >
            Join the Course →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;