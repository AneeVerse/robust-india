import type { Metadata } from "next";
import "./globals.css";
import { NavbarVisibilityProvider } from "../context/NavbarVisibilityContext";
import AnimatedNavbar from "../components/AnimatedNavbar";

export const metadata: Metadata = {
  title: "Robust India",
  description: "Your trusted partner in chemical trade, FTWZ services, and integrated 3PL solutions",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/top-logo.png',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: dark)', 
        url: '/images/nav-logo.png',
        type: 'image/png',
      },
    ],
    shortcut: '/images/top-logo.png',
    apple: '/images/top-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavbarVisibilityProvider>
          {children}
          <AnimatedNavbar />
        </NavbarVisibilityProvider>
      </body>
    </html>
  );
}
