'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (sectionRef.current && contentRef.current && imagesRef.current) {
      // Animate content from left
      gsap.fromTo(contentRef.current, 
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate images from right with stagger
      const images = imagesRef.current.querySelectorAll('img');
      gsap.fromTo(images,
        { opacity: 0, x: 100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-pattern">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1">
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-shimmer mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 leading-tight px-2 lg:px-0">
              Best Cooling & Heating Service Center in Bangladesh
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
              Home Electra International is Bangladesh&apos;s premier cooling and heating service provider, offering comprehensive HVAC solutions for both residential and commercial clients. Our experienced technicians specialize in AC installation, repair, maintenance, and emergency services to ensure your comfort throughout the year.
            </p>

            <div className="border-t border-gray-200 pt-6 sm:pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 hover-glow floaty">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <a href="tel:+8801324718981" className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-dark hover:text-primary transition-colors">+8801324-718981</a>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 hover-glow floaty">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <a href="mailto:homeelectrainternational@gmail.com" className="text-xs sm:text-sm lg:text-base xl:text-lg font-semibold text-dark break-all hover:text-primary transition-colors">homeelectrainternational@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div ref={imagesRef} className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6 mt-8 lg:mt-0">
            <div className="space-y-2 sm:space-y-4">
              <div className="text-right">
                <Image
                  src="/img/p2.png"
                  alt="About us"
                  width={300}
                  height={400}
                  className="w-3/4 ml-auto rounded-md sm:rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ marginTop: '15%' }}
                />
              </div>
              <div className="text-right">
                <Image
                  src="/img/about-3.jpg"
                  alt="About us"
                  width={200}
                  height={200}
                  className="w-1/2 sm:w-2/3 lg:w-1/2 ml-auto rounded-md sm:rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-2 sm:space-y-4">
              <div>
                <Image
                  src="/img/p1.png"
                  alt="About us"
                  width={400}
                  height={300}
                  className="w-full rounded-md sm:rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <Image
                  src="/img/about-4.jpg"
                  alt="About us"
                  width={300}
                  height={200}
                  className="w-3/4 sm:w-4/5 lg:w-3/4 rounded-md sm:rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
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
