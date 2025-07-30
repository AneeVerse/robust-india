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
  '/images/end-to-end2.jpg',
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
          <div className="w-full flex justify-center items-center overflow-x-auto">
          <motion.h1 
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-center text-gray-900 mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-18 leading-tight mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:-mt-0 px-1 sm:px-2 whitespace-nowrap" 
              style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
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
          
          {/* Beautiful Alternating Services Layout */}
          <div
            className="w-full max-w-[1600px] px-2 sm:px-4 lg:px-6"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <CustomCursor visible={cursor.visible} x={cursor.x} y={cursor.y} />
            
            {/* Desktop: Image-Text-Image-Text in one row */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-8 xl:gap-12 items-center mt-12 mb-16">
              {/* First Image */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link href={`/services/${services[0].slug}`} className="block relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={serviceImagesArr[0]}
                      alt={services[0].title}
                      width={400}
                      height={300}
                      className="w-full h-[240px] xl:h-[280px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                </Link>
              </motion.div>

              {/* First Text */}
              <motion.div 
                className="flex flex-col justify-center space-y-4 px-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href={`/services/${services[0].slug}`} className="group">
                  <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {services[0].title}
                  </h2>
                  <p className="text-base xl:text-lg text-gray-600 leading-relaxed line-clamp-4 group-hover:text-gray-800 transition-colors duration-300">
                    {services[0].description}
                  </p>
                  <div className="inline-flex items-center mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    <span className="text-sm xl:text-base">Learn More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>

              {/* Second Image */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link href={`/services/${services[1].slug}`} className="block relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={serviceImagesArr[1]}
                      alt={services[1].title}
                      width={400}
                      height={300}
                      className="w-full h-[240px] xl:h-[280px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                </Link>
              </motion.div>

              {/* Second Text */}
              <motion.div 
                className="flex flex-col justify-center space-y-4 px-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link href={`/services/${services[1].slug}`} className="group">
                  <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {services[1].title}
                  </h2>
                  <p className="text-base xl:text-lg text-gray-600 leading-relaxed line-clamp-4 group-hover:text-gray-800 transition-colors duration-300">
                    {services[1].description}
                  </p>
                  <div className="inline-flex items-center mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    <span className="text-sm xl:text-base">Learn More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile & Tablet: Stacked Layout */}
            <div className="lg:hidden space-y-8 mt-10 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                >
                  <div className="relative group w-full sm:w-1/2 flex-shrink-0">
                    <Link href={`/services/${service.slug}`} className="block relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 p-2">
                      <div className="relative overflow-hidden rounded-2xl">
                <Image
                          src={serviceImagesArr[index]}
                  alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-[200px] sm:h-[240px] object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              </Link>
                  </div>
                  
                  <div className="flex flex-col justify-center space-y-4 w-full sm:w-1/2 text-center sm:text-left">
                    <Link href={`/services/${service.slug}`} className="group">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-base sm:text-lg text-gray-600 leading-relaxed line-clamp-4 group-hover:text-gray-800 transition-colors duration-300">
                        {service.description}
                      </p>
                      <div className="inline-flex items-center mt-4 text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                        <span className="text-sm sm:text-base">Learn More</span>
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
          </div>
              </Link>
                  </div>
                </motion.div>
            ))}
          </div>
          </div>
        </section>
      </div>
      
      {/* Service Slider Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1600px] mx-auto">
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