"use client"

import { motion } from "framer-motion"
import Image from 'next/image';
import { MdWorkspacePremium, MdLayers, MdChatBubble, MdMenuBook } from "react-icons/md";

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#131518", color: "white", marginTop: "5rem" }}>
      {/* Main Content */}
      <div className="w-full py-16 flex flex-col items-center">
        {/* Header with Waving Hand */}
        <div className="mb-16 w-full flex flex-col items-start">
          <motion.div
            className="mb-2 ml-2"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >
            <Image src="/images/goodbye_5821930.svg" alt="Waving Hand" width={64} height={64} className="w-16 h-16 filter invert brightness-0 ml-20" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-light leading-tight text-left ml-20">
            Say hello to
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16 max-w-5xl w-full">
          {/* Top-tier team of experts */}
          <div className="space-y-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdWorkspacePremium className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Top-tier team of experts</h2>
            <p className="text-gray-400 leading-relaxed text-base">
              Even the best teams need help. Following industry standards and beyond, our team of experts knows exactly
              what tools, methods and stack works best in your situation.
            </p>
          </div>

          {/* Proven powerful process */}
          <div className="space-y-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdLayers className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Proven powerful process</h2>
            <p className="text-gray-400 leading-relaxed text-base">
              Stop hitting snooze on updating your product&apos;s look and feel, launching that gold-nugget feature, or
              shaking off technical debt. Our{" "}
              <span className="underline" style={{ color: "#6164F6" }}>
                trusty process
              </span>{" "}
              is set up to make power moves.
            </p>
          </div>

          {/* Clear-cut comms */}
          <div className="space-y-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdChatBubble className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Clear-cut comms</h2>
            <p className="text-gray-400 leading-relaxed text-base">
              Slow and foggy communication weighs down on your ability to scale efficiently. Whether it&apos;s a Slack
              message, a video call, or an on-site session, we value clarity.
            </p>
          </div>

          {/* Sharing knowledge */}
          <div className="space-y-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#6164F6" }}
            >
              <MdMenuBook className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Sharing knowledge</h2>
            <p className="text-gray-400 leading-relaxed text-base">
              Building a high quality and scalable product takes ongoing effort. After helping you level up we enable
              your in-house teams to keep up the pace. We hand-off our work *and* expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
