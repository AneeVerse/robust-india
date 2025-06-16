import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectShowcase from "@/components/ProjectShowcase";



export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A description for project one.",
      image: "/images/project/project1.png",
      tags: ["React", "GSAP", "UI"],
    },
    {
      id: 2,
      title: "Project Two",
      description: "A description for project two.",
      image: "/images/project/project2.png",
      tags: ["Next.js", "Animation"],
    },
  ];
  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="container mx-auto bg-white rounded-3xl overflow-hidden shadow-lg">
        <HeroSection />
      </div>
    
      <ServicesSection />
      <ProjectShowcase />
    </main>
  );
}
