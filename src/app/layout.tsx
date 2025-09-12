import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NavbarVisibilityProvider } from "../context/NavbarVisibilityContext";
import { ContactWidgetProvider } from "../context/ContactWidgetContext";
import { LanguageProvider } from "../components/LanguageProvider";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import AnimatedNavbar from "../components/AnimatedNavbar";
import BreadcrumbJsonLdDynamic from "../components/BreadcrumbJsonLdDynamic";
import FloatingActionButton from "../components/FloatingActionButton";

export const metadata: Metadata = {
  title: {
    default: "Robust India - Chemical Trade, FTWZ & 3PL Solutions",
    template: "%s | Robust India"
  },
  description: "Leading provider of chemical trade, FTWZ (Free Trade Warehousing Zone) services, and integrated 3PL solutions in India. Expert chemical sourcing, quality assurance, and logistics management.",
  keywords: [
    "chemical trade",
    "FTWZ services",
    "3PL solutions",
    "chemical sourcing",
    "warehousing",
    "logistics",
    "chemical distribution",
    "India chemical trade",
    "free trade zone",
    "chemical supply chain",
    "quality assurance",
    "chemical procurement"
  ],
  authors: [{ name: "Robust India" }],
  creator: "Robust India",
  publisher: "Robust India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://robustindia.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ru-RU': '/ru',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robustindia.com',
    siteName: 'Robust India',
    title: 'Robust India - Chemical Trade, FTWZ & 3PL Solutions',
    description: 'Leading provider of chemical trade, FTWZ services, and integrated 3PL solutions in India. Expert chemical sourcing, quality assurance, and logistics management.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Robust India - Chemical Trade Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robust India - Chemical Trade, FTWZ & 3PL Solutions',
    description: 'Leading provider of chemical trade, FTWZ services, and integrated 3PL solutions in India.',
    images: ['/images/twitter-image.jpg'],
    creator: '@robustindia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-search-console-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Business',
  classification: 'Chemical Trade and Logistics',
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
  manifest: '/manifest.json',
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://robustindia.com/#organization",
        "name": "Robust India",
        "url": "https://robustindia.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://robustindia.com/images/top-logo.png",
          "width": 200,
          "height": 200
        },
        "description": "Leading provider of chemical trade, FTWZ services, and integrated 3PL solutions in India",
        "foundingDate": "2020",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN",
          "addressLocality": "India"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["English", "Russian"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/robust-india",
          "https://twitter.com/robustindia"
        ],
        "serviceArea": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Chemical Trade and Logistics Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Chemical Trade",
                "description": "Expert chemical sourcing and distribution services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "FTWZ Services",
                "description": "Free Trade Warehousing Zone services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "3PL Solutions",
                "description": "Integrated third-party logistics solutions"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://robustindia.com/#website",
        "url": "https://robustindia.com",
        "name": "Robust India",
        "description": "Chemical Trade, FTWZ & 3PL Solutions",
        "publisher": {
          "@id": "https://robustindia.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://robustindia.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": ["en-US", "ru-RU"]
      },
      {
        "@type": "WebPage",
        "@id": "https://robustindia.com/#webpage",
        "url": "https://robustindia.com",
        "name": "Robust India - Chemical Trade, FTWZ & 3PL Solutions",
        "isPartOf": {
          "@id": "https://robustindia.com/#website"
        },
        "about": {
          "@id": "https://robustindia.com/#organization"
        },
        "description": "Leading provider of chemical trade, FTWZ services, and integrated 3PL solutions in India",
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased font-option-1">
        <LanguageProvider>
          <ContactWidgetProvider>
            <NavbarVisibilityProvider>
              {children}
              <AnimatedNavbar />
              <FloatingActionButton />
              <LanguageSwitcher />
              <BreadcrumbJsonLdDynamic baseUrl="https://robustindia.com" rootName="Home" />
            </NavbarVisibilityProvider>
          </ContactWidgetProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
