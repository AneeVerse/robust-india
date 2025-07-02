import React from 'react';
import FooterSection from '@/components/FooterSection';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      <div className="w-full bg-white overflow-x-hidden">
        <section className="flex flex-col items-center justify-center w-full text-center px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
            Terms of Service
          </h1>
          <div className="max-w-4xl text-left text-gray-700 leading-relaxed space-y-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
            <p>Welcome to Robust India. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">1. Use of the Site</h2>
            <p>You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else&apos;s use and enjoyment of the site.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">2. Intellectual Property</h2>
            <p>All content, features, and functionality on the site, including text, graphics, logos, and images, are the exclusive property of Robust India or its licensors and are protected by copyright, trademark, and other laws.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">3. Limitation of Liability</h2>
            <p>In no event shall Robust India be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the site.</p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">4. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Your continued use of the site after any changes constitutes acceptance of the new Terms.</p>
            <p className="mt-12">If you have any questions about these Terms, please <Link href="/contact" className="text-[#6164F6] hover:underline">contact us</Link>.</p>
          </div>
        </section>
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 mb-24 sm:mb-8 w-full overflow-x-hidden">
          <FooterSection />
        </div>
      </div>
    </main>
  );
} 