import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NavbarVisibilityProvider } from "../context/NavbarVisibilityContext";
import { ContactWidgetProvider } from "../context/ContactWidgetContext";
import { LanguageProvider } from "../components/LanguageProvider";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import AnimatedNavbar from "../components/AnimatedNavbar";
import FloatingActionButton from "../components/FloatingActionButton";

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-option-1">
        <LanguageProvider>
          <ContactWidgetProvider>
            <NavbarVisibilityProvider>
              {children}
              <AnimatedNavbar />
              <FloatingActionButton />
              <LanguageSwitcher />
            </NavbarVisibilityProvider>
          </ContactWidgetProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
