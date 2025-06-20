import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import BookCallSection from '@/components/BookCallSection';
import TeamSection from '@/components/TeamSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CoreValuesSection from '@/components/CoreValuesSection';

// TODO: Create and import these components
// import NewsletterSection from '@/components/NewsletterSection';

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 md:px-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Our team of experts has a sweet tooth for digital products.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
          If there's one thing we love, it's sinking our teeth into platforms — and beyond — ensuring every detail reflects your unique vision.
        </p>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Book a Call Section */}
      <BookCallSection />

      {/* Newsletter Section */}
      <div id="newsletter" className="py-20 px-6 md:px-20">
        {/* TODO: Implement NewsletterSection component */}
        {/* <NewsletterSection /> */}
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
} 