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
    
    // Simple one-time entrance animation
    gsap.set([titleRef.current, descRef.current, buttonRef.current], {
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
    .to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      onComplete: () => setIsInitialized(true)
    }, '-=0.3');
  }, [isMounted, isInitialized]);

  // No navigation functions needed for single slide

  return (
    <div ref={heroRef} className="relative h-screen min-h-[500px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/besthero.png"
        alt="Hero Background"
        fill
        className="object-cover object-center sm:object-[60%_center]"
        priority
      />
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <ParticleBackground />
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-5xl mx-auto w-full">
            <div className="transform transition-all duration-700 ease-out opacity-100 translate-x-0 scale-100 relative">
              <h1 
                ref={titleRef} 
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 xs:mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl transform transition-all duration-500 hover:scale-105 leading-tight px-2"
                style={{ opacity: isMounted ? undefined : 1 }}
              >
                {slide.title}
              </h1>
              <p 
                ref={descRef} 
                className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 mb-4 xs:mb-5 sm:mb-6 lg:mb-8 max-w-[280px] xs:max-w-[320px] sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 lg:p-6 border border-white/20 shadow-2xl transform transition-all duration-500 hover:bg-white/15 leading-relaxed"
                style={{ opacity: isMounted ? undefined : 1 }}
              >
                {slide.description}
              </p>
              <button 
                ref={buttonRef} 
                className="btn-primary text-xs xs:text-sm sm:text-base lg:text-lg px-4 xs:px-6 sm:px-8 lg:px-10 py-2 xs:py-3 sm:py-4 lg:py-5 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-primary/60 relative overflow-hidden group rounded-lg sm:rounded-xl border border-primary/30 font-semibold"
                style={{ opacity: isMounted ? undefined : 1 }}
              >
                <span className="relative z-10">{slide.buttonText}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* No navigation needed for single slide */}
    </div>
  );
};

export default HeroCarousel;
