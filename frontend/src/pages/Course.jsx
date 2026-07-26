import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { courseData } from '../data/mock';
import {
  CheckCircle2, Award, Video, Users, Calendar, ChevronDown,
  Target, TrendingUp, ShieldCheck, Clock
} from 'lucide-react';

const learningOutcomes = [
  'Meta Business Suite आणि Ad Account Setup — सुरुवातीपासून',
  'Audience Targeting — बरोबर लोकांपर्यंत पोहोचायला शिका',
  'Campaign Structure — Traffic, Leads, Sales साठी योग्य setup',
  'Creative Strategy — जाहिरातींसाठी photo/video काम करणारे content',
  'Budget Optimization — कमी खर्चात जास्त result',
  'Pixel & Tracking — actual conversions मोजायला शिका',
  'Real Campaign Launch — तुमची स्वतःची ad live करा',
  'Reporting & Analysis — data बघून decisions घ्यायला शिका',
];

const whoItsFor = [
  { emoji: '🛍️', title: 'Business Owners', desc: 'तुमचा स्वतःचा product/service promote करायला शिका.' },
  { emoji: '💻', title: 'Freelancers', desc: 'नवीन skill add करून premium clients मिळवा.' },
  { emoji: '🎓', title: 'Students', desc: 'Job-ready digital marketing skill शिका.' },
  { emoji: '📣', title: 'Marketers', desc: 'Advanced targeting शिकून results दुप्पट करा.' },
];

const faqs = [
  { q: 'हा course live आहे की recorded?', a: '१०० टक्के live आहे. रोज नवीन concept live class मध्ये शिकवला जातो, आणि तुम्हाला real-time doubts विचारता येतात. सर्व sessions record होतात आणि lifetime access मिळतो.' },
  { q: 'मला आधी digital marketing चा अनुभव नाही, तरी मी हा course करू शकतो का?', a: 'हो, नक्कीच. हा course पूर्णपणे zero पासून सुरू होतो — Basic ते Advanced असा structured curriculum आहे.' },
  { q: 'Course किती दिवसांचा आहे?', a: '१५ दिवस live classes, त्यानंतर तुम्हाला lifetime recorded access मिळतो.' },
  { q: 'Payment कसं करावं आणि ते secure आहे का?', a: 'Payment पूर्णपणे Razorpay च्या माध्यमातून होतं — १०० टक्के secure आणि encrypted.' },
  { q: 'Course नंतर काही support मिळतं का?', a: 'हो, WhatsApp Community च्या माध्यमातून तुम्ही आमच्याशी आणि इतर students शी कायम जोडलेले राहता.' },
];

const FaqRow = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #f0f0f5' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        style={{ background: '#ffffff', border: 'none', cursor: 'pointer' }}
      >
        <span className="text-sm sm:text-base font-semibold" style={{ color: '#0f0f0f' }}>{item.q}</span>
        <ChevronDown className="w-4 h-4 flex-shrink-0 ml-3" style={{ color: '#6b7280', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm" style={{ color: '#6b7280' }}>{item.a}</div>
      )}
    </div>
  );
};

const Course = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnroll = () => navigate('/checkout');

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', background: '#ffffff' }}>
      <Helmet>
        <title>Meta Ads Course in Marathi — Full Curriculum | Panther Flow AI Labs</title>
        <meta name="description" content="15 Days Live Meta Ads Course in Marathi. Basic ते Advanced, real campaigns, hands-on practice. ₹799 only. Next batch 1st August." />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="pt-24 sm:pt-28 pb-10 px-4 relative overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl mt-4 uppercase" style={{ color: '#ffffff', fontFamily: 'Helvetica', fontWeight: 900, WebkitTextStroke: '1px #ffffff', textShadow: '0 2px 0 rgba(255,255,255,0.3), 0 0 30px rgba(124,58,237,0.4)' }}>
            Course
          </h1>
        </div>
      </section>

      {/* Course Intro */}
      <section className="pt-16 sm:pt-20 pb-16 px-4 relative overflow-hidden text-center" style={{ background: '#ffffff' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ background: '#f7f7fb', border: '1.5px solid #ececf5' }}>
            <Award className="w-4 h-4" style={{ color: '#7C3AED' }} />
            <span style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Meta Ads Marathi Course</span>
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4" style={{ color: '#0f0f0f' }}>
            Meta Ads शिका <span style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Zero ते Expert</span>
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: '#334155' }}>
            १५ दिवसांचा Live Course — फक्त Theory नाही, तर Real Campaigns सोबत Practical Training. १०० टक्के मराठीत.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-lg line-through" style={{ color: '#9ca3af' }}>₹4,999</span>
            <div className="flex items-center gap-2 px-5 py-2 rounded-2xl" style={{ background: 'rgba(79,70,229,0.06)', border: '1.5px solid rgba(79,70,229,0.2)' }}>
              <span className="text-3xl font-black" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹799</span>
              <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>84% OFF</span>
            </div>
          </div>

          <button
            onClick={handleEnroll}
            className="px-8 py-4 rounded-full font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow: '0 8px 24px rgba(79,70,229,0.4)' }}
          >
            Enroll Now — फक्त ₹799 →
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-xs sm:text-sm" style={{ color: '#6b7280' }}>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" />45+ Students Trained</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />Next Batch: 1st August</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" />100% Secure Payment</span>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-16 px-4" style={{ background: '#ffffff' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#0f0f0f' }}>
            काय <span style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>शिकाल</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {learningOutcomes.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: '#f7f7fb' }}>
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#7C3AED' }} />
                <span className="text-sm sm:text-base" style={{ color: '#374151' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-4" style={{ background: '#f7f7fb' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-3" style={{ color: '#0f0f0f' }}>
            Complete <span style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Curriculum</span>
          </h2>
          <p className="text-center mb-10" style={{ color: '#6b7280' }}>Basic ते Advanced — Module by Module</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courseData.courseContent.map((module) => (
              <div key={module.id} className="p-5 rounded-2xl" style={{ background: '#ffffff', boxShadow: '0 4px 16px rgba(15,15,26,0.06)' }}>
                <span className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-3" style={{ background: 'rgba(79,70,229,0.08)', color: '#4F46E5' }}>{module.module}</span>
                <h3 className="text-base font-bold mb-3" style={{ color: '#0f0f0f' }}>{module.title}</h3>
                <ul className="space-y-1.5">
                  {module.topics.slice(0, 4).map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: '#6b7280' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#818cf8' }} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#ffffff' }}>
            हा course <span style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>तुमच्यासाठी</span> आहे का?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whoItsFor.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl flex items-start gap-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ fontSize: '2.2rem', lineHeight: 1 }}>{item.emoji}</div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: '#ffffff' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4" style={{ background: '#ffffff' }}>
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10" style={{ color: '#0f0f0f' }}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <FaqRow key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4" style={{ background: '#f7f7fb' }}>
        <div className="container mx-auto max-w-3xl text-center rounded-3xl p-10" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1040 50%, #13103a 100%)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#ffffff' }}>Ready to Master Meta Ads?</h2>
          <p className="mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>Next Batch Starting 1st August — Limited Seats</p>
          <button
            onClick={handleEnroll}
            className="px-8 py-4 rounded-full font-bold text-white text-base sm:text-lg transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', boxShadow: '0 8px 24px rgba(79,70,229,0.4)' }}
          >
            Enroll Now — फक्त ₹799 →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Course;