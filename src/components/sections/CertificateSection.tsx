'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Award, CheckCircle, Star, Shield } from 'lucide-react';

const CertificateSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1, // Lower threshold for mobile
        rootMargin: '50px' // Start animation earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Award,
      title: "Industry Leader",
      description: "Recognized excellence in Air Conditioning services",
      delay: 0.2
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "ISO certified repair standards",
      delay: 0.4
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Consistently rated by customers",
      delay: 0.6
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully authorized and protected",
      delay: 0.8
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-light via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-4 sm:mb-6 shadow-lg">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-dark mb-4 sm:mb-6 px-2">
              Certified Excellence
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Our commitment to quality and professional standards is backed by industry certifications and years of proven expertise in Air Conditioning services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Certificate Image */}
          <div className={`transform transition-all duration-700 ease-out delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Certificate Container with Premium Effects */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1">
                {/* Golden Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-2xl sm:rounded-3xl">
                  <div className="bg-white rounded-2xl sm:rounded-3xl h-full w-full"></div>
                </div>
                
                {/* Certificate Image */}
                <div className="relative p-4 sm:p-6">
                  <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177902/og_certificate_lzuofy.jpg"
                      alt="Professional AC Repair Service Certificate"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform rotate-12 animate-pulse">
                  Verified ✓
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-yellow-500 rounded-tl-lg"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-yellow-500 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-yellow-500 rounded-bl-lg"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-yellow-500 rounded-br-lg"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`transform transition-all duration-700 ease-out delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark mb-3 sm:mb-4 px-2">
                  Professional Certification & Quality Assurance
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 px-2">
                  We take pride in our certified expertise and commitment to maintaining the highest standards in the Air Conditioning industry. Our team undergoes continuous training and certification to ensure top-quality service delivery.
                </p>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{ animationDelay: `${achievement.delay}s` }}
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-primary mb-1">200+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Satisfied Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-2 sm:pt-4">
                <button className="btn-primary text-sm sm:text-base lg:text-lg min-w-[200px] sm:min-w-[250px] w-full sm:w-auto group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Our Certified Team
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Work Orders Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 lg:pt-16 border-t border-gray-200">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className={`transform transition-all duration-700 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark mb-3 sm:mb-4 px-2">
                Prestigious Client Work Orders
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                Trusted by prestigious institutions including diplomatic missions and leading universities
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Royal Embassy Work Order */}
            <div className={`transform transition-all duration-700 ease-out delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Premium Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-1 rounded-xl sm:rounded-2xl">
                  <div className="bg-white rounded-xl sm:rounded-2xl h-full w-full"></div>
                </div>
                
                <div className="relative p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h4 className="text-lg sm:text-xl font-bold text-dark">Royal Embassy of Saudi Arabia</h4>
                      <div className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-auto">
                        Diplomatic Client
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">Official Work Order - Compressor Supply Contract</p>
                  </div>
                  
                  <div className="relative h-48 sm:h-64 lg:h-80 rounded-lg sm:rounded-xl overflow-hidden shadow-lg mb-3 sm:mb-4">
                    <Image
                      src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177895/emb_order_kivj4n.jpg"
                      alt="Royal Embassy of Saudi Arabia Work Order"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 gap-1 sm:gap-0">
                    <span>Contract Value: 1,872,000 Taka</span>
                    <span className="flex items-center">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-green-600" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform rotate-12">
                  Embassy Approved
                </div>
              </div>
            </div>

            {/* East West University Work Order */}
            <div className={`transform transition-all duration-700 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Premium Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded-xl sm:rounded-2xl">
                  <div className="bg-white rounded-xl sm:rounded-2xl h-full w-full"></div>
                </div>
                
                <div className="relative p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h4 className="text-lg sm:text-xl font-bold text-dark">East West University</h4>
                      <div className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-auto">
                        Academic Client
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">Work Order - AC Installation & Maintenance</p>
                  </div>
                  
                  <div className="relative h-48 sm:h-64 lg:h-80 rounded-lg sm:rounded-xl overflow-hidden shadow-lg mb-3 sm:mb-4">
                    <Image
                      src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177894/east_order_zggezv.jpg"
                      alt="East West University Work Order"
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-600 gap-1 sm:gap-0">
                    <span>Project: Academic Building AC Systems</span>
                    <span className="flex items-center">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-blue-600" />
                      Completed
                    </span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform rotate-12">
                  University Approved
                </div>
              </div>
            </div>
          </div>

          {/* Client Trust Section */}
          <div className={`mt-8 sm:mt-10 lg:mt-12 text-center transform transition-all duration-700 ease-out delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-dark mb-3 sm:mb-4">Trusted by Leading Institutions</h4>
              <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
                Our expertise is recognized by prestigious clients including diplomatic missions and top universities. 
                These official work orders demonstrate our capability to handle large-scale, high-profile projects with 
                the highest standards of professionalism and quality.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center mt-4 sm:mt-6 space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                <div className="flex items-center justify-center text-gray-600">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                  <span className="font-semibold text-sm sm:text-base">Diplomatic Contracts</span>
                </div>
                <div className="flex items-center justify-center text-gray-600">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                  <span className="font-semibold text-sm sm:text-base">Academic Partnerships</span>
                </div>
                <div className="flex items-center justify-center text-gray-600">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                  <span className="font-semibold text-sm sm:text-base">Verified Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
