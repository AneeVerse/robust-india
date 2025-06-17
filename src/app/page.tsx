import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServiceSlider from "@/components/ServiceSlider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="w-full bg-white rounded-3xl overflow-hidden ">
        <HeroSection />
      </div>
    
      <ServicesSection />
      <ProjectShowcase />
      <ServiceSlider />
    </main>
  );
}
