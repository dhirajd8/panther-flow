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
      background: 'linear-gradient(135deg, #17245a 0%, #ffffff 100%)',
      position: 'relative'
    }}>
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
        opacity: 0.15,
        pointerEvents: 'none',
        zIndex: 0
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo Column */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm border-2 border-white/30 shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                  <img 
                    src="https://customer-assets.emergentagent.com/job_panther-training/artifacts/35ddx3vg_dhiraj%20photo%20%284%29.png" 
                    alt="Dhiraj - Panther Flow Founder" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating Stats Badge */}
                <div className="absolute -bottom-6 -right-6 backdrop-blur-md rounded-2xl p-6 border-2 border-white/40 shadow-2xl" style={{ background: 'rgba(23, 36, 90, 0.9)' }}>
                  <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>45+</div>
                  <div className="text-sm text-white/80" style={{ fontFamily: 'Google Sans, sans-serif' }}>Students Trained</div>
                </div>
                {/* Floating Top Badge */}
                <div className="absolute -top-4 -left-4 backdrop-blur-md rounded-full px-5 py-2 border-2 border-white/40 shadow-xl" style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" style={{ color: '#17245a' }} />
                    <span className="text-sm font-semibold" style={{ color: '#17245a', fontFamily: 'Google Sans, sans-serif' }}>Meta Ads Expert</span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30 mb-4" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                    तुमचा Trainer
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Dhiraj
                  </h2>
                  <p className="text-lg text-white/80" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                    Founder · Panther Flow · Meta Ads Trainer
                  </p>
                </div>

                <div className="space-y-4 text-white/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  <p className="text-base leading-relaxed">
                    नमस्कार! मी <strong className="text-white">धीरज</strong> — Panther Flow चा Founder. मी देखील तुमच्यासारखाच एक <strong className="text-white">मराठी तरुण</strong> आहे, ज्याने Meta Ads च्या जगात स्वतःचं स्थान निर्माण केलं.
                  </p>
                  <p className="text-base leading-relaxed">
                    मला माहित आहे की English मध्ये उपलब्ध असलेले Digital Marketing courses समजायला किती कठीण असतात. म्हणूनच मी <strong className="text-white">100% मराठी भाषेत</strong> Meta Ads training सुरू केलं — जेणेकरून प्रत्येक मराठी माणसाला त्याच्या मातृभाषेत हे skill शिकता येईल.
                  </p>
                  <p className="text-base leading-relaxed">
                    हे फक्त theoretical knowledge नाही — मी स्वतः <strong className="text-white">live campaigns चालवतो</strong>, real businesses साठी ads optimize करतो, आणि तेच practical experience तुमच्यासमोर ठेवतो. कोर्स मध्ये तुम्ही स्वतःचा पहिला Ad live करण्यापर्यंत पोहोचाल!
                  </p>
                </div>

                {/* Quote */}
                <div className="relative pl-6 py-4 border-l-4 border-white/40">
                  <Quote className="absolute -top-2 -left-3 w-6 h-6 text-white/60" />
                  <p className="italic text-white text-lg leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
                    "English Marketing language ला सोप्या मराठीत आणून प्रत्येक मराठी माणसाला Meta Ads expert बनवणे — हेच Panther Flow चं मिशन आहे."
                  </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 rounded-xl backdrop-blur-sm border border-white/20" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>100%</div>
                    <div className="text-xs text-white/70 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>मराठी Teaching</div>
                  </div>
                  <div className="text-center p-4 rounded-xl backdrop-blur-sm border border-white/20" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>Live</div>
                    <div className="text-xs text-white/70 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Training</div>
                  </div>
                  <div className="text-center p-4 rounded-xl backdrop-blur-sm border border-white/20" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Times New Roman, serif' }}>Real</div>
                    <div className="text-xs text-white/70 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Campaigns</div>
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
