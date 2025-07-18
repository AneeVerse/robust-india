"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

export default function EndtoEndSoulutionInfo() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-12">
      {/* End-to-End Solutions Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="mb-20"
      >
        <div className="text-center mb-16">
   <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
     {t('about.endToEnd.title')}
   </h3>
   <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
     {t('about.endToEnd.subtitle')}
   </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
   {[
     {
       title: t('about.endToEnd.solutions.0.title'),
       points: t('about.endToEnd.solutions.0.points', { returnObjects: true }) as string[],
       icon: (
         <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
           <path d="M5,2H19A1,1 0 0,1 20,3V6H4V3A1,1 0 0,1 5,2M18,8A2,2 0 0,1 16,10A2,2 0 0,1 14,8A2,2 0 0,1 16,6A2,2 0 0,1 18,8M4,8V21A1,1 0 0,0 5,22H19A1,1 0 0,0 20,21V8H4Z"/>
         </svg>
       ),
       gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
       bgColor: "bg-gradient-to-br from-[#6164F6]/5 to-[#8B8FFF]/5"
     },
     {
       title: t('about.endToEnd.solutions.1.title'),
       points: t('about.endToEnd.solutions.1.points', { returnObjects: true }) as string[],
       icon: (
         <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M16.59,7.58L10,14.17L7.41,11.59L6,13L10,17L18,9L16.59,7.58Z"/>
         </svg>
       ),
       gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
       bgColor: "bg-gradient-to-br from-[#8B8FFF]/5 to-[#6164F6]/5"
     },
     {
       title: t('about.endToEnd.solutions.2.title'),
       points: t('about.endToEnd.solutions.2.points', { returnObjects: true }) as string[],
       icon: (
         <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
         </svg>
       ),
       gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
       bgColor: "bg-gradient-to-br from-[#6164F6]/5 to-[#8B8FFF]/5"
     },
     {
       title: t('about.endToEnd.solutions.3.title'),
       points: t('about.endToEnd.solutions.3.points', { returnObjects: true }) as string[],
       icon: (
         <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
           <path d="M19,7H18V6A3,3 0 0,0 15,3H9A3,3 0 0,0 6,6V7H5A3,3 0 0,0 2,10V19A3,3 0 0,0 5,22H19A3,3 0 0,0 22,19V10A3,3 0 0,0 19,7M8,6A1,1 0 0,1 9,5H15A1,1 0 0,1 16,6V7H8V6M20,19A1,1 0 0,1 19,20H5A1,1 0 0,1 4,19V10A1,1 0 0,1 5,9H19A1,1 0 0,1 20,10V19Z"/>
         </svg>
       ),
       gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
       bgColor: "bg-gradient-to-br from-[#8B8FFF]/5 to-[#6164F6]/5"
     },
     {
       title: t('about.endToEnd.solutions.4.title'),
       points: t('about.endToEnd.solutions.4.points', { returnObjects: true }) as string[],
       icon: (
         <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
           <path d="M20,8H4V6C4,4.89 4.89,4 6,4H18A2,2 0 0,1 20,6V8M20,8V18A2,2 0 0,1 18,20H6C4.89,20 4,19.1 4,18V8H20M7,10V16H10V10H7M14,10V16H17V10H14Z"/>
         </svg>
       ),
       gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
       bgColor: "bg-gradient-to-br from-[#6164F6]/5 to-[#8B8FFF]/5"
     },
     {
       title: t('about.endToEnd.solutions.5.title'),
       points: t('about.endToEnd.solutions.5.points', { returnObjects: true }) as string[],
       icon: (
         <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
           <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H15.5C16.3,11 17,11.4 17,12V16C17,16.6 16.6,17 16,17H8C7.4,17 7,16.6 7,16V12C7,11.4 7.4,11 8,11H8.5V10C8.5,8.6 9.6,7 12,7M12,8.2C10.2,8.2 9.8,9.2 9.8,10V11H14.2V10C14.2,9.2 13.8,8.2 12,8.2Z"/>
         </svg>
       ),
       gradient: "from-[#8B8FFF] via-[#7B7FFF] to-[#6164F6]",
       bgColor: "bg-gradient-to-br from-[#8B8FFF]/5 to-[#6164F6]/5"
     },
     {
       title: t('about.endToEnd.solutions.6.title'),
       points: t('about.endToEnd.solutions.6.points', { returnObjects: true }) as string[],
       icon: (
         <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
           <path d="M19.43,12.98C19.47,12.66 19.5,12.34 19.5,12C19.5,11.66 19.47,11.34 19.43,11.02L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.97 19.05,5.05L16.56,6.05C16.04,5.65 15.48,5.32 14.87,5.07L14.49,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.51,2.42L9.13,5.07C8.52,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11.02C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.66 4.57,12.98L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.52,18.68 9.13,18.93L9.51,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.49,21.58L14.87,18.93C15.48,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.04 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.98M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5Z"/>
         </svg>
       ),
       gradient: "from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF]",
       bgColor: "bg-gradient-to-br from-[#6164F6]/5 to-[#8B8FFF]/5"
     }
                     ].slice(0, 7).map((solution, index) => (
       <motion.div
         key={index}
         initial={{ opacity: 0, y: 50, scale: 0.8 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         viewport={{ once: true }}
         transition={{ 
           duration: 0.5, 
           delay: index * 0.08,
           type: "spring",
           stiffness: 120,
           damping: 15
         }}
         whileHover={{ 
           y: -12, 
           scale: 1.03,
           transition: { duration: 0.4, ease: "easeOut" }
         }}
         className={`group relative ${solution.bgColor} rounded-3xl p-8 shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 overflow-hidden`}
       >
         {/* Floating Icon with Enhanced Gradient */}
         <div className={`relative z-10 w-28 h-28 bg-gradient-to-br ${solution.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
           <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
           <div className="absolute inset-3 bg-gradient-to-br from-transparent to-black/10 rounded-2xl"></div>
           <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-white/60 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500"></div>
           {solution.icon}
         </div>
         
         {/* Enhanced Content */}
         <div className="relative z-10 text-center">
           <h4 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-500" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
             {solution.title}
           </h4>
           <ul className="space-y-4 text-left">
             {solution.points.map((point, pointIndex) => (
               <motion.li 
                 key={pointIndex}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: (index * 0.08) + (pointIndex * 0.05) + 0.3 }}
                 className="flex items-start space-x-4"
               >
                 <div className={`w-4 h-4 bg-gradient-to-br ${solution.gradient} rounded-full mt-1 flex-shrink-0 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500`}>
                   <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                 </div>
                 <span className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                   {point}
                 </span>
               </motion.li>
             ))}
           </ul>
         </div>
         
         {/* Animated Shine Effect */}
         <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
           <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-x-16 -translate-y-16 group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-1000 ease-out"></div>
         </div>
         
         {/* Floating Decorative Elements */}
         <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
         <div className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-r from-white/30 to-transparent rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
         <div className="absolute top-1/2 right-4 w-1 h-1 bg-gradient-to-r from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-600"></div>
       </motion.div>
     ))}
 </div>

 {/* Benefit Highlights - REDESIGNED */}
 <motion.div
   initial={{ opacity: 0, y: 40 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8, delay: 1.2 }}
   className="relative overflow-hidden"
 >
   {/* Background with Modern Design */}
   <div className="relative bg-gradient-to-br from-[#6164F6] via-[#7B7FFF] to-[#8B8FFF] rounded-3xl p-1">
     <div className="relative bg-gradient-to-br from-[#6164F6]/95 via-[#7B7FFF]/95 to-[#8B8FFF]/95 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
       
       {/* Decorative Elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
       <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-white/5 to-transparent rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>
       
       <div className="relative z-10">
         {/* Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 1.4 }}
           className="text-center mb-12"
         >
           <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-2xl">
             <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
             </svg>
           </div>
           <h4 className="text-3xl md:text-4xl font-light text-white mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
             {t('about.benefitHighlights.title')}
           </h4>
           <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full mx-auto"></div>
         </motion.div>

         {/* Benefits Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { 
               title: t('about.benefitHighlights.benefits.0.title'), 
               desc: t('about.benefitHighlights.benefits.0.desc'),
               icon: (
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
                 </svg>
               ),
               gradient: "from-yellow-400 to-orange-500"
             },
             { 
               title: t('about.benefitHighlights.benefits.1.title'), 
               desc: t('about.benefitHighlights.benefits.1.desc'),
               icon: (
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                 </svg>
               ),
               gradient: "from-green-400 to-emerald-500"
             },
             { 
               title: t('about.benefitHighlights.benefits.2.title'), 
               desc: t('about.benefitHighlights.benefits.2.desc'),
               icon: (
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
                 </svg>
               ),
               gradient: "from-blue-400 to-cyan-500"
             },
             { 
               title: t('about.benefitHighlights.benefits.3.title'), 
               desc: t('about.benefitHighlights.benefits.3.desc'),
               icon: (
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1Z"/>
                 </svg>
               ),
               gradient: "from-purple-400 to-pink-500"
             }
           ].map((benefit, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30, scale: 0.9 }}
               whileInView={{ opacity: 1, y: 0, scale: 1 }}
               viewport={{ once: true }}
               transition={{ 
                 duration: 0.5, 
                 delay: 1.6 + index * 0.1,
                 type: "spring",
                 stiffness: 120,
                 damping: 12
               }}
               whileHover={{ 
                 y: -8, 
                 scale: 1.05,
                 transition: { duration: 0.3 }
               }}
               className="group relative h-full"
             >
               {/* Card */}
               <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 h-full min-h-[200px] flex flex-col">
                 
                 {/* Icon - Centered */}
                 <div className="flex justify-center mb-4">
                   <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                     {benefit.icon}
                   </div>
                 </div>
                 
                 {/* Content - Centered */}
                 <div className="text-center flex-1 flex flex-col justify-center">
                   <h5 className="text-lg font-semibold text-white mb-3 group-hover:text-white/90 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                     {benefit.title}
                   </h5>
                   <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/70 transition-colors duration-300" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                     {benefit.desc}
                   </p>
                 </div>
                 
                 {/* Hover Glow */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </div>
   </div>
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.6, delay: 2.0 }}
     className="text-center mt-8"
   >
     <p className="text-3xl text-gray-600 leading-relaxed mt-20  " style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
       {t('about.benefitHighlights.conclusion')}
     </p>
   </motion.div>
 </motion.div>
      </motion.div>
    </div>
  );
}
