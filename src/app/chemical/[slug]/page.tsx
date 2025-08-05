'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { use } from 'react';
import FooterSection from '@/components/FooterSection';
import BookCallSection from '@/components/BookCallSection';
import ServiceSlider from '@/components/ServiceSlider';
import { TbAtom, TbFlask } from 'react-icons/tb';
import GHSSymbols from '@/components/GHSSymbols';
import { extractGHSSymbols, formatRegulationsText } from '@/utils/ghsUtils';

interface ChemicalParams {
  slug: string;
}

interface ChemicalOverview {
  name: string;
  description: string;
  overviewDescription?: string;
  keyFeatures?: string[];
  majorApplications?: string[];
  industrialSignificance?: string;
  keyAdvantages?: string[];
}

interface RegulatoryStatus {
  ghsSymbols?: string[];
  euReach?: string;
  notCarcinogenic?: boolean;
  [key: string]: string | string[] | boolean | undefined;
}

interface ChemicalData {
  overview: ChemicalOverview;
  identification?: Record<string, string>;
  physicalChemicalProperties?: Record<string, string | number | boolean | object | undefined>;
  physicalProperties?: Record<string, string | number | boolean | object | undefined>;
  gradesPurity?: Record<string, string>;
  applicationsUses?: {
    applications: Array<{ title: string; description: string }>;
    industriesServed: string[];
  };
  applications?: Array<{ title: string; description: string }>;
  industriesServed?: string[];
  storageHandling?: Record<string, string>;
  safetyRegulatory?: Record<string, string | RegulatoryStatus>;
  keyAdvantages?: string[];
  keyCharacteristics?: string[];
  keyPolymerProperties?: string[];
  keyFeatures?: string[];
  keyPerformanceData?: string[];
  technicalPerformanceData?: string[];
  keyTechnicalData?: string[];
  keyProperties?: string[];
  keyChemicalProperties?: string[];
  technicalComparison?: string[];
}

export default function ChemicalDetailPage({ params }: { params: Promise<ChemicalParams> }) {
  const { t, i18n } = useTranslation('common');
  const { slug } = use(params);
  const chemical = t(`chemicalDetail.products.${slug}`, { returnObjects: true }) as ChemicalData;

  // Fallback for legacy chemicals
  const overview: ChemicalOverview = chemical?.overview || { 
    name: (chemical as unknown as { name: string })?.name || '', 
    description: (chemical as unknown as { description: string })?.description || '' 
  };
  const identification = chemical?.identification;
  const physical = chemical?.physicalChemicalProperties || chemical?.physicalProperties;
  const gradesPurity = chemical?.gradesPurity;
  const applicationsUses: { applications: Array<{ title: string; description: string }>; industriesServed: string[] } = chemical?.applicationsUses || {
    applications: chemical?.applications || [],
    industriesServed: chemical?.industriesServed || [],
  };
  const storageHandling = chemical?.storageHandling;
  const safetyRegulatory = chemical?.safetyRegulatory;

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
    overview: { en: 'Overview', ru: 'Обзор' },
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
        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
          <Link 
            href="/product/chemical#chemical-family-section" 
            className="group relative overflow-hidden
              px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 
              rounded-lg sm:rounded-xl md:rounded-2xl 
              font-semibold text-sm sm:text-base
              flex items-center gap-2 sm:gap-3
              bg-gradient-to-r from-[#6164F6] to-[#7C3AED] 
              text-white shadow-md sm:shadow-lg hover:shadow-lg sm:hover:shadow-xl
              transform transition-all duration-300 ease-out
              hover:scale-105 hover:-translate-y-0.5
              focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-[#6164F6]/30
              active:scale-95
              backdrop-blur-sm"
          >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#6164F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Content */}
            <div className="relative flex items-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-bold tracking-wide hidden sm:inline">Back to chemical family</span>
              <span className="font-bold tracking-wide sm:hidden">Back</span>
            </div>
          </Link>
        </div>
        
        <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 mb-4 mt-2 cursor-pointer">
          <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-wide">ROBUST INDIA</span>
        </Link>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 mt-12 tracking-tight" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
          {(() => {
            const fullName = t(`chemicalDetail.products.${slug}.overview.name`, overview.name).toString();
            const match = fullName.match(/^(.+?)\s*\((.+?)\)\s*$/);
            if (match) {
              return (
                <>
                  <span className="block">{match[1].trim()}</span>
                  <span className="block text-3xl md:text-4xl text-gray-600 mt-2">({match[2].trim()})</span>
                </>
              );
            }
            return fullName;
          })()}
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed px-4 mt-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
          {t(`chemicalDetail.products.${slug}.overview.description`, overview.description).toString()}
        </p>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview Section */}
          {overview && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                {sectionHeadings['overview'][currentLang]}
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {overview.name}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {overview.overviewDescription || overview.description}
                  </p>
                </div>

                {/* Key Features
                {overview.keyFeatures && (
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {currentLang === 'en' ? 'Key Features' : 'Ключевые особенности'}
                    </h5>
                    <ul className="space-y-2">
                      {overview.keyFeatures.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#6164F6] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )} */}



                {/* Major Applications */}
                {/* {overview.majorApplications && (
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {currentLang === 'en' ? 'Major Applications' : 'Основные применения'}
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {overview.majorApplications.map((application: string, idx: number) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                          <span className="text-gray-700 font-medium" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {application}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}

                {/* Industrial Significance */}
                {/* {overview.industrialSignificance && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {currentLang === 'en' ? 'Industrial Significance' : 'Промышленное значение'}
                    </h5>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {overview.industrialSignificance}
                    </p>
                  </div>
                )} */}
              </div>
            </div>
          )}

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
                {Object.entries(physical).map(([key, value]: [string, string | number | boolean | object | undefined], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {typeof value === 'object' && value !== null
                        ? Array.isArray(value)
                          ? value.join(', ')
                          : Object.entries(value).map(([k, v]) => `${fieldLabels[k]?.[currentLang] || k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('; ')
                        : value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grades & Purity */}
          {gradesPurity && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-8">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbAtom className="w-6 h-6 text-white" />
                </div>
                {sectionHeadings['gradesPurity'][currentLang]}
              </h3>
              <div className={`grid grid-cols-1 ${Object.keys(gradesPurity).length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                {Object.entries(gradesPurity).map(([key, value]: [string, string | number | boolean | object | undefined], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {typeof value === 'object' && value !== null
                        ? Array.isArray(value)
                          ? value.join(', ')
                          : Object.entries(value).map(([k, v]) => `${fieldLabels[k]?.[currentLang] || k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('; ')
                        : value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Differences Between Grades Table for Naphtha */}
          {slug === 'naphtha' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                {t('chemicalDetail.products.naphtha.keyDifferences.title')}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 font-bold text-gray-800">{t('chemicalDetail.products.naphtha.keyDifferences.property')}</th>
                      <th className="py-2 px-4 font-bold text-gray-800">{t('chemicalDetail.products.naphtha.keyDifferences.lightNaphtha')}</th>
                      <th className="py-2 px-4 font-bold text-gray-800">{t('chemicalDetail.products.naphtha.keyDifferences.heavyNaphtha')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-semibold text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.boilingRange')}</td>
                      <td className="py-2 px-4 text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.boilingRangeLight')}</td>
                      <td className="py-2 px-4 text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.boilingRangeHeavy')}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-semibold text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.flammability')}</td>
                      <td className="py-2 px-4 text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.flammabilityLight')}</td>
                      <td className="py-2 px-4 text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.flammabilityHeavy')}</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-semibold text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.mainUse')}</td>
                      <td className="py-2 px-4 text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.mainUseLight')}</td>
                      <td className="py-2 px-4 text-gray-700">{t('chemicalDetail.products.naphtha.keyDifferences.mainUseHeavy')}</td>
                    </tr>
                  </tbody>
                </table>
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
             
              

              
            </div>
          )}

          {/* Industries Served */}
          {applicationsUses.industriesServed && applicationsUses.industriesServed.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbAtom className="w-6 h-6 text-white" />
                </div>
                {sectionHeadings['industriesServed'][currentLang]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applicationsUses.industriesServed.map((industry: string, idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {industry}
                    </h4>
                  </div>
                ))}
              </div>
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
                {Object.entries(storageHandling).map(([key, value]: [string, string | number | boolean | object | undefined], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {typeof value === 'object' && value !== null
                        ? Array.isArray(value)
                          ? value.join(', ')
                          : Object.entries(value).map(([k, v]) => `${fieldLabels[k]?.[currentLang] || k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('; ')
                        : value}
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
              <div className={`grid grid-cols-1 md:grid-cols-2 ${Object.keys(safetyRegulatory).length > 2 ? 'lg:grid-cols-3' : ''} gap-6`}>
                {Object.entries(safetyRegulatory).map(([key, value]: [string, string | number | boolean | object | undefined], idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {fieldLabels[key]?.[currentLang] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {key === 'regulatoryStatus' && typeof value === 'object' && value !== null ? (
                        <div>
                          {/* GHS Symbols */}
                          {(value as RegulatoryStatus).ghsSymbols && Array.isArray((value as RegulatoryStatus).ghsSymbols) && (
                            <div className="mb-3">
                              <GHSSymbols 
                                symbols={(value as RegulatoryStatus).ghsSymbols!} 
                                size="md" 
                                className="mb-2"
                              />
                            </div>
                          )}
                          {/* Regulatory status text */}
                          <div>
                            {Object.entries(value).map(([k, v]) => {
                              if (k === 'ghsSymbols') return null;
                              return (
                                <div key={k} className="mb-1">
                                  <span className="font-medium">{k}: </span>
                                  <span>{typeof v === 'boolean' ? (v ? 'Yes' : 'No') : v}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : key === 'regulations' && typeof value === 'string' ? (
                        <div>
                          {/* GHS Symbols */}
                          <div className="mb-3">
                            <GHSSymbols 
                              symbols={extractGHSSymbols(value)} 
                              size="md" 
                              className="mb-2"
                            />
                          </div>
                          {/* Regulations text without symbols */}
                          <div>
                            {formatRegulationsText(value)}
                          </div>
                        </div>
                      ) : (
                        typeof value === 'object' && value !== null
                          ? Array.isArray(value)
                            ? value.join(', ')
                            : Object.entries(value).map(([k, v]) => `${fieldLabels[k]?.[currentLang] || k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('; ')
                          : value
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Characteristics - Table format for PTBMB */}
          {chemical.keyCharacteristics && slug === 'ptbmb' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                {currentLang === 'en' ? 'Key Characteristics' : 'Ключевые характеристики'}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyCharacteristics.map((characteristic: string, idx: number) => {
                      const parts = characteristic.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Polymer Properties - Table format for TOA and NaAMPS */}
          {chemical.keyPolymerProperties && (slug === 'toa' || slug === 'naamps') && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? 'Key Polymer Properties' : 'Ключевые полимерные свойства'}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {slug === 'toa' 
                          ? (currentLang === 'en' ? 'Copolymer Feature' : 'Особенность сополимера')
                          : (currentLang === 'en' ? 'Feature' : 'Особенность')
                        }
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {slug === 'toa' 
                          ? (currentLang === 'en' ? 'TOA Contribution' : 'Вклад TOA')
                          : (currentLang === 'en' ? 'Benefit' : 'Преимущество')
                        }
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyPolymerProperties.map((property: string, idx: number) => {
                      const parts = property.split(': ');
                      const feature = parts[0];
                      const contribution = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {feature}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {contribution}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {slug === 'toa' && (
                <div className="mt-4 text-sm text-gray-600 italic" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
                  {currentLang === 'en' ? '*Lower Critical Solution Temperature' : '*Нижняя критическая температура раствора'}
                </div>
              )}
            </div>
          )}

          {/* Key Features - Table format for 3-PP, TAB, NBB, and IBB */}
          {chemical.keyFeatures && (slug === '3-phenylpentane' || slug === 'tertiary-amyl-benzene' || slug === 'normal-butyl-benzene' || slug === 'isobutyl-benzene') && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                                      <>
                    <span>Key</span> Features
                  </>
                  ) : (
                    <>
                      <span>Ключевые</span> особенности
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyFeatures.map((feature: string, idx: number) => {
                      const parts = feature.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Performance Data - Table format for ZDDP-MD */}
          {chemical.keyPerformanceData && slug === 'zddp-md' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Key</span> Performance Data
                    </>
                  ) : (
                    <>
                      <span>Ключевые</span> данные производительности
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Parameter' : 'Параметр'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyPerformanceData.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const parameter = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {parameter}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Technical Performance Data - Table format for ZDDP-IM */}
          {chemical.technicalPerformanceData && slug === 'zddp-im' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Technical</span> Performance Data
                    </>
                  ) : (
                    <>
                      <span>Технические</span> данные производительности
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Parameter' : 'Параметр'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.technicalPerformanceData.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const parameter = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {parameter}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Technical Data - Table format for DETA */}
          {chemical.keyTechnicalData && slug === 'diethylene-triamine' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Key</span> Technical Data
                    </>
                  ) : (
                    <>
                      <span>Ключевые</span> технические данные
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyTechnicalData.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Performance Data - Table format for AEEA */}
          {chemical.keyPerformanceData && slug === 'aminoethyl-ethanolamine' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Key</span> Performance Data
                    </>
                  ) : (
                    <>
                      <span>Ключевые</span> данные производительности
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyPerformanceData.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Technical Data - Table format for AEP */}
          {chemical.keyTechnicalData && slug === 'aminoethylpiperazine' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Key</span> Technical Data
                    </>
                  ) : (
                    <>
                      <span>Ключевые</span> технические данные
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyTechnicalData.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Chemical Properties - Table format for PTBP */}
          {chemical.keyProperties && slug === 'para-tertiary-butyl-phenol-ptbp' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Key</span> Chemical Properties
                    </>
                  ) : (
                    <>
                      <span>Ключевые</span> химические свойства
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyProperties.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Performance Data - Table format for 2,4-DTBP */}
          {chemical.keyPerformanceData && slug === '2-4-di-tert-butyl-phenol-2-4-dtbp' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Key</span> Performance Data
                    </>
                  ) : (
                    <>
                      <span>Ключевые</span> данные производительности
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyPerformanceData.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Chemical Properties - Table format for 2,6-DTBP */}
          {chemical.keyChemicalProperties && slug === '2-6-di-tert-butyl-phenol-2-6-dtbp' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Key</span> Chemical Properties
                    </>
                  ) : (
                    <>
                      <span>Ключевые</span> химические свойства
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyChemicalProperties.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Chemical Properties - Table format for OTBP */}
          {chemical.keyChemicalProperties && slug === 'ortho-tert-butyl-phenol-otbp' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? 'Key Chemical Properties' : 'Ключевые химические свойства'}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyChemicalProperties.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Chemical Properties - Table format for OSBP */}
          {chemical.keyChemicalProperties && slug === 'osbp' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? 'Key Chemical Properties' : 'Ключевые химические свойства'}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyChemicalProperties.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Technical Comparison with Isomers - Table format for OSBP */}
          {chemical.technicalComparison && slug === 'osbp' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? 'Technical Comparison with Isomers' : 'Техническое сравнение с изомерами'}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        OSBP
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        4-sec-BP
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.technicalComparison.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const values = parts[1] || '';
                      const [osbpValue, secBPValue] = values.split(' | ');
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {osbpValue}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {secBPValue}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Performance Data - Table format for 2,6-DSBP */}
          {chemical.keyPerformanceData && slug === '2-6-di-sec-butyl-phenol-2-6-dsbp' && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                <span>
                  {currentLang === 'en' ? (
                    <>
                      <span>Key</span> Performance Data
                    </>
                  ) : (
                    <>
                      <span>Ключевые</span> данные производительности
                    </>
                  )}
                </span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-[400px] w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Property' : 'Свойство'}
                      </th>
                      <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {currentLang === 'en' ? 'Value' : 'Значение'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemical.keyPerformanceData.map((data: string, idx: number) => {
                      const parts = data.split(': ');
                      const property = parts[0];
                      const value = parts[1] || '';
                      return (
                        <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {property}
                          </td>
                          <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {value}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Key Advantages */}
          {chemical.keyAdvantages && (
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                  <TbFlask className="w-6 h-6 text-white" />
                </div>
                {slug === 'antioxidant-1135' 
                  ? (currentLang === 'en' ? 'Key Technical Advantages' : 'Ключевые технические преимущества')
                  : (currentLang === 'en' ? 'Key Advantages' : 'Ключевые преимущества')
                }
              </h3>
              
              {/* Table format for Antioxidant 1135 */}
              {slug === 'antioxidant-1135' ? (
                <div className="overflow-x-auto">
                  <table className="min-w-[400px] w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                          {currentLang === 'en' ? 'Feature' : 'Особенность'}
                        </th>
                        <th className="py-3 px-4 font-bold text-gray-800 text-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                          {currentLang === 'en' ? 'Benefit' : 'Преимущество'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {chemical.keyAdvantages.map((advantage: string, idx: number) => {
                        const parts = advantage.split(': ');
                        const feature = parts[0];
                        const benefit = parts[1] || '';
                        return (
                          <tr key={idx} className="border-b hover:bg-gray-50 transition-colors">
                            <td className="py-3 px-4 font-semibold text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                              {feature}
                            </td>
                            <td className="py-3 px-4 text-gray-700" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                              {benefit}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                /* Original bullet point format for all other chemicals */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chemical.keyAdvantages.map((advantage: string, idx: number) => (
                    <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#6164F6] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 leading-relaxed font-medium" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                          {advantage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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