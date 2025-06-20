'use client';
import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: 'Growth',
    subtitle: 'Expand your skillset',
    description: "We think a person is never done learning. Gaining new experience and picking up new skills is key to staying ahead.",
    highlight: 'Expand',
  },
  {
    title: 'Excellence',
    subtitle: 'Go for the very best',
    description: "We're about setting the bar high and then overdeliver. That's why we aim for the very best; in our work and in the way we work.",
    highlight: 'very best',
  },
  {
    title: 'Joy',
    subtitle: 'Do what you love',
    description: "All the amazing things we make wouldn't exist without high amounts of passion for our work, relentless dedication, and lots of fun.",
    highlight: 'Do',
  },
  {
    title: 'Synergy',
    subtitle: 'One plus one > two',
    description: "We believe the real magic happens when we work together. Together within our own team, and together with our clients.",
    highlight: '> two',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CoreValuesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          The Core Values we stand by
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {value.subtitle.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className={word === value.highlight ? "text-blue-600" : ""}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 