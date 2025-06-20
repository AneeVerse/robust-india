"use client";
import Navbar from "./Navbar";
import { useNavbarVisibility } from "../context/NavbarVisibilityContext";
import { usePathname } from "next/navigation";

export default function AnimatedNavbar() {
  const { showNavbar } = useNavbarVisibility();
  const pathname = usePathname();
  if (pathname.startsWith('/projects')) return null;
  return (
    <div className={`transition-all duration-1000 ease-out fixed bottom-10 left-0 w-full z-50 flex justify-center ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
      <Navbar />
    </div>
  );
} 