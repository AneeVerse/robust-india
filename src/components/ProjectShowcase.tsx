"use client"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: "/images/project/project1.png",
    title: "Vio.com",
    description:
      "We helped Vio.com with a fresh, impactful brand that resonates with deal-seeking travelers and reach into every product detail.",
    tags: ["Brand identity", "Motion design", "Web app design", "+1"],
  },
  {
    image: "/images/project/project2.png",
    title: "Cloud Migration Dashboard",
    description:
      "A dashboard for tracking cloud migration initiatives, progress, and team collaboration.",
    tags: ["Dashboard", "Cloud", "Teamwork"],
  },
  {
    image: "/images/project/project3.png",
    title: "On My Way!",
    description:
      "Together with On My Way we created a bold, cutting-edge brand with a smooth journey inside their mobile app.",
    tags: ["Brand identity", "User research and testing", "Mobile app design"],
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

const ProjectShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const descRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cursor, setCursor] = React.useState({ visible: false, x: 0, y: 0 });

  useEffect(() => {
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
          const widthVal = 95 - 27 * localProgress;
          gsap.set(img, { width: `${widthVal}vw` });
          // desc x 100% -> 0%, opacity 0 -> 1
          const xVal = (1 - localProgress) * 100;
          gsap.set(desc, { x: `${xVal}%`, opacity: localProgress });
        });
      },
    });
    return () => {
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
      style={{ position: "relative", height: "100vh", overflow: "hidden", background: "#fff" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CustomCursor visible={cursor.visible} x={cursor.x} y={cursor.y} />
      <div ref={containerRef} style={{ height: "100vh", display: "flex", gap: "10vw" }}>
        {projects.map((project, i) => (
          <div
            key={project.title}
            style={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <img
              ref={el => { imageRefs.current[i] = el; }}
              src={project.image}
              alt={project.title}
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
                right: "-2vw",
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
              {/* <button style={{
                background: "#bdbdbd",
                color: "#fff",
                border: "none",
                borderRadius: "1.5rem",
                padding: "0.3rem 1.2rem",
                fontSize: "1rem",
                marginBottom: "1.2rem",
                fontWeight: 500,
                cursor: "pointer"
              }}>View Project</button> */}
              <h2 style={{
                fontSize: "2.8rem",
                fontWeight: 700,
                margin: 0,
                color: "#222",
                marginBottom: "1.2rem"
              }}>{project.title}</h2>
              <p style={{
                fontSize: "1.25rem",
                color: "#444",
                marginBottom: "2rem",
                lineHeight: 1.5
              }}>
                {project.description}
              </p>
              <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    background: "#f5f5f5",
                    color: "#222",
                    borderRadius: "1.2rem",
                    padding: "0.4rem 1.1rem",
                    fontSize: "1rem",
                    fontWeight: 500
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase; 