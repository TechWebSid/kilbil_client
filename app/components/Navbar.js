'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    ['Home', '/'],
    ['About Us', '/about'],
    ['Academics', '/academics'],
    ['Activities', '/activities'],
    ['Admissions', '/admissions'],
    ['Contact', '/contact']
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/80 backdrop-blur-lg shadow-lg' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image 
                  src="/kilbil_logo.png"
                  alt="School Logo" 
                  width={100}
                  height={100}
                  className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80">
                Kilbil The Learning Home
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map(([title, url]) => (
                <Link
                  key={title}
                  href={url}
                  className="relative px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 text-lg group"
                >
                  {title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                </Link>
              ))}
              <Link
                href="/admissions"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors duration-200 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`} />
                  <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 w-[80%] h-screen bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <Image 
              src="/kilbil_logo.png"
              alt="School Logo" 
              width={100}
              height={100}
              className="h-16 w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:bg-purple-50"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-2">
              {navLinks.map(([title, url]) => (
                <Link
                  key={title}
                  href={url}
                  className="block px-4 py-3 text-gray-700 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t">
            <Link
              href="/admissions"
              className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-medium text-center hover:opacity-90 transition-opacity duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar; 