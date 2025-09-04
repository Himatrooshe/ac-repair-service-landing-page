'use client';

import { useInView } from 'react-intersection-observer';
import { facts } from '@/data/facts';

const FactsCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(1, 10, 53, 0.8), rgba(1, 10, 53, 0.8)), url(/img/carousel-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {inView ? fact.number : 0}
              </h3>
              <span className="text-primary text-lg font-medium">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsCounter;
