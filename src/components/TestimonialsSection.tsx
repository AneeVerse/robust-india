'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, PanInfo } from 'framer-motion';

const testimonials = [
  {
    quote: "Our brand needed a refresh to fit our our identity, and Yummygum made it happen. They truly listened, acted on feedback, and kept communication clear and direct, making collaboration seamless. The result speaks for itself—we're happy to continue collaboration.",
    author: "Marjolein van Koningsveld",
    role: "Co-Founder & CEO at ORYX",
    highlight: ["communication clear", "direct"],
    image: "/images/about/1743186632-marjolein.avif",
  },
  {
    quote: "We'd been trying to position ourselves in a competing market. Through various workshops Yummygum guided us and delivered a beautiful brand identity that's inspired us ever since.",
    author: "Sefa Şentürk",
    role: "Partner at Tuple",
    highlight: ["inspired"],
    image: "/images/about/1743186712-sefa.avif",
  },
  {
    quote: "We needed a website that attracted bigger clients and reflected our growth. Yummygum delivered a structured, high-quality process. The first design version was spot on, and communication was seamless. Now, we have a professional website that builds trust and is easy for our marketing team to manage —giving them time to focus on growth.",
    author: "Jordi Dijkstra",
    role: "Head of Marketing & Growth at Employes",
    highlight: ["focus on growth"],
    image: "/images/about/1743186672-jordi.avif",
  },
  {
    quote: "Yummygum helped us successfully expand our audience with a strong brand identity, new platform design and a stunning marketing website. We appreciated their systematic approach throughout the branding process and would 100% work with them again. Our platform's users are excited and engaged, and the results have received overwhelmingly positive reactions.",
    author: "Bram Jetten",
    role: "Chief Technology Officer at PlanGo",
    highlight: ["expand our audience"],
    image: "/images/about/1743085447-image-9.avif",
  },
  {
    quote: "Yummygum's approach to redesigning our app's navigation was exceptional. They dove deep to understand the entire user experience, emerging with a solution that feels deceptively simple. What seems completely natural and intuitive now was far from obvious at the start—that's the hallmark of brilliant UX design.",
    author: "Scott O'Reilly",
    role: "Founder & Chief Architect @ Spider Strategies",
    highlight: [],
    image: "/images/about/1743086644-scottoreilly-f1.avif",
  },
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

export default function TestimonialsSection() {
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
      const style = window.getComputedStyle(trackRef.current);
      setGapPx(parseFloat(style.gap));
    }
  }, []);

  // Calculate initial offset to center the active card
  const trackLeftOffset = (containerWidth - innerWidth) / 2;

  // Handle drag snapping in a circular loop
  const lastIndex = testimonials.length - 1;
  const handleDragEnd = (event: any, info: PanInfo) => {
    if (info.offset.x < -50) {
      // drag left -> next, wrap to first if at end
      setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
    } else if (info.offset.x > 50) {
      // drag right -> previous, wrap to last if at start
      setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
    }
  };

  return (
    <section className="py-24 bg-white" style={{ fontFamily: "'NoiGrotesk', sans-serif" }}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-7xl mx-auto px-6 md:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl  text-gray-900 mb-4 text-center"
        >
          They say it best
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-16 text-center"
        >
          What clients love about working with us
        </motion.p>

        {/* Slider Carousel */}
        <div className=" h-[80vh]">
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
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 flex justify-center items-center h-full">
                <motion.div
                  variants={itemVariants}
                  className={`bg-gray-50 rounded-2xl p-12 flex flex-col h-full border border-[#6164F6] shadow-2xl ${index !== currentIndex ? 'filter blur-sm' : ''}`}
                  style={{ width: innerWidth }}
                >
                  <blockquote className="flex-grow mb-12 text-3xl text-gray-800 leading-snug">
                    {testimonial.quote.split(' ').map((word, i) => {
                      const isHighlighted = testimonial.highlight.some(h =>
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
                    <Image src={testimonial.image} alt={testimonial.author} width={80} height={80} className="rounded-lg object-cover mr-8" />
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
        <CustomCursor visible={cursor.visible} x={cursor.x} y={cursor.y} />
      </div>
    </section>
  );
} 