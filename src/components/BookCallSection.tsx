"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BookCallSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  // Animate from small, rotated, right-shifted to large, straight, centered
  const rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={ref} className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-white">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start justify-center mb-12 md:mb-0">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-10">Let&apos;s talk</h1>
        <p className="text-2xl text-gray-800 mb-8 max-w-xl">
          Find out how we can take your digital product to the next level together.
        </p>
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-md bg-gray-100 text-gray-800 font-medium shadow">Book a call</button>
          <button className="px-5 py-2 rounded-xl font-medium text-sm transition-colors duration-200 flex items-center bg-[#6164f6] text-white shadow-md border border-transparent border-t-2 border-t-[#888aed]">
            Send a message
          </button>
        </div>
      </div>
      {/* Right Side (Animated Video Container) */}
      <motion.div
        style={{ rotate, scale, x }}
        className="flex-1 flex items-center justify-center"
      >
        <div className="w-56 h-72 md:w-72 md:h-96 bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center">
          {/* Placeholder for video */}
          <span className="text-gray-400 text-lg">Video here</span>
        </div>
      </motion.div>
    </section>
  );
}
