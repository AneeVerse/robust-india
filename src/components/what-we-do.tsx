"use client"

import { motion } from "framer-motion"
import Image from 'next/image';
import { MdScience, MdVerifiedUser, MdLocalShipping, MdWarehouse } from "react-icons/md";

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



        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-24 gap-y-8 sm:gap-y-16 max-w-sm sm:max-w-5xl w-full px-4 sm:px-0">
          {/* Chemical Sourcing & Distribution */}
          <div className="space-y-3 sm:space-y-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdScience className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">Chemical Sourcing & Distribution</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              We specialize in sourcing, developing, and distributing high-quality specialty and bulk chemicals to industries ranging from oil & gas and agrochemicals to water treatment and specialty polymers.
            </p>
          </div>

          {/* Quality Assurance & Compliance */}
          <div className="space-y-3 sm:space-y-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdVerifiedUser className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">Quality Assurance & Compliance</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Our rigorous quality-inspection processes, aligned with international standards{" "}
              <span className="underline" style={{ color: "#6164F6" }}>
                (ISO, ASTM, REACH)
              </span>
              , guarantee consistent purity and performance for every product.
            </p>
          </div>

          {/* FTWZ Logistics Network */}
          <div className="space-y-3 sm:space-y-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdLocalShipping className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">FTWZ Logistics Network</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              At the heart of our offering is an integrated logistics network anchored by India&apos;s leading Free Trade & Warehousing Zones in Mumbai, Chennai, and Delhi.
            </p>
          </div>

          {/* 3PL Services */}
          <div className="space-y-3 sm:space-y-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdWarehouse className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">3PL Services</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              We provide end-to-end 3PL services including bonded warehousing, value-added labeling or repackaging, and streamlined import/export handling without the need for clients to establish a local entity.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}
