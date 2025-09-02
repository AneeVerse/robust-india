import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
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
}

export const generatePageMetadata = (
  title: string,
  description: string,
  keywords: string[] = [],
  path: string = '',
  image?: string
): Metadata => {
  const url = `https://robustindia.com${path}`
  
  return {
    title,
    description,
    keywords: [...(defaultMetadata.keywords || []), ...keywords],
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'Robust India',
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
      creator: '@robustindia',
    },
    alternates: {
      canonical: url,
    },
  }
}

export const structuredData = {
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
    }
  ]
}
