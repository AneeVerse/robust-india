"use client"

import { motion } from "framer-motion"
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#131518", color: "white" }}>
      {/* Main Content */}
      <div className="w-full py-8 sm:py-16 flex flex-col items-center px-4 sm:px-0">
        {/* Header with Waving Hand */}
        <div className="mb-12 sm:mb-16 w-full flex flex-col items-start">
          <motion.div
            className="mb-2 ml-4 sm:ml-2"
            animate={{ rotate: [0, 20, -10, 25, -5, 15, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <Image src="/images/goodbye_5821930.svg" alt="Waving Hand" width={64} height={64} className="w-12 h-12 sm:w-16 sm:h-16 filter invert brightness-0 ml-4 sm:ml-20" />
          </motion.div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-tight text-left ml-8 sm:ml-20">
            About us
          </h1>
        </div>

        {/* About Content Section */}
        <div className="max-w-full w-full px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 lg:gap-8 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <Image 
                src="/images/ABOUT-US.png" 
                alt="About Robust India" 
                width={1200} 
                height={900} 
                className="rounded-lg shadow-xl"
                style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
              />
            </motion.div>

            {/* Right Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 pr-4 sm:pr-8"
            >
              <p className="text-gray-300 leading-relaxed text-xl sm:text-2xl lg:text-3xl">
                Robust India an import-export company dedicated to delivering comprehensive chemical supply chain solutions worldwide. Founded on the principles of reliability, transparency, and innovation, we specialize in sourcing, developing, and distributing high-quality specialty and bulk chemicals to industries ranging from oil & gas and agrochemicals to water treatment and specialty polymers.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}
