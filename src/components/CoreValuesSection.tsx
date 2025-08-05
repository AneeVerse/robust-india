"use client"

import React, { useRef, useEffect } from "react"
import { Sparkles, Diamond, Heart, Star } from 'lucide-react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslation } from 'react-i18next'
gsap.registerPlugin(ScrollTrigger)

// Card component (inline)
const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded-3xl border ${className}`} {...props}>
    {children}
  </div>
)

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

const iconMap = {
  GROWTH: Sparkles,
  EXCELLENCE: Diamond,
  JOY: Heart,
  SYNERGY: Star,
  // Russian translations
  РОСТ: Sparkles,
  СОВЕРШЕНСТВО: Diamond,
  РАДОСТЬ: Heart,
  СИНЕРГИЯ: Star,
}

export default function HorizontalScrollCards() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    // Only run GSAP animation on desktop/tablet
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      return;
    }

    const totalScrollWidth = container.scrollWidth
    const containerWidth = container.clientWidth
    const scrollDistance = totalScrollWidth - containerWidth

    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 20%",
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const coreValues = t('coreValues.values', { returnObjects: true }) as Array<{
    category: keyof typeof iconMap;
    title: string;
    description: string;
  }>

  return (
    <>
      {/* Inline CSS Styles */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        /* Icon fill effect on hover */
        .icon-fill-hover {
          transition: all 0.3s ease;
        }

        .group:hover .icon-fill-hover {
          fill: #2563eb;
          stroke: #2563eb;
        }
      `}</style>

      <div ref={sectionRef} className="w-full bg-gray-50 py-16 px-4" style={{ fontFamily: "'NoiGrotesk', sans-serif" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-6xl text-gray-900 mb-4">{t('coreValues.title.line1')}</h2>
            <p className="text-4xl md:text-6xl text-gray-900">{t('coreValues.title.line2')}</p>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-8 pb-6 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory sm:overflow-visible sm:snap-none"
          >
            {coreValues.map((value, index) => {
              const IconComponent = iconMap[value.category]
              return (
                <Card
                  key={index}
                  className="w-[90vw] max-w-xs h-[420px] shrink-0 snap-center
                    sm:w-[480px] sm:h-[480px] sm:max-w-none sm:flex-none sm:snap-none
                    bg-white border border-indigo-200 hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl overflow-hidden relative group"
                >
                  <CardContent className="p-10 h-full flex flex-col items-start relative">
                    {/* Full inset gradient overlay for card background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/80 via-indigo-200/60 to-indigo-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

                    <div className="mb-10 flex justify-start relative z-10">
                      <div className="transform group-hover:scale-110 transition-all duration-500 ease-in-out">
                        <IconComponent
                          size={80}
                          className="drop-shadow-lg transition-colors duration-300 text-indigo-500 group-hover:text-black"
                          fill="currentColor"
                          stroke="none"
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-left relative z-10">
                      <p className="text-sm font-bold tracking-widest text-indigo-500 mb-6 uppercase">
                        {value.category}
                      </p>

                      <h3 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">{value.title}</h3>

                      <p className="text-gray-600 leading-relaxed text-base">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}