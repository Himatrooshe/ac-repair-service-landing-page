'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import ParticleBackground from '../ui/ParticleBackground';

const HeroCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Optimized resize handler with useCallback
  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Check on mount
    checkIsMobile();

    // Advanced throttling with RAF for 60fps smooth updates
    let rafId: number;
    let timeoutId: NodeJS.Timeout;
    
    const optimizedResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      
      rafId = requestAnimationFrame(() => {
        timeoutId = setTimeout(checkIsMobile, 100);
      });
    };

    // Add event listener for resize with passive for better performance
    window.addEventListener('resize', optimizedResize, { passive: true });

    return () => {
      window.removeEventListener('resize', optimizedResize);
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [checkIsMobile]);

  // Memoized slide data for performance
  const slide = useMemo(() => ({
    id: 1,
    image: '/img/p2.png',
    titleLine1: 'We Provide Best',
    titleLine2: 'AC Repair Services',
    description: 'Expert technicians providing top-quality AC repair and maintenance services to ensure optimal performance and energy efficiency',
    buttonText: 'Explore More'
  }), []);

  // Memoized image source for performance
  const imageSrc = useMemo(() => 
    isMobile ? "/img/suphomemobile.jpg" : "/img/suphome.jpg", 
    [isMobile]
  );

  // No navigation functions needed for single slide

  return (
    <div className="relative h-screen min-h-[500px] max-h-[900px] overflow-hidden aurora noise">
      {/* Background Image - Responsive */}
      <Image
        src={imageSrc}
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />
      
      {/* Dark gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <ParticleBackground />
        <div className="container mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl w-full text-center md:text-left mx-auto md:mx-0">
            <div className="relative">
              <h1 className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-gradient mb-4 xs:mb-5 sm:mb-6 lg:mb-8 drop-shadow-2xl leading-tight">
                {slide.titleLine1}
                <br />
                {slide.titleLine2}
              </h1>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-100/90 mb-6 xs:mb-7 sm:mb-8 lg:mb-10 max-w-[320px] xs:max-w-[400px] sm:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto md:mx-0 backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 lg:p-6 border border-white/20 shadow-2xl transform transition-all duration-500 hover:bg-white/15 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 max-w-[320px] xs:max-w-[400px] sm:max-w-none mx-auto md:mx-0">
                <button className="btn-primary text-sm sm:text-base lg:text-lg w-full sm:w-auto min-w-[180px] sm:min-w-[200px] hover-glow">
                  <span className="relative z-10">{slide.buttonText}</span>
                </button>
                <a
                  href="#services"
                  className="btn-ghost text-sm sm:text-base lg:text-lg w-full sm:w-auto min-w-[180px] sm:min-w-[200px] !text-white hover:!text-white"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
