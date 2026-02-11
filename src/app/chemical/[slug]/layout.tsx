import { Metadata } from 'next';
import commonEn from '../../../../public/locales/en/common.json';

export { generateStaticParams } from './generateStaticParams';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const chemical = (commonEn as any).chemicalDetail?.products?.[slug];

  const name = chemical?.overview?.name || slug.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const description = chemical?.overview?.description || `Leading provider of ${name} and integrated chemical trade solutions in India.`;

  return {
    title: `${name} - Chemical Product Details`,
    description,
    openGraph: {
      title: `${name} - Robust India`,
      description,
      url: `https://robustindia.com/chemical/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://robustindia.com/chemical/${slug}`,
    },
  };
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chemical = (commonEn as any).chemicalDetail?.products?.[slug];
  const name = chemical?.overview?.name || slug;
  const description = chemical?.overview?.description || "";

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Robust India"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Robust India"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}