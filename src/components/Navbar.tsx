'use client';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact", highlight: true },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  // Make it move slightly upward on scroll
  const y = useTransform(scrollY, [0, 100], [0, -10]);

  // Hide when footer is in view
  const [hideNav, setHideNav] = useState(false);
  useEffect(() => {
    const footer = document.getElementById('footer-section');
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => {
      setHideNav(entry.isIntersecting);
    }, { root: null, threshold: 0 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      style={{ y }}
      className={`fixed bottom-10 left-0 w-full z-50 flex justify-center transition-opacity duration-300 ${hideNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <NavbarContent />
    </motion.nav>
  );
}

function NavbarContent() {
  return (
    <div className="flex items-center bg-black/80 rounded-3xl px-8 py-3 shadow-lg">
      <div className="flex items-center mr-4">
        <Image
          src="/images/nav-logo.png"
          alt="Robust India Nav Logo"
          width={36}
          height={36}
        />
      </div>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`px-4 py-1.5 rounded-xl text-sm transition-colors duration-200 flex items-center ${
            link.highlight
              ? "font-medium bg-[#6164f6] text-white shadow-md border border-transparent  border-t-2 border-t-[#888aed]"
              : "font-bold text-white/90 hover:bg-white/10"
          }`}
        >
          {link.name}
          {link.highlight && (
            <Image
              src="/images/contact-logo.png"
              alt="Contact"
              width={20}
              height={20}
              className="ml-1"
            />
          )}
        </a>
      ))}
    </div>
  );
} 