'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const { t } = useTranslation('common');

  const stats = [
    { number: 6, label: t('stats.years') },
    { number: 100, label: t('stats.organizations') },
    { number: 4.7, label: t('stats.rating') },
    { number: 81, label: t('stats.repeat'), suffix: '%' },
  ];

  return (
    <section className="py-24 bg-white -mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-normal text-gray-900 mb-10 text-center"
          style={{ fontFamily: 'NoiGrotesk, sans-serif', fontWeight: 400 }}
        >
          {t('stats.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 mb-25 text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto font-normal"
          style={{ fontFamily: 'NoiGrotesk, sans-serif', fontWeight: 400 }}
        >
          {t('stats.description')}
        </motion.p>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <span className="text-5xl md:text-8xl font-normal text-gray-900"
                  style={{ fontFamily: 'NoiGrotesk, sans-serif', fontWeight: 400 }}
                >
                  {stat.number}
                  {stat.suffix}
                </span>
              </motion.div>
              <Image
                src="/images/SVG.png"
                alt="underline"
                width={150}
                height={24}
                className="transform rotate-360 mx-auto mb-4"
                unoptimized
              />
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: 'NoiGrotesk, sans-serif', fontWeight: 400 }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      
      </div>
    </section>
  );
} 