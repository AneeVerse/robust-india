"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useNavbarVisibility } from "../context/NavbarVisibilityContext";
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSubheadline, setShowSubheadline] = useState(false);
  const { setShowNavbar } = useNavbarVisibility();

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    // Calculate total animation time for headline
    const headlineLines = ["Global Trade", "Simplified."];
    const lastLineIdx = headlineLines.length - 1;
    const lastCharIdx = headlineLines[lastLineIdx].length - 1;
    // Animation: 0.4s initial + 0.5s per line + 0.05s per char
    const totalDelay = 0.4 + (lastLineIdx * 0.5) + (lastCharIdx * 0.05) + 0.5; // extra 0.5s buffer
    const subTimer = setTimeout(() => {
      setShowSubheadline(true);
      setTimeout(() => {
        setShowNavbar(true);
      }, 1000);
    }, totalDelay * 1000);
    return () => {
      clearTimeout(timer);
      clearTimeout(subTimer);
    }
  }, []);

  // Headline lines for animation
  const headlineLines = ["Global Trade", "Simplified."];

  // Gradient Control Options:
  // 1. Change position: "circle at 50% 50%" means centered gradient
  //    - "circle at 0% 0%" (top-left corner)
  //    - "circle at 100% 0%" (top-right corner)
  //    - "circle at 0% 100%" (bottom-left corner)
  //    - "circle at 100% 100%" (bottom-right corner)
  //    - "circle at 25% 75%" (25% from left, 75% from top)
  //
  // 2. Change colors and stops:
  //    - First value #97CCFB 0% (starting color and position)
  //    - Last value #F5F9FF 100% (ending color and position)
  //    - Add middle stops: e.g., #97CCFB 0%, #ABCDEF 50%, #F5F9FF 100%
  //
  // 3. Change shape: 
  //    - Use "circle" for circular gradient
  //    - Use "ellipse" for oval gradient
  //    - Or specify size: "circle closest-side", "circle farthest-corner"
  //
  // 4. For linear gradient instead of radial:
  //    - linear-gradient(to bottom, #97CCFB 0%, #F5F9FF 100%)
  //    - linear-gradient(to right, #97CCFB 0%, #F5F9FF 100%)
  //    - linear-gradient(45deg, #97CCFB 0%, #F5F9FF 100%)

  // Customize your gradient here:
  const gradientStyle = {
    background: 'radial-gradient(circle at 120% 170%, #97CCFB 0%, #B9E0FF 30%, #f8f6f4 60%)'
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full" style={gradientStyle}>
        <section className="relative flex flex-col items-center justify-center w-full text-center px-4 pt-16 pb-2">
          {/* Brand Name and Logo - Side by Side */}
          <Link
            href="/"
            className={`flex items-center justify-center mb-20 -mt-10 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <Image
              src="/images/top-logo.png"
              alt="Robust India Logo"
              width={50}
              height={50}
              className="mr-3"
              priority
            />
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold tracking-tight text-black">
              ROBUST INDIA
            </h1>
          </Link>
          
          {/* Headline with Letter-by-Letter Animation, preserving original layout */}
          <h2 
            className="text-7xl sm:text-8xl md:text-[6.5rem] mb-2 -mt-4 leading-tight text-black tracking-wide"
            style={{ 
              fontFamily: "NoiGrotesk", 
              fontWeight: 600
            }}
          >
            {headlineLines.map((line, lineIdx) => (
              <span key={lineIdx} className="block">
                {line.split('').map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className={`inline-block transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      transitionDelay: `${0.4 + ((lineIdx * 0.5) + charIdx * 0.05)}s`
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            ))}
          </h2>
          
          {/* Subheadline */}
          <p
            className={`text-xl sm:text-2xl text-gray-700 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-1000 ease-out ${
              showSubheadline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: "FusionNeue",
              fontWeight: 400,
              transitionDelay: showSubheadline ? '0s' : '0.6s'
            }}
          >
            Integrated Chemical Trade,
            <span className="relative inline-block mx-4">
              <span className="z-10 relative">FTWZ</span>
              <Image
                src="/images/Vector (4).png"
                alt="Hand-drawn circle"
                width={90}
                height={90}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "100%",
                  height: "80%",
                  transform: "translate(-50%, -50%) scale(1.3)",
                  zIndex: 0,
                  pointerEvents: "none"
                }}
              />
            </span>
     
              Services & 3PL Excellence
         
            End-to-End Sourcing, Warehousing & Delivery Solutions
          </p>
        </section>
        <div className="pb-24"></div>
      </div>
    </div>
  );
}