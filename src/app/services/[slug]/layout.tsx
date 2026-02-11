import { Metadata } from 'next';
import commonEn from '../../../../public/locales/en/common.json';

export { generateStaticParams } from './generateStaticParams';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const services = (commonEn as any).servicesPage?.mainServices || [];
  const service = services.find((s: any) => s.slug === slug);

  const title = service?.title || slug.split('-').map((s: string) => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  const description = service?.description || `Expert ${title} services by Robust India. We provide integrated FTWZ and 3PL solutions for the chemical industry.`;

  return {
    title: `${title} - Service Details`,
    description,
    openGraph: {
      title: `${title} - Robust India`,
      description,
      url: `https://robustindia.com/services/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://robustindia.com/services/${slug}`,
    },
  };
}

export default async function ServiceLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const services = (commonEn as any).servicesPage?.mainServices || [];
  const service = services.find((s: any) => s.slug === slug);
  const name = service?.title || slug;
  const description = service?.description || "";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Robust India",
      "url": "https://robustindia.com"
    },
    "serviceType": "Chemical Trade and Logistics",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}