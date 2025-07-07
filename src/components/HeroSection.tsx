"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useNavbarVisibility } from "../context/NavbarVisibilityContext";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation('common');
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
  }, [setShowNavbar]);

  // Headline lines for animation
  const headlineLines = [t('hero.headline1'), t('hero.headline2')];

  // Customize your gradient here:
  const gradientStyle = {
    background: 'radial-gradient(circle at 120% 170%, #97CCFB 0%, #B9E0FF 30%, #f8f6f4 60%)'
  };

  return (
    <div className="w-full overflow-hidden min-h-screen sm:min-h-0 flex sm:block flex-col">
      <div className="w-full flex-1 sm:flex-none flex sm:block flex-col" style={gradientStyle}>
        {/* Brand Name and Logo - Minimal on Mobile, Original on Desktop */}
        <div className="w-full px-4 pt-6 sm:hidden">
          <Link
            href="/"
            className={`flex items-center justify-center transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <Image
              src="/images/top-logo.png"
              alt="Robust India Logo"
              width={32}
              height={32}
              className="mr-2 w-6 h-6"
              priority
            />
            <h1 className="text-lg font-extrabold tracking-tight text-black">
              {t('hero.brandName')}
            </h1>
          </Link>
        </div>

        <section className="relative flex flex-col items-center justify-center w-full text-center px-3 sm:px-6 md:px-8 pt-0 sm:pt-12 md:pt-16 pb-2 flex-1 sm:flex-none">
          {/* Desktop Brand Name and Logo - Hidden on Mobile */}
          <Link
            href="/"
            className={`hidden sm:flex items-center justify-center mb-6 sm:mb-8 md:mb-12 lg:mb-20 -mt-2 sm:-mt-4 md:-mt-6 lg:-mt-10 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <Image
              src="/images/top-logo.png"
              alt="Robust India Logo"
              width={50}
              height={50}
              className="mr-2 sm:mr-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              priority
            />
            <h1 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight text-black ">
              {t('hero.brandName')}
            </h1>
          </Link>
          
          {/* Headline - Mobile Centered, Desktop Original */}
          <h2 
            className="hero-heading text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6.5rem] mb-4 sm:mb-2 -mt-0 sm:-mt-2 md:-mt-3 lg:-mt-4 leading-tight text-black tracking-wide max-w-xs sm:max-w-none"
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
          
          {/* Subheadline - Mobile Simplified, Desktop Original */}
          <div
            className={`hero-subheading text-lg sm:text-sm md:text-base lg:text-lg xl:text-[1.5rem] text-gray-600 sm:text-gray-700 max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-0 sm:mb-6 md:mb-0 lg:mb-10 leading-relaxed transition-all duration-1000 ease-out px-2 sm:px-4 md:px-0 text-center ${
              showSubheadline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: showSubheadline ? '0s' : '0.6s'
            }}
          >
            {/* Mobile version */}
            <p className="block sm:hidden">
              {t('hero.subheadlineMobile')}
            </p>
            
            {/* Desktop version */}
            <div className="hidden sm:block">
              <p className="mb-2">
                {t('hero.subheadlineDesktop1').split('FTWZ')[0]}
                <span className="relative inline-block mx-1 sm:mx-2 md:mx-3 lg:mx-4">
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
                {t('hero.subheadlineDesktop1').split('FTWZ')[1]}
              </p>
              <p>
                {t('hero.subheadlineDesktop2')}
              </p>
            </div>
          </div>
        </section>
        <div className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 2xl:pb-32"></div>
      </div>
    </div>
  );
}