'use client';

import Image from 'next/image';
import { features } from '@/data/features';

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-8">
              Few Reasons Why People Choosing Us!
            </h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={50}
                      height={50}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/img/feature.jpg"
                alt="Features"
                width={600}
                height={500}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
