'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-pattern">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-shimmer mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-tight px-2 lg:px-0">
              Best Cooling Service Center in Bangladesh
            </h2>
            
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
              <div className="flex items-center">
                <Image
                  src="/img/icon/icon-07-primary.png"
                  alt="Expert Technician"
                  width={24}
                  height={24}
                  className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-2 xs:mr-3 sm:mr-4 flex-shrink-0"
                />
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-dark">Expert Technician</h3>
              </div>
              <div className="flex items-center">
                <Image
                  src="/img/icon/icon-09-primary.png"
                  alt="Best Quality Services"
                  width={32}
                  height={32}
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mr-3 sm:mr-4 flex-shrink-0"
                />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-dark">Best Quality Services</h3>
              </div>
            </div>

            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              Home Electra International is Bangladesh&apos;s premier cooling and heating service provider, offering comprehensive Air Conditioning solutions for both residential and commercial clients. Our experienced technicians specialize in AC installation, repair, maintenance, and emergency services to ensure your comfort throughout the year.
            </p>

            <div className="border-t border-gray-200 pt-6 sm:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 hover-glow">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <a href="tel:+8801324718981" className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-dark hover:text-primary transition-colors cursor-pointer underline hover:no-underline relative z-10" style={{pointerEvents: 'auto'}}>+8801324-718981</a>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 hover-glow">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <a href="mailto:homeelectrainternational@gmail.com" className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-dark whitespace-nowrap hover:text-primary transition-colors cursor-pointer underline hover:no-underline relative z-10" style={{pointerEvents: 'auto'}}>homeelectrainternational@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div 
            className={`grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6 mt-8 lg:mt-0 transition-all duration-700 ease-out delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-2 sm:space-y-4">
              <div className="text-right">
                <Image
                  src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177899/p2_laosgp.png"
                  alt="About us"
                  width={300}
                  height={400}
                  className={`w-3/4 ml-auto rounded-md sm:rounded-lg shadow-lg hover:scale-105 transition-all duration-500 ease-out ${
                    isVisible 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 translate-y-4'
                  }`}
                  style={{ marginTop: '15%', transitionDelay: '300ms' }}
                />
              </div>
              <div className="text-right">
                <Image
                  src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177893/about-3_rc1qiz.jpg"
                  alt="About us"
                  width={200}
                  height={200}
                  className={`w-1/2 sm:w-2/3 lg:w-1/2 ml-auto rounded-md sm:rounded-lg shadow-lg hover:scale-105 transition-all duration-500 ease-out ${
                    isVisible 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 translate-y-4'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                />
              </div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div>
                <Image
                  src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177897/p1_vkibnw.png"
                  alt="About us"
                  width={400}
                  height={300}
                  className={`w-full rounded-md sm:rounded-lg shadow-lg hover:scale-105 transition-all duration-500 ease-out ${
                    isVisible 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 translate-y-4'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                />
              </div>
              <div>
                <Image
                  src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177896/aa1_b4zctq.png"
                  alt="About us"
                  width={300}
                  height={200}
                  className={`w-3/4 sm:w-4/5 lg:w-3/4 rounded-md sm:rounded-lg shadow-lg hover:scale-105 transition-all duration-500 ease-out ${
                    isVisible 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 translate-y-4'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
