import React from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer id="footer-section" className="bg-[#131518] text-white py-12 px-6 md:px-20 rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-0">
        {/* Left: large headline + nav */}
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
            Don&apos;t settle for good,<br />
            let&apos;s go for <span className="relative inline-block">
              amazing,
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/SVG.png" alt="" className="absolute left-0 bottom-0 w-full h-auto pointer-events-none" />
            </span><br />
            together
          </h2>
          <nav className="flex flex-wrap items-center gap-8 mt-16 text-2xl">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
              { label: 'Projects', href: '/projects' },
              { label: 'Process', href: '#process' },
              { label: 'Contact', href: '#contact' },
            ].map((link, idx) => (
              link.href.startsWith('/') ? (
                <Link
                  key={idx}
                  href={link.href}
                  className="py-1 px-2 rounded-md transition-colors duration-200 hover:bg-[#6164f6] hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={link.href}
                  className="py-1 px-2 rounded-md transition-colors duration-200 hover:bg-[#6164f6] hover:text-white"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
        </div>

        {/* Right: newsletter signup */}
        <div className="md:w-1/3 space-y-6 mt-46">
          <h3 className="text-3xl font-bold">Our newsletter</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Scale your platform the right way. Get expert insights on design,
            development, and growth.
          </p>
          <form className="w-full" autoComplete="off">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 text-lg bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-[#ffffff]"
              />
              <button type="submit" className="absolute right-2 bottom-2 p-0 shadow-lg">
                <Image src="/images/Button - Subscribe to our newsletter.png" alt="Subscribe" width={40} height={40} className="h-10 w-10" />
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Divider */}
      <hr className="border-gray-700 mt-26 mb-4" />
      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 mt-16 pb-0">
        <p className="mb-2 md:mb-0 w-full md:w-auto text-center md:text-left">
          Robust India©
          <span className="inline-block mx-2 align-middle">
            <svg className="inline-block h-2 w-6 text-gray-400" fill="none" viewBox="0 0 27 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.10696C4.89099 6.10696 10.4306 6.79673 13.9209 4.58335C17.2052 2.50058 13.7605 -0.43632 11.8165 1.80381C11.0323 2.70752 10.4356 4.55498 10.9011 5.72606C13.5121 12.295 22.6498 7.43559 26 4.48555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          Helping businesses reach new heights since 2009
        </p>
        <a href="#terms" className="mb-2 md:mb-0 hover:text-white flex items-center w-full md:w-auto justify-center mr-50">Terms of Service</a>
        <div className="flex items-center gap-6 w-full md:w-auto justify-center md:justify-end">
          <a href="#linkedin" className="hover:text-white">LinkedIn&nbsp;↗</a>
          <a href="#twitter" className="hover:text-white">X&nbsp;Twitter&nbsp;↗</a>
        </div>
      </div>
    </footer>
  );
}