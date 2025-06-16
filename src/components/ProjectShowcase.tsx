"use client"
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tags = ["Brand identity", "Motion design", "Web app design", "+1"];

const ProjectShowcase = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !descRef.current || !sectionRef.current) return;
    // No zoom, just full width/height at start
    gsap.set(imageRef.current, { width: "100vw", height: "90vh", x: 0 });
    gsap.set(descRef.current, { x: "100%", opacity: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 5%",
        end: "+=600",
        scrub: true,
        pin: true,
      }
    })
      // Only animate width and x (move left)
      .to(imageRef.current, { width: "60vw", duration: 1.5, ease: "power2.out" })
      // Slide in description
      .to(descRef.current, { x: 0, opacity: 1, duration: 1.5, ease: "power2.out" }, "<");
  }, []);

  return (
    <section ref={sectionRef} style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", background: "#fff" }}>
      <img
        ref={imageRef}
        src="/images/project/project1.png"
        alt="Project 1"
        style={{
          position: "absolute",
          top: 0, left: 0,
          objectFit: "cover",
          zIndex: 1,
          borderRadius: "2.5rem", // Curved corners on all sides
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          transition: "border-radius 0.3s"
        }}
      />
      <div
        ref={descRef}
        style={{
          position: "absolute",
          top: "50%",
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
        <button style={{
          background: "#bdbdbd",
          color: "#fff",
          border: "none",
          borderRadius: "1.5rem",
          padding: "0.3rem 1.2rem",
          fontSize: "1rem",
          marginBottom: "1.2rem",
          fontWeight: 500,
          cursor: "pointer"
        }}>View Project</button>
        <h2 style={{
          fontSize: "2.8rem",
          fontWeight: 700,
          margin: 0,
          color: "#222",
          marginBottom: "1.2rem"
        }}>Vio.com</h2>
        <p style={{
          fontSize: "1.25rem",
          color: "#444",
          marginBottom: "2rem",
          lineHeight: 1.5
        }}>
          We helped Vio.com with a fresh, impactful brand that resonates with deal-seeking travelers and reach into every product detail.
        </p>
        <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
          {tags.map(tag => (
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
    </section>
  );
};

export default ProjectShowcase; 