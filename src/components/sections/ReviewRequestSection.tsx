'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, MessageCircle, Smartphone, Heart, Award, Building2 } from 'lucide-react';
import LogoLoop from '@/components/ui/LogoLoop';

const ReviewRequestSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: "Help Others",
      description: "Your review helps other customers make informed decisions"
    },
    {
      icon: Award,
      title: "Improve Service",
      description: "Your feedback helps us provide even better service"
    },
    {
      icon: Star,
      title: "Support Local",
      description: "Help a local business grow and thrive"
    }
  ];

  // Customer logos - actual client logos
  const customerLogos = [
    { 
      src: "https://res.cloudinary.com/dxcjpicou/image/upload/v1760184579/SaduiEmbassylogo_bpygpy.svg", 
      alt: "Royal Embassy of Saudi Arabia", 
      title: "Royal Embassy of Saudi Arabia",
      href: "#" 
    },
    { 
      src: "https://res.cloudinary.com/dxcjpicou/image/upload/v1760184578/efad_kif88c.webp", 
      alt: "EFAD", 
      title: "EFAD",
      href: "#" 
    },
    { 
      src: "https://res.cloudinary.com/dxcjpicou/image/upload/v1760184579/farzi_xcoowj.png", 
      alt: "Farzi", 
      title: "Farzi",
      href: "#" 
    },
    { 
      src: "https://res.cloudinary.com/dxcjpicou/image/upload/v1760184578/EWU_i7rkry.png", 
      alt: "East West University", 
      title: "East West University",
      href: "#" 
    },
    { 
      src: "https://res.cloudinary.com/dxcjpicou/image/upload/v1760184578/PHP-Family-Logo_iokzlx.webp", 
      alt: "PHP Family", 
      title: "PHP Family",
      href: "#" 
    },
    { 
      src: "https://res.cloudinary.com/dxcjpicou/image/upload/v1760184578/CPH_gxgl0o.jpg", 
      alt: "CPH", 
      title: "CPH",
      href: "#" 
    },
    { 
      src: "https://res.cloudinary.com/dxcjpicou/image/upload/v1760184578/BREB_yzonaj.jpg", 
      alt: "BREB", 
      title: "BREB",
      href: "#" 
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary to-orange-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Content Side */}
          <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-6 sm:space-y-8">
              {/* Header */}
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-4 sm:mb-6 shadow-lg">
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white fill-current" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark mb-3 sm:mb-4 px-2">
                  Love Our Service? 
                  <span className="block text-primary">Share Your Experience!</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                  Your feedback means the world to us! Help others discover our quality AC repair services by leaving a quick Google review. It only takes 2 minutes and helps our local business grow.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-4">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-dark mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
                          {benefit.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Instructions */}
              <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm sm:text-base">How to Leave a Review:</h4>
                    <ol className="text-xs sm:text-sm text-gray-600 space-y-1">
                      <li>1. Scan the QR code with your phone camera</li>
                      <li>2. Click on the Google Maps link</li>
                      <li>3. Tap "Write a review"</li>
                      <li>4. Select your star rating and write your experience</li>
                      <li>5. Tap "Post" - Done! 🎉</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Side */}
          <div className={`transform transition-all duration-700 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="flex flex-col items-center">
              {/* QR Code Container */}
              <div className="relative group mb-6 sm:mb-8">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                
                {/* QR Code */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105">
                  {/* Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-primary p-1 rounded-3xl">
                    <div className="bg-white rounded-3xl h-full w-full"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto">
                      <Image
                        src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760182581/WhatsApp_Image_2025-09-28_at_18.47.01_zlbmnb.jpg"
                        alt="Google Maps Review QR Code"
                        fill
                        className="object-contain rounded-2xl"
                        priority
                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                      />
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform rotate-12 animate-pulse">
                      Scan Me!
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h3 className="text-lg sm:text-xl font-bold text-dark">Quick & Easy Review</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    Scan the QR code above to leave your Google review in just 2 minutes!
                  </p>
                  
                  {/* Mobile Quick Link Button */}
                  <div className="mb-4 sm:mb-6">
                    <a
                      href="https://g.page/r/CabwGfe-Nm8vEBM/review?utm_source=gbp&utm_medium=reviews&utm_campaign=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-primary to-orange-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-500 hover:to-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                    >
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm sm:text-base">Leave Review on Mobile</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-xs text-gray-500 mt-2 sm:hidden">
                      Tap the button above for instant access to Google Reviews
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 fill-current" />
                      5-Star
                    </div>
                    <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Mobile Friendly
                    </div>
                    <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Helps Others
                    </div>
                  </div>
                </div>

                {/* Thank You Message */}
                <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <strong>Thank you for choosing Home Electra International!</strong> Your review helps us maintain our high service standards and helps other customers find reliable AC repair services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Logos Section */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 transform transition-all duration-700 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-dark mb-2 sm:mb-3">
              Trusted by Leading Organizations
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Join our prestigious clientele including diplomatic missions, universities, and major corporations
            </p>
          </div>
          
          <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={customerLogos}
                speed={80}
                direction="left"
                logoHeight={64}
                gap={20}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="transparent"
                ariaLabel="Customer logos"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewRequestSection;
