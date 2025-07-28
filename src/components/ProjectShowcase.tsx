"use client"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    slug: 'about-us',
    image: '/images/about-us5.jpg',
    translationKey: 'about',
  },
  { 
    slug: 'chemical-products',
    image: "/images/product4.jpg",
    translationKey: "chemical"
  },
  { 
    slug: 'integrated-3pl-ftwz',
    image: "/images/demo/ftw.jpg",
    translationKey: "ftwz"
  },
  { 
    slug: 'end-to-end',
    image: "/images/demo/shipping.jpg",
    translationKey: "3pl"
  },
  // New services
  {
    slug: 'oil-and-gas',
    image: '/images/service/oil-rig (2) 1.png',
    translationKey: 'oilAndGas',
  },
  {
    slug: 'agrochemicals',
    image: '/images/service/chemicals 1.png',
    translationKey: 'agrochemicals',
  },
  {
    slug: 'water-treatment',
    image: '/images/service/wastewater 1.png',
    translationKey: 'waterTreatment',
  },
  {
    slug: 'mining-metals',
    image: '/images/service/mining 1.png',
    translationKey: 'miningMetals',
  },
  {
    slug: 'paints-coatings',
    image: '/images/service/varnish 1 (1).png',
    translationKey: 'paintsCoatings',
  },
  {
    slug: 'polymers-plastics',
    image: '/images/service/polymer 1.png',
    translationKey: 'polymersPlastics',
  },
  {
    slug: 'pharmaceuticals',
    image: '/images/service/pill 1.png',
    translationKey: 'pharmaceuticals',
  },
  {
    slug: 'textiles-fibers',
    image: '/images/service/thread 1.png',
    translationKey: 'textilesFibers',
  },
  {
    slug: 'automotive-lubricants',
    image: '/images/service/automotive 1.png',
    translationKey: 'automotiveLubricants',
  },
];

const CustomCursor: React.FC<{ visible: boolean; x: number; y: number; text: string }> = ({ visible, x, y, text }) => (
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
    {text}
  </div>
);

const ProjectShowcase = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cursor, setCursor] = React.useState({ visible: false, x: 0, y: 0 });

  // Helper function to safely get tags array
  const getProjectTags = (translationKey: string): string[] => {
    const tags = t(`projects.${translationKey}.tags`, { returnObjects: true });
    return Array.isArray(tags) ? tags.map(tag => String(tag)) : [];
  };

  // Shuffle state for tags per project
  const [shuffledTags, setShuffledTags] = React.useState<{ [key: string]: string[] }>({});
  const [fade, setFade] = React.useState(false);

  // Shuffle function
  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Set up shuffling for each project
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setShuffledTags(prev => {
          const newTags: { [key: string]: string[] } = {};
          for (const project of projects) {
            const tags = getProjectTags(project.translationKey);
            newTags[project.translationKey] = shuffleArray(tags);
          }
          return newTags;
        });
        setFade(false);
      }, 250); // fade out before shuffle
    }, 2000);
    // Initial shuffle
    setShuffledTags(() => {
      const newTags: { [key: string]: string[] } = {};
      for (const project of projects) {
        const tags = getProjectTags(project.translationKey);
        newTags[project.translationKey] = shuffleArray(tags);
      }
      return newTags;
    });
    return () => clearInterval(interval);
  }, [t]);

  useEffect(() => {
    // Disable scroll-trigger animation on mobile and desktop to prevent unwanted horizontal scroll
    if (typeof window !== 'undefined') {
      document.body.style.overflowX = 'hidden';
    }
    if (typeof window !== 'undefined' && window.innerWidth < 640) return;
    if (!sectionRef.current || !containerRef.current) return;
    const totalPanels = projects.length;
    const panelWidth = window.innerWidth;
    const gapVW = 10; // gap between panels in vw
    const gapPx = panelWidth * gapVW / 100;
    // Set container width to include panels and gaps
    gsap.set(containerRef.current, { width: `${totalPanels * 100 + (totalPanels - 1) * gapVW}vw`, display: "flex" });
    projects.forEach((_, i) => {
      gsap.set(imageRefs.current[i], { width: "100vw", height: "90vh", x: 0 });
      gsap.set(descRefs.current[i], { x: "100%", opacity: 0 });
    });

    // Horizontal scroll mapped to scroll distance including gaps
    const scrollDistance = (panelWidth + gapPx) * (totalPanels - 1);
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top -4%",
      end: `+=${scrollDistance}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Move container only after first panel completes shrink
        const t0 = 1 / totalPanels;
        let effProgress = (self.progress - t0) / (1 - t0);
        effProgress = Math.max(0, Math.min(1, effProgress));
        const containerX = -(panelWidth + gapPx) * (totalPanels - 1) * effProgress;
        gsap.set(containerRef.current, { x: containerX });
        // Animate each panel's image and description based on panelProgress
        const panelProgress = self.progress * totalPanels; // 0 to totalPanels
        projects.forEach((_, i) => {
          const img = imageRefs.current[i];
          const desc = descRefs.current[i];
          if (!img || !desc) return;
          const localProgress = Math.min(Math.max(panelProgress - i, 0), 1);
          // width 100vw -> 60vw
          const widthVal = 95 - 35 * localProgress;
          gsap.set(img, { width: `${widthVal}vw` });
          // desc x 100% -> 0%, opacity 0 -> 1
          const xVal = (1 - localProgress) * 100;
          gsap.set(desc, { x: `${xVal}%`, opacity: localProgress });
        });
      },
    });
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflowX = '';
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursor({ visible: true, x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    setCursor(c => ({ ...c, visible: false }));
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-white overflow-auto h-auto sm:h-screen sm:overflow-hidden"
      style={{ touchAction: 'pan-y', overflowX: 'hidden' }}
    >
      <div className="hidden sm:block">
        <CustomCursor visible={cursor.visible} x={cursor.x} y={cursor.y} text={t('projects.viewProject')} />
      </div>

      {/* Mobile Static Project List */}
      <div className="sm:hidden flex flex-col items-center space-y-8 px-4 py-8 bg-white">
        {projects.map((project) => (
          <Link key={project.slug} href={project.slug === 'chemical-products' ? '/product/chemical' : `/services/${project.slug}`} className="w-full max-w-md">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <Image
                src={project.image}
                alt={t(`projects.${project.translationKey}.title`)}
                width={800}
                height={500}
                className="rounded-xl w-full h-auto object-cover mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t(`projects.${project.translationKey}.title`)}
              </h2>
              <p className="text-base text-gray-600 mb-4">
                {t(`projects.${project.translationKey}.description`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {(shuffledTags[project.translationKey] || getProjectTags(project.translationKey)).map((tag: string) => (
                  <AnimatedTag key={tag} tag={tag} fade={fade} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Desktop Animated Carousel */}
      <div className="hidden sm:block">
        <div ref={containerRef} style={{ height: '100vh', display: 'flex', gap: '10vw' }}>
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={
                project.slug === 'about-us' ? '/about'
                : project.slug === 'chemical-products' ? '/product/chemical'
                : project.slug === 'integrated-3pl' ? '/services/integrated-3pl-ftwz'
                : project.slug === 'end-to-end' ? '/services/end-to-end-solutions'
                : `/services/${project.slug}`
              }
              style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                ref={el => { imageRefs.current[i] = el; }}
                src={project.image}
                alt={t(`projects.${project.translationKey}.title`)}
                width={800}
                height={500}
                quality={90}
                style={{
                  objectFit: "cover",
                  borderRadius: "2.5rem",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  position: "absolute",
                  top: "10%",
                  left: 0,
                  zIndex: 1,
                  width: "100vw",
                  height: "90vh",
                  transition: "border-radius 0.3s"
                }}
              />
              <div
                ref={el => { descRefs.current[i] = el; }}
                style={{
                  position: "absolute",
                  top: "68%",
                  right: "4vw",
                  transform: "translateY(-50%)",
                  width: "34vw",
                  background: "transparent",
                  padding: "2.5rem 2rem",
                  borderRadius: "2rem",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h2 style={{
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  margin: 0,
                  color: "#222",
                  marginBottom: "1.2rem"
                }}>{t(`projects.${project.translationKey}.title`)}</h2>
                <p style={{
                  fontSize: "1.25rem",
                  color: "#444",
                  marginBottom: "2rem",
                  lineHeight: 1.5
                }}>
                  {t(`projects.${project.translationKey}.description`)}
                </p>
                <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
                  {(shuffledTags[project.translationKey] || getProjectTags(project.translationKey)).map((tag: string) => (
                    <AnimatedTag key={tag} tag={tag} fade={fade} />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Replace tag rendering with letter-by-letter animation
// Helper for splitting tag into spans
function AnimatedTag({ tag, fade }: { tag: string, fade: boolean }) {
  return (
    <span
      className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
      style={{
        display: 'inline-block',
        opacity: fade ? 0 : 1,
        transition: 'opacity 0.25s',
        whiteSpace: 'nowrap',
      }}
    >
      {tag.split('').map((char, idx) => (
        <span
          key={idx}
          style={{
            display: 'inline-block',
            transition: 'opacity 0.25s',
            transitionDelay: fade ? '0ms' : `${idx * 30}ms`,
            opacity: fade ? 0 : 1,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default ProjectShowcase; 