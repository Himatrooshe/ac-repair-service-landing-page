'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    if (sectionRef.current && contentRef.current && imagesRef.current) {
      // Animate content from left
      gsap.fromTo(contentRef.current, 
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animate images from right with stagger
      const images = imagesRef.current.querySelectorAll('img');
      gsap.fromTo(images,
        { opacity: 0, x: 100, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-8">
              Welcome To Best Cooling & Heating Service Center
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Image
                  src="/img/icon/icon-07-primary.png"
                  alt="Expert Technician"
                  width={40}
                  height={40}
                  className="mr-4 flex-shrink-0"
                />
                <h3 className="text-lg font-semibold text-dark">Expert Technician</h3>
              </div>
              <div className="flex items-center">
                <Image
                  src="/img/icon/icon-09-primary.png"
                  alt="Best Quality Services"
                  width={40}
                  height={40}
                  className="mr-4 flex-shrink-0"
                />
                <h3 className="text-lg font-semibold text-dark">Best Quality Services</h3>
              </div>
            </div>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-dark">+012 345 6789</h4>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-dark">info@example.com</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div ref={imagesRef} className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="text-right">
                <Image
                  src="/img/about-1.jpg"
                  alt="About us"
                  width={300}
                  height={400}
                  className="w-3/4 ml-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ marginTop: '25%' }}
                />
              </div>
              <div className="text-right">
                <Image
                  src="/img/about-3.jpg"
                  alt="About us"
                  width={200}
                  height={200}
                  className="w-1/2 ml-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Image
                  src="/img/about-2.jpg"
                  alt="About us"
                  width={400}
                  height={300}
                  className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <Image
                  src="/img/about-4.jpg"
                  alt="About us"
                  width={300}
                  height={200}
                  className="w-3/4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
