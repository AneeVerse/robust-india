"use client"

import { useEffect, useState, useRef } from "react"

export default function ServicesSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900">Everything you&apos;d</h1>
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-900">need</h1>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#97CCFB] to-[#97CCFB] rounded-full"></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need from product development and sourcing to packaging, warehousing, and global delivery
            managed under one roof with seamless precision and compliance.
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative flex justify-center items-center min-h-[500px]">
          {/* Left Card - FTWZ */}
          <div
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{
              transform: `
                translate(-50%, -50%)
                translateX(${-450 * scrollProgress}px)
                rotate(${-6 * scrollProgress}deg)
              `,
              zIndex: scrollProgress > 0.3 ? 20 : 5,
              opacity: 0.2 + 0.8 * scrollProgress,
              transition: "none",
            }}
          >
            <div
              className="bg-white rounded-3xl p-8 border w-80 h-80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{
                borderColor: "#97CCFB",
                boxShadow: "0 0 20px #97CCFB33, 0 4px 6px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#97CCFB] rounded-xl flex items-center justify-center flex-shrink-0">
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
          </div>

          {/* Center Card - Chemical Products */}
          <div
            className="relative z-30 will-change-transform"
            style={{
              transform: `scale(${0.95 + 0.05 * scrollProgress})`,
              transition: "none",
            }}
          >
            <div
              className="bg-white rounded-3xl p-8 border w-80 h-80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{
                borderColor: "#97CCFB",
                boxShadow: "0 0 25px #97CCFB33, 0 6px 8px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#97CCFB] rounded-xl flex items-center justify-center flex-shrink-0">
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
          </div>

          {/* Right Card - Integrated 3PL */}
          <div
            className="absolute left-1/2 top-1/2 will-change-transform"
            style={{
              transform: `
                translate(-50%, -50%)
                translateX(${450 * scrollProgress}px)
                rotate(${6 * scrollProgress}deg)
              `,
              zIndex: scrollProgress > 0.3 ? 20 : 5,
              opacity: 0.2 + 0.8 * scrollProgress,
              transition: "none",
            }}
          >
            <div
              className="bg-white rounded-3xl p-8 border w-80 h-80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
              style={{
                borderColor: "#97CCFB",
                boxShadow: "0 0 20px #97CCFB33, 0 4px 6px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#97CCFB] rounded-xl flex items-center justify-center flex-shrink-0">
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
          </div>
        </div>
      </div>
    </section>
  )
}
