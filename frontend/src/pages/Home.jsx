import React, { useState } from 'react';
import { courseData, processMockPayment } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { toast } from 'sonner';
import {
  Languages,
  Laptop,
  Infinity,
  IndianRupee,
  Store,
  Briefcase,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  Play,
  Users,
  Award,
  Clock
} from 'lucide-react';

const iconMap = {
  Languages,
  Laptop,
  Infinity,
  IndianRupee,
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_e8b2affb-4278-4b53-85ab-a14c53337943/artifacts/v8618thc_ChatGPT%20Image%20May%2020%2C%202026%2C%2003_54_16%20PM.png" 
              alt="Panther Flow Logo" 
              className="h-10 w-auto"
            />
          </div>
          <Button 
            onClick={handleEnrollClick}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 transition-all duration-300 hover:scale-105"
          >
            आता नोंदणी करा
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                महाराष्ट्रातील विद्यार्थ्यांसाठी खास
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              {courseData.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {courseData.heroSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                onClick={handleEnrollClick}
                disabled={isProcessing}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {isProcessing ? 'प्रक्रिया सुरू आहे...' : courseData.heroCTA}
              </Button>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5 text-orange-500" />
                <span className="text-sm">500+ विद्यार्थी आधीच शिकत आहेत</span>
              </div>
            </div>
            <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span>लाईफटाइम ॲक्सेस</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-orange-500" />
                <span>व्हिडिओ ट्युटोरियल्स</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-500" />
                <span>सर्टिफिकेट</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              तुम्हाला हे का शिकायला हवं?
            </h2>
            <p className="text-xl text-gray-600">
              आमच्या कोर्सचे खास फायदे
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseData.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <Card 
                  key={benefit.id}
                  className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              हा कोर्स कोणासाठी आहे?
            </h2>
            <p className="text-xl text-gray-600">
              तुम्ही या यादीत आहात का?
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {courseData.targetAudience.map((audience, index) => {
              const Icon = iconMap[audience.icon];
              return (
                <Card 
                  key={audience.id}
                  className="border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-xl group bg-white"
                >
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {audience.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2 text-gray-600">
                        {audience.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              कोर्समध्ये काय शिकवलं जातं?
            </h2>
            <p className="text-xl text-gray-600">
              संपूर्ण Meta Ads प्रशिक्षण - Basic ते Advanced
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {courseData.courseContent.map((module, index) => (
              <Card 
                key={module.id}
                className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      {module.module}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              वारंवार विचारले जाणारे प्रश्न
            </h2>
            <p className="text-xl text-gray-600">
              तुमच्या मनातील शंका दूर करूया
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {courseData.faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="bg-white border-2 border-orange-100 rounded-lg px-6 hover:border-orange-300 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-orange-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              आजच तुमची Meta Ads Journey सुरू करा!
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              फक्त ₹1,199 मध्ये संपूर्ण कोर्स + लाईफटाइम ॲक्सेस
            </p>
            <div className="pt-6">
              <Button 
                onClick={handleEnrollClick}
                disabled={isProcessing}
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 text-xl px-12 py-8 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                {isProcessing ? 'प्रक्रिया सुरू आहे...' : `नोंदणी करा - ${courseData.currency}${courseData.price}`}
              </Button>
            </div>
            <p className="text-orange-100 text-sm pt-4">
              100% सुरक्षित पेमेंट | तात्काळ कोर्स ॲक्सेस
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_e8b2affb-4278-4b53-85ab-a14c53337943/artifacts/v8618thc_ChatGPT%20Image%20May%2020%2C%202026%2C%2003_54_16%20PM.png" 
                alt="Panther Flow Logo" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400">
                महाराष्ट्रातील विद्यार्थ्यांसाठी मराठी भाषेतील सर्वोत्तम Meta Ads प्रशिक्षण
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">कोर्स माहिती</h3>
              <ul className="space-y-2 text-gray-400">
                <li>मराठीत शिकवणी</li>
                <li>लाईफटाइम ॲक्सेस</li>
                <li>प्रॅक्टिकल ट्रेनिंग</li>
                <li>सर्टिफिकेट</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">संपर्क</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ईमेल: support@pantherflow.com</li>
                <li>फोन: +91 98765 43210</li>
                <li>महाराष्ट्र, भारत</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Panther Flow. सर्व हक्क राखीव.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
