"use client";
import Navbar from "./Navbar";
import { useNavbarVisibility } from "../context/NavbarVisibilityContext";

export default function AnimatedNavbar() {
  const { showNavbar } = useNavbarVisibility();
  // Hide navbar when footer is in view on all pages
  const displayNav = showNavbar;
  
  return (
    <div className={`
      transition-all duration-1000 ease-out 
      fixed bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-10 
      left-0 w-full z-50 flex justify-center
      px-1 sm:px-2 md:px-4
      mobile-navbar-safe
      ${displayNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
    `}>
      <Navbar />
    </div>
  );
} 