'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer id="footer-section" className="bg-[#131518] text-white pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 md:px-12 lg:px-20 rounded-2xl sm:rounded-3xl">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 sm:gap-10 md:gap-12 mb-0">
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
    </footer>
  );
}