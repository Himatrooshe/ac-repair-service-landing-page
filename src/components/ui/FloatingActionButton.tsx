'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      gsap.to('.fab-option', {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    } else {
      gsap.to('.fab-option', {
        scale: 0,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: 'power2.in',
      });
    }
  }, [isExpanded]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
      {/* Floating Options */}
      <div className="absolute bottom-12 sm:bottom-14 lg:bottom-16 right-0 space-y-2 sm:space-y-3">
        <div
          className="fab-option bg-primary text-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg cursor-pointer hover:bg-secondary transition-colors"
          onClick={() => window.open('tel:+8801324718981')}
          style={{ scale: 0, opacity: 0 }}
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </div>
        <div
          className="fab-option bg-primary text-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg cursor-pointer hover:bg-secondary transition-colors"
          onClick={() => window.open('https://wa.me/8801324718981')}
          style={{ scale: 0, opacity: 0 }}
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </div>
      </div>

      {/* Main FAB */}
      {isVisible && (
        <div
          className="bg-primary text-white p-3 sm:p-4 lg:p-5 rounded-full shadow-lg cursor-pointer hover:bg-secondary transition-all duration-300 hover:scale-110 flex items-center justify-center"
          onClick={isVisible ? scrollToTop : () => setIsExpanded(!isExpanded)}
        >
          <svg 
            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            strokeWidth="2.5"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 14l5-5 5 5" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
