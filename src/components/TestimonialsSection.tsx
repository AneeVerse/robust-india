'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Our brand needed a refresh to fit our our identity, and Yummygum made it happen. They truly listened, acted on feedback, and kept communication clear and direct, making collaboration seamless. The result speaks for itself—we're happy to continue collaboration.",
    author: "Marjolein van Koningsveld",
    role: "Co-Founder & CEO at ORYX",
    highlight: ["communication clear", "direct"],
  },
  {
    quote: "We'd been trying to position ourselves in a competing market. Through various workshops Yummygum guided us and delivered a beautiful brand identity that's inspired us ever since.",
    author: "Sefa Şentürk",
    role: "Partner at Tuple",
    highlight: ["inspired"],
  },
  {
    quote: "We needed a website that attracted bigger clients and reflected our growth. Yummygum delivered a structured, high-quality process. The first design version was spot on, and communication was seamless. Now, we have a professional website that builds trust and is easy for our marketing team to manage —giving them time to focus on growth.",
    author: "Jordi Dijkstra",
    role: "Head of Marketing & Growth at Employes",
    highlight: ["focus on growth"],
  },
  {
    quote: "Yummygum helped us successfully expand our audience with a strong brand identity, new platform design and a stunning marketing website. We appreciated their systematic approach throughout the branding process and would 100% work with them again. Our platform's users are excited and engaged, and the results have received overwhelmingly positive reactions.",
    author: "Bram Jetten",
    role: "Chief Technology Officer at PlanGo",
    highlight: ["expand our audience"],
  },
  {
    quote: "Yummygum's approach to redesigning our app's navigation was exceptional. They dove deep to understand the entire user experience, emerging with a solution that feels deceptively simple. What seems completely natural and intuitive now was far from obvious at the start—that's the hallmark of brilliant UX design.",
    author: "Scott O'Reilly",
    role: "Founder & Chief Architect @ Spider Strategies",
    highlight: [],
  },
];

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

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
        >
          They say it best
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-16 text-center"
        >
          What clients love about working with us
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col"
            >
              <blockquote className="flex-grow mb-6 text-lg text-gray-700 leading-relaxed">
                {testimonial.quote.split(' ').map((word, i) => {
                  const isHighlighted = testimonial.highlight.some(h => 
                    testimonial.quote.toLowerCase().indexOf(h.toLowerCase()) === 
                    testimonial.quote.toLowerCase().split(' ').slice(0, i + 1).join(' ').length - word.length
                  );
                  return (
                    <span key={i} className={isHighlighted ? "text-blue-600 font-semibold" : ""}>
                      {word}{' '}
                    </span>
                  );
                })}
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 