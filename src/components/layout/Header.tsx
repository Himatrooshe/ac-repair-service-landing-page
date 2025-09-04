'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Topbar */}
      <div className="bg-dark text-gray-300 py-2 px-0 hidden lg:block">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+012 345 6789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@example.com</span>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="#" className="text-sm hover:text-primary transition-colors">Home</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="text-sm hover:text-primary transition-colors">Support</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/img/icon/icon-02-primary.png"
                alt="AirCon Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors font-medium">
                About Us
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Our Services
              </Link>
              
              {/* Dropdown */}
              <div className="relative group">
                <button className="text-gray-600 hover:text-primary transition-colors font-medium flex items-center">
                  Pages
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/features" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50">
                    Features
                  </Link>
                  <Link href="/quote" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50">
                    Free Quote
                  </Link>
                  <Link href="/team" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50">
                    Our Team
                  </Link>
                  <Link href="/testimonials" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50">
                    Testimonial
                  </Link>
                  <Link href="/404" className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50">
                    404 Page
                  </Link>
                </div>
              </div>

              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors font-medium">
                Contact Us
              </Link>
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link href="#" className="w-10 h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-light text-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                  Our Services
                </Link>
                <Link href="/features" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="/quote" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                  Free Quote
                </Link>
                <Link href="/team" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                  Our Team
                </Link>
                <Link href="/testimonials" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                  Testimonial
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
