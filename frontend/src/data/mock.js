// Mock Data for Panther Flow Landing Page in Marathi

export const courseData = {
  title: "Beginner Meta Ads Training",
  price: 1199,
  currency: "₹",
  heroHeadline: "Most affordable & practical Course in Marathi",
  heroCTA: "Join Now - फक्त ₹1,199",
  
  benefits: [
    {
      id: 1,
      title: "Marathi Language",
      description: "सोप्या आणि simple मराठी मध्ये concepts clear होतात आणि result लवकर मिळतात",
      icon: "Target"
    },
    {
      id: 2,
      title: "Practical Training",
      description: "Real campaigns, real examples शिकता शिकता तुमचा पहिला Ad live करा!",
      icon: "Rocket"
    },
    {
      id: 3,
      title: "Lifetime Access",
      description: "एकदा invest करा, आणि doubt साठी हवे तेव्हा recordings refer करा नवीन updates पण free मिळतील!",
      icon: "Infinity"
    },
    {
      id: 4,
      title: "Value At Low Price",
      description: "फक्त ₹1,199 मध्ये एक professional-level Meta Ads expert बना आजच सुरुवात करा!",
      icon: "DollarSign"
    }
  ],
  
  targetAudience: [
    {
      id: 1,
      title: "Business Owner",
      description: "तुमच्या व्यवसायाला online वाढवायचं आहे?",
      icon: "Store"
    },
    {
      id: 2,
      title: "Freelancers",
      description: "Meta Ads चे expert बनून कमाई करायची आहे?",
      icon: "Briefcase"
    },
    {
      id: 3,
      title: "Students",
      description: "नवीन skill शिकून करिअर बनवायचं आहे?",
      icon: "GraduationCap"
    },
    {
      id: 4,
      title: "Marketers",
      description: "तुमचे डिजिटल मार्केटिंग स्किल्स वाढवायचे आहेत?",
      icon: "TrendingUp"
    }
  ],

  requirements: [
    {
      id: 1,
      title: "Laptop",
      icon: "Laptop"
    },
    {
      id: 2,
      title: "Internet Connection",
      icon: "Wifi"
    },
    {
      id: 3,
      title: "Will to Learn",
      icon: "BookOpen"
    }
  ],
  
  courseContent: [
    {
      id: 1,
      module: "Module 1",
      title: "Meta Ads Introduction",
      topics: [
        "Facebook आणि Instagram Ads समजून घ्या",
        "Facebook Page Creation",
        "Basic Ad Metrics",
        "Meta Business Suite सेटअप",
        "Ads Manager चा परिचय",
        "Payment Method Setup"
      ]
    },
    {
      id: 2,
      module: "Module 2",
      title: "Campaign Setup",
      topics: [
        "Campaign Objective निवडणे",
        "Target Audience तयार करणे",
        "Budget आणि Schedule सेट करणे",
        "Ad Placement समजून घेणे"
      ]
    },
    {
      id: 3,
      module: "Module 3",
      title: "Ad Creative & Copywriting with AI",
      topics: [
        "आकर्षक Ad Creative तयार करणे",
        "Effective Ad Copy लिहिणे",
        "Image आणि Video Ads",
        "Call-to-Action (CTA) Perfect करणे"
      ]
    },
    {
      id: 4,
      module: "Module 4",
      title: "Analytics & Optimization",
      topics: [
        "Meta Pixel सेटअप",
        "Campaign Performance ट्रॅक करणे",
        "Ad Reporting",
        "ROI कॅल्क्युलेट करणे",
        "Ads Optimize करणे"
      ]
    }
  ],
  
  faqs: [
    {
      id: 1,
      question: "हा कोर्स कोणासाठी आहे?",
      answer: "हा कोर्स त्या सर्वांसाठी आहे जे Meta Ads शिकून त्यांचा व्यवसाय वाढवू इच्छितात किंवा फ्रीलान्सिंग करून पैसे कमवू इच्छितात. कोणतीही पूर्व तांत्रिक माहिती आवश्यक नाही."
    },
    {
      id: 2,
      question: "कोर्स किती काळासाठी उपलब्ध राहील?",
      answer: "एकदा तुम्ही कोर्स खरेदी केल्यावर, तुम्हाला लाईफटाइम ॲक्सेस मिळेल. तुम्ही तुमच्या सोयीनुसार कधीही आणि कुठूनही शिकू शकता."
    },
    {
      id: 3,
      question: "मला Meta Ads चालवण्यासाठी किती पैसे लागतील?",
      answer: "तुम्ही फक्त ₹100-200 प्रतिदिन पासून सुरुवात करू शकता. कोर्समध्ये कमी बजेटमध्ये कसे ads चालवायचे हे शिकवले जाते."
    },
    {
      id: 4,
      question: "कोर्स मराठीत आहे का?",
      answer: "होय! संपूर्ण कोर्स मराठी भाषेत आहे जेणेकरून तुम्हाला सर्व काही सहज समजेल."
    },
    {
      id: 5,
      question: "पेमेंट केल्यानंतर कोर्स कसा मिळेल?",
      answer: "पेमेंट केल्यानंतर तुम्हाला लगेच ईमेल आणि WhatsApp द्वारे कोर्स ॲक्सेस लिंक मिळेल."
    },
    {
      id: 6,
      question: "Doubt solve होतील का?",
      answer: "होय! कोर्स दरम्यान कोणतीही अडचण आली तर तुम्ही आम्हाला संपर्क करू शकता. आम्ही तुम्हाला मदत करू."
    }
  ]
};

// Mock function to simulate payment
export const processMockPayment = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "पेमेंट इंटिग्रेशन लवकरच जोडले जाईल!",
        orderId: "MOCK_ORDER_" + Date.now()
      });
    }, 1000);
  });
};
