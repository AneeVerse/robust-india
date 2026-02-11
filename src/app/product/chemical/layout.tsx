import { Metadata } from 'next';
import commonEn from '../../../../public/locales/en/common.json';

export const metadata: Metadata = {
    title: "Chemical Products - Specialty & Bulk Chemical Sourcing",
    description: "Explore our extensive catalog of specialty and bulk chemicals. We provide expert sourcing, quality assurance, and distribution of industrial chemicals across India.",
    keywords: [
        "chemical products",
        "specialty chemicals",
        "bulk chemicals",
        "chemical sourcing",
        "industrial chemicals",
        "chemical distribution",
        "chemical catalog",
        "India chemical trade"
    ],
    openGraph: {
        title: "Chemical Products Catalog - Robust India",
        description: "Explore our extensive catalog of specialty and bulk chemicals. Best-in-class chemical sourcing and distribution.",
        url: "https://robustindia.com/product/chemical",
        type: "website",
        images: [
            {
                url: "/images/product-chemical-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Robust India Chemical Products",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Chemical Products Catalog - Robust India",
        description: "Browse our extensive range of industrial and specialty chemicals.",
        images: ["/images/product-chemical-hero.jpg"],
    },
    alternates: {
        canonical: "https://robustindia.com/product/chemical",
    },
};

export default function ProductChemicalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
