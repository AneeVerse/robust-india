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
    <div className={`relative flex items-center bg-gradient-to-b from-[#3c3a38]/95 to-[#252423]/95 rounded-2xl sm:rounded-3xl px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 shadow-lg mx-auto /* border border-[#3c3a38] */ pointer-events-auto backdrop-blur-md transition-all duration-300 ${
      focused 
        ? isRussian ? 'max-w-4xl' : 'max-w-3xl' 
        : isRussian ? 'max-w-2xl' : 'max-w-xl'
    }`}>
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      {/* Logo section */}
      <div className="flex items-center mr-2 sm:mr-3 flex-shrink-0">
        <Link href="/" className="block p-1 -m-1 rounded-lg hover:bg-white/10 transition-colors duration-200">
          <Image
            src="/images/nav-logo.png"
            alt="Robust India Nav Logo"
            width={36}
            height={36}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          />
        </Link>
      </div>
      
      {/* Search bar with dropdown */}
      <div ref={searchRef} className={`relative transition-all duration-300 ${
        focused 
          ? isRussian ? 'w-48 sm:w-72 md:w-96' : 'w-48 sm:w-64 md:w-80'
          : isRussian ? 'w-28 sm:w-36 md:w-40' : 'w-24 sm:w-32 md:w-36'
      } mr-2 sm:mr-3`}>
        <form onSubmit={handleSearchSubmit} className="relative flex items-center">
          <FiSearch className="absolute left-3 text-gray-400 w-4 h-4 pointer-events-none z-10" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={t('search.placeholder', 'Search...')}
            className={`w-full pl-9 pr-3 py-1.5 sm:py-2 rounded-xl bg-[#232221]/80 text-white placeholder-gray-400 border border-[#444]/60 focus:border-[#7BB9F7] focus:ring-2 focus:ring-[#7BB9F7]/30 outline-none shadow-inner transition-all duration-300 ${focused ? 'ring-2 ring-[#7BB9F7]/30 bg-[#232221]/95' : ''} ${isRussian ? 'text-sm' : ''}`}
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
      
      {/* Navigation links */}
      <div className={`flex gap-x-1 sm:gap-x-2 flex-1 justify-end min-w-0 ${isRussian ? 'gap-x-0.5 sm:gap-x-1' : ''}`}>
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
                  className={`font-bold bg-[#7BB9F7] text-white shadow-md hover:shadow-xl border border-transparent border-t-2 border-t-[#888aed] rounded-lg transition-all duration-300 flex items-center justify-center ${
                    isRussian 
                      ? 'text-xs sm:text-sm px-1.5 sm:px-2.5 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px]'
                      : 'text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px]'
                  }`}
                >
                  <span className="whitespace-nowrap text-center leading-tight">{link.name}</span>
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={16}
                    height={16}
                    className={`ml-1 flex-shrink-0 ${isRussian ? 'w-3 h-3 sm:w-3.5 sm:h-3.5 hidden md:block' : 'w-3 h-3 sm:w-4 sm:h-4 hidden sm:block'}`}
                  />
                </a>
              </motion.div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className={`font-bold text-white/90 hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center justify-center flex-shrink-0 ${
                  isRussian
                    ? 'text-xs sm:text-sm px-1.5 sm:px-2.5 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px]'
                    : 'text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px]'
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
                  className={`font-bold bg-[#7BB9F7] text-white shadow-md hover:shadow-xl border border-transparent border-t-2 border-t-[#888aed] rounded-lg transition-all duration-300 flex items-center justify-center ${
                    isRussian 
                      ? 'text-xs sm:text-sm px-1.5 sm:px-2.5 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px]'
                      : 'text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px]'
                  }`}
                >
                  <span className="whitespace-nowrap text-center leading-tight">{link.name}</span>
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={16}
                    height={16}
                    className={`ml-1 flex-shrink-0 ${isRussian ? 'w-3 h-3 sm:w-3.5 sm:h-3.5 hidden md:block' : 'w-3 h-3 sm:w-4 sm:h-4 hidden sm:block'}`}
                  />
                </Link>
              </motion.div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold text-white/90 hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center justify-center flex-shrink-0 ${
                  isRussian
                    ? 'text-xs sm:text-sm px-1.5 sm:px-2.5 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px]'
                    : 'text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 min-h-[32px] sm:min-h-[36px]'
                }`}
              >
                <span className="whitespace-nowrap text-center leading-tight">{link.name}</span>
              </Link>
            )
          )
        ))}
      </div>
    </div>
  );
} 