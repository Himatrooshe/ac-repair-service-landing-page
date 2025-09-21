'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';

// WhatsApp icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    let ticking = false;

    const updateProgress = () => {
      if (!bar) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      bar.style.width = progress + '%';
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    // Initial call
    updateProgress();
    
    // Use passive listener for better performance
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div id="scroll-progress" className="progress-bar" />
      {/* Topbar */}
      <div className="text-gray-300 py-2 px-0 hidden md:block relative overflow-hidden aurora" style={{backgroundImage: 'url(/img/besthero.png)', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat'}}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <div className="flex items-center relative z-10">
                <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                <a href="tel:+8801324718981" className="text-xs md:text-sm hover:text-primary transition-colors cursor-pointer underline hover:no-underline font-medium relative z-10" style={{pointerEvents: 'auto'}}>+8801324-718981</a>
              </div>
              <div className="flex items-center relative z-10">
                <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                <a href="mailto:homeelectrainternational@gmail.com" className="text-xs md:text-sm truncate max-w-[200px] lg:max-w-none hover:text-primary transition-colors cursor-pointer underline hover:no-underline font-medium relative z-10" style={{pointerEvents: 'auto'}}>homeelectrainternational@gmail.com</a>
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-4">    
              <Link href="#" className="text-sm hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Support</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-white/10" style={{backdropFilter: 'blur(20px) saturate(180%)'}}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 tilt">
              <Image
                src="/img/main logo.png"
                alt="Home Electra International Logo"
                width={60}
                height={45}
                className="xs:w-[70px] xs:h-[55px] sm:w-[85px] sm:h-[65px] lg:w-[105px] lg:h-[80px] mr-2 sm:mr-3"
              />
              
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <Link href="/" className="text-gray-800 font-medium px-4 py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-3 rounded-lg relative overflow-hidden group h-12 flex items-center min-w-[80px] justify-center btn-shine">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">Home</span>
                <span className="absolute inset-0 flex items-center justify-center text-primary transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">Home</span>
              </Link>
              <Link href="/about" className="text-gray-800 font-medium px-4 py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-3 rounded-lg relative overflow-hidden group h-12 flex items-center min-w-[100px] justify-center btn-shine">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">About Us</span>
                <span className="absolute inset-0 flex items-center justify-center text-primary transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">About Us</span>
              </Link>
              <Link href="/services" className="text-gray-800 font-medium px-4 py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-3 rounded-lg relative overflow-hidden group h-12 flex items-center min-w-[130px] justify-center whitespace-nowrap btn-shine">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">Our Services</span>
                <span className="absolute inset-0 flex items-center justify-center text-primary transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">Our Services</span>
              </Link>
              <Link href="/contact" className="text-gray-800 font-medium px-4 py-2 lg:px-5 lg:py-3 xl:px-6 xl:py-3 rounded-lg relative overflow-hidden group h-12 flex items-center min-w-[120px] justify-center whitespace-nowrap btn-shine">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:-translate-y-full">Contact Us</span>
                <span className="absolute inset-0 flex items-center justify-center text-primary transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">Contact Us</span>
              </Link>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex lg:flex items-center space-x-1 sm:space-x-2">
              <Link href="https://www.facebook.com/HomeElectraInternational" target="_blank" rel="noopener noreferrer" className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-ring">
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <Link href="https://www.youtube.com/@homeelectra" target="_blank" rel="noopener noreferrer" className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-ring">
                <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <Link href="https://instagram.com/homeelectrainternational" target="_blank" rel="noopener noreferrer" className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-ring">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <Link href="https://wa.me/8801324718981" target="_blank" rel="noopener noreferrer" className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-ring">
                <WhatsAppIcon className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/20" style={{backdropFilter: 'blur(20px) saturate(180%)'}}>
              <div className="px-3 pt-3 pb-4 space-y-2">
                <Link href="/" className="px-3 py-2 sm:px-4 sm:py-3 text-gray-800 rounded-lg relative overflow-hidden group h-10 sm:h-12 flex items-center text-sm sm:text-base btn-shine">
                  <span className="absolute inset-0 flex items-center px-3 sm:px-4 transition-transform duration-500 ease-out group-hover:-translate-y-full">Home</span>
                  <span className="absolute inset-0 flex items-center px-3 sm:px-4 text-primary transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">Home</span>
                </Link>
                <Link href="/about" className=" px-3 py-2 sm:px-4 sm:py-3 text-gray-800 rounded-lg relative overflow-hidden group h-10 sm:h-12 flex items-center text-sm sm:text-base btn-shine">
                  <span className="absolute inset-0 flex items-center px-3 sm:px-4 transition-transform duration-500 ease-out group-hover:-translate-y-full">About Us</span>
                  <span className="absolute inset-0 flex items-center px-3 sm:px-4 text-primary transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">About Us</span>
                </Link>
                <Link href="/services" className="px-3 py-2 sm:px-4 sm:py-3 text-gray-800 rounded-lg relative overflow-hidden group h-10 sm:h-12 flex items-center text-sm sm:text-base btn-shine">
                  <span className="absolute inset-0 flex items-center px-3 sm:px-4 transition-transform duration-500 ease-out group-hover:-translate-y-full">Our Services</span>
                  <span className="absolute inset-0 flex items-center px-3 sm:px-4 text-primary transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">Our Services</span>
                </Link>
                <Link href="/contact" className="px-3 py-2 sm:px-4 sm:py-3 text-gray-800 rounded-lg relative overflow-hidden group h-10 sm:h-12 flex items-center text-sm sm:text-base btn-shine">
                  <span className="absolute inset-0 flex items-center px-3 sm:px-4 transition-transform duration-500 ease-out group-hover:-translate-y-full">Contact Us</span>
                  <span className="absolute inset-0 flex items-center px-3 sm:px-4 text-primary transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">Contact Us</span>
                </Link>
                
                {/* Mobile Social Icons */}
                <div className="flex items-center justify-center space-x-3 pt-4 border-t border-white/20 mt-4">
                  <Link href="https://www.facebook.com/HomeElectraInternational" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-ring">
                    <Facebook className="w-4 h-4" />
                  </Link>
                  <Link href="https://www.youtube.com/@homeelectra" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-ring">
                    <Youtube className="w-4 h-4" />
                  </Link>
                  <Link href="https://instagram.com/homeelectrainternational" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-ring">
                    <Instagram className="w-4 h-4" />
                  </Link>
                  <Link href="https://wa.me/8801324718981" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors glow-ring">
                    <WhatsAppIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
