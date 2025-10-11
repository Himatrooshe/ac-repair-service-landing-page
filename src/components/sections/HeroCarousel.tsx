'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import ParticleBackground from '../ui/ParticleBackground';

const HeroCarousel = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null);

  // Single slide - no carousel functionality needed
  const slide = {
    id: 1,
    image: '/img/p2.png',
    title: 'We Provide Best AC Repair Services',
    description: 'Expert technicians providing top-quality AC repair and maintenance services to ensure optimal performance and energy efficiency',
    buttonText: 'Explore More'
  };

  // Ensure component is mounted before running animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simple initial animation only (no transitions)
  useEffect(() => {
    if (!isMounted || !titleRef.current || !descRef.current || !buttonRef.current || isInitialized) return;
    gsap.set([titleRef.current, descRef.current, buttonRef.current, secondaryBtnRef?.current], {
      opacity: 0,
      y: 30,
    });

    const tl = gsap.timeline({ delay: 0.5 });
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
    .to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.4')
    .to([buttonRef.current, secondaryBtnRef?.current], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => setIsInitialized(true)
    }, '-=0.3');
  }, [isMounted, isInitialized]);

  // No navigation functions needed for single slide

  return (
    <div ref={heroRef} className="relative h-screen min-h-[500px] max-h-[900px] overflow-hidden aurora noise">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177908/besthero_lqb3ng.png"
        alt="Hero Background"
        fill
        className="object-cover object-center sm:object-[60%_center]"
        priority
      />
      {/* dark gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ParticleBackground />
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto w-full">
            <div className="transform transition-all duration-700 ease-out opacity-100 translate-x-0 scale-100 relative">
              <h1 
                ref={titleRef} 
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient mb-3 xs:mb-4 sm:mb-6 lg:mb-8 drop-shadow-2xl transform transition-all duration-500 hover:scale-105 leading-tight px-2"
                style={{ opacity: isMounted ? undefined : 1 }}
              >
                {slide.title}
              </h1>
              <p 
                ref={descRef} 
                className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-gray-100/90 mb-4 xs:mb-5 sm:mb-6 lg:mb-8 max-w-[280px] xs:max-w-[320px] sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 lg:p-6 border border-white/20 shadow-2xl transform transition-all duration-500 hover:bg-white/15 leading-relaxed"
                style={{ opacity: isMounted ? undefined : 1 }}
              >
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <button 
                  ref={buttonRef} 
                  className="btn-primary text-sm sm:text-base lg:text-lg min-w-[200px] hover-glow"
                  style={{ opacity: isMounted ? undefined : 1 }}
                >
                  <span className="relative z-10">{slide.buttonText}</span>
                </button>
                <a
                  ref={secondaryBtnRef}
                  href="#services"
                  className="btn-ghost text-sm sm:text-base lg:text-lg min-w-[200px]"
                  style={{ opacity: isMounted ? undefined : 1 }}
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* No navigation needed for single slide */}
    </div>
  );
};

export default HeroCarousel;
