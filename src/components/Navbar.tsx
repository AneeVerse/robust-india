"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact", highlight: true },
];

// This component is the actual navbar UI
const NavbarContent = () => (
  <div className="flex items-center bg-black/80 rounded-full px-3 py-1.5 shadow-lg">
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
        className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 flex items-center ${
          link.highlight
            ? "bg-[#6164f6] text-white shadow-md border border-violet-400"
            : "text-white/90 hover:bg-white/10"
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

export default function Navbar() {
  // Only show fixed navbar when scrolling past hero section
  const [showFixedNav, setShowFixedNav] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show fixed navbar when scrolled past hero section
      // Adjust this value based on your hero section height
      const scrollThreshold = window.innerHeight * 0.8;
      
      if (window.scrollY > scrollThreshold) {
        setShowFixedNav(true);
      } else {
        setShowFixedNav(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Static navbar for hero section - always render this */}
      <div className="w-full flex justify-center">
        <NavbarContent />
      </div>
      
      {/* Fixed navbar that appears when scrolling past hero section */}
      <div 
        className={`fixed bottom-10 left-0 w-full z-50 flex justify-center transition-opacity duration-300 ${
          showFixedNav ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <NavbarContent />
      </div>
    </>
  );
} 