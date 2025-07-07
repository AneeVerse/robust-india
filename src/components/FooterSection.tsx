'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useNavbarVisibility } from '@/context/NavbarVisibilityContext';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function FooterSection() {
  const { t } = useTranslation('common');
  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.product'), href: '/product/chemical' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.contact'), href: '/contact' },
  ];
  const { setShowNavbar } = useNavbarVisibility();
  const pathname = usePathname();

  // Function to check if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const footer = document.getElementById('footer-section');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Hide navbar when footer is in view on all screen sizes
        const isFooterInView = footerRect.top <= windowHeight && footerRect.bottom >= 0;
        
        if (isFooterInView) {
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
    <footer id="footer-section" className="bg-[#131518] text-white px-4 sm:px-6 md:px-12 lg:px-20 pt-4 sm:pt-6 pb-8 sm:pb-10 rounded-b-3xl sm:rounded-b-3xl rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="block sm:hidden">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-light leading-tight mb-8">
              {t('footer.headline1')}<br />
              {t('footer.headline2Before')}
              <span className="relative inline-block">
                {t('footer.headlineHighlight')}
                <svg className="absolute left-0 bottom-0 w-full h-auto pointer-events-none -mb-2 -ml-1" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12C50 8, 100 8, 150 10C170 10.5, 190 11, 195 12" stroke="#6164F6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </span><br />
              {t('footer.headline2After')}
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="flex justify-between mb-12">
            {/* Left Column - Navigation */}
            <div className="flex-1">
              <nav className="space-y-4">
                {navLinks.map((link, idx) => (
                  <div key={idx}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className={`block text-lg ${
                          isActiveLink(link.href) 
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
                  <p className="text-sm leading-relaxed">© 2025 Robust India<br />{t('footer.allRights')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-700 mb-8" />

          {/* Newsletter Section */}
          <div className="mb-10">
            {/* Logo + Text block, styled like HeroSection, above newsletter */}
            <div className="flex items-center justify-center mb-8 mt-0 gap-3">
              <Image
                src="/images/nav-logo.png"
                alt="Robust India Logo"
                width={50}
                height={50}
                className="mr-2 sm:mr-3 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
                priority
                unoptimized
              />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white uppercase">Robust India</span>
            </div>
            <h3 className="text-xl font-bold mb-4">{t('footer.newsletterTitle')}</h3>
            <p className="text-gray-300 text-base mb-6 leading-relaxed">
              {t('footer.newsletterDescription')}
            </p>
            <form className="w-full" autoComplete="off">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder={t('footer.newsletterPlaceholder')}
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
              <Link href="/terms" className="hover:text-white">{t('footer.terms')}</Link>
              <span>© 2025</span>
            </div>
            
            <div className="text-center ml-6">
              <a href="https://www.aneeverse.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm inline-flex items-center gap-2 group ">
                <span >{t('footer.designedBy')} <span className="hover:underline">Aneeverse</span></span>
                <svg width="16" height="16" viewBox="0 0 314.1 314.1" className="fill-gray-400 group-hover:fill-white transition-colors duration-200">
                  <path d="M157.1,42c42.5,42.2,55,86.1,55,86.1l-55-46.6c-27.9,23.5-49.7,66-49.7,66l43.2,36.9l8.6-11.6l-28.7-27.2
                    c8.2-23.1,26.6-36.4,26.6-36.4c14.2,4.7,61.8,50.2,61.8,50.2c9-10.8,19.8-49.8,19.8-49.8c-15.7-27.8-81.6-80-81.6-80
                    C98.2,68.5,39.2,156.9,39.2,156.9l0,0c4.9,12.2,12.9,22.9,23.3,31.1l2.1,1.6C82,127.4,157.1,42,157.1,42z"/>
                  <path d="M157,272.1C114.5,230,101.9,186,101.9,186l55.1,46.5c27.9-23.5,49.7-66,49.7-66l-43.2-36.9l-8.6,11.6
                    l28.7,27.2c-8.2,23.1-26.5,36-26.5,36c-14.2-4.7-61.8-49.8-61.8-49.8c-8.9,10.8-19.8,49.8-19.8,49.8c15.7,27.8,81.6,80,81.6,80
                    c58.8-38.8,117.9-127.2,117.9-127.2l0,0c-4.9-12.2-12.9-22.9-23.3-31.1l-2.1-1.6C232.1,186.7,157,272.1,157,272.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Keep existing */}
        <div className="hidden sm:block relative">
          {/* Absolutely positioned logo+text block, free from newsletter */}
          <div className="absolute top-0 right-0 flex items-center gap-2 z-20 p-4 mt-12 mr-2 ">
            <Image
              src="/images/nav-logo.png"
              alt="Robust India Logo"
              width={60}
              height={60}
              className="w-16 h-16 lg:w-16 lg:h-16"
              priority
              unoptimized
            />
            <span className="text-3xl lg:text-[2.5rem] font-extrabold tracking-tight text-white uppercase">Robust India</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-10 md:gap-12 mb-0">
            {/* Left: large headline + nav */}
            <div className="md:w-2/3 space-y-4 mt-12">
              <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 5rem)' }} className="font-light leading-tight mb-8">
                {t('footer.headline1')}<br />
                {t('footer.headline2Before')}
                <span className="relative inline-block">
                  {t('footer.headlineHighlight')}
                  <svg className="absolute left-0 bottom-0 w-full h-auto pointer-events-none -mb-5 -ml-2" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12C50 8, 100 8, 150 10C170 10.5, 190 11, 195 12" stroke="#6164F6" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  </svg>
                </span><br />
                {t('footer.headline2After')}
              </h2>
              <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-20 md:mt-24" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.7rem)' }}>
                {navLinks.map((link, idx) => (
                  link.href.startsWith('/') ? (
                    link.href === '/contact' ? (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={link.href}
                          className={`px-4 py-1.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl ${
                            isActiveLink(link.href) 
                              ? 'bg-[#6164f6] text-white' 
                              : 'hover:bg-[#6164f6] hover:text-white'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ) : (
                      <Link
                        key={idx}
                        href={link.href}
                        className={`px-4 py-1.5 rounded-xl transition-colors duration-200 ${
                          isActiveLink(link.href) 
                            ? 'bg-[#6164f6] text-white' 
                            : 'hover:bg-[#6164f6] hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  ) : (
                    link.href === '/contact' ? (
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

            {/* Right: logo + newsletter signup */}
            <div className="md:w-1/3 space-y-4 sm:space-y-5 md:space-y-6 mt-20 md:mt-12 md:mb-2 ">
              <h3 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.5rem)' }} className="font-bold">{t('footer.newsletterTitle')}</h3>
              <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }} className="text-gray-300 leading-relaxed max-w-md">
                {t('footer.newsletterDescription')}
              </p>
              <form className="w-full" autoComplete="off">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder={t('footer.newsletterPlaceholder')}
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}
                    className="w-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-[#6164F6]"
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
          <hr className="border-gray-700 mt-8 mb-2" />
          {/* Bottom bar */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 md:mt-8 pb-0 gap-4 md:gap-0">
            <p className="mb-2 md:mb-0 w-full md:w-auto text-center md:text-left">
              © 2025 Robust India {t('footer.allRights')}
            </p>
            <div className="flex flex-col items-center md:items-end w-full md:w-auto justify-center md:justify-end relative z-50">
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 md:gap-6 mb-2">
                <Link href="/terms" className="hover:text-white">{t('footer.terms')}</Link>
                <a href="#linkedin" className="hover:text-white">LinkedIn&nbsp;↗</a>
                <a href="#twitter" className="hover:text-white">X&nbsp;Twitter&nbsp;↗</a>
              </div>
              <div className="mr-9">
                <a href="https://www.aneeverse.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-sm inline-flex items-center gap-2 group">
                  <span>{t('footer.designedBy')} <span className="hover:underline">Aneeverse</span></span>
                  <svg width="20" height="20" viewBox="0 0 314.1 314.1" className="fill-gray-400 group-hover:fill-white transition-colors duration-200">
                    <path d="M157.1,42c42.5,42.2,55,86.1,55,86.1l-55-46.6c-27.9,23.5-49.7,66-49.7,66l43.2,36.9l8.6-11.6l-28.7-27.2
                      c8.2-23.1,26.6-36.4,26.6-36.4c14.2,4.7,61.8,50.2,61.8,50.2c9-10.8,19.8-49.8,19.8-49.8c-15.7-27.8-81.6-80-81.6-80
                      C98.2,68.5,39.2,156.9,39.2,156.9l0,0c4.9,12.2,12.9,22.9,23.3,31.1l2.1,1.6C82,127.4,157.1,42,157.1,42z"/>
                    <path d="M157,272.1C114.5,230,101.9,186,101.9,186l55.1,46.5c27.9-23.5,49.7-66,49.7-66l-43.2-36.9l-8.6,11.6
                      l28.7,27.2c-8.2,23.1-26.5,36-26.5,36c-14.2-4.7-61.8-49.8-61.8-49.8c-8.9,10.8-19.8,49.8-19.8,49.8c15.7,27.8,81.6,80,81.6,80
                      c58.8-38.8,117.9-127.2,117.9-127.2l0,0c-4.9-12.2-12.9-22.9-23.3-31.1l-2.1-1.6C232.1,186.7,157,272.1,157,272.1z"/>
                  </svg>
                </a>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}