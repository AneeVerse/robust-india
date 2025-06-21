import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServiceSlider from "@/components/ServiceSlider";
import WhatWeDo from "@/components/what-we-do";
import BookCallSection from "@/components/BookCallSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-2 sm:p-4 md:p-6 lg:p-8">
              <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
        <HeroSection />
      </div>
              <div className="-mx-2 sm:-mx-4 md:-mx-6 lg:-mx-8">
        <WhatWeDo />
      </div>
    
      <ServicesSection />
      <ProjectShowcase />
      <ServiceSlider />
      <BookCallSection />
      <FooterSection />
    </main>
  );
}
