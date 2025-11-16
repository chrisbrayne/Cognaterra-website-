
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  // Using a simplified logo for the Navbar as the other one is too complex for a small header
  const Logo = () => (
    <div className="flex items-center">
       <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <defs>
            <linearGradient id="logoIconGradientNav" x1="14.7826" y1="3.65217" x2="14.7826" y2="41.4783" gradientUnits="userSpaceOnUse">
            <stop stopColor="#20c997"/>
            <stop offset="1" stopColor="#0D6EFD"/>
            </linearGradient>
        </defs>
        <path d="M19.7826 3.65217C21.7391 3.65217 23.3043 5.21739 23.3043 7.17391C23.3043 9.13043 21.7391 10.6957 19.7826 10.6957C17.8261 10.6957 16.2609 9.13043 16.2609 7.17391C16.2609 5.21739 17.8261 3.65217 19.7826 3.65217ZM29.2174 3.65217C31.1739 3.65217 32.7391 5.21739 32.7391 7.17391C32.7391 9.13043 31.1739 10.6957 29.2174 10.6957C27.2609 10.6957 25.6957 9.13043 25.6957 7.17391C25.6957 5.21739 27.2609 3.65217 29.2174 3.65217ZM10.3478 12.2609C10.3478 14.2174 11.913 15.7826 13.8696 15.7826C15.8261 15.7826 17.3913 14.2174 17.3913 12.2609C17.3913 10.3043 15.8261 8.73913 13.8696 8.73913C11.913 8.73913 10.3478 10.3043 10.3478 12.2609ZM16.2609 23.3043C16.2609 25.2609 17.8261 26.8261 19.7826 26.8261C21.7391 26.8261 23.3043 25.2609 23.3043 23.3043C23.3043 21.3478 21.7391 19.7826 19.7826 19.7826C17.8261 19.7826 16.2609 21.3478 16.2609 23.3043ZM0.869565 20.3478C0.869565 22.3043 2.43478 23.8696 4.3913 23.8696C6.34783 23.8696 7.91304 22.3043 7.91304 20.3478C7.91304 18.3913 6.34783 16.8261 4.3913 16.8261C2.43478 16.8261 0.869565 18.3913 0.869565 20.3478ZM6.34783 17.3913V12.2609H11.3913V17.3913H6.34783ZM11.3913 12.2609V7.13043H16.2609V12.2609H11.3913ZM16.2609 7.13043V2.00001H21.3043V7.13043H16.2609ZM21.3043 2.00001V-3.13044H26.3478V2.00001H21.3043ZM26.3478 -3.13044V2.00001H31.3913V-3.13044H26.3478ZM3.47826 21.3043V26.3478H8.52174V21.3043H3.47826ZM8.52174 26.3478V31.3913H13.5652V26.3478H8.52174ZM13.5652 31.3913V36.4348H18.6087V31.3913H13.5652ZM18.6087 36.4348V41.4783H23.6522V36.4348H18.6087ZM23.6522 41.4783V36.4348H28.6957V41.4783H23.6522Z" fill="url(#logoIconGradientNav)"/>
      </svg>
      <span className="ml-3 text-2xl font-bold font-montserrat text-[#1A2C4E]">COGNATERRA</span>
    </div>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="transition-opacity duration-300 hover:opacity-80" aria-label="Cognaterra Home">
            <Logo />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 font-semibold hover:text-brand-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#212529] focus:outline-none"
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-brand-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
