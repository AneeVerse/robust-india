'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSlider from '@/components/ServiceSlider';
import FooterSection from '@/components/FooterSection';
import BookACall from '@/components/BookCallSection';

const projects = [
  { slug: 'chemical-products',
    image: '/images/project/project1.png',
    title: 'Chemical Products',
    description: 'A wide portfolio of high-quality specialty and bulk chemicals sourced, packaged, and delivered to spec.',
  },
  { slug: 'ftwz',
    image: '/images/project/project2.png',
    title: 'FTWZ',
    description: 'Duty-free warehousing, value-added operations, and hassle-free import/export no local entity needed.',
  },
  { slug: 'integrated-3pl',
    image: '/images/project/project3.png',
    title: 'Integrated 3PL',
    description: 'End-to-end logistics including storage, handling, inventory management, and efficient global distribution.',
  },
];

const CustomCursor: React.FC<{ visible: boolean; x: number; y: number }> = ({ visible, x, y }) => (
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
    View Project
  </div>
);

export default function ProjectsPage() {
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursor({ visible: true, x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    setCursor(c => ({ ...c, visible: false }));
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Gradient top left, rotated */}
      <div className="absolute top-0 left-0 w-[700px] h-[400px] -z-10" style={{ background: 'radial-gradient(circle at 0% 0%, #97CCFB 0%, #B9E0FF 30%, #f8f6f4 60%)', transform: 'rotate(-20deg)' }} />
      <div className="w-full">
        <section className="relative flex flex-col items-center justify-center w-full text-center px-4 md:px-8 pt-16 pb-2 z-10">
          {/* Company logo and name */}
          <Link href="/" className="flex items-center justify-center gap-3 mb-4 mt-2">
            <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} />
            <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">ROBUST INDIA</span>
          </Link>
          {/* Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-light text-center text-gray-900 mb-8 md:mb-18 leading-tight mt-8 md:mt-20" 
            style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
            initial="hidden"
            animate="visible"
          >
            {"Some of our favorite projects".split('').map((char, idx) => (
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
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Projects Container */}
          <div
            className="w-full max-w-[1400px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <CustomCursor visible={cursor.visible} x={cursor.x} y={cursor.y} />
            {/* Top two project images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {projects.slice(0, 2).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block rounded-4xl overflow-hidden shadow-lg bg-white">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </Link>
            ))}
          </div>
          {/* Titles and descriptions for top two */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full text-left">
            {projects.slice(0, 2).map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block px-2 md:px-4">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed line-clamp-2 w-[500px]" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.description}</p>
              </Link>
            ))}
          </div>
            {/* Third project full-width */}
            <div className="mt-16 md:mt-24 w-full">
              <Link href={`/projects/${projects[2].slug}`} className="block w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  width={1200}
                  height={600}
                  className="w-full h-[600px] object-cover"
                />
              </Link>
              <Link href={`/projects/${projects[2].slug}`} className="block mt-8 w-full text-left px-2 md:px-4">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">{projects[2].title}</h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed line-clamp-2 w-[500px]" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{projects[2].description}</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/*book a call section*/ }
      <div className="mt-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <BookACall />
        </div>
      </div>
      
      {/* Service Slider Section */}
      <div className="mt-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <ServiceSlider />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-20 px-4 md:px-8 mb-10">
        <div className="max-w-[1400px] mx-auto">
          <FooterSection />
        </div>
      </div>
    </div>
  );
} 