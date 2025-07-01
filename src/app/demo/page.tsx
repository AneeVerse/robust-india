import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectShowcaseDemo from "@/components/ProjectShowcaseDemo";
import ServiceSlider from "@/components/ServiceSlider";
import WhatWeDoDemo from "@/components/WhatWeDoDemo";
import BookCallSection from "@/components/BookCallSection";
import FooterSection from "@/components/FooterSection";

export default function Demo() {
  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden">
        <HeroSection />
      </div>
      
      {/* Add spacing between hero and next section */}
      <div className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32"></div>
      
      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10">
        <WhatWeDoDemo />
      </div>
    
      <ServicesSection />
      <ProjectShowcaseDemo />
      <ServiceSlider />
      <BookCallSection />
      <FooterSection />
    </main>
  );
} 