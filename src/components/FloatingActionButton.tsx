"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";
import { IoMdChatboxes } from "react-icons/io";
import { useContactWidget } from '@/context/ContactWidgetContext';

const FloatingActionButton = () => {
  const { setHasSubmittedContactForm, isContactWidgetOpen, setIsContactWidgetOpen, pendingAction, setPendingAction } = useContactWidget();
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedContactType, setSelectedContactType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    contactType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleContactClick = (type: string) => {
    setSelectedContactType(type);
    setFormData({ ...formData, contactType: type });
    setShowForm(true);
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', { ...formData, source: 'contact widget' });
      const response = await fetch('/api/contact-widget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'contact widget'
        }),
      });

      if (response.ok) {
        setHasSubmittedContactForm(true); // Track that form was submitted
        setShowSuccess(true);
        setFormData({ name: '', organization: '', email: '', phone: '', contactType: '' });
        let timeLeft = 3;
        setCountdown(timeLeft);
        const countdownInterval = setInterval(() => {
          timeLeft--;
          setCountdown(timeLeft);
          if (timeLeft <= 0) {
            clearInterval(countdownInterval);
          }
        }, 1000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        alert(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Framer Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 }
  };

  // Handle external widget requests
  useEffect(() => {
    if (isContactWidgetOpen && !showForm) {
      setShowForm(true);
      setOpen(false);
      setIsContactWidgetOpen(false);
      // Set the contact type from pending action if available
      if (pendingAction) {
        setSelectedContactType(pendingAction);
        setFormData(prev => ({ ...prev, contactType: pendingAction }));
      }
    }
  }, [isContactWidgetOpen, showForm, setIsContactWidgetOpen, pendingAction]);

  // Add this useEffect after all useState declarations
  useEffect(() => {
    if (showSuccess && countdown === 0) {
      setShowSuccess(false);
      setShowForm(false);
      setCountdown(3);
      
      // Execute pending action if exists
      const action = pendingAction || selectedContactType;
      if (action === 'WhatsApp') {
        window.location.href = 'https://wa.me/919833950755';
      } else if (action === 'Email') {
        window.location.href = 'mailto:robustindia@outlook.com';
      } else if (action === 'Phone') {
        window.location.href = 'tel:+919833950755';
      }
      setPendingAction(null);
    }
  }, [showSuccess, countdown, selectedContactType, pendingAction, setPendingAction]);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40">
      {open && !showForm && (
        <motion.div 
          initial="hidden" 
          animate="visible" 
          exit="exit" 
          className="flex flex-col items-center gap-3 mb-4"
        >
          <motion.button
            onClick={() => handleContactClick('WhatsApp')}
            className="w-14 h-14 bg-white text-[#25D366] rounded-full flex items-center justify-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
          >
            <FaWhatsapp size={26} />
          </motion.button>

          <motion.button
            onClick={() => handleContactClick('Email')}
            className="w-14 h-14 bg-white text-[#6164F6] rounded-full flex items-center justify-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
          >
            <FaEnvelope size={24} />
          </motion.button>

          <motion.button
            onClick={() => handleContactClick('Phone')}
            className="w-14 h-14 bg-white text-[#6164F6] rounded-full flex items-center justify-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            variants={buttonVariants}
          >
            <FaPhone size={24} />
          </motion.button>
        </motion.div>
      )}

      {/* Contact Form Modal */}
      {showForm && (
        <motion.div 
          initial="hidden" 
          animate="visible" 
          exit="exit" 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2"
        >
          <motion.div
            className="bg-white relative rounded-2xl shadow-2xl p-4 max-w-xs w-full mx-2 border border-gray-200"
            style={{ minHeight: 'auto' }}
            variants={containerVariants}
          >
            {/* Heading and close button */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                Contact Us{selectedContactType ? ` via ${selectedContactType}` : ''}
              </div>
              {!showSuccess && (
                <motion.button
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setShowForm(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoClose className="h-6 w-6" />
                </motion.button>
              )}
            </div>

            {showSuccess ? (
              <div className="text-center py-8">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6164F6] to-[#8B8FFF] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    Form Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
                    Redirecting in {countdown} seconds...
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#6164F6] to-[#8B8FFF] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((3 - countdown) / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6164F6] focus:border-[#6164F6] outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="Name*"
                  style={{ fontFamily: 'FusionNeue, sans-serif' }}
                />
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6164F6] focus:border-[#6164F6] outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="Organization"
                  style={{ fontFamily: 'FusionNeue, sans-serif' }}
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6164F6] focus:border-[#6164F6] outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="Email*"
                  style={{ fontFamily: 'FusionNeue, sans-serif' }}
                />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6164F6] focus:border-[#6164F6] outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
                  placeholder="Phone Number*"
                  style={{ fontFamily: 'FusionNeue, sans-serif' }}
                />
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold"
                    style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#6164F6] to-[#8B8FFF] text-white rounded-xl hover:from-[#5155E8] hover:to-[#7A7FFF] transition-all duration-200 disabled:opacity-50 font-semibold shadow-lg"
                    style={{ fontFamily: 'NoiGrotesk, sans-serif' }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}

      <motion.button
        className="w-16 h-16 bg-gradient-to-br from-[#6164F6] to-[#8B8FFF] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl focus:outline-none border-2 border-white transition-all duration-300"
        onClick={() => setOpen(!open)}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <div>
          {open ? (
            <IoClose className='h-7 w-7' />
          ) : (
            <IoMdChatboxes className="h-8 w-8" />
          )}
        </div> 
      </motion.button>
    </div>
  );
};

export default FloatingActionButton; 