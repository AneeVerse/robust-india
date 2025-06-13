import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="container mx-auto bg-white rounded-3xl overflow-hidden shadow-lg">
        <HeroSection />
      </div>
      <ServicesSection />
    </main>
  );
}
