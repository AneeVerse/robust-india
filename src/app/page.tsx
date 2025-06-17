import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServiceSlider from "@/components/ServiceSlider";
import WhatWeDo from "@/components/what-we-do";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="w-full bg-white rounded-3xl overflow-hidden ">
        <HeroSection />
      </div>
      <div className="-mx-4 sm:-mx-6 md:-mx-8">
        <WhatWeDo />
      </div>
    
      <ServicesSection />
      <ProjectShowcase />
      <ServiceSlider />
    </main>
  );
}
