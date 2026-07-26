import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const quickQuestions = [
  { q: 'Course ची किंमत किती आहे?', a: 'Course ची किंमत फक्त ₹799 आहे (मूळ किंमत ₹4,999 वर 84% सूट). Payment 100% secure आहे — UPI, Cards, किंवा Netbanking ने करू शकता.' },
  { q: 'पुढची batch कधी सुरू होते?', a: 'पुढची Live batch 1st August पासून सुरू होत आहे. Seats limited आहेत, त्यामुळे लवकर enroll करणं चांगलं.' },
  { q: 'Class चे timing काय आहे?', a: 'याबद्दल exact वेळ WhatsApp Group मध्ये enrollment नंतर share केली जाते, जेणेकरून सगळ्यांना सोयीस्कर वेळ ठरवता येईल. साधारण संध्याकाळी/रात्री live sessions असतात.' },
  { q: 'Course किती दिवसांचा आहे?', a: '15 दिवसांचा Live Course आहे, त्यानंतर तुम्हाला recordings चा lifetime access मिळतो — त्यामुळे मिस झालेला class नंतरही बघता येतो.' },
  { q: 'मला आधी अनुभव नाही, तरी चालेल का?', a: 'हो, नक्कीच! हा course पूर्णपणे Zero पासून सुरू होतो — Basic ते Advanced असा structured आहे. कोणताही आधीचा अनुभव लागत नाही.' },
  { q: 'Refund policy काय आहे?', a: 'याबद्दल अचूक माहितीसाठी कृपया आमच्याशी WhatsApp किंवा Phone वर संपर्क करा — +91 9307378191.' },
];

const FaqChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'नमस्कार! 👋 मी Panther Flow चा assistant आहे. खालीलपैकी एक प्रश्न निवडा किंवा तुमचा प्रश्न टाइप करा.' },
  ]);
  const [input, setInput] = useState('');
  const [askedOnce, setAskedOnce] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const openWhatsApp = () => {
    window.open('https://wa.link/bh0lm8', '_blank', 'noopener,noreferrer');
  };

  const handleQuickQuestion = (item) => {
    setMessages((prev) => [...prev, { from: 'user', text: item.q }, { from: 'bot', text: item.a }]);
    setAskedOnce(true);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;

    const lower = text.toLowerCase();
    let reply = null;

    if (lower.includes('price') || lower.includes('किंमत') || lower.includes('fee') || lower.includes('cost') || lower.includes('₹')) {
      reply = quickQuestions[0].a;
    } else if (lower.includes('batch') || lower.includes('date') || lower.includes('कधी') || lower.includes('start')) {
      reply = quickQuestions[1].a;
    } else if (lower.includes('time') || lower.includes('वेळ') || lower.includes('schedule')) {
      reply = quickQuestions[2].a;
    } else if (lower.includes('day') || lower.includes('duration') || lower.includes('दिवस')) {
      reply = quickQuestions[3].a;
    } else if (lower.includes('experience') || lower.includes('beginner') || lower.includes('अनुभव')) {
      reply = quickQuestions[4].a;
    } else if (lower.includes('refund') || lower.includes('cancel')) {
      reply = quickQuestions[5].a;
    } else {
      reply = 'या प्रश्नाचं नेमकं उत्तर देण्यासाठी आमच्याशी थेट WhatsApp वर बोला — आम्ही लगेच मदत करू. 👇';
    }

    setMessages((prev) => [...prev, { from: 'user', text }, { from: 'bot', text: reply }]);
    setInput('');
    setAskedOnce(true);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-16 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
        aria-label="Chat with us"
      >
        {open ? <X className="w-7 h-7 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-36 right-6 z-50 rounded-2xl shadow-2xl flex flex-col"
          style={{
            width: 'min(360px, calc(100vw - 3rem))',
            height: 'min(480px, calc(100vh - 12rem))',
            background: '#ffffff',
            border: '1.5px solid rgba(79,70,229,0.15)',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-t-2xl flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Panther Flow Assistant</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>सहसा काही मिनिटांत उत्तर देतो</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ background: '#f7f7fb' }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="px-3 py-2 rounded-2xl text-sm max-w-[85%]"
                  style={
                    m.from === 'user'
                      ? { background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: '#ffffff' }
                      : { background: '#ffffff', color: '#374151', border: '1px solid #eee' }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {!askedOnce && (
              <div className="flex flex-col gap-2 pt-2">
                {quickQuestions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(item)}
                    className="text-left text-xs px-3 py-2 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                    style={{ background: '#ffffff', border: '1px solid rgba(79,70,229,0.2)', color: '#4F46E5' }}
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            )}

            {askedOnce && (
              <button
                onClick={openWhatsApp}
                className="w-full text-center text-xs px-3 py-2 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#ffffff' }}
              >
                WhatsApp वर थेट बोला →
              </button>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex items-center gap-2 px-3 py-3 flex-shrink-0" style={{ borderTop: '1px solid #eee' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="तुमचा प्रश्न टाइप करा..."
              className="flex-1 px-3 py-2 rounded-xl text-sm outline-none"
              style={{ border: '1px solid #e5e7eb' }}
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FaqChat;