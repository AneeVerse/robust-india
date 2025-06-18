"use client"
import Image from "next/image";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
          <div 
            className={`flex items-center justify-center mb-10 transition-all duration-1000 ease-out ${
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
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
              ROBUST INDIA
            </h1>
          </div>
          
          {/* Headline */}
          <h2 
            className={`text-6xl sm:text-7xl md:text-8xl mb-10 mt-10 leading-tight text-black transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif", 
              fontWeight: 400,
              transitionDelay: '0.4s'
            }}
          >
            Global Trade<br />Simplified.
          </h2>
          
          {/* Subheadline */}
          <p 
            className={`text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-10 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif", 
              fontWeight: 400,
              transitionDelay: '0.6s'
            }}
          >
            Integrated Chemical Trade, 
            <span className="relative inline-block mx-1">
              <span className="z-10 relative">FTWZ</span>
            
              <Image
                src="/images/Vector (4).png"
                alt="Hand-drawn circle"
                width={100}
                height={100}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "55%",
                  width: "100%",
                  height: "100%",
                  transform: "translate(-50%, -50%) scale(1.3)",
                  zIndex: 0,
                  pointerEvents: "none"
                }}
              />
            </span>
            Services & 3PL Excellence
            <br />
            End-to-End Sourcing, Warehousing & Delivery Solutions
          </p>
        </section>
        <div className="pb-24">
          <Navbar />
        </div>
      </div>
    </div>
  );
}