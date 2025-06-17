"use client"

import { motion } from "framer-motion"
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: "#131518", color: "white", marginTop: "2rem" }}>
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
              {/* ExpertsIcon with #6164F6 */}
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M12 2C14 2 16 4 16 6C16 8 14 10 12 10C10 10 8 8 8 6C8 4 10 2 12 2Z" fill="#fff" stroke="#6164F6" strokeWidth="2" />
                <path d="M22 12C22 10 20 8 18 8C16 8 14 10 14 12C14 14 16 16 18 16C20 16 22 14 22 12Z" fill="#fff" stroke="#6164F6" strokeWidth="2" />
                <path d="M12 22C10 22 8 20 8 18C8 16 10 14 12 14C14 14 16 16 16 18C16 20 14 22 12 22Z" fill="#fff" stroke="#6164F6" strokeWidth="2" />
                <path d="M2 12C2 14 4 16 6 16C8 16 10 14 10 12C10 10 8 8 6 8C4 8 2 10 2 12Z" fill="#fff" stroke="#6164F6" strokeWidth="2" />
              </svg>
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
              {/* ProcessIcon with #6164F6 */}
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M9 6C9 6 9 6 9 6C9 6 9 18 9 18C9 18 9 18 9 18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M15 6C15 6 15 6 15 6C15 6 15 18 15 18C15 18 15 18 15 18" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                <rect x="2" y="2" width="20" height="20" rx="10" stroke="#6164F6" strokeWidth="2" fill="none" />
              </svg>
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
              {/* CommsIcon with #6164F6 */}
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="10" stroke="#6164F6" strokeWidth="2" fill="none" />
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
              {/* KnowledgeIcon with #6164F6 */}
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="10" stroke="#6164F6" strokeWidth="2" fill="none" />
                <path
                  d="M8 12L12 8L16 12"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 12L12 16L8 12"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
