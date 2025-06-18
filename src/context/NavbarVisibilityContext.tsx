"use client"
import React, { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

interface NavbarVisibilityContextType {
  showNavbar: boolean;
  setShowNavbar: Dispatch<SetStateAction<boolean>>;
}

const NavbarVisibilityContext = createContext<NavbarVisibilityContextType>({
  showNavbar: false,
  setShowNavbar: () => {},
});

export function NavbarVisibilityProvider({ children }: { children: React.ReactNode }) {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <NavbarVisibilityContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </NavbarVisibilityContext.Provider>
  );
}

export function useNavbarVisibility() {
  return useContext(NavbarVisibilityContext);
} 