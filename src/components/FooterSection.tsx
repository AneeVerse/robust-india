import React from 'react';
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer id="footer-section" className="bg-[#131518] text-white py-20 px-6 md:px-20 rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left: large headline + nav */}
        <div className="md:w-2/3 space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            Don&apos;t settle for good,<br />
            let&apos;s go for <span className="relative inline-block">
              amazing,
              <img src="/images/SVG.png" alt="" className="absolute left-0 bottom-0 w-full h-auto pointer-events-none" />
            </span><br />
            together
          </h2>
          <nav className="flex flex-wrap items-center gap-8">
            {['Home', 'About', 'Projects', 'Process', 'Contact'].map((label, idx) => (
              <a
                key={idx}
                href={`#${label.toLowerCase()}`}
                className={`py-1 px-2 rounded-md transition-colors duration-200 ${
                  label === 'Home' ? 'bg-white/10' : 'hover:bg-white/10'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: newsletter signup */}
        <div className="md:w-1/3 space-y-4 mt-38">
          <h3 className="text-xl font-medium">Our newsletter</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Scale your platform the right way. Get expert insights on design,
            development, and growth.
          </p>
          <form className="w-full" autoComplete="off">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-[#6164F6]"
              />
              <button type="submit" className="absolute right-1 bottom-1 p-0 shadow-lg">
                <Image src="/images/Button - Subscribe to our newsletter.png" alt="Subscribe" width={32} height={32} className="h-8 w-8" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-gray-700 my-8" />
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p className="mb-2 md:mb-0 w-full md:w-auto text-center md:text-left">Robust india© — Helping businesses reach new heights since 2009</p>
        <a href="#terms" className="mb-2 md:mb-0 hover:text-white flex items-center w-full md:w-auto justify-center mr-50">Terms of Service</a>
        <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end">
          <a href="#linkedin" className="hover:text-white">LinkedIn&nbsp;↗</a>
          <a href="#twitter" className="hover:text-white">X&nbsp;Twitter&nbsp;↗</a>
        </div>
      </div>
    </footer>
  );
} 