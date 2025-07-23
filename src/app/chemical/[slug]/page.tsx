'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { use } from 'react';
import FooterSection from '@/components/FooterSection';
import BookCallSection from '@/components/BookCallSection';
import ServiceSlider from '@/components/ServiceSlider';
import { TbAtom, TbFlask } from 'react-icons/tb';

interface ChemicalProduct {
  name: string;
  description: string;
  physicalProperties: {
    appearance: string;
    odor: string;
    boilingPoint: string;
    density: string;
    flashPoint: string;
    solubility: string;
    viscosity: string;
  };
  applications: Array<{
    title: string;
    description: string;
  }>;
  industriesServed: string[];
  extraDetails?: {
    [key: string]: string;
  };
}

interface ChemicalParams {
  slug: string;
}

export default function ChemicalDetailPage({ params }: { params: Promise<ChemicalParams> }) {
  const { t } = useTranslation('common');
  const { slug } = use(params);
  const chemical = t(`chemicalDetail.products.${slug}`, { returnObjects: true });

  // Fallback for legacy chemicals
  let overview = (chemical as any)?.overview || { name: (chemical as any)?.name, description: (chemical as any)?.description };
  let identification = (chemical as any)?.identification;
  let physical = (chemical as any)?.physicalChemicalProperties || (chemical as any)?.physicalProperties;
  let gradesPurity = (chemical as any)?.gradesPurity;
  let applicationsUses: any = (chemical as any)?.applicationsUses || {
    applications: (chemical as any)?.applications,
    industriesServed: (chemical as any)?.industriesServed,
  };
  let storageHandling = (chemical as any)?.storageHandling;
  let safetyRegulatory = (chemical as any)?.safetyRegulatory;

  if (!overview || !overview.name) {
    return <div className="p-20 text-center">{t('chemicalDetail.notFound')}</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-4 z-10 max-w-full">
        <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 mb-4 mt-2 cursor-pointer">
          <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-wide">ROBUST INDIA</span>
        </Link>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 mt-12 tracking-tight" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
          {t(`chemicalDetail.products.${slug}.overview.name`, overview.name).toString()}
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed px-4 mt-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
          {t(`chemicalDetail.products.${slug}.overview.description`, overview.description).toString()}
        </p>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Identification Section */}
          {identification && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbAtom className="w-6 h-6 text-white" />
                </div>
                {t('chemicalDetail.headings.identification')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(identification).map(([key, value]: [string, unknown], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {t(`chemicalDetail.extraDetailsLabels.${key}`, String(key).replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Physical & Chemical Properties */}
          {physical && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbAtom className="w-6 h-6 text-white" />
                </div>
                {t('chemicalDetail.headings.physicalChemicalProperties')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(physical).map(([key, value]: [string, unknown], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {t(`chemicalDetail.extraDetailsLabels.${key}`, String(key).replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grades & Purity */}
          {gradesPurity && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbAtom className="w-6 h-6 text-white" />
                </div>
                {t('chemicalDetail.headings.gradesPurity')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(gradesPurity).map(([key, value]: [string, unknown], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {t(`chemicalDetail.extraDetailsLabels.${key}`, String(key).replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications & Uses */}
          {applicationsUses && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                {t('chemicalDetail.headings.applicationsUses')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {applicationsUses.applications && applicationsUses.applications.map((app: any, idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-4 text-xl" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {String(app.title)}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {String(app.description)}
                    </p>
                  </div>
                ))}
              </div>
              {applicationsUses.industriesServed && (
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t('chemicalDetail.headings.industriesServed')}
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {applicationsUses.industriesServed.map((industry: any, idx: number) => (
                      <li key={idx}>{String(industry)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Storage & Handling */}
          {storageHandling && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbAtom className="w-6 h-6 text-white" />
                </div>
                {t('chemicalDetail.headings.storageHandling')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(storageHandling).map(([key, value]: [string, unknown], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {t(`chemicalDetail.extraDetailsLabels.${key}`, String(key).replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Safety & Regulatory */}
          {safetyRegulatory && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbAtom className="w-6 h-6 text-white" />
                </div>
                {t('chemicalDetail.headings.safetyRegulatory')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(safetyRegulatory).map(([key, value]: [string, unknown], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {t(`chemicalDetail.extraDetailsLabels.${key}`, String(key).replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()))}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Supporting Diverse Industrial Sectors Section */}
      <div className="w-full overflow-x-hidden">
        <ServiceSlider />
      </div>

      {/* Book Call Section */}
      <BookCallSection />
      {/* Footer */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mb-24 sm:mb-8 w-full overflow-x-hidden">
        <FooterSection />
      </div>
    </main>
  );
} 