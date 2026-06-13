import React from 'react';
import { courseData } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
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
  Quote,
  Calendar
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
  const handleEnrollClick = () => {
    window.open('https://rzp.io/rzp/pantherflow', '_blank', 'noopener,noreferrer');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.link/kzhidt', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen" style={{ 
background: 'linear-gradient(135deg, #1a0000 0%, #3d0000 20%, #610000 40%, #810100 60%, #a83232 80%, #f5eeee 100%)',
      position: 'relative'
    }}>
      {/* Radial gradient overlays for premium AI-site feel */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
background: 'radial-gradient(circle at 15% 15%, rgba(129, 1, 0, 0.5) 0%, transparent 45%), radial-gradient(circle at 85% 25%, rgba(129, 1, 0, 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(237, 235, 222, 0.35) 0%, transparent 50%), radial-gradient(circle at 25% 85%, rgba(26, 0, 0, 0.6) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(129, 1, 0, 0.15) 0%, transparent 70%)',        pointerEvents: 'none',
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
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: 0,
        mixBlendMode: 'overlay'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Announcement Bar */}
        <div className="fixed top-0 left-0 right-0 z-[60] py-2 px-3 text-center shadow-lg" style={{
          background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #ffffff 100%)',
          backgroundSize: '200% 100%',
          animation: 'gradient-shift 4s ease infinite',
          fontFamily: 'Google Sans, sans-serif'
        }} data-testid="announcement-bar">
          <div className="flex items-center justify-center gap-2 text-[#810100] text-xs sm:text-sm font-semibold flex-wrap">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-#edebde"></span>
            </span>
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">🔥 New Batch Starting on <strong>20th June</strong> · Limited Seats Available!</span>
            <span className="sm:hidden">🔥 New Batch · <strong> 20th June</strong> · Limited Seats!</span>
            <button 
              onClick={handleEnrollClick}
              className="underline hover:no-underline font-bold text-[#810100] whitespace-nowrap"
              data-testid="announcement-cta"
            >
              Join Now →
            </button>
          </div>
        </div>

        {/* Header - Floating Pill Menu */}
        <header className="fixed top-14 sm:top-12 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-auto max-w-[calc(100%-1rem)]">
          <nav className="backdrop-blur-xl rounded-full shadow-2xl border border-[#810100]/30 px-2 sm:px-3 py-1.5 sm:py-2" style={{
            background: 'linear-gradient(135deg, rgba(129, 1, 0, 0.85) 0%, rgba(90, 0, 0, 0.85) 100%)',
            boxShadow: '0 10px 40px rgba(129, 1, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}>
            <div className="flex items-center gap-1 sm:gap-2 justify-center">
              <span 
                className="hidden md:inline-block text-[#edebde] font-bold px-3 lg:px-4 py-2 text-base tracking-wide"
                style={{ fontFamily: 'Times New Roman, serif' }}
                data-testid="menu-brand"
              >
                Panther Flow
              </span>
              <div className="hidden md:block w-px h-6 bg-#edebde/30"></div>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[#edebde] hover:bg-[#edebde]/10 font-medium px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-sm sm:text-base"
                style={{ fontFamily: 'Google Sans, sans-serif' }}
                data-testid="menu-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('course')}
                className="text-#edebde hover:bg-#edebde/10 font-medium px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-sm sm:text-base"
                style={{ fontFamily: 'Google Sans, sans-serif' }}
                data-testid="menu-course"
              >
                Course
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-#edebde hover:bg-#edebde/10 font-medium px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-sm sm:text-base"
                style={{ fontFamily: 'Google Sans, sans-serif' }}
                data-testid="menu-faq"
              >
                FAQ
              </button>
              <Button 
                onClick={handleEnrollClick}
                className="bg-#edebde text-[#810100] hover:bg-#edebde/90 font-semibold px-3 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 cta-wave cta-grid-pattern text-sm sm:text-base h-auto #edebdespace-nowrap"
                style={{ fontFamily: 'Google Sans, sans-serif' }}
                data-testid="header-join-now"
              >
                Join Now
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-44 sm:pt-40 pb-20 px-4 relative overflow-hidden">
          {/* Grid background pattern */}
          <div className="absolute inset-0 grid-bg pointer-events-none"></div>
          
          {/* Premium ambient gradient orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full animate-pulse-glow pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(106, 127, 199, 0.5) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full animate-pulse-glow pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, transparent 70%)',
            animationDelay: '2s',
            filter: 'blur(40px)'
          }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full animate-pulse-glow pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            animationDelay: '1s',
            filter: 'blur(60px)'
          }}></div>

          {/* Floating decorative icons */}
          <div className="absolute top-32 left-16 opacity-60 animate-float pointer-events-none">
            <Target className="w-20 h-20 text-#edebde" />
          </div>
          <div className="absolute top-48 right-20 opacity-60 animate-float-slow pointer-events-none">
            <Rocket className="w-16 h-16 text-#edebde" />
          </div>
          <div className="absolute bottom-32 left-24 opacity-60 animate-float-reverse pointer-events-none">
            <Sparkles className="w-14 h-14 text-#edebde" />
          </div>
          <div className="absolute bottom-40 right-32 opacity-60 animate-float pointer-events-none">
            <Award className="w-16 h-16 text-#edebde" />
          </div>
          <div className="absolute top-1/2 left-8 opacity-60 animate-float-slow pointer-events-none">
            <Video className="w-12 h-12 text-#edebde" />
          </div>
          <div className="absolute top-1/3 right-8 opacity-60 animate-float-reverse pointer-events-none">
            <Activity className="w-12 h-12 text-#edebde" />
          </div>

          {/* Decorative gradient lines */}
          <div className="absolute top-1/4 left-0 w-32 h-px opacity-30 pointer-events-none" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
          }}></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-px opacity-30 pointer-events-none" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
          }}></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              {/* New Batch Urgency Banner */}
              <button
                onClick={handleEnrollClick}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-2xl mb-2 transition-all duration-300 hover:scale-105 active:scale-95 click-ripple"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
                  fontFamily: 'Google Sans, sans-serif'
                }} 
                data-testid="urgency-banner"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-#edebde"></span>
                  </span>
                  <Calendar className="w-4 h-4 text-[#810100]" />
                </span>
                <span className="text-sm font-bold text-[#810100] tracking-wide">
                  🔥 New Batch Starting on 20th June
                </span>
              </button>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white text-[#810100] rounded-full text-xs sm:text-sm font-medium border border-[#810100]/30">
                  <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Beginner Meta Ads Practical Live Training
                </span>
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white text-[#810100] rounded-full text-xs sm:text-sm font-medium border border-[#810100]/30">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  No Recorded - Live Course
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-#edebde" style={{ 
                fontFamily: "'Poppins', 'Noto Sans Devanagari', 'Mangal', sans-serif",
                fontWeight: 800,
color: '#edebde',
                lineHeight: '1.4',
textShadow: '0 4px 20px rgba(129, 1, 0, 0.5), 0 0 60px rgba(129, 1, 0, 0.2)'              }}>
                Zero ते Expert<br />Meta Ads चा संपूर्ण<br />Course, मराठीत!
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button 
                  onClick={handleEnrollClick}
                  size="lg"
                  className="text-[#810100] hover:bg-#edebde/90 text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cta-wave cta-glow cta-grid-pattern"
                  style={{ fontFamily: 'Google Sans, sans-serif' }}
                  data-testid="hero-join-now"
                >
                  {`Join Now - फक्त ${courseData.currency}${courseData.price}`}
                </Button>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2 text-[#edebde]/90">
                    <Users className="w-5 h-5" />
                    <span className="text-sm" style={{ fontFamily: 'Google Sans, sans-serif' }}>45+ विद्यार्थी आधीच शिकत आहेत</span>
                  </div>
                  <div className="flex items-center gap-2 gap-2 text-[#edebde]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold" style={{ fontFamily: 'Google Sans, sans-serif' }}>Limited Seats · 20th June Batch</span>
                  </div>
                </div>
              </div>
              <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-[#edebde]/80">
                <div className="flex items-center gap-2 text-[#edebde]">
                  <Clock className="w-4 h-4 text-[#edebde]" />
                  <span style={{ fontFamily: 'Google Sans, sans-serif' }}>Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2 text-[#edebde]">
                  <Play className="w-4 h-4 text-[#edebde]" />
                  <span style={{ fontFamily: 'Google Sans, sans-serif' }}>Video Tutorials</span>
                </div>
                <div className="flex items-center gap-2 text-[#edebde]">
                  <Award className="w-4 h-4 text-[#edebde]" />
                  <span style={{ fontFamily: 'Google Sans, sans-serif' }}>Certificate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-bg pointer-events-none"></div>
          
          {/* Floating icons */}
          <div className="absolute top-20 right-12 opacity-20 animate-float pointer-events-none">
            <DollarSign className="w-14 h-14 text-#edebde" />
          </div>
          <div className="absolute bottom-20 left-12 opacity-20 animate-float-slow pointer-events-none">
            <Sparkles className="w-12 h-12 text-#edebde" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Times New Roman, serif', color: '#edebde' }}>
                Why Panther Flow
              </h2>
              <p className="text-xl" style={{ fontFamily: 'Google Sans, sans-serif', color: '#edebde' }}>
                या Course मध्ये इतर Courses पेक्षा नक्की वेगळं काय आहे
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseData.benefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon];
                return (
                  <Card 
                    key={benefit.id}
                    className="border-2 border-#edebde/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group card-grid-pattern relative overflow-hidden"
                    style={{ backgroundColor: 'rgba(237, 235, 222, 0.15)' }}
                  >
                    <CardHeader className="relative z-10">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: '#810100' }}>
                        <Icon className="w-6 h-6 text-#edebde" />
                      </div>
                      <CardTitle className="text-xl font-bold" style={{ fontFamily: 'Times New Roman, serif', color: '#810100' }}>
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="leading-relaxed" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
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
        <section id="about" className="py-20 px-4 relative">
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
                      background: 'linear-gradient(135deg, #810100 0%, #810100 50%, #edebde 100%)',
                      transform: 'scale(1.05)',
                      filter: 'blur(20px)',
                      opacity: 0.5,
                      zIndex: 0
                    }}></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10" style={{
                      border: '4px solid #edebde',
                      background: 'linear-gradient(135deg, #810100 0%, #810100 100%)'
                    }}>
                      <img 
                        src="https://customer-assets.emergentagent.com/job_panther-training/artifacts/35ddx3vg_dhiraj%20photo%20%284%29.png" 
                        alt="Dhiraj - Panther Flow Founder" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {/* Floating Stats Badge - 45+ Students */}
                    <div className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-2xl z-20" style={{
                      background: 'linear-gradient(135deg, #810100 0%, #810100 100%)',
                      border: '3px solid #edebde'
                    }}>
                      <div className="text-3xl font-bold text-#edebde" style={{ fontFamily: 'Times New Roman, serif' }}>45+</div>
                      <div className="text-xs text-#edebde/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>Happy Students</div>
                    </div>
                    {/* Floating Stats Badge - 1.5 Lakhs Ad Spend */}
                    <div className="absolute -bottom-6 -left-6 rounded-2xl p-6 shadow-2xl z-20" style={{
                      background: 'linear-gradient(135deg, #810100 0%, #810100 100%)',
                      border: '3px solid #edebde'
                    }}>
                      <div className="text-3xl font-bold text-#edebde" style={{ fontFamily: 'Times New Roman, serif' }}>₹1.5L+</div>
                      <div className="text-xs text-#edebde/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>Ad Spend Managed</div>
                    </div>
                    {/* Floating Top Badge */}
                    <div className="absolute -top-4 -left-4 rounded-full px-5 py-2 shadow-xl z-20" style={{
                      background: 'linear-gradient(135deg, #edebde 0%, #f5eeee 100%)',
                      border: '2px solid #810100'
                    }}>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4" style={{ color: '#810100' }} />
                        <span className="text-sm font-bold" style={{ color: '#810100', fontFamily: 'Google Sans, sans-serif' }}>Meta Ads Expert</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column - 3/5 width */}
                <div className="md:col-span-3 space-y-5">
                  <div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{
                      background: 'linear-gradient(135deg, #810100 0%, #810100 100%)',
                      color: '#edebde',
                      fontFamily: 'Google Sans, sans-serif'
                    }}>
                      <Award className="w-4 h-4" />
                      Meet Your Trainer
                    </span>
                    <h2 className="font-bold mb-2" style={{ 
                      fontSize: '24px',
                      fontFamily: 'Times New Roman, serif',
                      background: 'linear-gradient(135deg, #810100 0%, #810100 50%, #810100 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      धिरज दयानंद
                    </h2>
                    <p className="text-lg font-medium" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                      Founder · Panther Flow · Meta Ads Strategist
                    </p>
                  </div>

                  <div className="space-y-4" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                    <p className="text-base leading-relaxed">
                      <strong style={{ color: '#810100' }}>मराठी मातीतला, धाराशिव मधून आलेला एक २२ वर्षांचा तरुण</strong>, जो Performance Marketing क्षेत्रात स्वतःचं छोटंसं स्थान निर्माण करत आहे आणि हेच knowledge आपल्या मराठी बांधवांपर्यंत सोप्या भाषेत पोहोचवण्याचा प्रयत्न करतोय. आणि हा एक recorded course नाही, तर हे <strong style={{ color: '#810100' }}>live शिकवलं जातं</strong>.
                    </p>
                    <p className="text-base leading-relaxed">
                      Internet वर हजारो Marketing courses उपलब्ध आहेत, पण <strong style={{ color: '#810100' }}>आपल्या भाषेत आणि आपल्या लोकांसाठी समजेल आणि affordable</strong> असा course मिळणं कठीण आहे. हीच गोष्ट मनात ठेवून Panther Flow सुरू केलं, जिथे प्रत्येक concept मराठीमध्ये सोप्या पद्धतीने समजावून सांगण्याचा प्रयत्न असतो.
                    </p>
                    <p className="text-base leading-relaxed">
                      माझ्याकडे फक्त पुस्तकी ज्ञान नाही, मी freelancing करतो, clients साठी काम करतो आणि त्यातून जे <strong style={{ color: '#810100' }}>real अनुभव</strong> मिळतात ते इथे शिकवतो. आतापर्यंत माझा एकूण ad spend <strong style={{ color: '#810100' }}>१.५ लाख रुपयांपर्यंत</strong> पोहोचला आहे. Client च्या कामातून जे practical learnings मिळाल्या, जे छोटे छोटे अनुभव आले, तेच सगळं या course मध्ये मांडलं आहे. त्यामुळे इथे फक्त theory नाही, तर खऱ्या कामातून आलेले <strong style={{ color: '#810100' }}>raw अनुभव</strong> मिळतील, मग ते चांगले असोत किंवा mistakes असोत.
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="relative pl-6 py-4 rounded-r-xl" style={{
                    background: 'linear-gradient(90deg, rgba(23, 36, 90, 0.08) 0%, transparent 100%)',
                    borderLeft: '4px solid #810100'
                  }}>
                    <Quote className="absolute -top-2 -left-3 w-7 h-7" style={{ color: '#810100' }} />
                    <p className="italic text-lg leading-relaxed font-semibold" style={{ 
                      fontFamily: 'Times New Roman, serif',
                      color: '#810100'
                    }}>
                      "मराठीत शिकलं की concepts जास्त clear होतात आणि result पण लवकर दिसतो. हेच Panther Flow चं ध्येय आहे!"
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="text-center p-4 rounded-xl shadow-md" style={{
                      background: 'linear-gradient(135deg, #810100 0%, #810100 100%)'
                    }}>
                      <div className="text-2xl font-bold text-#edebde" style={{ fontFamily: 'Times New Roman, serif' }}>100%</div>
                      <div className="text-xs text-#edebde/90 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>मराठीतून शिकवणी</div>
                    </div>
                    <div className="text-center p-4 rounded-xl shadow-md" style={{
                      background: 'linear-gradient(135deg, #810100 0%, #810100 100%)'
                    }}>
                      <div className="text-2xl font-bold text-#edebde" style={{ fontFamily: 'Times New Roman, serif' }}>Live</div>
                      <div className="text-xs text-#edebde/90 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Sessions</div>
                    </div>
                    <div className="text-center p-4 rounded-xl shadow-md" style={{
                      background: 'linear-gradient(135deg, #810100 0%, #810100 100%)'
                    }}>
                      <div className="text-2xl font-bold text-#edebde" style={{ fontFamily: 'Times New Roman, serif' }}>Real</div>
                      <div className="text-xs text-#edebde/90 mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Campaigns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements & Target Audience Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 dot-bg pointer-events-none"></div>
          
          {/* Floating icons */}
          <div className="absolute top-32 left-16 opacity-20 animate-float pointer-events-none">
            <Store className="w-14 h-14 text-#edebde" />
          </div>
          <div className="absolute top-48 right-24 opacity-20 animate-float-slow pointer-events-none">
            <GraduationCap className="w-12 h-12 text-#edebde" />
          </div>
          <div className="absolute bottom-32 right-16 opacity-20 animate-float-reverse pointer-events-none">
            <Briefcase className="w-14 h-14 text-#edebde" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-#edebde mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
                हा कोर्स कोणासाठी आहे?
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                {courseData.requirements.map((req) => {
                  const Icon = iconMap[req.icon];
                  return (
                    <span 
                      key={req.id}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#810100] rounded-full text-sm font-medium border border-[#810100]/30"
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
                    className="border-2 border-#edebde/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group card-grid-pattern relative overflow-hidden"
                    style={{ backgroundColor: 'rgba(237, 235, 222, 0.15)' }}
                  >
                    <CardHeader className="flex flex-row items-center gap-4 relative z-10">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0" style={{ background: '#810100' }}>
                        <Icon className="w-8 h-8 text-#edebde" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Times New Roman, serif', color: '#810100' }}>
                          {audience.title}
                        </CardTitle>
                        <p className="text-base mt-2" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
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
        <section id="course" className="py-20 px-4 relative overflow-hidden">
          {/* Grid background pattern */}
          <div className="absolute inset-0 grid-bg pointer-events-none"></div>
          
          {/* Floating decorative icons */}
          <div className="absolute top-20 left-10 opacity-20 animate-float pointer-events-none">
            <Target className="w-16 h-16 text-#edebde" />
          </div>
          <div className="absolute top-40 right-20 opacity-20 animate-float-slow pointer-events-none">
            <Rocket className="w-12 h-12 text-#edebde" />
          </div>
          <div className="absolute bottom-40 left-20 opacity-20 animate-float-reverse pointer-events-none">
            <Activity className="w-14 h-14 text-#edebde" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 animate-float pointer-events-none">
            <Award className="w-12 h-12 text-#edebde" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3" style={{ fontFamily: 'Times New Roman, serif', color: '#edebde' }}>
                <Activity className="w-10 h-10" />
                Course Anatomy
              </h2>
              <p className="text-xl" style={{ fontFamily: 'Google Sans, sans-serif', color: '#edebde' }}>
                संपूर्ण Meta Ads Training - Basic ते Advanced
              </p>
            </div>

            {/* 25 Days Live Classes Banner */}
            <div className="max-w-3xl mx-auto mb-16">
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-md border-2 border-#edebde/30 shadow-2xl card-grid-pattern" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(232, 237, 247, 0.95) 100%)'
              }}>
                {/* Decorative gradient orb */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none" style={{
                  background: 'radial-gradient(circle, rgba(23, 36, 90, 0.15) 0%, transparent 70%)'
                }}></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full pointer-events-none" style={{
                  background: 'radial-gradient(circle, rgba(106, 127, 199, 0.2) 0%, transparent 70%)'
                }}></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-8">
                  {/* Icon Badge */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center shadow-xl" style={{
                      background: 'linear-gradient(135deg, #810100 0%, #810100 100%)'
                    }}>
                      <div className="text-4xl font-bold text-#edebde leading-none" style={{ fontFamily: 'Times New Roman, serif' }}>25</div>
                      <div className="text-xs text-#edebde/90 uppercase tracking-wider mt-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Days</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold shadow-md" style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
                        color: '#edebde',
                        fontFamily: 'Google Sans, sans-serif'
                      }}>
                        <span className="w-2 h-2 bg-#edebde rounded-full"></span>
                        LIVE
                      </span>
                      <Video className="w-5 h-5" style={{ color: '#810100' }} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif', color: '#810100' }}>
                      25 Days Live Classes
                    </h3>
                    <p className="text-base leading-relaxed mb-3" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                      <strong>२५ दिवस संपूर्ण Live Training</strong> — रोज नवीन concept, real-time doubts solve, आणि practical examples सोबत Meta Ads मास्टर बना!
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold shadow-md" style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
                      color: '#edebde',
                      fontFamily: 'Google Sans, sans-serif'
                    }}>
                      <Calendar className="w-4 h-4" />
                      <span>New Batch Starting on 20th June</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {courseData.courseContent.map((module) => (
                <Card 
                  key={module.id}
                  className="border-2 border-#edebde/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg card-grid-pattern relative overflow-hidden"
                  style={{ backgroundColor: 'rgba(237, 235, 222, 0.15)' }}
                >
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-#edebde text-sm font-semibold rounded-full" style={{ background: '#810100', fontFamily: 'Google Sans, sans-serif' }}>
                        {module.module}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-bold" style={{ fontFamily: 'Times New Roman, serif', color: '#810100' }}>
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-3" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                          <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#810100' }} />
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
        <section id="faq" className="py-20 px-4 relative overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-bg pointer-events-none"></div>
          
          {/* Floating icons */}
          <div className="absolute top-32 left-20 opacity-20 animate-float pointer-events-none">
            <BookOpen className="w-14 h-14 text-#edebde" />
          </div>
          <div className="absolute bottom-32 right-20 opacity-20 animate-float-slow pointer-events-none">
            <Sparkles className="w-12 h-12 text-#edebde" />
          </div>

          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-#edebde mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
                FAQ's
              </h2>
              <p className="text-xl text-#edebde/80" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                नेहमी विचारले जाणारे प्रश्न ❓
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
                {courseData.faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={`item-${faq.id}`}
                  className="backdrop-blur-sm border-2 border-#edebde/30 rounded-lg px-6 hover:border-#edebde/50 transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-#edebde hover:text-#edebde/80 py-6" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-#edebde/90 pb-6 text-base leading-relaxed" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 dot-bg pointer-events-none"></div>
          
          {/* Floating icons */}
          <div className="absolute top-10 left-1/4 opacity-60 animate-float pointer-events-none">
            <Rocket className="w-10 h-10 text-#edebde" />
          </div>
          <div className="absolute top-20 right-1/4 opacity-60 animate-float-slow pointer-events-none">
            <Sparkles className="w-12 h-12 text-#edebde" />
          </div>
          <div className="absolute bottom-10 left-1/3 opacity-60 animate-float-reverse pointer-events-none">
            <Award className="w-10 h-10 text-#edebde" />
          </div>

          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="space-y-6 backdrop-blur-md rounded-3xl p-12 border-2 border-#edebde/30 shadow-2xl" style={{ 
              background: 'linear-gradient(135deg, rgba(23, 36, 90, 0.6) 0%, rgba(42, 63, 138, 0.5) 100%)'
            }}>
              {/* Urgency Banner */}
              <button 
                onClick={handleEnrollClick}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 click-ripple"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
                  fontFamily: 'Google Sans, sans-serif'
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-#edebde"></span>
                </span>
                <Calendar className="w-4 h-4 text-[#810100]" />
                <span className="text-sm font-bold text-[#810100] tracking-wide">
                  New Batch Starting on 20th June · Limited Seats!
                </span>
              </button>

              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Times New Roman, serif', color: '#edebde' }}>
                Take the First Step
              </h2>
              <p className="text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Google Sans, sans-serif', color: '#edebde' }}>
                फक्त ₹1099 मध्ये संपूर्ण कोर्स + Lifetime Access
              </p>
              <div className="pt-6">
                <Button 
                  onClick={handleEnrollClick}
                  size="lg"
                  className="text-[#810100] hover:opacity-90 text-xl px-12 py-8 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cta-wave cta-glow cta-grid-pattern"
                  style={{ fontFamily: 'Google Sans, sans-serif' }}
                  data-testid="cta-join-now"
                >
                  {`Join Now - ${courseData.currency}${courseData.price}`}
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 pt-4 text-sm text-#edebde">
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
        <footer className="text-#edebde py-12 px-4 border-t border-#edebde/20" style={{
          background: 'linear-gradient(135deg, rgba(23, 36, 90, 0.95) 0%, rgba(255, 255, 255, 0.1) 100%)'
        }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-4">
              <div>
                <p className="font-semibold mb-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Contact Email</p>
                <a href="mailto:contactpantherflow@gmail.com" className="text-#edebde/80 hover:text-#edebde" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  contactpantherflow@gmail.com
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ fontFamily: 'Google Sans, sans-serif' }}>Address</p>
                <p className="text-#edebde/80" style={{ fontFamily: 'Google Sans, sans-serif' }}>Dharashiv धाराशिव</p>
              </div>
              <div className="pt-6 border-t border-#edebde/20">
                <p className="text-#edebde/70 text-sm" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  © 2026 Panther Flow. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 whatsapp-floating"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          fontFamily: 'Google Sans, sans-serif'
        }}
        data-testid="floating-whatsapp-btn"
        aria-label="WhatsApp Us"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className="w-8 h-8 text-#edebde"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </div>
  );
};

export default Home;
