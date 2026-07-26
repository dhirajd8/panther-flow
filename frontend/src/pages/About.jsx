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
      <section className="pt-24 sm:pt-28 pb-10 px-4 relative overflow-hidden text-center" style={{ background: 'linear-gradient(135deg, #000000 0%, #0d0d0d 60%, #000000 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,90,9,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,90,9,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl mt-4 uppercase" style={{ color: '#ffffff', fontFamily: 'Helvetica', fontWeight: 900, WebkitTextStroke: '1px #ffffff' }}>
            About
          </h1>
        </div>
      </section>



      {/* Trainer Card */}
      <section className="pt-16 sm:pt-20 px-4 pb-20" style={{ background: '#ffffff' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-12" style={{
            background: '#000000',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
          }}>
            <div style={{
              position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px',
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 70%)', pointerEvents: 'none'
            }}></div>
            <div style={{
              position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px',
              borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,90,9,0.2) 0%, transparent 70%)', pointerEvents: 'none'
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
                    background: 'linear-gradient(135deg, rgba(255,90,9,0.95) 0%, rgba(255,90,9,0.95) 100%)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div className="text-xl sm:text-3xl font-bold text-white">45+</div>
                    <div className="text-xs text-white/90">Happy Students</div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 rounded-2xl p-3 sm:p-6 shadow-2xl z-20" style={{
                    background: 'linear-gradient(135deg, rgba(255,90,9,0.95) 0%, rgba(255,90,9,0.95) 100%)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div className="text-xl sm:text-3xl font-bold text-white">₹4.5L+</div>
                    <div className="text-xs text-white/90">Ad Spend Managed</div>
                  </div>

                  <div className="absolute -top-4 -left-4 rounded-full px-5 py-2 shadow-2xl z-20" style={{
                    background: 'linear-gradient(135deg, rgba(255,90,9,0.95) 0%, rgba(255,90,9,0.95) 100%)',
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
                    <Award className="w-4 h-4" style={{ color: '#FF5A09' }} />
                    <span style={{
                      background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 50%, #FF5A09 100%)',
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
                      background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 50%, #FF5A09 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>Panther Flow AI Labs · Facebook Ads Strategist</strong>
                  </p>
                </div>

                <div className="space-y-4" style={{ color: '#ffffff' }}>
                  <p className="text-base leading-relaxed">
                    Internet वर मार्केटिंग शिकवणारे भरपूर courses आहेत, पण <strong style={{
                      background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 50%, #FF5A09 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>मराठीत, सोप्या भाषेत आणि परवडणाऱ्या किमतीत</strong> शिकवणारा course सापडणं अवघड आहे. हीच गरज लक्षात घेऊन Panther Flow सुरू केलं — जिथे प्रत्येक concept मराठीत, उदाहरणांसह समजावून सांगितलं जातं. मी धाराशिवचा असून गेली काही वर्षं Performance Marketing मध्ये काम करतोय, आणि हे सगळं ज्ञान थेट, <strong style={{
                      background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 50%, #FF5A09 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>live सेशन्सच्या माध्यमातून शिकवतो</strong> — recorded videos नाही.
                  </p>
                  <p className="text-base leading-relaxed">
                    पुणे-मुंबईच्या Digital Marketing Institutes ची fees सगळ्यांना परवडणारी नसते. लवकर job हवी म्हणून admission घेतली जाते, पण course संपल्यावरही skills आणि confidence तयार होत नाही. हाच problem सोडवण्यासाठी Panther Flow आहे — <strong style={{
                      background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 50%, #FF5A09 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>affordable किमतीत, practical पद्धतीने, मराठीत</strong> शिकवणारा Meta Ads course.
                  </p>
                </div>


                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                    <div className="text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 50%, #FF5A09 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>100%</div>
                    <div className="text-xs mt-1" style={{ color: '#000000' }}>मराठी</div>
                  </div>
                  <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                    <div className="text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 50%, #FF5A09 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>Live</div>
                    <div className="text-xs mt-1" style={{ color: '#000000' }}>Sessions</div>
                  </div>
                  <div className="text-center p-4 rounded-xl shadow-md" style={{ background: '#ffffff' }}>
                    <div className="text-2xl font-bold" style={{
                      background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 50%, #FF5A09 100%)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                    }}>Real</div>
                    <div className="text-xs mt-1" style={{ color: '#000000' }}>Campaigns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Panther Flow */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0d0d0d 60%, #000000 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,90,9,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,90,9,0.15) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#ffffff' }}>
            <span style={{ background: 'linear-gradient(135deg, #FF5A09 0%, #FF5A09 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Top</span> Reasons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: '#1a1a2e', border: '1.5px solid rgba(255,90,9,0.4)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}>
                <span className="text-2xl font-bold text-white">₹</span>
              </div>
              <h3 className="text-lg font-bold text-white">Affordable Pricing</h3>
              <p className="text-sm" style={{ color: '#a0a0b8', lineHeight: 1.5 }}>पुणे-मुंबईच्या institutes च्या तुलनेत खूपच कमी किमतीत तितकंच दर्जेदार training.</p>
            </div>
            <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: '#1a1a2e', border: '1.5px solid rgba(255,90,9,0.4)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">100% Practical</h3>
              <p className="text-sm" style={{ color: '#a0a0b8', lineHeight: 1.5 }}>Slides नाही, फक्त theory नाही — real ad accounts, real budgets, real results.</p>
            </div>
            <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: '#1a1a2e', border: '1.5px solid rgba(255,90,9,0.4)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}>
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
            background: 'linear-gradient(135deg, #000000 0%, #000000 50%, #0d0d0d 100%)',
            border: '1.5px solid rgba(255,90,9,0.35)',
            boxShadow: '0 25px 60px rgba(255,90,9,0.35)'
          }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold" style={{ background: 'rgba(255,90,9,0.15)', border: '1px solid rgba(255,90,9,0.4)' }}>
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-white">New Batch Starting on 20th July</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#ffffff' }}>
              Panther Flow सोबत Meta Ads शिकायला तयार आहात?
            </h2>
            <div className="flex items-center justify-center gap-2 pt-2">
              <Users className="w-4 h-4" style={{ color: '#FF5A09' }} />
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>45+ Students already trained</span>
            </div>
            <div className="pt-2">
              <button
                onClick={() => navigate('/checkout')}
                className="text-white text-lg px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #FF5A09, #FF5A09)' }}
              >
                Join Now →
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
              <CheckCircle2 className="w-4 h-4" style={{ color: '#FF5A09' }} />
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