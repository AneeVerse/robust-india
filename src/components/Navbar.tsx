'use client';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "/contact", highlight: true },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  // Make it move slightly upward on scroll
  const y = useTransform(scrollY, [0, 100], [0, -10]);

  // Navigation is always visible now

  return (
    <motion.nav
      style={{ y }}
      className="fixed bottom-2 left-0 w-full z-40 flex justify-center opacity-100 pointer-events-none"
    >
      <NavbarContent />
    </motion.nav>
  );
}

function NavbarContent() {
  return (
    <div className="relative flex items-center bg-gradient-to-b from-[#3c3a38]/95 to-[#252423]/95 rounded-3xl px-4 py-3 shadow-lg max-w-xl mx-auto overflow-hidden border px-2 border-[#3c3a38] pointer-events-auto">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      <div className="flex items-center mr-4">
        <Link href="/">
          <Image
            src="/images/nav-logo.png"
            alt="Robust India Nav Logo"
            width={36}
            height={36}
          />
        </Link>
      </div>
      <div className="flex gap-x-3">
        {navLinks.map((link) => (
          link.href.startsWith('#') ? (
            link.highlight ? (
                              <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
              >
                <a
                  href={link.href}
                  className="text-base font-bold bg-[#6164f6] text-white shadow-md hover:shadow-xl border border-transparent border-t-2 border-t-[#888aed] px-4 py-1.5 rounded-xl transition-all duration-300 flex items-center"
                >
                  {link.name}
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </a>
              </motion.div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-bold text-white/90 hover:bg-white/10 px-4 py-1.5 rounded-xl transition-colors duration-200 flex items-center"
              >
                {link.name}
              </a>
            )
          ) : (
            link.highlight ? (
                             <motion.div
                 key={link.name}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.href}
                  className="text-base font-bold bg-[#6164f6] text-white shadow-md hover:shadow-xl border border-transparent border-t-2 border-t-[#888aed] px-4 py-1.5 rounded-xl transition-all duration-300 flex items-center"
                >
                  {link.name}
                  <Image
                    src="/images/contact-logo.svg"
                    alt="Contact"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </Link>
              </motion.div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-bold text-white/90 hover:bg-white/10 px-4 py-1.5 rounded-xl transition-colors duration-200 flex items-center"
              >
                {link.name}
              </Link>
            )
          )
        ))}
      </div>
    </div>
  );
} 