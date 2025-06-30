"use client";
import Navbar from "./Navbar";
import { useNavbarVisibility } from "../context/NavbarVisibilityContext";
import { usePathname } from "next/navigation";

export default function AnimatedNavbar() {
  const { showNavbar } = useNavbarVisibility();
  const pathname = usePathname();
  // Hide navbar when footer is in view on all pages
  const displayNav = showNavbar;
  
  return (
    <div className={`
      transition-all duration-1000 ease-out 
      fixed bottom-4 sm:bottom-6 md:bottom-10 
      left-0 w-full z-50 flex justify-center
      mobile-navbar-safe
      ${displayNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
    `}>
      <Navbar />
    </div>
  );
} 