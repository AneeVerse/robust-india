'use client';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useNavbarVisibility } from '@/context/NavbarVisibilityContext';

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "/contact", highlight: true },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const { showNavbar } = useNavbarVisibility();
  
  // Make it move slightly upward on scroll
  const y = useTransform(scrollY, [0, 100], [0, -10]);

  return (
    <motion.nav
      style={{ y }}
      className={`fixed bottom-4 sm:bottom-6 md:bottom-2 left-0 w-full z-40 flex justify-center px-1 sm:px-2 transition-opacity duration-300 pointer-events-none ${
        showNavbar ? 'opacity-100' : 'opacity-0 sm:opacity-100'
      }`}
    >
      <NavbarContent />
    </motion.nav>
  );
}

function NavbarContent() {
  return (
    <div className="relative flex items-center bg-gradient-to-b from-[#3c3a38]/95 to-[#252423]/95 rounded-2xl sm:rounded-3xl px-5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 shadow-lg max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto overflow-hidden border border-[#3c3a38] pointer-events-auto backdrop-blur-md">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      <div className="flex items-center mr-2 sm:mr-3 md:mr-4 flex-shrink-0">
        <Link href="/" className="block p-1 -m-1 rounded-lg hover:bg-white/10 transition-colors duration-200">
          <Image
            src="/images/nav-logo.png"
            alt="Robust India Nav Logo"
            width={36}
            height={36}
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
          />
        </Link>
      </div>
      
      <div className="flex gap-x-3 sm:gap-x-2 md:gap-x-3 flex-1 justify-end">
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
                  className="text-xs sm:text-sm md:text-base font-bold bg-[#6164f6] text-white shadow-md hover:shadow-xl border border-transparent border-t-2 border-t-[#888aed] px-2 sm:px-3 md:px-4 py-2 sm:py-1.5 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center min-h-[36px] justify-center"
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={20}
                    height={20}
                    className="ml-0.5 sm:ml-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 hidden sm:block flex-shrink-0"
                  />
                </a>
              </motion.div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm md:text-base font-bold text-white/90 hover:bg-white/10 px-2 sm:px-3 md:px-4 py-2 sm:py-1.5 rounded-lg sm:rounded-xl transition-colors duration-200 flex items-center min-h-[36px] justify-center flex-shrink-0"
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
                  className="text-xs sm:text-sm md:text-base font-bold bg-[#6164f6] text-white shadow-md hover:shadow-xl border border-transparent border-t-2 border-t-[#888aed] px-2 sm:px-3 md:px-4 py-2 sm:py-1.5 rounded-lg sm:rounded-xl transition-all duration-300 flex items-center min-h-[36px] justify-center"
                >
                  <span className="whitespace-nowrap">{link.name}</span>
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={20}
                    height={20}
                    className="ml-0.5 sm:ml-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 hidden sm:block flex-shrink-0"
                  />
                </Link>
              </motion.div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm md:text-base font-bold text-white/90 hover:bg-white/10 px-2 sm:px-3 md:px-4 py-2 sm:py-1.5 rounded-lg sm:rounded-xl transition-colors duration-200 flex items-center min-h-[36px] justify-center flex-shrink-0"
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