"use client"

import { motion } from "framer-motion"
import Image from 'next/image';
import { MdWorkspacePremium, MdLayers, MdChatBubble, MdMenuBook } from "react-icons/md";

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#131518", color: "white", marginTop: "3rem sm:5rem" }}>
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
            Say hello to
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-24 gap-y-8 sm:gap-y-16 max-w-sm sm:max-w-5xl w-full px-4 sm:px-0">
          {/* Top-tier team of experts */}
          <div className="space-y-3 sm:space-y-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdWorkspacePremium className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">Top-tier team of experts</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Even the best teams need help. Following industry standards and beyond, our team of experts knows exactly
              what tools, methods and stack works best in your situation.
            </p>
          </div>

          {/* Proven powerful process */}
          <div className="space-y-3 sm:space-y-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdLayers className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">Proven powerful process</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Stop hitting snooze on updating your product&apos;s look and feel, launching that gold-nugget feature, or
              shaking off technical debt. Our{" "}
              <span className="underline" style={{ color: "#6164F6" }}>
                trusty process
              </span>{" "}
              is set up to make power moves.
            </p>
          </div>

          {/* Clear-cut comms */}
          <div className="space-y-3 sm:space-y-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdChatBubble className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">Clear-cut comms</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Slow and foggy communication weighs down on your ability to scale efficiently. Whether it&apos;s a Slack
              message, a video call, or an on-site session, we value clarity.
            </p>
          </div>

          {/* Sharing knowledge */}
          <div className="space-y-3 sm:space-y-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdMenuBook className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl font-bold">Sharing knowledge</h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Building a high quality and scalable product takes ongoing effort. After helping you level up we enable
              your in-house teams to keep up the pace. We hand-off our work *and* expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
