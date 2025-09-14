'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isMounted) return;

    const container = containerRef.current;
    const particles: HTMLDivElement[] = [];

    // Create particles with fixed seed for consistency
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-20';
      
      // Use index-based positioning for consistency
      const leftPercent = (i * 7.3) % 100; // Pseudo-random but consistent
      const topPercent = (i * 13.7) % 100; // Pseudo-random but consistent
      
      particle.style.left = leftPercent + '%';
      particle.style.top = topPercent + '%';
      container.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles with deterministic values
    particles.forEach((particle, index) => {
      const xOffset = ((index * 17) % 100) - 50; // Deterministic "random"
      const yOffset = ((index * 23) % 100) - 50; // Deterministic "random"
      const duration = (index % 5) + 8; // Deterministic duration
      const opacity = ((index * 0.03) % 0.4) + 0.1; // Deterministic opacity
      
      gsap.to(particle, {
        y: yOffset,
        x: xOffset,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'none',
        delay: index * 0.1,
      });

      gsap.to(particle, {
        opacity: opacity,
        duration: (index % 3) + 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        delay: index * 0.1,
      });
    });

    // Cleanup
    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [isMounted]);

  // Don't render anything on server
  if (!isMounted) {
    return (
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleBackground;
