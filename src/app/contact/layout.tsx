import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Chemical Trade Experts",
  description: "Contact Robust India for chemical trade, FTWZ services, and 3PL solutions. Get expert consultation on chemical sourcing, logistics management, and supply chain optimization.",
  keywords: [
    "contact robust india",
    "chemical trade consultation",
    "FTWZ services contact",
    "3PL solutions inquiry",
    "chemical sourcing help",
    "logistics consultation",
    "supply chain experts",
    "chemical distribution contact",
    "warehousing services inquiry",
    "chemical procurement support"
  ],
  openGraph: {
    title: "Contact Robust India - Chemical Trade & Logistics Experts",
    description: "Contact Robust India for chemical trade, FTWZ services, and 3PL solutions. Get expert consultation on chemical sourcing, logistics management, and supply chain optimization.",
    url: "https://robustindia.com/contact",
    type: "website",
    images: [
      {
        url: "/images/contact-logo.svg",
        width: 1200,
        height: 630,
        alt: "Contact Robust India - Chemical Trade Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Robust India - Chemical Trade & Logistics Experts",
    description: "Contact Robust India for chemical trade, FTWZ services, and 3PL solutions. Get expert consultation on chemical sourcing and logistics management.",
    images: ["/images/contact-logo.svg"],
  },
  alternates: {
    canonical: "https://robustindia.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
