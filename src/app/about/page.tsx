"use client"
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import BookCallSection from '@/components/BookCallSection';
import StatsSection from '@/components/StatsSection';
import ServiceSlider from '@/components/ServiceSlider';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { MdVerifiedUser } from "react-icons/md";
import { useTranslation } from 'next-i18next';

// TODO: Create and import these components
// import NewsletterSection from '@/components/NewsletterSection';

export default function AboutPage() {
  const { t } = useTranslation('common');
  
  // Scroll reveal refs and variants
  const headingRef = useRef(null);
  const lines = [
    t('about.hero.line1'),
    t('about.hero.line2'),
    t('about.hero.line3')
  ];
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
  const letter = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  const paraLines = [
    t('about.intro.line1'),
    t('about.intro.line2'),
    t('about.intro.line3'),
    t('about.intro.line4'),
    t('about.intro.line5')
  ];

  // GSAP scroll-triggered paragraph reveal
  const paraRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const para = paraRef.current;
    if (!para) return;

    const chars = gsap.utils.toArray<HTMLElement>(para.querySelectorAll('span'));
    
    // Set initial state
    chars.forEach(el => {
      el.style.opacity = '0';
    });
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: para,
      start: 'top 80%',
      end: 'bottom top',
      onUpdate: self => {
        const factor = 2; // speed multiplier
        let progress = self.progress * factor;
        if (progress > 1) progress = 1;
        const total = chars.length;
        const showCount = Math.round(progress * total);
        chars.forEach((el, i) => {
          el.style.opacity = i < showCount ? '1' : '0';
        });
      },
      onLeave: () => {
        // Reset animation when leaving the section
        chars.forEach(el => {
          el.style.opacity = '0';
        });
      },
      onLeaveBack: () => {
        // Reset animation when scrolling back up
        chars.forEach(el => {
          el.style.opacity = '0';
        });
      }
    });

    return () => {
      if (scrollTrigger) scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-2 z-10 max-w-full">
        {/* Company logo and name */}
        <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
          <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-wide">{t('hero.brandName')}</span>
        </Link>
        <motion.h1
          ref={headingRef}
          initial="hidden"
          animate="visible"
          variants={container}
          className="font-normal text-gray-900 mb-8 sm:mb-12 md:mb-16 lg:mb-20 leading-none tracking-tight text-center max-w-full"
          style={{ 
            fontFamily: 'NoiGrotesk, sans-serif',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            lineHeight: '0.9'
          }}
        >
          {lines.map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line.split('').map((char, idx) => (
                <motion.span key={`${lineIndex}-${idx}`} variants={letter}>
                  {char}
                </motion.span>
              ))}
              {lineIndex < lines.length - 1 && <div className="h-2 sm:h-3 md:h-4"></div>}
            </React.Fragment>
          ))}
        </motion.h1>
        <p
          ref={paraRef}
          className="mt-0 sm:mt-1 md:mt-2 lg:-mt-8 max-w-4xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-[1.3] sm:leading-[1.4] md:leading-[1.5] mb-2 sm:mb-4 px-1 sm:px-2 text-left sm:text-justify"
          style={{ 
            fontFamily: 'NoiGrotesk, sans-serif', 
            textJustify: 'inter-word',
            textAlignLast: 'left',
            hyphens: 'none',
            wordSpacing: '0.05em',
            wordBreak: 'keep-all',
            overflowWrap: 'break-word'
          }}
        >
          {paraLines.map((line, lineIdx) => (
            <React.Fragment key={lineIdx}>
              {line.split('').map((char, charIdx) => (
                <span key={`para-${lineIdx}-${charIdx}`} style={{ opacity: 0, display: 'inline-block', whiteSpace: 'pre' }}>
                  {char}
                </span>
              ))}
              {lineIdx < paraLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </section>

      {/* What We Do Section */}
        <div className="max-w-6xl mx-auto px-4 mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-purple-50/30 rounded-3xl -z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 mt-6 sm:mt-8 md:mt-10" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              {t('about.whatWeDo.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              {t('about.whatWeDo.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {/* Custom Product Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full min-h-[340px] group-hover:shadow-2xl group-hover:border-[#6164F6]/20 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6164F6] to-[#8B8FFF] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6164F6] transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t('about.whatWeDo.services.customDevelopment.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 text-left" style={{ 
                    fontFamily: 'NoiGrotesk, sans-serif'
                  }}>
                    {t('about.whatWeDo.services.customDevelopment.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Global Sourcing & Procurement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full min-h-[340px] group-hover:shadow-2xl group-hover:border-[#6164F6]/20 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B8FFF] to-[#6164F6] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M15,9L13.5,7.5C13.1,7.1 12.6,6.9 12.1,6.9H9.5C8.7,6.9 8,7.6 8,8.4V11C8,11.6 8.4,12 9,12H14C14.6,12 15,12.4 15,13V15.6C15,16.4 14.3,17.1 13.5,17.1H10.9C10.4,17.1 9.9,16.9 9.5,16.5L8,15H10L11.5,16.5H13.5C13.2,16.8 13.2,16.8 13.5,16.5L15,15.6V13H10C9.4,13 9,12.6 9,12V8.4C9,8.1 9.3,7.8 9.6,7.8H12.1L13.5,9.2L15,9Z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6164F6] transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t('about.whatWeDo.services.globalSourcing.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 text-left" style={{ 
                    fontFamily: 'NoiGrotesk, sans-serif'
                  }}>
                    {t('about.whatWeDo.services.globalSourcing.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality Inspection & Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full min-h-[340px] group-hover:shadow-2xl group-hover:border-[#6164F6]/20 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6164F6] to-[#8B8FFF] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <MdVerifiedUser className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6164F6] transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t('about.whatWeDo.services.qualityAssurance.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 text-left" style={{ 
                    fontFamily: 'NoiGrotesk, sans-serif'
                  }}>
                    {t('about.whatWeDo.services.qualityAssurance.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Secure Packaging & Logistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full min-h-[340px] group-hover:shadow-2xl group-hover:border-[#6164F6]/20 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B8FFF] to-[#6164F6] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.5C16.3,11 17,11.4 17,12V16C17,16.6 16.6,17 16,17H8C7.4,17 7,16.6 7,16V12C7,11.4 7.4,11 8,11H8.5V10C8.5,8.6 9.6,7 12,7M12,8.2C10.2,8.2 9.8,9.2 9.8,10V11H14.2V10C14.2,9.2 13.8,8.2 12,8.2Z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6164F6] transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t('about.whatWeDo.services.secureLogistics.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 text-left" style={{ 
                    fontFamily: 'NoiGrotesk, sans-serif'
                  }}>
                    {t('about.whatWeDo.services.secureLogistics.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Integrated 3PL & FTWZ Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full min-h-[340px] group-hover:shadow-2xl group-hover:border-[#6164F6]/20 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6164F6] to-[#8B8FFF] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Image src="/images/container-crane.svg" alt="FTWZ Container Crane" width={36} height={36} className="filter invert brightness-0 w-9 h-9" unoptimized />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6164F6] transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t('about.whatWeDo.services.ftwzServices.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 text-left" style={{ 
                    fontFamily: 'NoiGrotesk, sans-serif'
                  }}>
                    {t('about.whatWeDo.services.ftwzServices.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Real-Time Inventory Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full min-h-[340px] group-hover:shadow-2xl group-hover:border-[#6164F6]/20 transition-all duration-300 group-hover:-translate-y-2 flex flex-col">
                <div className="text-center flex-1 flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8B8FFF] to-[#6164F6] rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z M6,9A1,1 0 0,1 7,8A1,1 0 0,1 8,9A1,1 0 0,1 7,10A1,1 0 0,1 6,9M6,13A1,1 0 0,1 7,12A1,1 0 0,1 8,13A1,1 0 0,1 7,14A1,1 0 0,1 6,13M18,9V11H10V9H18M18,12V14H12V12H18Z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#6164F6] transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t('about.whatWeDo.services.inventoryManagement.title')}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 text-left" style={{ 
                    fontFamily: 'NoiGrotesk, sans-serif'
                  }}>
                    {t('about.whatWeDo.services.inventoryManagement.description')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mission Statement Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 sm:mt-20 md:mt-26 mb-20 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-6 sm:mt-8 md:mt-10" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              {t('about.mission.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-7xl mx-auto mb-8 text-center" style={{ 
              fontFamily: 'NoiGrotesk, sans-serif',
              fontSize: 'clamp(1.5rem, 8vw, 3rem)'
            }}>
              {t('about.mission.description')}
            </p>

          </motion.div>

      {/* Team Section */}
      {/* <TeamSection /> */}

      {/* Stats Section */}
      <div className="w-full overflow-x-hidden">
      <StatsSection />
      </div>

      {/* Testimonials Section 
      <div className="w-full overflow-x-hidden">
      <TestimonialsSection />
      </div> *

      {/* Core Values Section 
      <div className="w-full overflow-x-hidden">
      <CoreValuesSection />
      </div> */}

      {/* Supporting Diverse Industrial Sectors Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10">
        <ServiceSlider />
      </div>

      {/* Book a Call Section */}
      <div className="w-full overflow-x-hidden">
      <BookCallSection />
      </div>

      {/* Newsletter Section */}
      <div id="newsletter" className="py-20 px-6 md:px-20 w-full overflow-x-hidden">
        {/* TODO: Implement NewsletterSection component */}
        {/* <NewsletterSection /> */}
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mb-24 sm:mb-8 w-full overflow-x-hidden">
        <FooterSection />
      </div>
    </div>
  );
} 