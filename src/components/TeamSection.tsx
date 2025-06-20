'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Leon Ephraïm',
    role: 'Creative Director',
    image: 'https://via.placeholder.com/300',
    quote: "You need a brand that's embedded in your platform, to fix that outdated look and feel.",
  },
  {
    name: 'Vince Schwidder',
    role: 'Managing Director',
    image: 'https://via.placeholder.com/300',
    quote: '',
  },
  {
    name: 'Donovan Roubos',
    role: 'Operations Director',
    image: 'https://via.placeholder.com/300',
    quote: '',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function TeamSection() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {team.map((member) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            className="flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 mb-6">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="rounded-full object-cover w-full h-full"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-gray-500 mb-4">{member.role}</p>
            {member.quote && (
              <blockquote className="italic text-gray-700">&quot;{member.quote}&quot;</blockquote>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 