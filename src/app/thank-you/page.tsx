"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, Mail, Phone, MessageCircle, ArrowRight, Home } from 'lucide-react';
import FooterSection from '@/components/FooterSection';

export default function ThankYouPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.5
      }
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-12 z-10">
        {/* Company logo and name */}
        <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 mt-2">
          <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-wide">ROBUST INDIA</span>
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Success Icon */}
          <motion.div
            variants={iconVariants}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#6164F6] to-[#8B8FFF] rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight"
            style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
          >
            Thank You!
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="relative inline-block mb-6 sm:mb-8 md:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-700 leading-tight tracking-tight"
                style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              Message Received Successfully
            </h2>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-[#6164F6] to-[#8B8FFF] rounded-full transform -rotate-1"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left center" }}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl mx-auto px-4 sm:px-0"
            style={{ fontFamily: 'FusionNeue, sans-serif' }}
          >
            We appreciate you reaching out to us. Our team will review your inquiry and get back to you within 24 hours.
          </motion.p>
        </motion.div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              What Happens Next?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
              Here&apos;s what you can expect from our team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: Mail,
                title: "Review & Analysis",
                description: "Our experts will carefully review your inquiry and analyze your specific requirements.",
                time: "Within 2 hours"
              },
              {
                icon: Phone,
                title: "Personal Response",
                description: "A dedicated team member will reach out to you via your preferred contact method.",
                time: "Within 24 hours"
              },
              {
                icon: MessageCircle,
                title: "Detailed Discussion",
                description: "We&apos;ll schedule a call to discuss your needs and how we can best serve you.",
                time: "Within 48 hours"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#6164F6] to-[#8B8FFF] rounded-xl flex items-center justify-center mb-4 md:mb-6">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
                  {step.description}
                </p>
                <div className="inline-block bg-gradient-to-r from-[#6164F6] to-[#8B8FFF] text-white text-sm font-semibold py-2 px-4 rounded-full">
                  {step.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
              Don&apos;t want to wait? Get in touch with us directly through any of these channels.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#6164F6] to-[#8B8FFF] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => window.location.href = 'tel:+919833950755'}
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#6164F6] font-semibold py-4 px-6 rounded-xl border-2 border-[#6164F6] hover:bg-[#6164F6] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => window.location.href = 'mailto:robustindia@outlook.com'}
              >
                <Mail className="w-5 h-5" />
                Send Email
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#25D366] text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 sm:col-span-2 lg:col-span-1"
                onClick={() => window.open('https://wa.me/919833950755', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              Explore Our Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
              While you wait for our response, discover more about our comprehensive chemical trade and logistics solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <Link href="/services" className="block">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    Our Services
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
                    Discover our comprehensive range of chemical trade, FTWZ, and 3PL solutions.
                  </p>
                  <div className="flex items-center text-[#6164F6] font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <Link href="/about" className="block">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    About Us
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
                    Learn more about our mission, values, and commitment to excellence.
                  </p>
                  <div className="flex items-center text-[#6164F6] font-semibold">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block"
            >
              <Link
                href="/"
                className="bg-gradient-to-r from-[#6164F6] to-[#8B8FFF] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <Home className="w-5 h-5" />
                Return to Homepage
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mb-8">
        <FooterSection />
      </div>
    </div>
  );
} 