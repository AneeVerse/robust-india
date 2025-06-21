'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useNavbarVisibility } from '@/context/NavbarVisibilityContext';

export default function FooterSection() {
  const { setShowNavbar } = useNavbarVisibility();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer-section');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if we're on mobile (width < 640px) and footer is in view
        const isMobile = window.innerWidth < 640;
        const isFooterInView = footerRect.top <= windowHeight && footerRect.bottom >= 0;
        
        if (isMobile && isFooterInView) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setShowNavbar]);

  return (
    <footer id="footer-section" className="bg-[#131518] text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-8 sm:pt-12 pb-20 sm:pb-16 rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-light leading-tight mb-8">
              Don&apos;t settle for good,<br />
              let&apos;s go for <span className="relative inline-block">
                amazing,
                <svg className="absolute left-0 bottom-0 w-full h-auto pointer-events-none -mb-2 -ml-1" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12C50 8, 100 8, 150 10C170 10.5, 190 11, 195 12" stroke="#6164F6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span><br />
              together
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="flex justify-between mb-12">
            {/* Left Column - Navigation */}
            <div className="flex-1">
              <nav className="space-y-4">
                {[
                  { label: 'Home', href: '/', active: true },
                  { label: 'About', href: '/about' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Process', href: '#process' },
                  { label: 'Contact', href: '/contact' },
                ].map((link, idx) => (
                  <div key={idx}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className={`block text-lg ${
                          link.active 
                            ? 'text-[#6164f6] font-medium' 
                            : 'text-white hover:text-[#6164f6] transition-colors duration-200'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="block text-lg text-white hover:text-[#6164f6] transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Right Column - Social Links & Logo */}
            <div className="flex-1 flex flex-col items-end text-right">
              {/* Social Links */}
              <div className="mb-8 space-y-2">
                <div><a href="#linkedin" className="text-gray-400 hover:text-white text-base">LinkedIn ↗</a></div>
                <div><a href="#twitter" className="text-gray-400 hover:text-white text-base">X Twitter ↗</a></div>
              </div>
              
              {/* Logo section */}
              <div className="text-gray-400">
                <div className="flex items-start justify-end mb-2">
                  <span className="inline-block mr-3 mt-1">
                    <svg className="inline-block h-4 w-10 text-gray-400" fill="none" viewBox="0 0 27 10" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6.10696C4.89099 6.10696 10.4306 6.79673 13.9209 4.58335C17.2052 2.50058 13.7605 -0.43632 11.8165 1.80381C11.0323 2.70752 10.4356 4.55498 10.9011 5.72606C13.5121 12.295 22.6498 7.43559 26 4.48555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <div className="text-right">
                    <p className="font-medium text-white text-base">Robust India</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm leading-relaxed">Helping businesses<br />reach new heights since<br />2009</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-700 mb-8" />

          {/* Newsletter Section */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">Our newsletter</h3>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              Scale your platform the right way. Get expert insights on design, development, and growth.
            </p>
            <form className="w-full" autoComplete="off">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-4 text-base bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-[#6164F6] pr-14"
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2.5 bg-[#6164F6] rounded-lg shadow-lg hover:bg-[#5155E8] transition-colors duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* Bottom Section */}
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center text-sm text-gray-500">
              <a href="#terms" className="hover:text-white">Terms of Service</a>
              <span>© 2025</span>
            </div>
            
            <div className="text-center">
              <a href="https://www.aneeverse.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm">
                Designed & Managed by Aneeverse
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Keep existing */}
        <div className="hidden sm:block">
          <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-12 mb-0">
            {/* Left: large headline + nav */}
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight">
                Don&apos;t settle for good,<br />
                let&apos;s go for <span className="relative inline-block">
                  amazing,
                  <svg className="absolute left-0 bottom-0 w-full h-auto pointer-events-none -mb-5 -ml-2" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12C50 8, 100 8, 150 10C170 10.5, 190 11, 195 12" stroke="#6164F6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  </svg>
                </span><br />
                together
              </h2>
              <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 text-base sm:text-lg md:text-xl lg:text-2xl">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About', href: '/about' },
                  { label: 'Projects', href: '/projects' },
                  { label: 'Process', href: '#process' },
                  { label: 'Contact', href: '/contact' },
                ].map((link, idx) => (
                  link.href.startsWith('/') ? (
                    link.label === 'Contact' ? (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={link.href}
                          className="px-4 py-1.5 rounded-xl transition-all duration-300 hover:bg-[#6164f6] hover:text-white shadow-md hover:shadow-xl"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ) : link.label === 'Home' ? (
                      <Link
                        key={idx}
                        href={link.href}
                        className="px-4 py-1.5 rounded-xl transition-colors duration-200 bg-[#6164f6] text-white"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        key={idx}
                        href={link.href}
                        className="px-4 py-1.5 rounded-xl transition-colors duration-200 hover:bg-[#6164f6] hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )
                  ) : (
                    link.label === 'Contact' ? (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <a
                          href={link.href}
                          className="px-4 py-1.5 rounded-md transition-all duration-300 hover:bg-[#6164f6] hover:text-white shadow-md hover:shadow-xl"
                        >
                          {link.label}
                        </a>
                      </motion.div>
                    ) : link.label === 'Home' ? (
                      <a
                        key={idx}
                        href={link.href}
                        className="px-4 py-1.5 rounded-xl transition-colors duration-200 bg-[#6164f6] text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        key={idx}
                        href={link.href}
                        className="px-4 py-1.5 rounded-xl transition-colors duration-200 hover:bg-[#6164f6] hover:text-white"
                      >
                        {link.label}
                      </a>
                    )
                  )
                ))}
              </nav>
            </div>

            {/* Right: newsletter signup */}
            <div className="md:w-1/3 space-y-4 sm:space-y-5 md:space-y-6 mt-8 sm:mt-12 md:mt-46">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Our newsletter</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Scale your platform the right way. Get expert insights on design,
                development, and growth.
              </p>
              <form className="w-full" autoComplete="off">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-[#6164F6]"
                  />
                  <button type="submit" className="absolute right-1 sm:right-1.5 md:right-2 bottom-1 sm:bottom-1.5 md:bottom-2 p-1.5 sm:p-2 bg-[#6164F6] rounded-lg shadow-lg hover:bg-[#5155E8] transition-colors duration-200">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Divider */}
          <hr className="border-gray-700 mt-26 mb-4" />
          {/* Bottom bar */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-400 mt-8 sm:mt-12 md:mt-16 pb-0 gap-4 md:gap-0">
            <p className="mb-2 md:mb-0 w-full md:w-auto text-center md:text-left">
              Robust India
              <span className="inline-block mx-2 align-middle">
                <svg className="inline-block h-2 w-6 text-gray-400" fill="none" viewBox="0 0 27 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6.10696C4.89099 6.10696 10.4306 6.79673 13.9209 4.58335C17.2052 2.50058 13.7605 -0.43632 11.8165 1.80381C11.0323 2.70752 10.4356 4.55498 10.9011 5.72606C13.5121 12.295 22.6498 7.43559 26 4.48555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              Helping businesses<br />  
               reach new heights since 2009
            </p>
            <div className="flex flex-col items-center md:items-end w-full md:w-auto justify-center md:justify-end relative z-50">
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 md:gap-6 mb-2">
                <a href="#terms" className="hover:text-white">Terms of Service</a>
                <a href="#linkedin" className="hover:text-white">LinkedIn&nbsp;↗</a>
                <a href="#twitter" className="hover:text-white">X&nbsp;Twitter&nbsp;↗</a>
              </div>
              <div className="mr-10">
                <a href="https://www.aneeverse.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-sm">
                  Designed & Managed by Aneeverse
                </a>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}