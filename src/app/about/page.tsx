"use client"
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterSection from '@/components/FooterSection';
import BookCallSection from '@/components/BookCallSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CoreValuesSection from '@/components/CoreValuesSection';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// TODO: Create and import these components
// import NewsletterSection from '@/components/NewsletterSection';

export default function AboutPage() {
  // Scroll reveal refs and variants
  const headingRef = useRef(null);
  const lines = [
    "simplify global chemical trade",
    "by offering turnkey",
    "solutions"
  ];
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
  const letter = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  const paraLines = [
    "Robust India an import-export company dedicated to delivering comprehensive",
    "chemical supply chain solutions worldwide. Founded on the principles of",
    "reliability, transparency, and innovation."
  ];

  // GSAP scroll-triggered paragraph reveal
  const paraRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const para = paraRef.current;
    if (!para) return;
    const chars = gsap.utils.toArray<HTMLElement>(para.querySelectorAll('span'));
    ScrollTrigger.create({
      trigger: para,
      start: 'top bottom',
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
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-2 z-10 max-w-full">
        {/* Company logo and name */}
        <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 mb-4 mt-2">
          <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-wide">ROBUST INDIA</span>
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
          viewport={{ once: false, amount: 0.1 }}
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
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-800 leading-relaxed mb-12 px-4"
          style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
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
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 mt-10" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              What we do
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              Comprehensive chemical supply chain solutions for global industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Chemical Sourcing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#6164F6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                Chemical Sourcing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                High-quality specialty and bulk chemicals for oil & gas, agrochemicals, and polymers
              </p>
            </motion.div>

            {/* Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#6164F6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                Quality Assurance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                ISO, ASTM, REACH compliance ensuring consistent purity and performance
              </p>
            </motion.div>

            {/* FTWZ Logistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#6164F6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,4H7.5L9.5,6H20A1,1 0 0,1 21,7V19A1,1 0 0,1 20,20H4A1,1 0 0,1 3,19V4M15,9V12H18V15L22,11L18,7V10H15V9Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                FTWZ Logistics
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                Duty-free facilities in Mumbai, Chennai, Delhi for seamless import/export
              </p>
            </motion.div>

            {/* 3PL Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#6164F6] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,7H18V6A2,2 0 0,0 16,4H8A2,2 0 0,0 6,6V7H5A3,3 0 0,0 2,10V20A1,1 0 0,0 3,21H21A1,1 0 0,0 22,20V10A3,3 0 0,0 19,7M8,6H16V7H8V6M20,19H4V17H20V19M20,15H4V10A1,1 0 0,1 5,9H19A1,1 0 0,1 20,10V15Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                3PL Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                End-to-end warehousing, packaging, and inventory management solutions
              </p>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-20"
          >
            <div className="max-w-2xl mx-auto mt-30 -mb-10">
              <h3 className="text-2xl md:text-4xl font-light text-gray-900 mb-6 leading-tight" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                Your trusted partner in global chemical trade
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                Experience efficiency, compliance, and reliability in one integrated platform
              </p>
            </div>
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