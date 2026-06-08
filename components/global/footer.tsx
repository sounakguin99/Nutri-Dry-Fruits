"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#231714] text-white pt-16 pb-0 overflow-hidden mt-10">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5A2B] via-[#D4AF37] to-[#8B5A2B]"></div>
     
      {/* Main Footer Content */}
      <div className="relative  mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Social Section */}
          <div className="space-y-6">
            <div className="flex flex-col items-start gap-4">
              <div className="bg-white p-2 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                <Image
                  src="/logo/logo.png"
                  alt="Nature's Harvest Logo"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>
              <span className="text-2xl font-serif font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">
                NATURE'S HARVEST
              </span>
              <p className="text-gray-400 text-sm leading-relaxed pr-4">
                Curating the finest, premium quality dry fruits, nuts, and exotic dates from around the world for your healthy lifestyle.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-xs text-[#D4AF37] font-semibold tracking-widest mb-4 uppercase">Follow Us</p>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3A2823] flex items-center justify-center text-gray-300 hover:bg-[#D4AF37] hover:text-[#231714] transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#3A2823] flex items-center justify-center text-gray-300 hover:bg-[#D4AF37] hover:text-[#231714] transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#3A2823] pb-2 inline-block">Explore</h3>
            <ul className="space-y-4">
              {['Store', 'Products'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#3A2823] pb-2 inline-block">Help</h3>
            <ul className="space-y-4">
              {[
                { name: 'FAQs', path: '/faqs' },
                { name: 'ABOUT US', path: '/about' },
                { name: 'CONTACT US', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#D4AF37] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-[#3A2823] pb-2 inline-block">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-[#3A2823] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#231714] transition-colors duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Call Us</span>
                  <a href="tel:+18001234567" className="text-gray-300 hover:text-white transition-colors font-medium">+1 (800) 123-4567</a>
                </div>
              </div>

              <div className="flex items-start gap-4 text-gray-400 group">
                <div className="w-10 h-10 rounded-full bg-[#3A2823] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#231714] transition-colors duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Email Us</span>
                  <a href="mailto:contact@naturesharvest.com" className="text-gray-300 hover:text-white transition-colors font-medium">contact@naturesharvest.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1A110F] border-t border-[#3A2823]">
        <div className=" mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} <span className="text-[#D4AF37]">Nature's Harvest</span>. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-[#D4AF37] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-[#D4AF37] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300">
                Terms And Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
