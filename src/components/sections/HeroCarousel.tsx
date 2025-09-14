'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import ParticleBackground from '../ui/ParticleBackground';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const slides = [
    {
      id: 1,
      image: '/img/p2.png',
      title: 'We Provide Best AC Repair Services',
      description: 'Expert technicians providing top-quality AC repair and maintenance services to ensure optimal performance and energy efficiency',
      buttonText: 'Explore More'
    },
    {
      id: 2,
      image: '/img/p2.png',
      title: 'Premium HVAC Solutions & Climate Control',
      description: 'Professional heating and cooling services designed to keep your space comfortable year-round with reliable, energy-efficient solutions',
      buttonText: 'Explore More'
    }
  ];

  // Disabled auto-transition
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, [slides.length]);

  // Simple initial animation only (no transitions)
  useEffect(() => {
    if (titleRef.current && descRef.current && buttonRef.current && !isInitialized) {
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
    }
  }, [isInitialized]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transform transition-all duration-700 ease-out ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0 scale-100 relative' 
                    : 'opacity-0 translate-x-8 scale-95 absolute inset-0 flex flex-col justify-center pointer-events-none'
                }`}
              >
                <h1 ref={titleRef} className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 xs:mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl transform transition-all duration-500 hover:scale-105 leading-tight px-2">
                  {slide.title}
                </h1>
                <p ref={descRef} className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 mb-4 xs:mb-5 sm:mb-6 lg:mb-8 max-w-[280px] xs:max-w-[320px] sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto backdrop-blur-sm bg-white/10 rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 lg:p-6 border border-white/20 shadow-2xl transform transition-all duration-500 hover:bg-white/15 leading-relaxed">
                  {slide.description}
                </p>
                <button ref={buttonRef} className="btn-primary text-xs xs:text-sm sm:text-base lg:text-lg px-4 xs:px-6 sm:px-8 lg:px-10 py-2 xs:py-3 sm:py-4 lg:py-5 hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-primary/60 relative overflow-hidden group rounded-lg sm:rounded-xl border border-primary/30 font-semibold">
                  <span className="relative z-10">{slide.buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-1 xs:left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-dark bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 xs:right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-dark bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary scale-110' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
