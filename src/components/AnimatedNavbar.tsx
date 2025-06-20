"use client";
import Navbar from "./Navbar";
import { useNavbarVisibility } from "../context/NavbarVisibilityContext";
import { usePathname } from "next/navigation";

export default function AnimatedNavbar() {
  const { showNavbar } = useNavbarVisibility();
  const pathname = usePathname();
  if (pathname.startsWith('/projects')) return null;
  // Always show nav on non-home pages
  const isHome = pathname === '/';
  const displayNav = isHome ? showNavbar : true;
  return (
    <div className={`transition-all duration-1000 ease-out fixed bottom-10 left-0 w-full z-50 flex justify-center ${displayNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
      <Navbar />
    </div>
  );
} 