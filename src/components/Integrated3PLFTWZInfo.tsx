"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

export default function Integrated3PLFTWZInfo() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Integrated 3PL & FTWZ Services */}
      

      {/* FTWZ & 3PL Services Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-20"
      >
        {/* Section Header - ENHANCED DESIGN */}
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#6164F6]/10 via-[#8B8FFF]/10 to-[#6164F6]/10 rounded-full blur-3xl"
          ></motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative text-5xl md:text-6xl font-light text-gray-900 mb-8" 
            style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              {t('about.ftwz.sectionTitle').split(' ')[0]} 
            </span>
            <span className="bg-gradient-to-r from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF] bg-clip-text text-transparent font-bold">
              {" "}{t('about.ftwz.sectionTitle').split(' ').slice(1, 4).join(' ')}{" "}
            </span>
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              {t('about.ftwz.sectionTitle').split(' ').slice(4).join(' ')}
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl text-gray-600 max-w-4xl mx-auto relative" 
            style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
          >
            {t('about.ftwz.subtitle')}
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "12rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF] mx-auto mt-8 rounded-full"
          ></motion.div>
        </div>

        {/* Key Features Grid - WORLD CLASS DESIGN */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { 
              icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                </svg>
              ),
              title: t('about.ftwz.keyFeatures.dutyFree.title'), 
              desc: t('about.ftwz.keyFeatures.dutyFree.desc'),
              gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
              bgPattern: "opacity-10 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10"
            },
            { 
              icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.43,12.98C19.47,12.66 19.5,12.34 19.5,12C19.5,11.66 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.97 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.49,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.51,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.66 4.57,12.98L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5Z"/>
                </svg>
              ),
              title: t('about.ftwz.keyFeatures.valueAdded.title'), 
              desc: t('about.ftwz.keyFeatures.valueAdded.desc'),
              gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
              bgPattern: "opacity-10 bg-gradient-to-br from-[#8B8FFF]/10 to-[#6164F6]/10"
            },
            { 
              icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                </svg>
              ),
              title: t('about.ftwz.keyFeatures.noEntity.title'), 
              desc: t('about.ftwz.keyFeatures.noEntity.desc'),
              gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
              bgPattern: "opacity-10 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10"
            },
            { 
              icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22S19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                </svg>
              ),
              title: t('about.ftwz.keyFeatures.strategic.title'), 
              desc: t('about.ftwz.keyFeatures.strategic.desc'),
              gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
              bgPattern: "opacity-10 bg-gradient-to-br from-[#8B8FFF]/10 to-[#6164F6]/10"
            },
            { 
              icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18,8C18,6.31 16.69,5 15,5H9C7.31,5 6,6.31 6,8H4C2.9,8 2,8.9 2,10V19C2,20.1 2.9,21 4,21H20C21.1,21 22,20.1 22,19V10C22,8.9 21.1,8 20,8H18M15,7C15.55,7 16,7.45 16,8H8C8,7.45 8.45,7 9,7H15M20,19H4V10H6V12H8V10H16V12H18V10H20V19Z"/>
                </svg>
              ),
              title: t('about.ftwz.keyFeatures.distribution.title'), 
              desc: t('about.ftwz.keyFeatures.distribution.desc'),
              gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
              bgPattern: "opacity-10 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10"
            },
            { 
              icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12S16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12S19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12S9.56,10.66 9.66,10H14.34C14.43,10.66 14.5,11.34 14.5,12S14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12S4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.34 7.5,12S7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              ),
              title: t('about.ftwz.keyFeatures.importExport.title'), 
              desc: t('about.ftwz.keyFeatures.importExport.desc'),
              gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
              bgPattern: "opacity-10 bg-gradient-to-br from-[#8B8FFF]/10 to-[#6164F6]/10"
            },
            { 
              icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,3H21C22.05,3 23,3.95 23,5V19C23,20.05 22.05,21 21,21H3C1.95,21 1,20.05 1,19V5C1,3.95 1.95,3 3,3M3,5V19H21V5H3M5,7H19V9H5V7M5,11H19V13H5V11M5,15H19V17H5V15Z"/>
                </svg>
              ),
              title: t('about.ftwz.keyFeatures.tracking.title'), 
              desc: t('about.ftwz.keyFeatures.tracking.desc'),
              gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
              bgPattern: "opacity-10 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10"
            },
            { 
              icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8H4V6C4,4.89 4.89,4 6,4H18A2,2 0 0,1 20,6V8M20,8V18A2,2 0 0,1 18,20H6C4.89,20 4,19.1 4,18V8H20M16,11V13H14V11H16M12,11V13H10V11H12Z"/>
                </svg>
              ),
              title: t('about.ftwz.keyFeatures.payments.title'), 
              desc: t('about.ftwz.keyFeatures.payments.desc'),
              gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
              bgPattern: "opacity-10 bg-gradient-to-br from-[#8B8FFF]/10 to-[#6164F6]/10"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-3xl p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Animated Background Pattern */}
              <div className={`absolute inset-0 ${feature.bgPattern} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Floating Icon with Gradient */}
              <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                {feature.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {feature.desc}
                </p>
              </div>
              
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${feature.gradient} rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* What is FTWZ Section - CLEAN DESIGN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="relative bg-white rounded-3xl p-10 md:p-16 mb-20 overflow-hidden shadow-xl border border-gray-100"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-purple-50/30 rounded-3xl -z-10"></div>
          
          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl font-light text-gray-900 mb-8 text-center" 
              style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
            >
              {t('about.ftwz.whatIsFtwz.title')}
            </motion.h3>
            
            <div className="max-w-5xl mx-auto">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed mb-10 text-center" 
                style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
              >
                {t('about.ftwz.whatIsFtwz.description')}
              </motion.p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    title: t('about.ftwz.whatIsFtwz.features.0'),
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] to-[#8B8FFF]"
                  },
                  {
                    title: t('about.ftwz.whatIsFtwz.features.1'),
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12S16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12S19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12S9.56,10.66 9.66,10H14.34C14.43,10.66 14.5,11.34 14.5,12S14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12S4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.34 7.5,12S7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                      </svg>
                    ),
                    gradient: "from-[#8B8FFF] to-[#6164F6]"
                  },
                  {
                    title: t('about.ftwz.whatIsFtwz.features.2'),
                    icon: (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.43,12.98C19.47,12.66 19.5,12.34 19.5,12C19.5,11.66 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.97 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.49,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.51,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.66 4.57,12.98L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5Z"/>
                      </svg>
                    ),
                    gradient: "from-[#6164F6] to-[#8B8FFF]"
                  }
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${point.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {point.icon}
                    </div>
                    <p className="text-gray-700 text-center leading-relaxed group-hover:text-gray-900 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {point.title}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-xl text-gray-600 leading-relaxed text-center" 
                style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
              >
                {t('about.ftwz.whatIsFtwz.conclusion')}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Services We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
            {t('about.ftwz.servicesOffered.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: t('about.ftwz.servicesOffered.services.warehousing.title'),
                points: t('about.ftwz.servicesOffered.services.warehousing.points', { returnObjects: true }) as string[],
                icon: (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4,2V22H20V2H4M6,4H18V20H6V4M8,6V8H16V6H8M8,10V12H16V10H8M8,14V16H16V14H8M8,18V20H16V18H8Z"/>
                  </svg>
                ),
                gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                borderColor: "border-[#6164F6]/20",
                glowColor: "shadow-[#6164F6]/50"
              },
              {
                title: t('about.ftwz.servicesOffered.services.valueAdded.title'),
                points: t('about.ftwz.servicesOffered.services.valueAdded.points', { returnObjects: true }) as string[],
                icon: (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
                  </svg>
                ),
                gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                borderColor: "border-[#8B8FFF]/20",
                glowColor: "shadow-[#8B8FFF]/50"
              },
              {
                title: t('about.ftwz.servicesOffered.services.handling.title'),
                points: t('about.ftwz.servicesOffered.services.handling.points', { returnObjects: true }) as string[],
                icon: (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,7H18V6A3,3 0 0,0 15,3H9A3,3 0 0,0 6,6V7H5A3,3 0 0,0 2,10V19A3,3 0 0,0 5,22H19A3,3 0 0,0 22,19V10A3,3 0 0,0 19,7M8,6A1,1 0 0,1 9,5H15A1,1 0 0,1 16,6V7H8V6M20,19A1,1 0 0,1 19,20H5A1,1 0 0,1 4,19V10A1,1 0 0,1 5,9H19A1,1 0 0,1 20,10V19Z"/>
                  </svg>
                ),
                gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                borderColor: "border-[#6164F6]/20",
                glowColor: "shadow-[#6164F6]/50"
              },
              {
                title: t('about.ftwz.servicesOffered.services.inventory.title'),
                points: t('about.ftwz.servicesOffered.services.inventory.points', { returnObjects: true }) as string[],
                icon: (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,3H21C22.05,3 23,3.95 23,5V19C23,20.05 22.05,21 21,21H3C1.95,21 1,20.05 1,19V5C1,3.95 1.95,3 3,3M3,5V19H21V5H3M5,7H19V9H5V7M5,11H11V13H5V11M5,15H11V17H5V15M13,11H19V13H13V11M13,15H19V17H13V15Z"/>
                  </svg>
                ),
                gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                borderColor: "border-[#8B8FFF]/20",
                glowColor: "shadow-[#8B8FFF]/50"
              },
              {
                title: t('about.ftwz.servicesOffered.services.compliance.title'),
                points: t('about.ftwz.servicesOffered.services.compliance.points', { returnObjects: true }) as string[],
                icon: (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                ),
                gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
                borderColor: "border-[#6164F6]/20",
                glowColor: "shadow-[#6164F6]/50"
              },
              {
                title: t('about.ftwz.servicesOffered.services.consolidation.title'),
                points: t('about.ftwz.servicesOffered.services.consolidation.points', { returnObjects: true }) as string[],
                icon: (
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12S16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12S19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12S9.56,10.66 9.66,10H14.34C14.43,10.66 14.5,11.34 14.5,12S14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12S4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.34 7.5,12S7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                  </svg>
                ),
                gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
                borderColor: "border-[#8B8FFF]/20",
                glowColor: "shadow-[#8B8FFF]/50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className={`group relative bg-white rounded-3xl p-8 shadow-2xl border-2 ${service.borderColor} hover:${service.glowColor} hover:shadow-3xl transition-all duration-500 overflow-hidden`}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Premium Icon Container */}
                <div className={`relative z-10 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-transparent to-black/10 rounded-2xl"></div>
                  {service.icon}
                </div>
                
                {/* Premium Content */}
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {service.title}
                  </h4>
                  <ul className="space-y-4 text-left">
                    {service.points.map((point, pointIndex) => (
                      <motion.li 
                        key={pointIndex} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.2) + (pointIndex * 0.1) + 0.5 }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 text-sm" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Premium Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.gradient} rounded-3xl transition-opacity duration-500 pointer-events-none`}></div>
                
                {/* Floating Particles Effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-white to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-gradient-to-r from-white to-transparent rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Robust India Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
            {t('about.ftwz.whyChoose.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {(t('about.ftwz.whyChoose.reasons', { returnObjects: true }) as Array<{number: string, title: string, desc: string}>).map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#6164F6]/10 to-[#8B8FFF]/10 rounded-bl-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#6164F6]" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{reason.number}</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 pr-12" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {reason.title}
                </h4>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              {t('about.ftwz.whyChoose.conclusion')}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}