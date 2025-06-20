"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react"
import Image from "next/image";

export default function BookCallSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"]
  });

  // Animation for text and content
  const textScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  // Delay fade-out until after content appears
  const headingFadeOut = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);
  // Combine fade-in and fade-out
  const headingOpacity = useTransform(
    [textOpacity, headingFadeOut],
    (input: number[]) => (input[0] ?? 1) * (input[1] ?? 1)
  );
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  
  // Card animation - make it start much smaller and end slightly smaller
  const rotate = useTransform(scrollYProgress, [0.3, 0.7], [25, 0]);
  const scale = useTransform(scrollYProgress, [0.3, 0.7], [0.3, 0.9]);
  const x = useTransform(scrollYProgress, [0.3, 0.7], [180, 0]);
  const y = useTransform(scrollYProgress, [0.3, 0.7], [70, 0]);

  // Trigger button animations sooner for faster appearance
  const button1Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const button2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const button3Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const button1Y = useTransform(scrollYProgress, [0.3, 0.4], [20, 0]);
  const button2Y = useTransform(scrollYProgress, [0.4, 0.5], [20, 0]);
  const button3Y = useTransform(scrollYProgress, [0.5, 0.6], [20, 0]);

  return (
    <section ref={ref} className="w-full min-h-[100vh] flex flex-col items-center px-6 md:px-20 py-24 bg-white relative">
      {/* Centered heading - bigger text */}
      <motion.h1 
        style={{ scale: textScale, opacity: headingOpacity }}
        className="text-8xl md:text-[12rem] font-bold text-[#000000] mb-24 text-center leading-tight"
      >
        Let&apos;s talk
      </motion.h1>
      
      {/* Content container - more space between heading and content */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start">
        {/* Left Side - Text with larger font and width for three lines */}
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className="w-full md:w-auto"
        >
          <p className="text-2xl md:text-3xl text-gray-800 mb-10 max-w-xl leading-relaxed">
            Find out how we can take your digital product to the next level together.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <motion.button 
              style={{ opacity: button1Opacity, y: button1Y }}
              className="bg-gradient-to-b from-[#f8f6f4] to-[#f3ede7] text-black font-bold rounded-xl px-6 py-2 h-12 shadow-md border border-gray-300 transition-all duration-300 hover:from-[#f3ede7] hover:to-[#e9e2db]"
            >
              Book a call
            </motion.button>
            <motion.button 
              style={{ opacity: button2Opacity, y: button2Y }}
              className="bg-gradient-to-b from-[#f8f6f4] to-[#f3ede7] text-black font-bold rounded-xl px-6 py-2 h-12 shadow-md border border-gray-300 transition-all duration-300 hover:from-[#f3ede7] hover:to-[#e9e2db]"
            >
              Chat with Vince
            </motion.button>
            <motion.button 
              style={{ opacity: button3Opacity, y: button3Y }}
              className="bg-gradient-to-t from-[#6d7cff] to-[#aab6ff] text-white font-bold rounded-xl px-6 py-2 h-12 shadow-md transition-all duration-300 hover:from-[#6164f6] hover:to-[#6d7cff] border border-dark-blue-300"
            >
              Send a message
            </motion.button>
          </div>
        </motion.div>
        
        {/* Right Side - Video with mute/unmute overlay */}
        <motion.div
          style={{ rotate, scale, x, y }}
          className="mt-16 md:mt-0 flex justify-end"
        >
          <div className="w-48 h-64 md:w-72 md:h-88 bg-gray-200 rounded-2xl shadow-xl overflow-hidden relative">
            <video
              ref={videoRef}
              src="/video/Hydrophobic Club Moss Spores.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={muted}
              playsInline
            />
            <button
              type="button"
              onClick={() => {
                setMuted((m) => {
                  if (videoRef.current) videoRef.current.muted = !m;
                  return !m;
                });
              }}
              className="absolute top-3 right-3 z-10 bg-gray-400/60 rounded-full p-1 w-9 h-9 flex items-center justify-center"
            >
              <Image
                src={muted ? "/images/cta-mute.png" : "/images/cta-unmute.png"}
                alt={muted ? "Muted" : "Unmuted"}
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
