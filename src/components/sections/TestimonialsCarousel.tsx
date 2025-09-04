'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6 animate-fade-in">
            What They Say About Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left side images */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="relative h-96">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{
                    top: index === 0 ? '10%' : index === 1 ? '50%' : '10%',
                    left: index === 0 ? '50%' : index === 1 ? '10%' : '10%',
                    transform: index === 0 ? 'translateX(-50%)' : index === 1 ? 'translateY(-50%)' : 'none',
                    width: index === 0 ? '70px' : index === 1 ? '60px' : '50px',
                    height: index === 0 ? '70px' : index === 1 ? '60px' : '50px',
                  }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover animate-pulse-slow"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Center testimonial */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="relative h-24 w-24 mx-auto mb-6">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
                <h4 className="text-xl font-semibold text-dark mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-primary font-medium">
                  {testimonials[currentTestimonial].profession}
                </p>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right side images */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="relative h-96">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{
                    top: index === 0 ? '10%' : index === 1 ? '10%' : '50%',
                    right: index === 0 ? '10%' : index === 1 ? '10%' : '10%',
                    transform: index === 2 ? 'translateY(-50%)' : 'none',
                    width: index === 0 ? '50px' : index === 1 ? '60px' : '70px',
                    height: index === 0 ? '50px' : index === 1 ? '60px' : '70px',
                  }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover animate-pulse-slow"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
