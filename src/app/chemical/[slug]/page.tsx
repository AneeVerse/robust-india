'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { use } from 'react';
import FooterSection from '@/components/FooterSection';
import BookCallSection from '@/components/BookCallSection';
import ServiceSlider from '@/components/ServiceSlider';
import { TbAtom, TbFlask } from 'react-icons/tb';

interface ChemicalParams {
  slug: string;
}

export default function ChemicalDetailPage({ params }: { params: Promise<ChemicalParams> }) {
  const { t, i18n } = useTranslation('common');
  const { slug } = use(params);
  const chemical = t(`chemicalDetail.products.${slug}`, { returnObjects: true });

  // Fallback for legacy chemicals
  const overview = (chemical as unknown as { overview: { name: string; description: string } })?.overview || { name: (chemical as unknown as { name: string })?.name, description: (chemical as unknown as { description: string })?.description };
  const identification = (chemical as unknown as { [key: string]: string })?.identification;
  const physical = (chemical as unknown as { [key: string]: string })?.physicalChemicalProperties || (chemical as unknown as { [key: string]: string })?.physicalProperties;
  const gradesPurity = (chemical as unknown as { [key: string]: string })?.gradesPurity;
  const applicationsUses: { applications: Array<{ title: string; description: string }>; industriesServed: string[] } = (chemical as unknown as { applicationsUses: { applications: Array<{ title: string; description: string }>; industriesServed: string[] } })?.applicationsUses || {
    applications: (chemical as unknown as { applications: Array<{ title: string; description: string }> })?.applications,
    industriesServed: (chemical as unknown as { industriesServed: string[] })?.industriesServed,
  };
  const storageHandling = (chemical as unknown as { [key: string]: string })?.storageHandling;
  const safetyRegulatory = (chemical as unknown as { [key: string]: string })?.safetyRegulatory;

  if (!overview || !overview.name) {
    return <div className="p-20 text-center">{t('chemicalDetail.notFound')}</div>;
  }

  // Add a mapping for field labels in both English and Russian
  const fieldLabels: { [key: string]: { [lang: string]: string } } = {
    iupacName: { en: 'IUPAC Name', ru: 'ИЮПАК-название' },
    commonNames: { en: 'Common Names', ru: 'Общие названия' },
    casNumber: { en: 'CAS Number', ru: 'CAS-номер' },
    chemicalFormula: { en: 'Chemical Formula', ru: 'Химическая формула' },
    molecularWeight: { en: 'Molecular Weight', ru: 'Молекулярная масса' },
    form: { en: 'Form', ru: 'Форма' },
    color: { en: 'Color', ru: 'Цвет' },
    odor: { en: 'Odor', ru: 'Запах' },
    appearance: { en: 'Appearance', ru: 'Внешний вид' },
    boilingPoint: { en: 'Boiling Point', ru: 'Температура кипения' },
    meltingPoint: { en: 'Melting Point', ru: 'Температура плавления' },
    density: { en: 'Density', ru: 'Плотность' },
    vaporPressure: { en: 'Vapor Pressure', ru: 'Давление пара' },
    flashPoint: { en: 'Flash Point', ru: 'Температура вспышки' },
    autoignitionTemp: { en: 'Autoignition Temp', ru: 'Температура самовоспламенения' },
    solubility: { en: 'Solubility', ru: 'Растворимость' },
    viscosity: { en: 'Viscosity', ru: 'Вязкость' },
    refractiveIndex: { en: 'Refractive Index', ru: 'Показатель преломления' },
    ph: { en: 'pH', ru: 'pH' },
    impurities: { en: 'Impurities', ru: 'Примеси' },
    purity: { en: 'Purity', ru: 'Чистота' },
    stability: { en: 'Stability', ru: 'Стабильность' },
    storage: { en: 'Storage', ru: 'Хранение' },
    handling: { en: 'Handling', ru: 'Обращение' },
    hazards: { en: 'Hazards', ru: 'Опасности' },
    nfpaRating: { en: 'NFPA Rating', ru: 'Рейтинг NFPA' },
    regulations: { en: 'Regulations', ru: 'Регламенты' },
    texture: { en: 'Texture', ru: 'Текстура' },
    technicalGrade: { en: 'Technical Grade', ru: 'Технический сорт' },
    highPurityGrade: { en: 'High Purity Grade', ru: 'Высокочистый сорт' },
    flakeGrade: { en: 'Flake Grade', ru: 'Хлопьевидная форма' },
    fuelGrade: { en: 'Fuel Grade', ru: 'Топливный сорт' },
    chemicalGrade: { en: 'Chemical Grade', ru: 'Химический сорт' },
    highPurity: { en: 'High Purity', ru: 'Высокая чистота' },
    lowPurity: { en: 'Low Purity', ru: 'Низкая чистота' },
    polymerGrade: { en: 'Polymer Grade', ru: 'Полимерный сорт' },
    refineryGrade: { en: 'Refinery Grade', ru: 'Нефтеперерабатывающий сорт' },
    lightNaphtha: { en: 'Light Naphtha', ru: 'Лёгкая нафта' },
    heavyNaphtha: { en: 'Heavy Naphtha', ru: 'Тяжёлая нафта' },
    // Add more fields as needed
  };
  const sectionHeadings: { [key: string]: { [lang: string]: string } } = {
    identification: { en: 'Identification', ru: 'Идентификация' },
    physicalChemicalProperties: { en: 'Physical & Chemical Properties', ru: 'Физические и химические свойства' },
    gradesPurity: { en: 'Grades & Purity', ru: 'Сорта и чистота' },
    applicationsUses: { en: 'Applications & Uses', ru: 'Применение и области использования' },
    storageHandling: { en: 'Storage & Handling', ru: 'Хранение и обращение' },
    safetyRegulatory: { en: 'Safety & Regulatory', ru: 'Безопасность и нормативные требования' },
    industriesServed: { en: 'Industries Served', ru: 'Обслуживаемые отрасли' },
  };
  const currentLang = i18n.language || 'en';

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
                {sectionHeadings['identification'][currentLang]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(identification).map(([key, value]: [string, string], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {value}
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
                {sectionHeadings['physicalChemicalProperties'][currentLang]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(physical).map(([key, value]: [string, string], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {value}
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
                {sectionHeadings['gradesPurity'][currentLang]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(gradesPurity).map(([key, value]: [string, string], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {value}
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
                {sectionHeadings['applicationsUses'][currentLang]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {applicationsUses.applications && applicationsUses.applications.map((app: { title: string; description: string }, idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-4 text-xl" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {app.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {app.description}
                    </p>
                  </div>
                ))}
              </div>
              {applicationsUses.industriesServed && (
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {sectionHeadings['industriesServed'][currentLang]}
                  </h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {applicationsUses.industriesServed.map((industry: string, idx: number) => (
                      <li key={idx}>{industry}</li>
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
                {sectionHeadings['storageHandling'][currentLang]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(storageHandling).map(([key, value]: [string, string], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {value}
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
                {sectionHeadings['safetyRegulatory'][currentLang]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(safetyRegulatory).map(([key, value]: [string, string], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {value}
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