import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Award,
  Sparkles,
  CheckCircle2,
  Users,
  Calendar,
  DollarSign,
  Target,
  Video,
} from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: '#ffffff', fontFamily: 'Poppins, sans-serif' }}>
      <Helmet>
        <title>About Us | Panther Flow — Meta Ads Course in Marathi</title>
        <meta name="description" content="धाराशिव मधून, मराठीत, Practical Meta Ads Training. Panther Flow आणि instructor धिरज दयानंद यांच्याबद्दल जाणून घ्या." />
      </Helmet>
      <Header />

      {/* Hero */}
      {/* Hero */}
      <section className="pt-16 sm:pt-20 pb-16 px-4 relative overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-4" style={{ color: '#ffffff' }}>
            <span style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>About</span>
          </h1>

          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            धाराशिव मधून, मराठीत, Practical Meta Ads Training — Recorded video नाही, Live sessions आणि raw अनुभवातून शिकवणारा एक Meta Ads course.
          </p>
        </div>
      </section>

      {/* Trainer Card */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12" style={{
            background: '#1e1b4b',
            boxShadow: '0 20px 60px rgba(30,27,75,0.4)'
          }}>
            <div style={{
              position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px',
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(23,36,90,0.15) 0%, transparent 70%)', pointerEvents: 'none'
            }}></div>
            <div style={{
              position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px',
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(106,127,199,0.2) 0%, transparent 70%)', pointerEvents: 'none'
            }}></div>

            <div className="grid md:grid-cols-5 gap-10 items-center relative z-10">
              {/* Photo */}
              <div className="md:col-span-2 relative">
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10" style={{
                    border: '4px solid #edebde',
                    background: '#ffffff'
                  }}>
                    <img
                      src="https://raw.githubusercontent.com/dhirajd8/panther-flow/main/frontend/public/favicon photo.png"
                      alt="Dhiraj - Panther Flow Founder"
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <div className="absolute -bottom-6 -right-6 rounded-2xl p-3 sm:p-6 shadow-2xl z-20" style={{
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.95) 0%, rgba(124,58,237,0.95) 100%)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div className="text-xl sm:text-3xl font-bold text-white">45+</div>
                    <div className="text-xs text-white/90">Happy Students</div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 rounded-2xl p-3 sm:p-6 shadow-2xl z-20" style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div className="text-xl sm:text-3xl font-bold text-white">₹4.5L+</div>
                    <div className="text-xs text-white/90">Ad Spend Managed</div>
                  </div>

                  <div className="absolute -top-4 -left-4 rounded-full px-5 py-2 shadow-2xl z-20" style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(79,70,229,0.95) 100%)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4" style={{ color: '#ffffff' }} />
                      <span className="text-sm font-bold" style={{ color: '#ffffff' }}>Meta Ads Strategist</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 space-y-5">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ background: '#ffffff' }}>
                    <Award className="w-4 h-4" style={{ color: '#7C3AED' }} />
                    <span style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Meet Your Instructor</span>
                  </span>
                  <h2 className="font-bold mb-2" style={{ fontSize: '24px', color: '#ffffff' }}>
                    धिरज दयानंद
                  </h2>
                  <p className="inline-block text-lg font-medium px-3 py-1 rounded-lg" style={{ background: '#ffffff' }}>
                    <strong style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Panther Flow AI Labs · Facebook Ads Strategist</strong>
                  </p>
                </div>

                <div className="space-y-4" style={{ color: '#ffffff' }}>
                  <p className="text-base leading-relaxed">
                    Internet वर हजारो Marketing courses उपलब्ध आहेत, पण <strong style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>आपल्या भाषेत आणि आपल्या लोकांसाठी समजेल आणि affordable</strong> असा course मिळणं कठीण आहे. हीच गोष्ट मनात ठेवून Panther Flow सुरू केलं, जिथे प्रत्येक concept मराठीमध्ये सोप्या पद्धतीने समजावून सांगण्याचा प्रयत्न असतो. <strong style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>मराठी मातीतला, धाराशिव मधून आलेला एक २२ वर्षांचा तरुण</strong>, जो Performance Marketing क्षेत्रात स्वतःचं छोटंसं स्थान निर्माण करत आहे आणि हेच knowledge आपल्या मराठी बांधवांपर्यंत सोप्या भाषेत पोहोचवण्याचा प्रयत्न करतोय. आणि हा एक recorded course नाही, तर हे <strong style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>live शिकवलं जातं</strong>.
                  </p>
                  <p className="text-base leading-relaxed">
                    Client च्या कामातून जे practical learnings मिळाल्या, जे छोटे छोटे अनुभव आले, तेच सगळं या course मध्ये मांडलं आहे. त्यामुळे इथे फक्त theory नाही, तर खऱ्या कामातून आलेले <strong style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>raw अनुभव</strong> मिळतील, मग ते चांगले असोत किंवा mistakes असोत.
                  </p>
                </div>

                {/* Quote */}
                <div className="relative pl-6 py-4 rounded-2xl" style={{ background: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <p className="italic text-lg leading-relaxed" style={{ fontFamily: 'Aparajita, serif', color: '#1e1b4b', fontWeight: 400 }}>
                    पुणे-मुंबईच्या Digital Marketing Institutes ची Fees प्रत्येकाला Affordable नाहीये.
                    लवकर Job पाहिजे म्हणून बघून Admission ही घेतात, पण Course संपून गेला तरी Skills येत नाहीत, Confidence येत नाही.
                    आणि हाच Problem आम्ही Solve करतोय.
                    Affordable Price मध्ये, Practical Marathi मध्ये शिकवणारा Meta Ads + AI Complete Course. 🚀
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                    <div className="text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>100%</div>
                    <div className="text-xs mt-1" style={{ color: '#1e1b4b' }}>मराठी</div>
                  </div>
                  <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                    <div className="text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>Live</div>
                    <div className="text-xs mt-1" style={{ color: '#1e1b4b' }}>Sessions</div>
                  </div>
                  <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                    <div className="text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>Real</div>
                    <div className="text-xs mt-1" style={{ color: '#1e1b4b' }}>Campaigns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Panther Flow */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #13103a 60%, #1a1040 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#ffffff' }}>
            आम्ही <span style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>वेगळे</span> का आहोत?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: '#1a1a2e', border: '1.5px solid rgba(123,94,167,0.25)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}>
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Affordable Pricing</h3>
              <p className="text-sm" style={{ color: '#a0a0b8', lineHeight: 1.5 }}>पुणे-मुंबईच्या institutes च्या तुलनेत खूपच कमी किमतीत तितकंच दर्जेदार training.</p>
            </div>
            <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: '#1a1a2e', border: '1.5px solid rgba(123,94,167,0.25)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">100% Practical</h3>
              <p className="text-sm" style={{ color: '#a0a0b8', lineHeight: 1.5 }}>Slides नाही, फक्त theory नाही — real ad accounts, real budgets, real results.</p>
            </div>
            <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: '#1a1a2e', border: '1.5px solid rgba(123,94,167,0.25)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #4F46E5, #EC4899)' }}>
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Live Doubt-Solving</h3>
              <p className="text-sm" style={{ color: '#a0a0b8', lineHeight: 1.5 }}>रेकॉर्डिंग बघून अडकून राहायचं नाही — रोज live session मध्ये प्रश्न लगेच सुटतात.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: '#ffffff' }}>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-6 rounded-3xl p-8 sm:p-12" style={{
            background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1040 50%, #13103a 100%)',
            border: '1.5px solid rgba(139,92,246,0.35)',
            boxShadow: '0 25px 60px rgba(79,70,229,0.35)'
          }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold" style={{ background: 'rgba(79,70,229,0.15)', border: '1px solid rgba(139,92,246,0.4)' }}>
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-white">New Batch Starting on 20th July</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#ffffff' }}>
              Panther Flow सोबत Meta Ads शिकायला तयार आहात?
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              <Users className="w-4 h-4" style={{ color: '#818cf8' }} />
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>45+ Students already trained</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => navigate('/checkout')}
                className="text-white text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)' }}
              >
                Join Now →
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: '#818cf8' }} />
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>100% Secure Payment</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;