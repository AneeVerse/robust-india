"use client"
import React, { createContext, useContext, useState } from "react";

const NavbarVisibilityContext = createContext({
  showNavbar: false,
  setShowNavbar: (show: boolean) => {},
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