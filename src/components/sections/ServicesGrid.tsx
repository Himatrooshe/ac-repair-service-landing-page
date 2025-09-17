'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const setupAnimations = () => {
      if (sectionRef.current && titleRef.current && servicesRef.current) {
        // Animate title
        gsap.fromTo(titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              refreshPriority: -1, // Lower priority for better performance
            },
          }
        );

        // Animate service cards with stagger
        const serviceCards = servicesRef.current.querySelectorAll('.service-card');
        gsap.fromTo(serviceCards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
              refreshPriority: -1,
            },
          }
        );
      }
    };

    // Delay setup to ensure Lenis is initialized
    const timer = setTimeout(setupAnimations, 100);
    
    return () => {
      clearTimeout(timer);
      // Clean up ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-pattern" id="services">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 ref={titleRef} className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-shimmer mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight px-2">
            Professional Cooling Service In Dhaka
          </h2>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group service-card mx-2 xs:mx-0"
            >
              <div className="card-premium tilt hover-glow">
                <div className="relative h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 xl:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
                  {/* Service Header */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 bg-primary rounded-lg flex items-center justify-center mr-2 xs:mr-3 sm:mr-4 lg:mr-5 flex-shrink-0">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={24}
                        height={24}
                        className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
                      />
                    </div>
                    <Link
                      href="/services"
                      className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-dark hover:text-primary transition-colors leading-tight touch-manipulation flex-1"
                    >
                      {service.title}
                    </Link>
                  </div>
                  
                  {/* Get Quote Button - Always visible and consistent */}
                  <div className="flex justify-center sm:justify-end">
                    <Link 
                      href="/quote" 
                      className="inline-flex items-center justify-center bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 min-w-[80px] whitespace-nowrap"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
