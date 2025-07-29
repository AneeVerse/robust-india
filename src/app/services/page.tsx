'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSlider from '@/components/ServiceSlider';
import FooterSection from '@/components/FooterSection';
import BookACall from '@/components/BookCallSection';
import { useTranslation } from 'next-i18next';

const serviceImagesArr = [
  '/images/demo/ftw.jpg',
  '/images/demo/shipping.jpg',
];

const CustomCursor: React.FC<{ visible: boolean; x: number; y: number }> = ({ visible, x, y }) => {
  const { t } = useTranslation();
  return (
  <div
    style={{
      position: "fixed",
      left: x,
      top: y,
      pointerEvents: "none",
      zIndex: 9999,
      transform: "translate(-50%, -50%)",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.2s",
      background: "rgba(120,120,120,0.45)",
      color: "#fff",
      borderRadius: "2rem",
      padding: "0.35rem 1.3rem",
      fontSize: "1.05rem",
      fontWeight: 700,
      boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
      userSelect: "none",
      whiteSpace: "nowrap",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      border: "1.5px solid rgba(255,255,255,0.18)",
      letterSpacing: "0.01em"
    }}
  >
      {t('servicesPage.viewService')}
  </div>
);
};

export default function ServicesPage() {
  const { t } = useTranslation();
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0 });
  
  const services = t('servicesPage.mainServices', { returnObjects: true }) as Array<{
    slug: string;
    title: string;
    description: string;
  }>;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursor({ visible: true, x: e.clientX, y: e.clientY });
  };
  
  const handleMouseLeave = () => {
    setCursor(c => ({ ...c, visible: false }));
  };

  return (
    <div className="w-full bg-white">
      {/* Gradient top left, rotated */}
      <div className="absolute top-0 left-0 w-[700px] h-[400px] -z-10" style={{ background: 'radial-gradient(circle at 0% 0%, #97CCFB 0%, #B9E0FF 30%, #f8f6f4 60%)', transform: 'rotate(-20deg)' }} />
      <div className="w-full">
        <section className="relative flex flex-col items-center justify-center w-full text-center px-6 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-2 z-10">
          {/* Company logo and name */}
          <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 mt-2">
            <Image src="/images/top-logo.png" alt="Robust India Logo" width={32} height={32} className="sm:w-[38px] sm:h-[38px]" />
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">ROBUST INDIA</span>
          </Link>
          {/* Heading */}
          <div className="w-full overflow-x-auto ">
            <motion.h1 
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-center text-gray-900 mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-18 leading-tight mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:-mt-0 px-1 sm:px-2 max-w-5xl mx-auto break-words" 
              style={{ fontFamily: 'NoiGrotesk, sans-serif', wordBreak: 'break-word', hyphens: 'auto' }}
              initial="hidden"
              animate="visible"
            >
              {t('servicesPage.heading').replace('service offerings', 'service  offerings').split('').map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.5,
                        delay: idx * 0.03
                      }
                    }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          
          {/* Services Container */}
          <div
            className="w-full max-w-[1400px] px-2 sm:px-4"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <CustomCursor visible={cursor.visible} x={cursor.x} y={cursor.y} />
            {/* New horizontal zig-zag layout */}
            <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 w-full mt-10 mb-10">
              {/* First image + text pair */}
              <div className="flex flex-row items-center w-full lg:w-[48%] gap-4">
                <Link href={`/services/${services[0].slug}`} className="block flex-shrink-0 w-[45%]">
                  <Image
                    src={serviceImagesArr[0]}
                    alt={services[0].title}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg bg-white"
                  />
                </Link>
                <Link href={`/services/${services[0].slug}`} className="block flex-1 flex flex-col justify-center text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-2">{services[0].title}</h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed line-clamp-2 max-w-full sm:max-w-[500px]" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{services[0].description}</p>
                </Link>
              </div>
              {/* Second image + text pair */}
              <div className="flex flex-row items-center w-full lg:w-[48%] gap-4">
                <Link href={`/services/${services[1].slug}`} className="block flex-shrink-0 w-[45%]">
                  <Image
                    src={serviceImagesArr[1]}
                    alt={services[1].title}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg bg-white"
                  />
                </Link>
                <Link href={`/services/${services[1].slug}`} className="block flex-1 flex flex-col justify-center text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 mb-2">{services[1].title}</h2>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed line-clamp-2 max-w-full sm:max-w-[500px]" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{services[1].description}</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Service Slider Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <ServiceSlider />
        </div>
      </div>
      
      {/*book a call section*/ }
      <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <BookACall />
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 mb-24 sm:mb-10">
        <div className="max-w-[1400px] mx-auto">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}