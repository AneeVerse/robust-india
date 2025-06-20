"use client"

import { useEffect, useState, useRef } from "react"
import Link from 'next/link'

export default function ServicesSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer to trigger animations when section comes into view
    const headerEl = headerRef.current;
    if (!headerEl) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the section is fully in view
      }
    );
    observer.observe(headerEl);
    return () => {
      observer.unobserve(headerEl);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      // Animation range - but we'll cap it at 70% to stop spreading further
      const animationStart = windowHeight
      const animationEnd = -sectionHeight + windowHeight * 0.3

      let progress = 0
      if (sectionTop <= animationStart && sectionTop >= animationEnd) {
        progress = (animationStart - sectionTop) / (animationStart - animationEnd)
      } else if (sectionTop < animationEnd) {
        progress = 1
      }

      // Cap the progress at 70% - cards stop spreading after this point
      progress = Math.max(0, Math.min(0.7, progress))
      setScrollProgress(progress)
    }

    // Use requestAnimationFrame for smoother animation
    let ticking = false
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", smoothScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", smoothScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-white overflow-hidden py-20 px-4">
      <div className="w-full py-16">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div 
            className={`flex flex-col sm:flex-row sm:justify-center items-center gap-2 mb-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900">Everything you'd</h1>
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-900">need</h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#6164F6] to-[#6164F6] rounded-full"></div>
            </div>
          </div>
          <p 
            className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            Everything you need from product development and sourcing to packaging, warehousing, and global delivery
            managed under one roof with seamless precision and compliance.
          </p>
        </div>

        {/* Mobile Cards - vertical stack, hidden on desktop */}
        <div className="sm:hidden flex flex-col items-center space-y-6">
          {/* Mobile FTWZ Card */}
          <Link href="/projects/ftwz" className="w-full max-w-xs">
            <div className="bg-white rounded-3xl p-6 border border-[#6164F6] shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6164F6] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">FTWZ</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Duty-free warehousing, value-added operations, and hassle-free import/export no local entity needed.
              </p>
            </div>
          </Link>
          {/* Mobile Chemical Products Card */}
          <Link href="/projects/chemical-products" className="w-full max-w-xs">
            <div className="bg-white rounded-3xl p-6 border border-[#6164F6] shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6164F6] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16.54l-8.8-4.4L12 7.74l8.8 4.4L12 16.54zm0-12.54L1 9l11 5.5L23 9 12 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Chemical Products</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                A wide portfolio of high-quality specialty and bulk chemicals sourced, packaged, and delivered to spec.
              </p>
            </div>
          </Link>
          {/* Mobile Integrated 3PL Card */}
          <Link href="/projects/integrated-3pl" className="w-full max-w-xs">
            <div className="bg-white rounded-3xl p-6 border border-[#6164F6] shadow-md transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6164F6] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Integrated 3PL</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                End-to-end logistics including storage, handling, inventory management, and efficient global distribution.
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Cards Container */}
        <div className="hidden sm:flex relative flex justify-center items-center min-h-[500px]">
          {/* Left Card - FTWZ */}
          <Link href="/projects/ftwz" className="absolute left-1/2 top-1/2 will-change-transform" style={{
              transform: `
                translate(-50%, -50%)
                translateX(${-450 * scrollProgress}px)
                rotate(${-6 * scrollProgress}deg)
              `,
              zIndex: scrollProgress > 0.3 ? 20 : 5,
              opacity: 0.2 + 0.8 * scrollProgress,
              transition: "none",
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <div
              className="bg-white rounded-3xl p-8 border w-80 h-80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{
                borderColor: "#6164F6",
                boxShadow: "0 0 48px 8px #bfcaff, 0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6164F6] rounded-xl flex items-center justify-center flex-shrink-0">
                  {/* Heart Icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-normal text-gray-900">FTWZ</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed flex-1">
                Duty-free warehousing, value-added operations, and hassle-free import/export no local entity needed.
              </p>
            </div>
          </Link>

          {/* Center Card - Chemical Products */}
          <Link href="/projects/chemical-products" className="relative z-30 will-change-transform" style={{
              transform: `scale(${0.95 + 0.05 * scrollProgress})`,
              transition: "none",
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <div
              className="bg-white rounded-3xl p-8 border w-[380px] h-80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{
                borderColor: "#6164F6",
                boxShadow: "0 0 48px 8px #bfcaff, 0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6164F6] rounded-xl flex items-center justify-center flex-shrink-0">
                  {/* Layers Icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16.54l-8.8-4.4L12 7.74l8.8 4.4L12 16.54zm0-12.54L1 9l11 5.5L23 9 12 4z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-normal text-gray-900">Chemical Products</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed flex-1">
                A wide portfolio of high-quality specialty and bulk chemicals sourced, packaged, and delivered to spec.
              </p>
            </div>
          </Link>

          {/* Right Card - Integrated 3PL */}
          <Link href="/projects/integrated-3pl" className="absolute left-1/2 top-1/2 will-change-transform" style={{
              transform: `
                translate(-50%, -50%)
                translateX(${450 * scrollProgress}px)
                rotate(${6 * scrollProgress}deg)
              `,
              zIndex: scrollProgress > 0.3 ? 20 : 5,
              opacity: 0.2 + 0.8 * scrollProgress,
              transition: "none",
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <div
              className="bg-white rounded-3xl p-8 border w-80 h-80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{
                borderColor: "#6164F6",
                boxShadow: "0 0 48px 8px #bfcaff, 0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6164F6] rounded-xl flex items-center justify-center flex-shrink-0">
                  {/* Globe Icon */}
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3 className="text-4xl font-normal text-gray-900">Integrated 3PL</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed flex-1">
                End-to-end logistics including storage, handling, inventory management, and efficient global
                distribution.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
