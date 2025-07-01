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
import { MdScience, MdVerifiedUser, MdLocalShipping, MdWarehouse } from "react-icons/md";

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
    "Robust India is an import-export company dedicated to delivering comprehensive chemical supply chain.",
    "solutions worldwide. Founded on the principles of reliability, transparency, and innovation, we specialize ",
    "in sourcing, developing, and distributing high-quality specialty and bulk chemicals to industries",
    "ranging from oil & gas and agrochemicals to water treatment and specialty polymers."
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
          className="mt-0 max-w-5xl mx-auto text-lg md:text-xl text-gray-700 leading-[1.8] mb-16 px-6 text-center"
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
                <MdScience className="w-8 h-8 text-white" />
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
                <MdVerifiedUser className="w-8 h-8 text-white" />
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
                <MdLocalShipping className="w-8 h-8 text-white" />
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
                <MdWarehouse className="w-8 h-8 text-white" />
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
            className="mt-20 mb-16"
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="rounded-3xl p-8 md:p-12 bg-gray-50 shadow-lg">
                <div className="space-y-8 text-center md:text-left">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    Leveraging our deep expertise in product development, we partner with manufacturers to create customized chemical formulations from pilot-scale trials through full production, ensuring that every product meets your exact specifications. Our rigorous quality-inspection processes, aligned with international standards (ISO, ASTM, REACH), guarantee consistent purity and performance.
                  </p>
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    At the heart of our offering is an integrated logistics network anchored by India's leading Free Trade & Warehousing Zones (FTWZ). Through these duty-free facilities in Mumbai, Chennai, and Delhi, we provide end-to-end 3PL services including bonded warehousing, value-added labeling or repackaging, and streamlined import/export handling without the need for clients to establish a local entity. Real-time inventory management and secure, compliant packaging solutions further ensure that your materials are accurately tracked and safely delivered on time, every time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 -mb-20">
              {/* Mission */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6164F6] to-[#8B8FFF] rounded-3xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                    </svg>
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-light text-gray-900 mb-6"
                  style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                >
                  Our Mission
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                >
                  To simplify global chemical trade by offering turnkey solutions that blend product innovation, quality assurance, and seamless logistics under one roof with comprehensive expertise.
                </motion.p>
              </div>

              {/* Vision */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8B8FFF] to-[#6164F6] rounded-3xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
                    </svg>
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-3xl md:text-4xl font-light text-gray-900 mb-6"
                  style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                >
                  Our Vision
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-lg md:text-xl text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                >
                  To be the world&apos;s most trusted partner for chemical sourcing and supply chain excellence, enabling clients to focus on growth while we handle the complexities of international trade.
                </motion.p>
              </div>
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