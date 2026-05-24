import React, { useState } from 'react';
import { courseData, processMockPayment } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { toast } from 'sonner';
import {
  Target,
  Rocket,
  Infinity,
  DollarSign,
  Laptop,
  Wifi,
  BookOpen,
  Store,
  Briefcase,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  Play,
  Users,
  Award,
  Clock,
  Video,
  Activity,
  Sparkles,
  Quote
} from 'lucide-react';

const iconMap = {
  Target,
  Rocket,
  Infinity,
  DollarSign,
  Laptop,
  Wifi,
  BookOpen,
  Store,
  Briefcase,
  GraduationCap,
  TrendingUp
};

const Home = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleEnrollClick = async () => {
    setIsProcessing(true);
    try {
      const result = await processMockPayment();
      if (result.success) {
        toast.success(result.message);
      }
    } catch (error) {
      toast.error('काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #0a1442 0%, #17245a 25%, #2a3f8a 50%, #6b7fc7 75%, #e8edf7 100%)',
      position: 'relative'
    }}>
      {/* Radial gradient overlays for premium AI-site feel */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 20%, rgba(106, 127, 199, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 90%, rgba(23, 36, 90, 0.5) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://customer-assets.emergentagent.com/job_panther-training/artifacts/jsyr9xb6_ChatGPT%20Image%20May%2023%2C%202026%2C%2012_08_42%20AM.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.08,
        pointerEvents: 'none',
        zIndex: 0,
        mixBlendMode: 'overlay'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/20 shadow-lg" style={{
          background: 'linear-gradient(135deg, rgba(23, 36, 90, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)'
        }}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_e8b2affb-4278-4b53-85ab-a14c53337943/artifacts/v8618thc_ChatGPT%20Image%20May%2020%2C%202026%2C%2003_54_16%20PM.png" 
                alt="Panther Flow Logo" 
                className="h-16 w-auto opacity-90"
                style={{ mixBlendMode: 'normal', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              />
            </div>
            <Button 
              onClick={handleEnrollClick}
              className="bg-white/90 text-[#17245a] hover:bg-white font-semibold px-8 transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Google Sans, sans-serif' }}
            >
              Join Now
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                  <Video className="w-4 h-4" />
                  Beginner Meta Ads Practical Live Training
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                  <Play className="w-4 h-4" />
                  No Recorded - Live Course
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Times New Roman, serif' }}>
                Most affordable & practical<br />Course in Marathi
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button 
                  onClick={handleEnrollClick}
                  disabled={isProcessing}
                  size="lg"
                  className="bg-white text-[#17245a] hover:bg-white/90 text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: 'Google Sans, sans-serif' }}
                >
                  {isProcessing ? 'Processing...' : `Join Now - फक्त ${courseData.currency}${courseData.price}`}
                </Button>
                <div className="flex items-center gap-2 text-white/90">
                  <Users className="w-5 h-5" />
                  <span className="text-sm" style={{ fontFamily: 'Google Sans, sans-serif' }}>45+ विद्यार्थी आधीच शिकत आहेत</span>
                </div>
              </div>
              <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span style={{ fontFamily: 'Google Sans, sans-serif' }}>Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  <span style={{ fontFamily: 'Google Sans, sans-serif' }}>Video Tutorials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span style={{ fontFamily: 'Google Sans, sans-serif' }}>Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Times New Roman, serif', color: '#17245a' }}>
                Why Panther Flow
              </h2>
              <p className="text-xl" style={{ fontFamily: 'Google Sans, sans-serif', color: '#17245a' }}>
                कोर्स मध्ये बाकी लोकांपेक्षा नक्की वेगळं काय आहे
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseData.benefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon];
                return (
                  <Card 
                    key={benefit.id}
                    className="border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                    style={{ background: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: '#17245a' }}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold" style={{ fontFamily: 'Times New Roman, serif', color: '#17245a' }}>
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed" style={{ fontFamily: 'Google Sans, sans-serif', color: '#17245a' }}>
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trainer Section */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            {/* Section Backdrop with premium gradient */}
            <div className="relative rounded-3xl overflow-hidden p-8 md:p-12" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(230, 237, 250, 0.9) 50%, rgba(180, 195, 230, 0.85) 100%)',
              boxShadow: '0 25px 80px -20px rgba(23, 36, 90, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.6)'
            }}>
              {/* Decorative gradient orbs */}
              <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(23, 36, 90, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-150px',
                left: '-150px',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(106, 127, 199, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none'
              }}></div>

              <div className="grid md:grid-cols-5 gap-10 items-center relative z-10">
                {/* Photo Column - 2/5 width */}
                <div className="md:col-span-2 relative">
                  <div className="relative">
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-3xl" style={{
                      background: 'linear-gradient(135deg, #17245a 0%, #6b7fc7 50%, #ffffff 100%)',
                      transform: 'scale(1.05)',
                      filter: 'blur(20px)',
                      opacity: 0.5,
                      zIndex: 0
                    }}></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10" style={{
                      border: '4px solid white',
                      background: 'linear-gradient(135deg, #17245a 0%, #2a3f8a 100%)'
                    }}>
                      <img 
                        src="https://customer-assets.emergentagent.com/job_panther-training/artifacts/35ddx3vg_dhiraj%20photo%20%284%29.png" 
                        alt="Dhiraj - Panther Flow Founder" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {/* Floating Stats Badge */}
                    <div className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-2xl z-20" style={{
                      background: 'linear-gradient(135deg, #17245a 0%, #2a3f8a 100%)',
                      border: '3px solid white'
                    }}>
                      <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>45+</div>
                      <div className="text-xs text-white/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>Happy Students</div>
                    </div>
                    {/* Floating Top Badge */}
                    <div className="absolute -top-4 -left-4 rounded-full px-5 py-2 shadow-xl z-20" style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #e8edf7 100%)',
                      border: '2px solid #17245a'
                    }}>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" style={{ color: '#17245a' }} />
                        <span className="text-sm font-bold" style={{ color: '#17245a', fontFamily: 'Google Sans, sans-serif' }}>Meta Ads Expert</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column - 3/5 width */}
                <div className="md:col-span-3 space-y-5">
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{
                      background: 'linear-gradient(135deg, #17245a 0%, #2a3f8a 100%)',
                      color: 'white',
                      fontFamily: 'Google Sans, sans-serif'
                    }}>
                      <Award className="w-4 h-4" />
                      Meet Your Trainer
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold mb-2" style={{ 
                      fontFamily: 'Times New Roman, serif',
                      background: 'linear-gradient(135deg, #0a1442 0%, #17245a 50%, #2a3f8a 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      Dhiraj
                    </h2>
                    <p className="text-lg font-medium" style={{ fontFamily: 'Google Sans, sans-serif', color: '#17245a' }}>
                      Founder · Panther Flow · Meta Ads Strategist
                    </p>
                  </div>

                  <div className="space-y-4" style={{ fontFamily: 'Google Sans, sans-serif', color: '#1a2d6e' }}>
                    <p className="text-base leading-relaxed">
                      मराठी मातीतला एक तरुण, ज्याने Meta Ads च्या जगात स्वतःचं स्थान निर्माण केलं — आणि आता तेच knowledge <strong style={{ color: '#0a1442' }}>आपल्या मराठी बांधवांपर्यंत</strong> सोप्या भाषेत पोहोचवायचं ठरवलं आहे.
                    </p>
                    <p className="text-base leading-relaxed">
                      Internet वर हजारो Marketing courses उपलब्ध आहेत — पण <strong style={{ color: '#0a1442' }}>आपल्या भाषेत आणि आपल्या लोकांसाठी</strong> समजेल असा course मिळत नाही. हीच गोष्ट लक्षात घेऊन मी Panther Flow सुरू केलं — जिथे प्रत्येक concept मराठी मध्ये clear होतो आणि result तुमच्या business मध्ये दिसतो.
                    </p>
                    <p className="text-base leading-relaxed">
                      माझ्याकडे Marketing चं फक्त पुस्तकी ज्ञान नाही — मी <strong style={{ color: '#0a1442' }}>स्वतः campaigns चालवतो, स्वतःचे पैसे invest करतो</strong>, आणि त्यातून जे मिळवलं ते सर्व तुमच्यासमोर ठेवतो. कोर्स पूर्ण झाल्यावर तुम्ही फक्त "शिकलेले" नसाल, तर खऱ्या अर्थाने <strong style={{ color: '#0a1442' }}>Meta Ads run करायला तयार</strong> असाल!
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative pl-6 py-4 rounded-r-xl" style={{
                    background: 'linear-gradient(90deg, rgba(23, 36, 90, 0.08) 0%, transparent 100%)',
                    borderLeft: '4px solid #17245a'
                  }}>
                    <Quote className="absolute -top-2 -left-3 w-7 h-7" style={{ color: '#17245a' }} />
                    <p className="italic text-lg leading-relaxed font-semibold" style={{ 
                      fontFamily: 'Times New Roman, serif',
                      color: '#0a1442'
                    }}>
                      "मराठी माणसाने मराठीतच शिकावं, मराठीतच earn करावं — हीच Panther Flow ची मूळ कल्पना!"
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="text-center p-4 rounded-xl shadow-md" style={{
                      background: 'linear-gradient(135deg, #17245a 0%, #2a3f8a 100%)'
                    }}>
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>100%</div>
                      <div className="text-xs text-white/90 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>मराठीतून शिकवणी</div>
                    </div>
                    <div className="text-center p-4 rounded-xl shadow-md" style={{
                      background: 'linear-gradient(135deg, #2a3f8a 0%, #6b7fc7 100%)'
                    }}>
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>Live</div>
                      <div className="text-xs text-white/90 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Sessions</div>
                    </div>
                    <div className="text-center p-4 rounded-xl shadow-md" style={{
                      background: 'linear-gradient(135deg, #6b7fc7 0%, #17245a 100%)'
                    }}>
                      <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>Real</div>
                      <div className="text-xs text-white/90 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Campaigns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements & Target Audience Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
                हा कोर्स कोणासाठी आहे?
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                {courseData.requirements.map((req) => {
                  const Icon = iconMap[req.icon];
                  return (
                    <span 
                      key={req.id}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30"
                      style={{ fontFamily: 'Google Sans, sans-serif' }}
                    >
                      <Icon className="w-4 h-4" />
                      {req.title}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {courseData.targetAudience.map((audience) => {
                const Icon = iconMap[audience.icon];
                return (
                  <Card 
                    key={audience.id}
                    className="border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                    style={{ background: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0" style={{ background: '#17245a' }}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Times New Roman, serif', color: '#17245a' }}>
                          {audience.title}
                        </CardTitle>
                        <p className="text-base mt-2" style={{ fontFamily: 'Google Sans, sans-serif', color: '#17245a' }}>
                          {audience.description}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Course Content Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3" style={{ fontFamily: 'Times New Roman, serif', color: '#17245a' }}>
                <Activity className="w-10 h-10" />
                Course Anatomy
              </h2>
              <p className="text-xl" style={{ fontFamily: 'Google Sans, sans-serif', color: '#17245a' }}>
                संपूर्ण Meta Ads Training - Basic ते Advanced
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {courseData.courseContent.map((module) => (
                <Card 
                  key={module.id}
                  className="border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                  style={{ background: 'rgba(255, 255, 255, 0.7)' }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-white text-sm font-semibold rounded-full" style={{ background: '#17245a', fontFamily: 'Google Sans, sans-serif' }}>
                        {module.module}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Times New Roman, serif', color: '#17245a' }}>
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3" style={{ fontFamily: 'Google Sans, sans-serif', color: '#17245a' }}>
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#17245a' }} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                FAQ's
              </h2>
              <p className="text-xl text-white/80" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                तुमच्या मनातील शंका दूर करूया
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {courseData.faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={`item-${faq.id}`}
                  className="backdrop-blur-sm border-2 border-white/30 rounded-lg px-6 hover:border-white/50 transition-colors duration-300"
                  style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-white/80 py-6" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/90 pb-6 text-base leading-relaxed" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="space-y-6 backdrop-blur-sm rounded-3xl p-12 border border-white/30" style={{ background: 'rgba(255, 255, 255, 0.3)' }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Times New Roman, serif', color: '#17245a' }}>
                Take the First Step
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Google Sans, sans-serif', color: '#17245a' }}>
                फक्त ₹1,199 मध्ये संपूर्ण कोर्स + Lifetime Access
              </p>
              <div className="pt-6">
                <Button 
                  onClick={handleEnrollClick}
                  disabled={isProcessing}
                  size="lg"
                  className="text-white hover:opacity-90 text-xl px-12 py-8 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                  style={{ background: '#17245a', fontFamily: 'Google Sans, sans-serif' }}
                >
                  {isProcessing ? 'Processing...' : `Join Now - ${courseData.currency}${courseData.price}`}
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 pt-4 text-sm" style={{ color: '#17245a' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span style={{ fontFamily: 'Google Sans, sans-serif' }}>100% Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  <span style={{ fontFamily: 'Google Sans, sans-serif' }}>Live Course</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-white py-12 px-4 border-t border-white/20" style={{
          background: 'linear-gradient(135deg, rgba(23, 36, 90, 0.95) 0%, rgba(255, 255, 255, 0.1) 100%)'
        }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4">
              <div>
                <p className="font-semibold mb-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Contact Email</p>
                <a href="mailto:contactpantherflow@gmail.com" className="text-white/80 hover:text-white" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  contactpantherflow@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Address</p>
                <p className="text-white/80" style={{ fontFamily: 'Google Sans, sans-serif' }}>Dharashiv धाराशिव</p>
              </div>
              <div className="pt-6 border-t border-white/20">
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  © 2026 Panther Flow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
