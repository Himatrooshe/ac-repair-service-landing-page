'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Award, CheckCircle, Star, Shield } from 'lucide-react';

const CertificateSection = () => {
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
      className="py-20 bg-gradient-to-br from-light via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-orange-500 rounded-2xl mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
              Certified Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our commitment to quality and professional standards is backed by industry certifications and years of proven expertise in Air Conditioning services.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Certificate Image */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Certificate Container with Premium Effects */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                {/* Golden Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-1 rounded-3xl">
                  <div className="bg-white rounded-3xl h-full w-full"></div>
                </div>
                
                {/* Certificate Image */}
                <div className="relative p-6">
                  <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177902/og_certificate_lzuofy.jpg"
                      alt="Professional AC Repair Service Certificate"
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                      priority
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
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                  Professional Certification & Quality Assurance
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We take pride in our certified expertise and commitment to maintaining the highest standards in the Air Conditioning industry. Our team undergoes continuous training and certification to ensure top-quality service delivery.
                </p>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{ animationDelay: `${achievement.delay}s` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">200+</div>
                    <div className="text-sm text-gray-600">Satisfied Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <button className="btn-primary text-lg min-w-[250px] group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Our Certified Team
                    <Award className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Work Orders Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                Prestigious Client Work Orders
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Trusted by prestigious institutions including diplomatic missions and leading universities
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Royal Embassy Work Order */}
            <div className={`transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Premium Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>
                
                <div className="relative p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-dark">Royal Embassy of Saudi Arabia</h4>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Diplomatic Client
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">Official Work Order - Compressor Supply Contract</p>
                  </div>
                  
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-4">
                    <Image
                      src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177895/emb_order_kivj4n.jpg"
                      alt="Royal Embassy of Saudi Arabia Work Order"
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Contract Value: 1,872,000 Taka</span>
                    <span className="flex items-center">
                      <Shield className="w-4 h-4 mr-1 text-green-600" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform rotate-12">
                  Embassy Approved
                </div>
              </div>
            </div>

            {/* East West University Work Order */}
            <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Premium Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-1 rounded-2xl">
                  <div className="bg-white rounded-2xl h-full w-full"></div>
                </div>
                
                <div className="relative p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-dark">East West University</h4>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Academic Client
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">Work Order - AC Installation & Maintenance</p>
                  </div>
                  
                  <div className="relative h-80 rounded-xl overflow-hidden shadow-lg mb-4">
                    <Image
                      src="https://res.cloudinary.com/dxcjpicou/image/upload/v1760177894/east_order_zggezv.jpg"
                      alt="East West University Work Order"
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Project: Academic Building AC Systems</span>
                    <span className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-blue-600" />
                      Completed
                    </span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform rotate-12">
                  University Approved
                </div>
              </div>
            </div>
          </div>

          {/* Client Trust Section */}
          <div className={`mt-12 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h4 className="text-2xl font-bold text-dark mb-4">Trusted by Leading Institutions</h4>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our expertise is recognized by prestigious clients including diplomatic missions and top universities. 
                These official work orders demonstrate our capability to handle large-scale, high-profile projects with 
                the highest standards of professionalism and quality.
              </p>
              <div className="flex items-center justify-center mt-6 space-x-8">
                <div className="flex items-center text-gray-600">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-semibold">Diplomatic Contracts</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-semibold">Academic Partnerships</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  <span className="font-semibold">Verified Excellence</span>
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
