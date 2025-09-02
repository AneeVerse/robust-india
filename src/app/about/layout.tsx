import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Chemical Trade & Logistics Experts",
  description: "Learn about Robust India's expertise in chemical trade, FTWZ services, and integrated 3PL solutions. Our mission to provide quality chemical sourcing and logistics management across India.",
  keywords: [
    "about robust india",
    "chemical trade company",
    "FTWZ services provider",
    "3PL solutions company",
    "chemical sourcing experts",
    "logistics management",
    "quality assurance",
    "chemical distribution",
    "warehousing services",
    "supply chain management"
  ],
  openGraph: {
    title: "About Robust India - Chemical Trade & Logistics Experts",
    description: "Learn about Robust India's expertise in chemical trade, FTWZ services, and integrated 3PL solutions. Our mission to provide quality chemical sourcing and logistics management across India.",
    url: "https://robustindia.com/about",
    type: "website",
    images: [
      {
        url: "/images/about-us2.jpg",
        width: 1200,
        height: 630,
        alt: "About Robust India - Chemical Trade Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Robust India - Chemical Trade & Logistics Experts",
    description: "Learn about Robust India's expertise in chemical trade, FTWZ services, and integrated 3PL solutions.",
    images: ["/images/about-us2.jpg"],
  },
  alternates: {
    canonical: "https://robustindia.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
