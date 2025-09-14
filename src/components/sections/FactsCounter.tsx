'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { facts } from '@/data/facts';

// Custom hook for counting animation
const useCountUp = (target: number, duration: number = 2000, isActive: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, isActive]);

  return count;
};

const FactsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/img/p3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay similar to f1.png */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(20, 30, 60, 0.8) 50%, rgba(0, 0, 0, 0.9) 100%)',
          mixBlendMode: 'multiply'
        }}
      />
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
          {facts.map((fact, index) => {
            // Extract numeric value from string (e.g., "200+" -> 200)
            const numericValue = parseInt(fact.number.toString().replace(/\D/g, ''));
            const suffix = fact.number.toString().replace(/\d/g, '');
            
            // Use counting animation with staggered delay
            const animatedCount = useCountUp(numericValue, 2000, inView);
            
            return (
              <div
                key={fact.id}
                className="text-center animate-fade-in p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 mx-2 xs:mx-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 xs:mb-2 sm:mb-3 leading-tight">
                  {animatedCount}{suffix}
                </h3>
                <span className="text-primary text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium block leading-tight">
                  {fact.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FactsCounter;
