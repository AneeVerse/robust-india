'use client';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useNavbarVisibility } from '@/context/NavbarVisibilityContext';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSearch } from '@/hooks/useSearch';
import SearchDropdown from './SearchDropdown';

// Nav link definitions will be built with translated names inside the component.

export default function Navbar() {
  const { scrollY } = useScroll();
  const { showNavbar } = useNavbarVisibility();
  
  // Make it move slightly upward on scroll
  const y = useTransform(scrollY, [0, 100], [0, -10]);

  return (
    <motion.nav
      style={{ y }}
      className={`fixed bottom-2 sm:bottom-2 md:bottom-2 left-0 w-full z-40 flex justify-center px-1 sm:px-2 transition-opacity duration-300 pointer-events-none ${
        showNavbar ? 'opacity-100' : 'opacity-0 sm:opacity-100'
      }`}
    >
      <NavbarContent />
    </motion.nav>
  );
}

function NavbarContent() {
  const { t, i18n } = useTranslation('common');
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Check if current language is Russian
  const isRussian = i18n.language === 'ru';

  // Use the search hook with translation function
  const { results, isSearching, hasResults } = useSearch(search, t);

  const navLinks = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.product'), href: '/product/chemical' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.contact'), href: '/contact', highlight: true },
  ];

  // Handle search form submission
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      // Navigate to first result if available
      const firstResult = Object.values(results)[0]?.[0];
      if (firstResult) {
        window.location.href = firstResult.url;
        setShowResults(false);
        setSearch('');
        inputRef.current?.blur();
      }
    }
  };

  // Handle input focus
  const handleFocus = () => {
    setFocused(true);
    if (search.length >= 2) {
      setShowResults(true);
    }
  };

  // Handle input blur
  const handleBlur = () => {
    setFocused(false);
    // Delay hiding results to allow clicks on results
    setTimeout(() => setShowResults(false), 150);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setShowResults(value.length >= 2);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showResults) {
        setShowResults(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showResults]);

  // Handle clicks outside search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative flex items-center bg-gradient-to-b from-[#3c3a38]/95 to-[#252423]/95 rounded-xl sm:rounded-2xl md:rounded-3xl px-1.5 sm:px-2 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-2.5 lg:py-3 shadow-lg mx-auto /* border border-[#3c3a38] */ pointer-events-auto backdrop-blur-md transition-all duration-300 ${
      isRussian ? 'max-w-3xl' : 'max-w-2xl'
    }`} style={{ width: isRussian ? 'max-content' : 'max-content' }}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      {/* Logo section */}
      <div className="flex items-center mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0">
        <Link href="/" className="block p-0.5 sm:p-1 -m-0.5 sm:-m-1 rounded-lg hover:bg-white/10 transition-colors duration-200">
          <Image
            src="/images/nav-logo.png"
            alt="Robust India Nav Logo"
            width={36}
            height={36}
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          />
        </Link>
      </div>

      {/* Vertical line */}
      <div className="w-px h-6 sm:h-8 md:h-10 bg-white/20 mr-1.5 sm:mr-2 md:mr-3 flex-shrink-0" />
      
      {/* Navigation links */}
      <div className={`flex gap-x-0.5 sm:gap-x-1 md:gap-x-2 justify-start min-w-0 transition-all duration-300 ${isRussian ? 'gap-x-0.5' : ''} flex-1 ${focused ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {navLinks.map((link) => (
          link.href.startsWith('#') ? (
            link.highlight ? (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0"
              >
                <a
                  href={link.href}
                  className={`group relative overflow-hidden font-bold bg-gradient-to-r from-[#6164F6] to-[#7C3AED] text-white shadow-md hover:shadow-lg transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6164F6]/30 active:scale-95 backdrop-blur-sm rounded-md sm:rounded-lg flex items-center justify-center ${
                    isRussian 
                      ? 'text-xs sm:text-sm md:text-base px-1 sm:px-1.5 md:px-2.5 lg:px-3 py-1 sm:py-1.5 md:py-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[38px]'
                      : 'text-xs sm:text-sm md:text-base px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[38px]'
                  }`}
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#6164F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative flex items-center">
                  <span className="whitespace-nowrap text-center leading-tight">{link.name}</span>
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={16}
                    height={16}
                    className={`ml-0.5 sm:ml-1 flex-shrink-0 ${isRussian ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 hidden md:block' : 'w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 hidden sm:block'}`}
                  />
                  </div>
                </a>
              </motion.div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`font-bold text-white/90 hover:bg-white/10 rounded-md sm:rounded-lg transition-colors duration-200 flex items-center justify-center flex-shrink-0 ${
                  isRussian
                    ? 'text-xs sm:text-sm md:text-base px-1 sm:px-1.5 md:px-2.5 lg:px-3 py-1 sm:py-1.5 md:py-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[38px]'
                    : 'text-xs sm:text-sm md:text-base px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[38px]'
                }`}
              >
                <span className="whitespace-nowrap text-center leading-tight">{link.name}</span>
              </a>
            )
          ) : (
            link.highlight ? (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0"
              >
                <Link
                  href={link.href}
                  className={`group relative overflow-hidden font-bold bg-gradient-to-r from-[#6164F6] to-[#7C3AED] text-white shadow-md hover:shadow-lg transform transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#6164F6]/30 active:scale-95 backdrop-blur-sm rounded-md sm:rounded-lg flex items-center justify-center ${
                    isRussian 
                      ? 'text-xs sm:text-sm md:text-base px-1 sm:px-1.5 md:px-2.5 lg:px-3 py-1 sm:py-1.5 md:py-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[38px]'
                      : 'text-xs sm:text-sm md:text-base px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[38px]'
                  }`}
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#6164F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative flex items-center">
                  <span className="whitespace-nowrap text-center leading-tight">{link.name}</span>
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={16}
                    height={16}
                    className={`ml-0.5 sm:ml-1 flex-shrink-0 ${isRussian ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 hidden md:block' : 'w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 hidden sm:block'}`}
                  />
                  </div>
                </Link>
              </motion.div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold text-white/90 hover:bg-white/10 rounded-md sm:rounded-lg transition-colors duration-200 flex items-center justify-center flex-shrink-0 ${
                  isRussian
                    ? 'text-xs sm:text-sm md:text-base px-1 sm:px-1.5 md:px-2.5 lg:px-3 py-1 sm:py-1.5 md:py-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[38px]'
                    : 'text-xs sm:text-sm md:text-base px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 min-h-[28px] sm:min-h-[32px] md:min-h-[36px] lg:min-h-[38px]'
                }`}
              >
                <span className="whitespace-nowrap text-center leading-tight">{link.name}</span>
              </Link>
            )
          )
        ))}
      </div>

      {/* Vertical line before search */}
      <div className={`w-px h-6 sm:h-8 md:h-10 bg-white/20 mx-1.5 sm:mx-2 md:mx-3 flex-shrink-0 transition-opacity duration-300 ${focused ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Search bar with dropdown */}
      <div ref={searchRef} className={`relative transition-all duration-300 cursor-pointer ${
        focused 
          ? 'w-full cursor-text'
          : 'w-8 sm:w-10 md:w-12 lg:w-10'
      }`} onClick={() => inputRef.current?.focus()}>
        <form onSubmit={handleSearchSubmit} className="relative flex items-center">
          <FiSearch className={`absolute left-2 sm:left-3 text-gray-400 w-3 h-3 sm:w-4 sm:h-4 pointer-events-none z-10 transition-all duration-300 ${focused ? 'opacity-100' : 'opacity-80'}`} />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={t('search.placeholder', 'Search chemical...')}
            className={`w-full pl-7 sm:pl-9 pr-2 sm:pr-3 py-1 sm:py-1.5 md:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm bg-[#232221]/80 text-white placeholder-gray-400 border-0 focus:ring-2 focus:ring-[#6164F6]/50 focus:ring-offset-0 outline-none shadow-inner transition-all duration-300 ${focused ? 'bg-[#232221]/95' : 'bg-transparent'} ${isRussian ? 'text-xs sm:text-sm' : ''} cursor-text`}
            style={{ minWidth: 0 }}
          />
        </form>

        {/* Search Results Dropdown */}
        <SearchDropdown
          results={results}
          isSearching={isSearching}
          hasResults={hasResults}
          query={search}
          isVisible={showResults && search.length >= 2}
          onClose={() => setShowResults(false)}
          onItemClick={() => {
            setSearch('');
            inputRef.current?.blur();
          }}
        />
      </div>
    </div>
  );
} 