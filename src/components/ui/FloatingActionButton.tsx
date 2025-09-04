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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Options */}
      <div className="absolute bottom-16 right-0 space-y-3">
        <div
          className="fab-option bg-primary text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-secondary transition-colors"
          onClick={() => window.open('tel:+0123456789')}
          style={{ scale: 0, opacity: 0 }}
        >
          <Phone className="w-5 h-5" />
        </div>
        <div
          className="fab-option bg-primary text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-secondary transition-colors"
          onClick={() => window.open('mailto:info@example.com')}
          style={{ scale: 0, opacity: 0 }}
        >
          <MessageCircle className="w-5 h-5" />
        </div>
      </div>

      {/* Main FAB */}
      {isVisible && (
        <div
          className="bg-primary text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-secondary transition-all duration-300 hover:scale-110"
          onClick={isVisible ? scrollToTop : () => setIsExpanded(!isExpanded)}
        >
          <ArrowUp className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default FloatingActionButton;
