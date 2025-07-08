'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, PanInfo } from 'framer-motion';
import { useTranslation } from 'next-i18next';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  highlight: string[];
}

const testimonialImages = [
  "/images/about/1743186632-marjolein.avif",
  "/images/about/1743186712-sefa.avif",
  "/images/about/1743186672-jordi.avif",
  "/images/about/1743085447-image-9.avif",
  "/images/about/1743086644-scottoreilly-f1.avif",
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

// Custom cursor component for drag indicator
const CustomCursor: React.FC<{ visible: boolean; x: number; y: number }> = ({ visible, x, y }) => (
  <div
    style={{
      position: 'fixed',
      left: x,
      top: y,
      pointerEvents: 'none',
      zIndex: 9999,
      transform: 'translate(-50%, -50%)',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.2s',
      background: 'rgba(120,120,120,0.45)',
      color: '#fff',
      borderRadius: '2rem',
      padding: '0.35rem 1.3rem',
      fontSize: '1.05rem',
      fontWeight: 700,
      boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1.5px solid rgba(255,255,255,0.18)',
      letterSpacing: '0.01em',
    }}
  >
    {'< Drag >'}
  </div>
);

// Responsive hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
}

export default function TestimonialsSection() {
  const { t } = useTranslation('common');
  const testimonials = (t('testimonials.items', { returnObjects: true }) || []) as Testimonial[];

  // Cursor and drag state
  const [cursor, setCursor] = useState({ visible: false, x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursor({ visible: true, x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    setCursor(c => ({ ...c, visible: false }));
  };

  // Carousel refs and measurements
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [gapPx, setGapPx] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Measure container and track to calculate dimensions
  useEffect(() => {
    if (containerRef.current && trackRef.current) {
      const cw = containerRef.current.clientWidth;
      setContainerWidth(cw);
      const iw = cw * 0.6;
      setInnerWidth(iw);
      const style = typeof window !== 'undefined' ? window.getComputedStyle(trackRef.current) : null;
      if (!style) return;
      setGapPx(parseFloat(style.gap));
    }
  }, []);

  // Calculate initial offset to center the active card
  const trackLeftOffset = (containerWidth - innerWidth) / 2;

  // Handle drag snapping in a circular loop
  const lastIndex = testimonials.length - 1;
  const handleDragEnd = (_event: unknown, info: PanInfo) => {
    if (info.offset.x < -50) {
      // drag left -> next, wrap to first if at end
      setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
    } else if (info.offset.x > 50) {
      // drag right -> previous, wrap to last if at start
      setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
    }
  };

  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-24 bg-white" style={{ fontFamily: "'NoiGrotesk', sans-serif" }}>
      <div
        ref={containerRef}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
        onMouseLeave={!isMobile ? handleMouseLeave : undefined}
        className="max-w-7xl mx-auto px-4 md:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl xs:text-3xl md:text-6xl text-gray-900 mb-2 md:mb-4 text-center"
        >
          {t('testimonials.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base xs:text-lg md:text-xl text-gray-600 mb-8 md:mb-16 text-center"
        >
          {t('testimonials.subtitle')}
        </motion.p>

        {/* Responsive Testimonials */}
        {isMobile ? (
          <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <div key={index} className="snap-center shrink-0 w-[90vw] max-w-xs">
                <div className="bg-gray-50 rounded-2xl p-6 xs:p-8 flex flex-col border border-[#6164F6] shadow-2xl h-full">
                  <blockquote className="mb-6 text-sm xs:text-base text-gray-800 leading-snug">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center mb-4 mt-auto">
                    <Image src={testimonialImages[index]} alt={testimonial.author} width={48} height={48} className="rounded-lg object-cover mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm xs:text-base">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs xs:text-sm tracking-wide leading-snug">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop carousel as before
          <div className="h-[80vh]">
            <motion.div
              ref={trackRef}
              drag="x"
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: 'grabbing' }}
              className="flex items-center h-full"
              style={{ gap: '2rem' }}
              animate={{ x: trackLeftOffset - currentIndex * (innerWidth + gapPx) }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial: Testimonial, index: number) => (
                <div key={index} className="flex-shrink-0 flex justify-center items-center h-full">
                  <motion.div
                    variants={itemVariants}
                    className={`bg-gray-50 rounded-2xl p-12 flex flex-col h-full border border-[#6164F6] shadow-2xl ${index !== currentIndex ? 'filter blur-sm' : ''}`}
                    style={{ width: innerWidth }}
                  >
                    <blockquote className="flex-grow mb-12 text-xl md:text-2xl text-gray-800 leading-snug">
                      {testimonial.quote.split(' ').map((word: string, i: number) => {
                        const isHighlighted = testimonial.highlight.some((h: string) =>
                          testimonial.quote.toLowerCase().indexOf(h.toLowerCase()) ===
                          testimonial.quote.toLowerCase().split(' ').slice(0, i + 1).join(' ').length - word.length
                        );
                        return (
                          <span key={i} className={isHighlighted ? "text-blue-600 font-semibold" : ""}>
                            {word}{' '}
                          </span>
                        );
                      })}
                    </blockquote>
                    <div className="flex items-center mb-8 mt-auto">
                      <Image src={testimonialImages[index]} alt={testimonial.author} width={80} height={80} className="rounded-lg object-cover mr-8" />
                      <div>
                        <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                        <p className="text-gray-500 text-base tracking-wide leading-snug">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        )}
        {/* Custom cursor only on desktop */}
        {!isMobile && <CustomCursor visible={cursor.visible} x={cursor.x} y={cursor.y} />}
      </div>
    </section>
  );
} 