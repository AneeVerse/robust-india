"use client"
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import BookCallSection from '@/components/BookCallSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CoreValuesSection from '@/components/CoreValuesSection';
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
      <section className="relative flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-2 z-10 max-w-full">
        {/* Company logo and name */}
        <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 mb-4 mt-2">
          <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-wide">{t('hero.brandName')}</span>
        </Link>
        <motion.h1
          ref={headingRef}
          initial="hidden"
          animate="visible"
          variants={container}
          className="font-normal text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-20 tracking-tight text-center max-w-full"
          style={{ 
            fontFamily: 'NoiGrotesk, sans-serif',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)'
          }}
        >
          {lines.map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line.split('').map((char, idx) => (
                <motion.span key={`${lineIndex}-${idx}`} variants={letter}>
                  {char}
                </motion.span>
              ))}
              {lineIndex < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="my-6 mt-30 mb-30"
        >
          <Image
            src="/images/SVG.png"
            alt=""
            width={200}
            height={200}
            className="transform rotate-270 mx-auto"
          />
        </motion.div>
        <p
          ref={paraRef}
          className="mt-0 max-w-6xl mx-auto text-lg md:text-xl lg:text-2xl text-gray-700 leading-[1.9] mb-16 px-6"
          style={{ 
            fontFamily: 'NoiGrotesk, sans-serif', 
            textAlign: 'justify', 
            textJustify: 'inter-word',
            textAlignLast: 'justify',
            hyphens: 'auto',
            wordSpacing: '0.1em'
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
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 mt-10" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
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



          {/* Mission Statement Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-26 mb-20 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-10" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              {t('about.mission.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-7xl mx-auto mb-8" style={{ 
              fontFamily: 'NoiGrotesk, sans-serif',
              fontSize: 'clamp(1.5rem, 8vw, 3rem)'
            }}>
              {t('about.mission.description')}
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="my-6 mt-30 mb-30"
            >
              <Image
                src="/images/SVG.png"
                alt=""
                width={200}
                height={200}
                className="transform rotate-270 mx-auto"
              />
            </motion.div>
          </motion.div>

          {/* FTWZ & 3PL Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            {/* Section Header - ENHANCED DESIGN */}
            <div className="text-center mb-20 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#6164F6]/10 via-[#8B8FFF]/10 to-[#6164F6]/10 rounded-full blur-3xl"
              ></motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative text-5xl md:text-6xl font-light text-gray-900 mb-8" 
                style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  {t('about.ftwz.sectionTitle').split(' ')[0]} 
                </span>
                <span className="bg-gradient-to-r from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF] bg-clip-text text-transparent font-bold">
                  {" "}{t('about.ftwz.sectionTitle').split(' ').slice(1, 4).join(' ')}{" "}
                </span>
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  {t('about.ftwz.sectionTitle').split(' ').slice(4).join(' ')}
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl text-gray-600 max-w-4xl mx-auto relative" 
                style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
              >
                {t('about.ftwz.subtitle')}
              </motion.p>
              
              {/* Decorative Line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "12rem" }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.8 }}
                className="h-1 bg-gradient-to-r from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF] mx-auto mt-8 rounded-full"
              ></motion.div>
            </div>

            {/* Key Features Grid - WORLD CLASS DESIGN */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                { 
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                    </svg>
                  ),
                  title: t('about.ftwz.keyFeatures.dutyFree.title'), 
                  desc: t('about.ftwz.keyFeatures.dutyFree.desc'),
                  gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                  bgPattern: "opacity-10 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10"
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.43,12.98C19.47,12.66 19.5,12.34 19.5,12C19.5,11.66 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.97 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.49,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.51,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.66 4.57,12.98L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5Z"/>
                    </svg>
                  ),
                  title: t('about.ftwz.keyFeatures.valueAdded.title'), 
                  desc: t('about.ftwz.keyFeatures.valueAdded.desc'),
                  gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                  bgPattern: "opacity-10 bg-gradient-to-br from-[#8B8FFF]/10 to-[#6164F6]/10"
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                    </svg>
                  ),
                  title: t('about.ftwz.keyFeatures.noEntity.title'), 
                  desc: t('about.ftwz.keyFeatures.noEntity.desc'),
                  gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                  bgPattern: "opacity-10 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10"
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                    </svg>
                  ),
                  title: t('about.ftwz.keyFeatures.strategic.title'), 
                  desc: t('about.ftwz.keyFeatures.strategic.desc'),
                  gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                  bgPattern: "opacity-10 bg-gradient-to-br from-[#8B8FFF]/10 to-[#6164F6]/10"
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18,8C18,6.31 16.69,5 15,5H9C7.31,5 6,6.31 6,8H4C2.9,8 2,8.9 2,10V19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19V10C22,8.9 21.1,8 20,8H18M15,7C15.55,7 16,7.45 16,8H8C8,7.45 8.45,7 9,7H15M20,19H4V10H6V12H8V10H16V12H18V10H20V19Z"/>
                    </svg>
                  ),
                  title: t('about.ftwz.keyFeatures.distribution.title'), 
                  desc: t('about.ftwz.keyFeatures.distribution.desc'),
                  gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                  bgPattern: "opacity-10 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10"
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12S16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12S19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12S9.56,10.66 9.66,10H14.34C14.43,10.66 14.5,11.34 14.5,12S14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12S4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.34 7.5,12S7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                    </svg>
                  ),
                  title: t('about.ftwz.keyFeatures.importExport.title'), 
                  desc: t('about.ftwz.keyFeatures.importExport.desc'),
                  gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                  bgPattern: "opacity-10 bg-gradient-to-br from-[#8B8FFF]/10 to-[#6164F6]/10"
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,3H21C22.05,3 23,3.95 23,5V19C23,20.05 22.05,21 21,21H3C1.95,21 1,20.05 1,19V5C1,3.95 1.95,3 3,3M3,5V19H21V5H3M5,7H19V9H5V7M5,11H19V13H5V11M5,15H19V17H5V15Z"/>
                    </svg>
                  ),
                  title: t('about.ftwz.keyFeatures.tracking.title'), 
                  desc: t('about.ftwz.keyFeatures.tracking.desc'),
                  gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                  bgPattern: "opacity-10 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10"
                },
                { 
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20,8H4V6C4,4.89 4.89,4 6,4H18A2,2 0 0,1 20,6V8M20,8V18A2,2 0 0,1 18,20H6C4.89,20 4,19.1 4,18V8H20M16,11V13H14V11H16M12,11V13H10V11H12Z"/>
                    </svg>
                  ),
                  title: t('about.ftwz.keyFeatures.payments.title'), 
                  desc: t('about.ftwz.keyFeatures.payments.desc'),
                  gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                  bgPattern: "opacity-10 bg-gradient-to-br from-[#8B8FFF]/10 to-[#6164F6]/10"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                                  transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 120,
                  damping: 12
                }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Animated Background Pattern */}
                  <div className={`absolute inset-0 ${feature.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Floating Icon with Gradient */}
                  <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {feature.desc}
                    </p>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${feature.gradient} rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                </motion.div>
              ))}
            </div>

            {/* What is FTWZ Section - CLEAN DESIGN */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative bg-white rounded-3xl p-10 md:p-16 mb-20 overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-purple-50/30 rounded-3xl -z-10"></div>
              
              <div className="relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center" 
                  style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                >
                  {t('about.ftwz.whatIsFtwz.title')}
                </motion.h3>
                
                <div className="max-w-5xl mx-auto">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-xl text-gray-600 leading-relaxed mb-10 text-center" 
                    style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                  >
                    {t('about.ftwz.whatIsFtwz.description')}
                  </motion.p>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                      {
                        title: t('about.ftwz.whatIsFtwz.features.0'),
                        icon: (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                          </svg>
                        ),
                        gradient: "from-[#6164F6] to-[#8B8FFF]"
                      },
                      {
                        title: t('about.ftwz.whatIsFtwz.features.1'),
                        icon: (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12S16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12S19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12S9.56,10.66 9.66,10H14.34C14.43,10.66 14.5,11.34 14.5,12S14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12S4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.34 7.5,12S7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                          </svg>
                        ),
                        gradient: "from-[#8B8FFF] to-[#6164F6]"
                      },
                      {
                        title: t('about.ftwz.whatIsFtwz.features.2'),
                        icon: (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.43,12.98C19.47,12.66 19.5,12.34 19.5,12C19.5,11.66 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.97 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.49,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.51,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.66 4.57,12.98L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5Z"/>
                          </svg>
                        ),
                        gradient: "from-[#6164F6] to-[#8B8FFF]"
                      }
                    ].map((point, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                      >
                        <div className={`w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                          {point.icon}
                        </div>
                        <p className="text-gray-700 text-center leading-relaxed group-hover:text-gray-900 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                          {point.title}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="text-xl text-gray-600 leading-relaxed text-center" 
                    style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                  >
                    {t('about.ftwz.whatIsFtwz.conclusion')}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Services We Offer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-16"
            >
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                {t('about.ftwz.servicesOffered.title')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    title: t('about.ftwz.servicesOffered.services.warehousing.title'),
                    points: t('about.ftwz.servicesOffered.services.warehousing.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4,2V22H20V2H4M6,4H18V20H6V4M8,6V8H16V6H8M8,10V12H16V10H8M8,14V16H16V14H8M8,18V20H16V18H8Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                    borderColor: "border-[#6164F6]/20",
                    glowColor: "shadow-[#6164F6]/50"
                  },
                  {
                    title: t('about.ftwz.servicesOffered.services.valueAdded.title'),
                    points: t('about.ftwz.servicesOffered.services.valueAdded.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                      </svg>
                    ),
                    gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                    borderColor: "border-[#8B8FFF]/20",
                    glowColor: "shadow-[#8B8FFF]/50"
                  },
                  {
                    title: t('about.ftwz.servicesOffered.services.handling.title'),
                    points: t('about.ftwz.servicesOffered.services.handling.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19,7H18V6A3,3 0 0,0 15,3H9A3,3 0 0,0 6,6V7H5A3,3 0 0,0 2,10V19A3,3 0 0,0 5,22H19A3,3 0 0,0 22,19V10A3,3 0 0,0 19,7M8,6A1,1 0 0,1 9,5H15A1,1 0 0,1 16,6V7H8V6M20,19A1,1 0 0,1 19,20H5A1,1 0 0,1 4,19V10A1,1 0 0,1 5,9H19A1,1 0 0,1 20,10V19Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                    borderColor: "border-[#6164F6]/20",
                    glowColor: "shadow-[#6164F6]/50"
                  },
                  {
                    title: t('about.ftwz.servicesOffered.services.inventory.title'),
                    points: t('about.ftwz.servicesOffered.services.inventory.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,3H21C22.05,3 23,3.95 23,5V19C23,20.05 22.05,21 21,21H3C1.95,21 1,20.05 1,19V5C1,3.95 1.95,3 3,3M3,5V19H21V5H3M5,7H19V9H5V7M5,11H11V13H5V11M5,15H11V17H5V15M13,11H19V13H13V11M13,15H19V17H13V15Z"/>
                      </svg>
                    ),
                    gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                    borderColor: "border-[#8B8FFF]/20",
                    glowColor: "shadow-[#8B8FFF]/50"
                  },
                  {
                    title: t('about.ftwz.servicesOffered.services.compliance.title'),
                    points: t('about.ftwz.servicesOffered.services.compliance.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                    borderColor: "border-[#6164F6]/20",
                    glowColor: "shadow-[#6164F6]/50"
                  },
                  {
                    title: t('about.ftwz.servicesOffered.services.consolidation.title'),
                    points: t('about.ftwz.servicesOffered.services.consolidation.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12S16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12S19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12S9.56,10.66 9.66,10H14.34C14.43,10.66 14.5,11.34 14.5,12S14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12S4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.34 7.5,12S7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                      </svg>
                    ),
                    gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                    borderColor: "border-[#8B8FFF]/20",
                    glowColor: "shadow-[#8B8FFF]/50"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    whileHover={{ 
                      y: -15, 
                      scale: 1.02,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className={`group relative bg-white rounded-3xl p-8 shadow-2xl border-2 ${service.borderColor} hover:${service.glowColor} hover:shadow-3xl transition-all duration-500 overflow-hidden`}
                  >
                    {/* Animated Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Premium Icon Container */}
                    <div className={`relative z-10 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-transparent to-black/10 rounded-2xl"></div>
                      {service.icon}
                    </div>
                    
                    {/* Premium Content */}
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {service.title}
                      </h4>
                      <ul className="space-y-4 text-left">
                        {service.points.map((point, pointIndex) => (
                          <motion.li 
                            key={pointIndex} 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.2) + (pointIndex * 0.1) + 0.5 }}
                            className="flex items-start space-x-3"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                            <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-sm" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Premium Hover Glow Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.gradient} rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                    
                    {/* Floating Particles Effect */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-white to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-white to-transparent rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                  </motion.div>
                ))}
              </div>
                         </motion.div>

            {/* Why Choose Robust India Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-20"
            >
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                {t('about.ftwz.whyChoose.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {(t('about.ftwz.whyChoose.reasons', { returnObjects: true }) as Array<{number: string, title: string, desc: string}>).map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10 rounded-bl-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#6164F6]" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{reason.number}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 pr-12" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {reason.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {reason.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center mt-12"
              >
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {t('about.ftwz.whyChoose.conclusion')}
                </p>
              </motion.div>
            </motion.div>

            {/* End-to-End Solutions Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {t('about.endToEnd.title')}
                </h3>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {t('about.endToEnd.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: t('about.endToEnd.solutions.0.title'),
                    points: t('about.endToEnd.solutions.0.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5,2H19A1,1 0 0,1 20,3V6H4V3A1,1 0 0,1 5,2M18,8A2,2 0 0,1 16,10A2,2 0 0,1 14,8A2,2 0 0,1 16,6A2,2 0 0,1 18,8M4,8V21A1,1 0 0,0 5,22H19A1,1 0 0,0 20,21V8H4Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                    bgColor: "bg-gradient-to-br from-[#6164F6]/5 to-[#8B8FFF]/5"
                  },
                  {
                    title: t('about.endToEnd.solutions.1.title'),
                    points: t('about.endToEnd.solutions.1.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M16.59,7.58L10,14.17L7.41,11.59L6,13L10,17L18,9L16.59,7.58Z"/>
                      </svg>
                    ),
                    gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                    bgColor: "bg-gradient-to-br from-[#8B8FFF]/5 to-[#6164F6]/5"
                  },
                  {
                    title: t('about.endToEnd.solutions.2.title'),
                    points: t('about.endToEnd.solutions.2.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                    bgColor: "bg-gradient-to-br from-[#6164F6]/5 to-[#8B8FFF]/5"
                  },
                  {
                    title: t('about.endToEnd.solutions.3.title'),
                    points: t('about.endToEnd.solutions.3.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19,7H18V6A3,3 0 0,0 15,3H9A3,3 0 0,0 6,6V7H5A3,3 0 0,0 2,10V19A3,3 0 0,0 5,22H19A3,3 0 0,0 22,19V10A3,3 0 0,0 19,7M8,6A1,1 0 0,1 9,5H15A1,1 0 0,1 16,6V7H8V6M20,19A1,1 0 0,1 19,20H5A1,1 0 0,1 4,19V10A1,1 0 0,1 5,9H19A1,1 0 0,1 20,10V19Z"/>
                      </svg>
                    ),
                    gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                    bgColor: "bg-gradient-to-br from-[#8B8FFF]/5 to-[#6164F6]/5"
                  },
                  {
                    title: t('about.endToEnd.solutions.4.title'),
                    points: t('about.endToEnd.solutions.4.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20,8H4V6C4,4.89 4.89,4 6,4H18A2,2 0 0,1 20,6V8M20,8V18A2,2 0 0,1 18,20H6C4.89,20 4,19.1 4,18V8H20M7,10V16H10V10H7M14,10V16H17V10H14Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                    bgColor: "bg-gradient-to-br from-[#6164F6]/5 to-[#8B8FFF]/5"
                  },
                  {
                    title: t('about.endToEnd.solutions.5.title'),
                    points: t('about.endToEnd.solutions.5.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.5C16.3,11 17,11.4 17,12V16C17,16.6 16.6,17 16,17H8C7.4,17 7,16.6 7,16V12C7,11.4 7.4,11 8,11H8.5V10C8.5,8.6 9.6,7 12,7M12,8.2C10.2,8.2 9.8,9.2 9.8,10V11H14.2V10C14.2,9.2 13.8,8.2 12,8.2Z"/>
                      </svg>
                    ),
                    gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                    bgColor: "bg-gradient-to-br from-[#8B8FFF]/5 to-[#6164F6]/5"
                  },
                  {
                    title: t('about.endToEnd.solutions.6.title'),
                    points: t('about.endToEnd.solutions.6.points', { returnObjects: true }) as string[],
                    icon: (
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.43,12.98C19.47,12.66 19.5,12.34 19.5,12C19.5,11.66 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.97 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.49,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.51,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.66 4.57,12.98L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                    bgColor: "bg-gradient-to-br from-[#6164F6]/5 to-[#8B8FFF]/5"
                  }
                                  ].slice(0, 7).map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 120,
                        damping: 15
                      }}
                      whileHover={{ 
                        y: -12, 
                        scale: 1.03,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                      className={`group relative ${solution.bgColor} rounded-3xl p-8 shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 overflow-hidden`}
                    >
                      {/* Floating Icon with Enhanced Gradient */}
                      <div className={`relative z-10 w-28 h-28 bg-gradient-to-br ${solution.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
                        <div className="absolute inset-3 bg-gradient-to-br from-transparent to-black/10 rounded-2xl"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-white/60 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                        {solution.icon}
                      </div>
                      
                      {/* Enhanced Content */}
                      <div className="relative z-10 text-center">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                          {solution.title}
                        </h4>
                        <ul className="space-y-4 text-left">
                          {solution.points.map((point, pointIndex) => (
                            <motion.li 
                              key={pointIndex}
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: (index * 0.08) + (pointIndex * 0.05) + 0.3 }}
                              className="flex items-start space-x-4"
                            >
                              <div className={`w-4 h-4 bg-gradient-to-br ${solution.gradient} rounded-full mt-1 flex-shrink-0 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500`}>
                                <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                              </div>
                              <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                                {point}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Animated Shine Effect */}
                      <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-x-16 -translate-y-16 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000 ease-out"></div>
                      </div>
                      
                      {/* Floating Decorative Elements */}
                      <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                      <div className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-r from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                      <div className="absolute top-1/2 right-4 w-1 h-1 bg-gradient-to-r from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-600"></div>
                    </motion.div>
                  ))}
              </div>

              {/* Benefit Highlights - REDESIGNED */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative overflow-hidden"
              >
                {/* Background with Modern Design */}
                <div className="relative bg-gradient-to-br from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF] rounded-3xl p-1">
                  <div className="relative bg-gradient-to-br from-[#6164F6]/95 via-[#7B7FFF]/95 to-[#8B8FFF]/95 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-white/5 to-transparent rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="text-center mb-12"
                      >
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                          </svg>
                        </div>
                        <h4 className="text-3xl md:text-4xl font-light text-white mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                          {t('about.benefitHighlights.title')}
                        </h4>
                        <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full mx-auto"></div>
                      </motion.div>

                      {/* Benefits Grid */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                          { 
                            title: t('about.benefitHighlights.benefits.0.title'), 
                            desc: t('about.benefitHighlights.benefits.0.desc'),
                            icon: (
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                              </svg>
                            ),
                            gradient: "from-yellow-400 to-orange-500"
                          },
                          { 
                            title: t('about.benefitHighlights.benefits.1.title'), 
                            desc: t('about.benefitHighlights.benefits.1.desc'),
                            icon: (
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                              </svg>
                            ),
                            gradient: "from-green-400 to-emerald-500"
                          },
                          { 
                            title: t('about.benefitHighlights.benefits.2.title'), 
                            desc: t('about.benefitHighlights.benefits.2.desc'),
                            icon: (
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
                              </svg>
                            ),
                            gradient: "from-blue-400 to-cyan-500"
                          },
                          { 
                            title: t('about.benefitHighlights.benefits.3.title'), 
                            desc: t('about.benefitHighlights.benefits.3.desc'),
                            icon: (
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
                              </svg>
                            ),
                            gradient: "from-purple-400 to-pink-500"
                          }
                        ].map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.5, 
                              delay: 1.6 + index * 0.1,
                              type: "spring",
                              stiffness: 120,
                              damping: 12
                            }}
                            whileHover={{ 
                              y: -8, 
                              scale: 1.05,
                              transition: { duration: 0.3 }
                            }}
                            className="group relative h-full"
                          >
                            {/* Card */}
                            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 h-full min-h-[200px] flex flex-col">
                              
                              {/* Icon - Centered */}
                              <div className="flex justify-center mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                  {benefit.icon}
                                </div>
                              </div>
                              
                              {/* Content - Centered */}
                              <div className="text-center flex-1 flex flex-col justify-center">
                                <h5 className="text-lg font-semibold text-white mb-3 group-hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                                  {benefit.title}
                                </h5>
                                <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/70 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                                  {benefit.desc}
                                </p>
                              </div>
                              
                              {/* Hover Glow */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  className="text-center mt-8"
                >
                  <p className="text-3xl text-gray-600 leading-relaxed mt-20  " style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t('about.benefitHighlights.conclusion')}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      {/* <TeamSection /> */}

      {/* Stats Section */}
      <div className="w-full overflow-x-hidden">
      <StatsSection />
      </div>

      {/* Testimonials Section */}
      <div className="w-full overflow-x-hidden">
      <TestimonialsSection />
      </div>

      {/* Core Values Section */}
      <div className="w-full overflow-x-hidden">
      <CoreValuesSection />
      </div>

      {/* Supporting Diverse Industrial Sectors Section */}
      <div className="w-full overflow-x-hidden">
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