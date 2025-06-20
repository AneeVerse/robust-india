"use client"

import { useRef, useEffect } from "react"
import { Sparkles, Diamond, Heart, Star } from 'lucide-react'
import { gsap } from "gsap"

// Card component (inline)
const Card = ({ children, className = "", ...props }: any) => (
  <div className={`bg-white rounded-3xl border ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className = "", ...props }: any) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)

const coreValues = [
  {
    id: 1,
    category: "GROWTH",
    title: "Expand your skillset",
    description:
      "We think a person is never done learning. Gaining new experience and picking up new skills is key to staying ahead.",
    icon: Sparkles,
    categoryColor: "text-indigo-500",
  },
  {
    id: 2,
    category: "EXCELLENCE",
    title: "Go for the very best",
    description:
      "We're about setting the bar high and then overdeliver. That's why we aim for the very best in our work and in the way we work.",
    icon: Diamond,
    categoryColor: "text-indigo-500",
  },
  {
    id: 3,
    category: "JOY",
    title: "Do what you love",
    description:
      "All the amazing things that we want to exist without barriers. We believe in doing work, relentlessly, with joy and passion.",
    icon: Heart,
    categoryColor: "text-indigo-500",
  },
  {
    id: 4,
    category: "SYNERGY",
    title: "Own your journey",
    description:
      "We believe in taking ownership of your path and creating meaningful impact through collaborative effort.",
    icon: Star,
    categoryColor: "text-indigo-600",
  },
]

export default function HorizontalScrollCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      // Use GSAP for smooth horizontal scrolling
      const scrollAmount = e.deltaY * 2
      const currentScroll = scrollContainer.scrollLeft
      const newScroll = currentScroll + scrollAmount

      gsap.to(scrollContainer, {
        scrollLeft: newScroll,
        duration: 0.8,
        ease: "power2.out",
      })
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel)
    }
  }, [])

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

      <div className="w-full bg-gray-50 py-16 px-4" style={{ fontFamily: "'NoiGrotesk', sans-serif" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl md:text-6xl  text-gray-900 mb-4">The Core Values</h2>
            <p className="text-4xl md:text-6xl  text-gray-900">we stand by</p>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-6 px-4"
          >
            {coreValues.map((value) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={value.id}
                  className="flex-shrink-0 w-[480px] h-[480px] bg-white border border-indigo-200 hover:border-transparent shadow-sm hover:shadow-lg transition-all duration-300 rounded-3xl overflow-hidden relative group"
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
                      <p className={`text-sm font-bold tracking-widest ${value.categoryColor} mb-6 uppercase`}>
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