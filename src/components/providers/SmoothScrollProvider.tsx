'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    // Initialize Lenis with optimized settings
    lenisRef.current = new Lenis({
      duration: 1.0, // Reduced for less laggy feel
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smoother cubic easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Animation frame loop with better performance
    function raf(time: number) {
      lenisRef.current?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // Integrate with GSAP ScrollTrigger if available
    if (typeof window !== 'undefined' && window.gsap && window.gsap.registerPlugin) {
      try {
        const { ScrollTrigger } = window.gsap;
        if (ScrollTrigger) {
          lenisRef.current.on('scroll', ScrollTrigger.update);
          ScrollTrigger.refresh();
        }
      } catch (error) {
        console.log('ScrollTrigger integration skipped');
      }
    }

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
