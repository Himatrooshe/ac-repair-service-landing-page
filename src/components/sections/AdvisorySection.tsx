'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Award, Briefcase, GraduationCap, Globe, Star, Shield, ChevronRight } from 'lucide-react';

const AdvisorySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const careerHighlights = [
    {
      period: "2008–2022",
      company: "Crown Cement",
      position: "Executive Director",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      period: "2002–2008", 
      company: "Meghna Group of Industries",
      position: "General Manager",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600"
    },
    {
      period: "1995–2001",
      company: "Bashundhara Group",
      position: "Chief Engineer",
      icon: Shield,
      color: "from-green-500 to-green-600"
    }
  ];

  const achievements = [
    {
      icon: GraduationCap,
      title: "B.Sc. Mechanical Engineering",
      subtitle: "Specialized in AC & Refrigeration (1984)",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "IEB Fellow (4408)",
      subtitle: "Institution of Engineers, Bangladesh",
      color: "text-purple-600"
    },
    {
      icon: Globe,
      title: "Global Training & Exposure",
      subtitle: "Japan, China, USA, Germany, Europe & Asia",
      color: "text-green-600"
    },
    {
      icon: Star,
      title: "3+ Decades Experience",
      subtitle: "Air-Conditioning & Industrial Operations",
      color: "text-orange-600"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary to-orange-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-6 shadow-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 sm:mb-6">
              Our Distinguished Advisor
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Backed by decades of engineering excellence and industrial leadership in Bangladesh&apos;s most prestigious organizations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Advisor Profile */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Premium Photo Frame */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
                {/* Golden Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-orange-600 p-1 rounded-3xl">
                  <div className="bg-white rounded-3xl h-full w-full"></div>
                </div>
                
                {/* Photo Container */}
                <div className="relative p-3 sm:p-4 lg:p-6">
                  <div className="relative h-64 xs:h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177906/saiful_thc60o.jpg"
                      alt="Engr. Saiful Alam - Distinguished Advisor"
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>

                {/* Professional Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-primary to-orange-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg transform rotate-12 animate-pulse">
                  IEB Fellow ✓
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-primary rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-primary rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-primary rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-primary rounded-br-lg"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              {/* Name & Title */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-2">
                  Engr. Saiful Alam
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4">
                  <span className="font-semibold text-primary">IEB 4408, Fellow</span> • Strategic Advisor
                </p>
                <div className="inline-flex items-center bg-gradient-to-r from-primary to-orange-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  <Award className="w-4 h-4 mr-2" />
                  3+ Decades of Engineering Excellence
                </div>
              </div>

              {/* Professional Summary */}
              <div className="bg-gradient-to-r from-orange-50 to-primary/10 rounded-2xl p-4 sm:p-6 border border-orange-100">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  A seasoned professional in Mechanical Engineering with over three decades of expertise in 
                  air-conditioning, refrigeration, and large-scale industrial operations. Graduated in 1984 
                  with specialization in AC & Refrigeration, bringing invaluable leadership and technical 
                  expertise to Home Electra International.
                </p>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`group bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-dark text-xs sm:text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {achievement.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Career Journey Section */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-dark mb-4">
              Distinguished Career Journey
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Key leadership roles in Bangladesh&apos;s most prominent industrial organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {careerHighlights.map((career, index) => {
              const IconComponent = career.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  {/* Timeline connector */}
                  {index < careerHighlights.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  )}
                  
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${career.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg px-3 py-1 inline-block mb-3">
                      <span className="text-sm font-bold text-gray-700">{career.period}</span>
                    </div>
                    
                    <h4 className="text-base sm:text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                      {career.position}
                    </h4>
                    
                    <p className="text-gray-600 font-medium">
                      {career.company}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Experience Section */}
        <div className={`mt-12 sm:mt-16 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-primary to-orange-500 text-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
            <div className="mb-6">
              <Globe className="w-12 h-12 mx-auto mb-4 animate-pulse" />
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Global Training & Exposure</h4>
            </div>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 max-w-4xl mx-auto">
              Advanced technical training in Japan with extensive international exposure across 
              <span className="font-semibold"> China, Japan, Indonesia, Malaysia, Singapore, Thailand, India, Germany, Austria, Spain, and the USA</span>, 
              bringing world-class engineering practices and global insights to our operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm">
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">International Training</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span className="font-semibold">10+ Countries Visited</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-semibold">Global Best Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorySection;
