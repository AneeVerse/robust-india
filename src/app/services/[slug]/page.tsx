'use client';

import Image from 'next/image';
import { use } from 'react';
import BookACall from '@/components/BookCallSection';
import FooterSection from '@/components/FooterSection';
import ServiceSlider from '@/components/ServiceSlider';
import { useTranslation } from 'next-i18next';
import { serviceImages } from './generateStaticParams';
import Integrated3PLFTWZInfo from '@/components/Integrated3PLFTWZInfo';
import EndtoEndSoulutionInfo from '@/components/EndtoEndSoulutionInfo';

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { t } = useTranslation();
  const { slug } = use(params);
  
  const serviceData = t(`serviceDetail.services.${slug}`, { returnObjects: true }) as {
    title: string;
    description: string;
    tags: string[];
  } | null;

  const images = serviceImages.find((s) => s.slug === slug);
  
  if (!serviceData || !images) {
    return <div className="p-20 text-center">{t('serviceDetail.notFound')}</div>;
  }

  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-5">
      {/* Modern Split-Screen Layout for Integrated 3PL & FTWZ */}
      {slug === 'integrated-3pl-ftwz' ? (
        <div className="min-h-[95vh] flex items-center">
          <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-10 flex flex-col justify-center -ml-10">
              <div className="space-y-8">
                <h1 className="leading-[0.9]" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  <span className="block text-[#6164F6] font-bold text-5xl lg:text-6xl xl:text-7xl mb-3">INTEGRATED</span>
                  <span className="block text-gray-900 font-light text-5xl lg:text-6xl xl:text-7xl">3PL & FTWZ</span>
                </h1>
                
                <h2 className="text-xl lg:text-2xl xl:text-3xl text-gray-600 font-light leading-relaxed max-w-lg" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  Free Trade Warehousing Solutions
                </h2>
                
                <p className="text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed max-w-xl" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  Skip the complexities, save costs and enjoy seamless warehousing and logistics solutions in Free Trade Warehousing Zones
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#integrated-info"
                  className="bg-[#6164F6] hover:bg-[#5055E5] text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-xl text-base lg:text-lg flex items-center justify-center"
                  style={{ textDecoration: 'none' }}
                >
                  Learn More
                </a>
                {/* Contact Us Button - black theme, links to /contact */}
                <a
                  href="/contact"
                  className="bg-black hover:bg-gray-700 hover:border-gray-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-300 text-base lg:text-lg flex items-center justify-center border-2 border-black"
                  style={{ textDecoration: 'none' }}
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-first lg:order-last">
              <div className="relative -mx-8 lg:-mx-16">
                <Image
                  src={images.image}
                  alt={serviceData.title}
                  width={1200}
                  height={600}
                  className="w-full h-[350px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <Image
            src={images.image}
            alt={serviceData.title}
            width={1920}
            height={1080}
            className="w-full h-[95vh] object-cover rounded-xl"
          />
        </div>
      )}
      <div className="w-full px-4 sm:px-6 md:px-5 py-16">
        <h1 className="text-5xl font-normal text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{serviceData.title}</h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{serviceData.description}</p>
        
        {/* Services provided section */}
        <p className="text-lg font-semibold mb-4 text-gray-900 mt-10" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{t('serviceDetail.servicesProvided')}</p>
        <div className="flex flex-wrap gap-4 mb-12 mt-10 -ml-4">
          {serviceData.tags.map((tag) => (
            <span key={tag} className="inline-block bg-[#f5f5f5] text-[#222] rounded-[1.2rem] px-4 py-1 text-base font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Stats section */}
      <div className="w-full px-4 sm:px-6 md:px-5 mb-16">
        <hr className="border-gray-300 mb-8" />
        <div className="flex items-center flex-wrap gap-8">
          <div>
            <p className="text-lg text-gray-900">{t('serviceDetail.stats.headquarters.label')}</p>
            <p className="text-base md:text-md font-medium text-gray-800">{t('serviceDetail.stats.headquarters.value')}</p>
          </div>
          <div>
            <svg className="inline-block h-10 w-8 text-gray-400 transform rotate-90" fill="none" viewBox="0 0 27 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.10696C4.89099 6.10696 10.4306 6.79673 13.9209 4.58335C17.2052 2.50058 13.7605 -0.43632 11.8165 1.80381C11.0323 2.70752 10.4356 4.55498 10.9011 5.72606C13.5121 12.295 22.6498 7.43559 26 4.48555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-lg text-gray-900">{t('serviceDetail.stats.monthlyVisitors.label')}</p>
            <p className="text-base md:text-md font-medium text-[#6164f6]">{t('serviceDetail.stats.monthlyVisitors.value')}</p>
          </div>
          <div>
            <p className="text-lg text-gray-900">{t('serviceDetail.stats.usedBy.label')}</p>
            <p className="text-base md:text-md font-medium text-[#6164f6]">{t('serviceDetail.stats.usedBy.value')}</p>
          </div>
        </div>
      </div>
      {/* Additional service showcase images */}
      <div className="w-full mb-16">
        <Image
          src={images.fullImage}
          alt={serviceData.title}
          width={1920}
          height={1080}
          className="w-full h-[95vh] object-cover rounded-xl"
        />
      </div>
      <div className="w-full mb-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {images.smallImages.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`${serviceData.title} detail ${idx + 1}`}
              width={800}
              height={500}
              className="w-full h-[450px] sm:h-[500px] md:h-[550px] object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
      {/* Conditional Info Sections */}
      {slug === 'integrated-3pl-ftwz' && (
        <>
          {/* FTWZ/3PL Info Section */}
          <div id="integrated-info">
            <Integrated3PLFTWZInfo />
          </div>
        </>
      )}
      
      {slug === 'end-to-end-solutions' && (
        <>
          {/* End-to-End Solutions Info Section */}
          <EndtoEndSoulutionInfo />
        </>
      )}
      
      {/* Supporting Diverse Industrial Sectors Section */}
      <div className="w-full overflow-x-hidden">
        <ServiceSlider />
      </div>

      <BookACall />
   
      <div className="mt-0 mb-24 sm:mb-2">
        <div className="">
          <FooterSection />
        </div>
      </div>
    </main>
  );
} 