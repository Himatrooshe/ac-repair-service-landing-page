'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/img/icon/icon-02-light.png"
                alt="AirCon Logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <h2 className="text-2xl font-bold text-white">AirCon</h2>
            </div>
            <p className="text-gray-400 mb-6">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
              sed stet lorem sit clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit.
            </p>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 pr-20 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-2 bg-primary hover:bg-secondary text-white px-4 py-1.5 rounded text-sm transition-colors">
                SignUp
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>123 Street, New York, USA</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+012 345 67890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>info@example.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors">
                AC Installation
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors">
                Cooling Services
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors">
                Heating Services
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-primary transition-colors">
                Annual Inspections
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © <Link href="#" className="text-primary hover:text-white transition-colors">Your Site Name</Link>, All Right Reserved.
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              Designed By <Link href="https://htmlcodex.com" className="text-primary hover:text-white transition-colors">HTML Codex</Link> 
              {' '}Distributed by <Link href="https://themewagon.com" className="text-primary hover:text-white transition-colors">ThemeWagon</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
