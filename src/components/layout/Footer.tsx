'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="text-gray-300 pt-12 xs:pt-16 sm:pt-20 pb-6 xs:pb-8 relative overflow-hidden" style={{backgroundImage: 'url(/img/f1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 xs:gap-8 mb-6 xs:mb-8 items-start">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-5">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="flex items-start">
                <Image
                  src="/img/main logo.png"
                  alt="Home Electra International Logo"
                  width={144}
                  height={115}
                  className="mr-6 flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">Home Electra International</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    We are a trusted provider of comprehensive heating and air conditioning services in Bangladesh. 
                    Our expert team specializes in AC installation, repair, maintenance, and cooling solutions to 
                    ensure your comfort year-round.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mobile/Tablet Layout (iPhone XR and below) */}
            <div className="lg:hidden">
              <div className="flex flex-col xs:flex-row items-center xs:items-start mb-4 xs:mb-6">
                <Image
                  src="/img/main logo.png"
                  alt="Home Electra International Logo"
                  width={120}
                  height={96}
                  className="xs:mr-4 sm:mr-6 xs:ml-0 flex-shrink-0 mb-3 xs:mb-0"
                />
                <div className="text-center xs:text-left">
                  <h2 className="text-lg xs:text-xl font-bold text-white mb-2 xs:mb-4">Home Electra International</h2>
                  <p className="text-gray-400 text-xs xs:text-sm leading-relaxed">
                    We are a trusted provider of comprehensive heating and air conditioning services in Bangladesh. 
                    Our expert team specializes in AC installation, repair, maintenance, and cooling solutions to 
                    ensure your comfort year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1 lg:col-span-4">
            <h3 className="text-white text-base xs:text-lg lg:text-xl font-semibold mb-3 xs:mb-4 text-center sm:text-left">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm lg:text-base">House #41, Road #07, Block # E, Banasree, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-3 text-primary flex-shrink-0" />
                <span className="text-gray-400 text-sm lg:text-base">+8801324-718981</span>
              </div>
              <div className="flex items-start">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm lg:text-base break-all">homeelectrainternational@gmail.com</span>
              </div>
              <div className="flex items-start">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-3 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div>
                  <span className="text-gray-400 text-sm lg:text-base block">Opens: 10:00 AM - 11:30 PM</span>
                  <span className="text-gray-400 text-sm lg:text-base">Everyday</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h3 className="text-white text-base xs:text-lg lg:text-xl font-semibold mb-3 xs:mb-4 text-center sm:text-left">Our Services</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm lg:text-base py-1">
                AC Installation
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm lg:text-base py-1">
                Cooling Services
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm lg:text-base py-1">
                Heating Services
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors duration-300 text-sm lg:text-base py-1">
                Annual Inspections
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 All Rights Reserved by Home Electra International | Developed by <Link href="https://portfolio-gold-two-m3rawkfkqv.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Md Mozahidul Islam</Link> and Md. Farhan Kabir | Designed by <Link href="https://portfolio-gold-two-m3rawkfkqv.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Md Mozahidul Islam</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://www.facebook.com/HomeElectraInternational" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 backdrop-blur-xl text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 hover:border hover:border-white/30" style={{backdropFilter: 'blur(15px) saturate(150%)'}}>
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://www.youtube.com/@homeelectra" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 backdrop-blur-xl text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25 hover:border hover:border-white/30" style={{backdropFilter: 'blur(15px) saturate(150%)'}}>
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com/homeelectrainternational" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 backdrop-blur-xl text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 hover:border hover:border-white/30" style={{backdropFilter: 'blur(15px) saturate(150%)'}}>
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://wa.me/8801324718981" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 backdrop-blur-xl text-gray-300 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25 hover:border hover:border-white/30" style={{backdropFilter: 'blur(15px) saturate(150%)'}}>
                <WhatsAppIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
