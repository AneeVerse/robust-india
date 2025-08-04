"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react"
import Image from "next/image";
import { useProtectedContact } from "@/hooks/useProtectedContact";
import { useTranslation } from 'react-i18next';

export default function BookCallSection() {
  const { handleProtectedAction } = useProtectedContact();
  const { t } = useTranslation('common');
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
    <section
      ref={ref}
      className="w-full flex flex-col items-center px-6 md:px-20 pt-0 pb-2 sm:pt-0 sm:pb-4 md:pt-0 md:pb-6 bg-white relative overflow-y-auto overflow-x-hidden scrollbar-hide h-auto sm:overflow-hidden sm:min-h-screen"
    >
      {/* Centered heading - bigger text */}
      <motion.h1
        style={{ scale: textScale, opacity: headingOpacity }}
        className="text-4xl sm:text-6xl md:text-8xl lg:text-[12rem] font-bold text-black mb-0 sm:mb-2 md:mb-4 text-center leading-tight whitespace-nowrap"
      >
        {t('book.heading')}
      </motion.h1>
      
      {/* Centered video - moved after heading */}
      <motion.div
        style={{ rotate, scale, x, y }}
        className="w-full flex justify-center mb-0 sm:mb-2 md:mb-4 mt-2 sm:mt-4 md:-mt-6"
      >
        <div className="w-80 h-40 sm:w-96 sm:h-72 md:w-[500px] md:h-80 lg:w-[600px] lg:h-96 bg-gray-200 rounded-2xl shadow-xl overflow-hidden relative">
          <video
            ref={videoRef}
            src="/video/letstalk4.mp4"
            className="object-cover w-full h-full transform scale-145"
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
            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-gray-400/60 rounded-full p-1 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center"
          >
            <Image
              src={muted ? "/images/cta-mute.png" : "/images/cta-unmute.png"}
              alt={muted ? "Muted" : "Unmuted"}
              width={28}
              height={28}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </button>
        </div>
      </motion.div>
      
      {/* Centered content container */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center">
        {/* Centered text */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="w-full flex flex-col items-center justify-center text-center mb-8 sm:mb-12"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-8 sm:mb-10 max-w-4xl leading-relaxed whitespace-nowrap text-center mx-auto">
            {t('book.tagline')}
          </p>
          
          {/* Centered buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <motion.button
              style={{ opacity: button1Opacity, y: button1Y }}
              className="w-full sm:w-auto bg-gradient-to-b from-[#f8f6f4] to-[#f3ede7] text-black font-bold rounded-xl px-6 py-3 shadow-md border border-gray-300 transition-all duration-300 hover:from-[#f3ede7] hover:to-[#e9e2db] cursor-pointer"
              onClick={() => handleProtectedAction('Phone')}
            >
              {t('book.call')}
            </motion.button>
            <motion.button
              style={{ opacity: button2Opacity, y: button2Y }}
              className="w-full sm:w-auto bg-gradient-to-b from-[#f8f6f4] to-[#f3ede7] text-black font-bold rounded-xl px-6 py-3 shadow-md border border-gray-300 transition-all duration-300 hover:from-[#f3ede7] hover:to-[#e9e2db] cursor-pointer"
              onClick={() => window.location.href = '/contact#contact-form'}
            >
              {t('book.contact')}
            </motion.button>
            <motion.button
              style={{ opacity: button3Opacity, y: button3Y }}
              className="w-full sm:w-auto bg-gradient-to-t from-[#6d7cff] to-[#aab6ff] text-white font-bold rounded-xl px-6 py-3 shadow-md transition-all duration-300 hover:from-[#6164f6] hover:to-[#6d7cff] border border-[#4B4ED0] cursor-pointer"
              onClick={() => handleProtectedAction('WhatsApp')}
            >
              {t('book.chat')}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
