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
];

// Enhanced service tags for each project category
const projectTags = {
  about: [
    "Global Supply Chain", "Chemical Trading", "Import Export", "Quality Assurance", 
    "Regulatory Compliance", "Market Intelligence", "Strategic Partnerships", "Industry Expertise",
    "Customer Support", "Innovation Hub", "Sustainability", "Risk Management",
    "Supply Chain Optimization", "Global Network", "Technical Support", "Market Analysis",
    "Business Solutions", "Trade Finance", "Logistics Excellence", "Chemical Distribution",
    "Industry Leadership", "Operational Excellence", "Client Relations", "Market Expansion"
  ],
  chemical: [
    "Petrochemicals", "Specialty Chemicals", "Bulk Chemicals", "Fine Chemicals",
    "Pharmaceutical Intermediates", "Agricultural Chemicals", "Industrial Solvents", "Polymer Additives",
    "Catalyst Systems", "Chemical Processing", "Quality Control", "Product Development",
    "Chemical Analysis", "Formulation Services", "Custom Synthesis", "Chemical Storage",
    "Hazmat Handling", "Chemical Packaging", "Technical Documentation", "Regulatory Support",
    "Chemical Sourcing", "Product Innovation", "Chemical Engineering", "Process Optimization"
  ],
  ftwz: [
    "Free Trade Zone", "Warehousing Solutions", "Inventory Management", "Cross Docking",
    "Distribution Centers", "Customs Clearance", "Duty Optimization", "Storage Facilities",
    "Material Handling", "Order Fulfillment", "Supply Chain Integration", "Logistics Coordination",
    "Trade Facilitation", "Bonded Storage", "Export Processing", "Import Management",
    "Cargo Handling", "Documentation Services", "Compliance Management", "Cost Optimization",
    "Freight Forwarding", "Transportation Services", "Value Added Services", "Digital Tracking"
  ],
  "3pl": [
    "Third Party Logistics", "End-to-End Solutions", "Supply Chain Management", "Freight Management",
    "Transportation Planning", "Route Optimization", "Delivery Services", "Last Mile Delivery",
    "Warehouse Management", "Distribution Network", "Logistics Consulting", "Supply Chain Analytics",
    "Vendor Management", "Procurement Services", "Inventory Optimization", "Order Processing",
    "Shipping Solutions", "Cargo Insurance", "Track & Trace", "Real-time Monitoring",
    "Multi-modal Transport", "International Shipping", "Domestic Distribution", "Logistics Technology"
  ]
};

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

// Modern animated tag component with smooth transitions
const ModernAnimatedTag: React.FC<{ 
  tag: string; 
  isVisible: boolean; 
  delay: number;
  index: number;
}> = ({ tag, isVisible, delay }) => {
  return (
    <span
      className="inline-block relative overflow-hidden"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <span
        className="inline-block px-3 py-1.5 text-sm font-medium rounded-full border transition-all duration-300 hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, #EBF4FF, #DBEAFE)',
          color: '#1E40AF',
          border: '1px solid #93C5FD',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        {tag}
      </span>
    </span>
  );
};

// Tag container with staggered animations
const TagContainer: React.FC<{ 
  tags: string[]; 
  currentTagSet: number;
  projectKey: string;
}> = ({ tags, currentTagSet, projectKey }) => {
  const visibleTags = tags.slice(currentTagSet * 6, (currentTagSet + 1) * 6);
  
  return (
    <div className="flex flex-wrap gap-2 min-h-[80px] items-start">
      {visibleTags.map((tag, index) => (
        <ModernAnimatedTag
          key={`${projectKey}-${currentTagSet}-${tag}`}
          tag={tag}
          isVisible={true}
          delay={index * 100}
          index={index}
        />
      ))}
    </div>
  );
};

const ProjectShowcase = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cursor, setCursor] = React.useState({ visible: false, x: 0, y: 0 });

  // State for managing tag animations
  const [currentTagSets, setCurrentTagSets] = React.useState<{ [key: string]: number }>({
    about: 0,
    chemical: 0,
    ftwz: 0,
    "3pl": 0
  });
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Enhanced tag cycling with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTagSets(prev => {
          const newSets: { [key: string]: number } = {};
          Object.keys(prev).forEach(key => {
            const maxSets = Math.ceil(projectTags[key as keyof typeof projectTags].length / 6);
            newSets[key] = (prev[key] + 1) % maxSets;
          });
          return newSets;
        });
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      }, 300);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

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
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
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
              <div 
                className="transition-opacity duration-300"
                style={{ opacity: isAnimating ? 0.6 : 1 }}
              >
                <TagContainer
                  tags={projectTags[project.translationKey as keyof typeof projectTags]}
                  currentTagSet={currentTagSets[project.translationKey]}
                  projectKey={project.translationKey}
                />
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
                  top: "65%",
                  right: "4vw",
                  transform: "translateY(-50%)",
                  width: "36vw",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  padding: "2.5rem 2rem",
                  borderRadius: "2rem",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  border: "1px solid rgba(255, 255, 255, 0.2)"
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
                <div 
                  style={{ 
                    width: "100%",
                    transition: "opacity 0.3s ease-in-out",
                    opacity: isAnimating ? 0.6 : 1 
                  }}
                >
                  <TagContainer
                    tags={projectTags[project.translationKey as keyof typeof projectTags]}
                    currentTagSet={currentTagSets[project.translationKey]}
                    projectKey={project.translationKey}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 