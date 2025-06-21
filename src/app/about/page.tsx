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
    "Our team of experts has a",
    "sweet tooth for digital",
    "products."
  ];
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
  const letter = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  const paraLines = [
    "If there's one thing we love, it's sinking our teeth into",
    "platforms and beyond ensuring every detail",
    "reflects your unique vision."
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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-2 z-10">
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-20 tracking-tight text-center"
          style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
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
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-800 leading-relaxed mb-20"
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
      </section>

      {/* Team Section */}
      {/* <TeamSection /> */}

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Book a Call Section */}
      <BookCallSection />

      {/* Newsletter Section */}
      <div id="newsletter" className="py-20 px-6 md:px-20">
        {/* TODO: Implement NewsletterSection component */}
        {/* <NewsletterSection /> */}
      </div>

      {/* Footer */}
      <div className="px-10 mb-8">
        <FooterSection />
      </div>
    </div>
  );
} 