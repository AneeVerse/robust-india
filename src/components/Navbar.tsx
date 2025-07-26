'use client';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useNavbarVisibility } from '@/context/NavbarVisibilityContext';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('common');

  const navLinks = [
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.product'), href: '/product/chemical' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.contact'), href: '/contact', highlight: true },
  ];

  return (
    <div className="relative flex items-center bg-gradient-to-b from-[#3c3a38]/95 to-[#252423]/95 rounded-2xl sm:rounded-3xl px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 shadow-lg max-w-lg mx-auto border border-[#3c3a38] pointer-events-auto backdrop-blur-md">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      {/* Logo section */}
      <div className="flex items-center mr-3 sm:mr-4 flex-shrink-0">
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
      
      {/* Vertical Divider */}
      <div
        className="h-8 w-[1px] mx-2 sm:mx-3 flex-shrink-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.35) 0%, #333 50%, #000 100%)',
          borderRadius: '1px',
        }}
      />
      
      {/* Navigation links */}
      <div className="flex gap-x-2 sm:gap-x-3 flex-1 justify-end min-w-0">
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
                  className="text-xs sm:text-sm font-bold bg-[#7BB9F7] text-white shadow-md hover:shadow-xl border border-transparent border-t-2 border-t-[#888aed] px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 flex items-center justify-center min-h-[32px] sm:min-h-[36px]"
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={16}
                    height={16}
                    className="ml-1 w-3 h-3 sm:w-4 sm:h-4 hidden sm:block flex-shrink-0"
                  />
                </a>
              </motion.div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-bold text-white/90 hover:bg-white/10 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors duration-200 flex items-center justify-center min-h-[32px] sm:min-h-[36px] flex-shrink-0"
              >
                <span className="whitespace-nowrap">{link.name}</span>
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
                  className="text-xs sm:text-sm font-bold bg-[#7BB9F7] text-white shadow-md hover:shadow-xl border border-transparent border-t-2 border-t-[#888aed] px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 flex items-center justify-center min-h-[32px] sm:min-h-[36px]"
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={16}
                    height={16}
                    className="ml-1 w-3 h-3 sm:w-4 sm:h-4 hidden sm:block flex-shrink-0"
                  />
                </Link>
              </motion.div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-bold text-white/90 hover:bg-white/10 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors duration-200 flex items-center justify-center min-h-[32px] sm:min-h-[36px] flex-shrink-0"
              >
                <span className="whitespace-nowrap">{link.name}</span>
              </Link>
            )
          )
        ))}
      </div>
    </div>
  );
} 