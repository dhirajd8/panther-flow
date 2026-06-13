import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Lock, CheckCircle2, Video, Award, Sparkles } from 'lucide-react';

const PaymentModal = ({ open, onOpenChange }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handlePay = () => {
    // Redirect to Razorpay payment link
    window.open('https://razorpay.me/@pantherflow', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden border-0 bg-transparent shadow-none" data-testid="payment-modal">
        <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '600px' }}>
          {/* Left Column - Course Branding */}
          <div className="p-8 md:p-12 relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #810100 0%, #810100 50%, #810100 a 100%)'
          }}>
            {/* Decorative pattern */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
            
            {/* Floating decorative icons */}
            <div className="absolute top-8 right-8 opacity-20 animate-float pointer-events-none">
              <Sparkles className="w-12 h-12 text-#edebde" />
            </div>
            <div className="absolute bottom-12 right-12 opacity-15 animate-float-slow pointer-events-none">
              <Award className="w-16 h-16 text-#edebde" />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-12">
                <img 
                  src="https://customer-assets.emergentagent.com/job_e8b2affb-4278-4b53-85ab-a14c53337943/artifacts/v8618thc_ChatGPT%20Image%20May%2020%2C%202026%2C%2003_54_16%20PM.png" 
                  alt="Panther Flow" 
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold text-#edebde" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Panther Flow
                </span>
              </div>

              {/* Course Title */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-#edebde mb-3 leading-tight" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Beginner Meta Ads<br />Training in Marathi
                </h2>
                <div className="w-16 h-1 bg-#edebde rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-#edebde/85 text-base leading-relaxed mb-8" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                100% मराठीतून Live Meta Ads Training. Real campaigns, real examples — आणि तुमचा पहिला Ad live करण्यापर्यंत मार्गदर्शन.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-#edebde/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Live Training Sessions</span>
                </div>
                <div className="flex items-center gap-3 text-#edebde/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Lifetime Access to Recordings</span>
                </div>
                <div className="flex items-center gap-3 text-#edebde/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Practical Real-World Examples</span>
                </div>
                <div className="flex items-center gap-3 text-#edebde/90" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Certificate of Completion</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-auto pt-8 border-t border-#edebde/20">
                <p className="text-xs font-semibold text-#edebde/60 uppercase tracking-wider mb-3" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                  Contact Us
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-#edebde/80 text-sm" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                    <Mail className="w-4 h-4" />
                    <a href="mailto:contactpantherflow@gmail.com" className="hover:text-#edebde">contactpantherflow@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-#edebde/80 text-sm" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                    <MapPin className="w-4 h-4" />
                    <span>Dharashiv धाराशिव</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="bg-#edebde p-8 md:p-12 flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif', color: '#810100' }}>
                Payment Details
              </h3>
              <div className="w-12 h-1 rounded-full" style={{ background: '#810100' }}></div>
            </div>

            {/* Form */}
            <div className="space-y-6 flex-1">
              {/* Amount */}
              <div>
                <Label className="text-sm font-medium mb-2 block" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                  Amount <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Input 
                    value="₹ 1099
                    .00"
                    disabled
                    className="text-lg font-semibold cursor-not-allowed"
                    style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}
                    data-testid="payment-amount"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <Label className="text-sm font-medium mb-2 block" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base"
                  style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}
                  data-testid="payment-email"
                />
              </div>

              {/* Phone */}
              <div>
                <Label className="text-sm font-medium mb-2 block" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                  Phone <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2">
                  <div className="flex items-center justify-center px-4 rounded-md border border-input bg-gray-50 text-sm font-medium" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                    IN +91
                  </div>
                  <Input 
                    type="tel"
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 text-base"
                    style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}
                    data-testid="payment-phone"
                  />
                </div>
              </div>

              {/* Payment Methods Icons */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-xs font-medium" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                  Accepted:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold" style={{ color: '#810100' }}>UPI</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold" style={{ color: '#810100' }}>VISA</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold" style={{ color: '#810100' }}>RuPay</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold" style={{ color: '#810100' }}>Cards</span>
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <div className="mt-8">
              <Button 
                onClick={handlePay}
                size="lg"
                className="w-full text-#edebde text-lg py-6 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] cta-wave"
                
                
            
    style={{
                  background: 'linear-gradient(135deg, #810100 0%, #810100 50%, #810100 100%)',
                  fontFamily: 'Google Sans, sans-serif'
                }}
                data-testid="pay-now-btn"
              >
                Pay ₹ 1099.00
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-xs" style={{ fontFamily: 'Google Sans, sans-serif', color: '#810100' }}>
                <Lock className="w-3 h-3" />
                <span>100% Secure Payment via Razorpay</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
