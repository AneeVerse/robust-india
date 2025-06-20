import Image from 'next/image';
import Navbar from '@/components/Navbar';
import BookACall from '@/components/BookCallSection';
import ServiceSlider from '@/components/ServiceSlider';
import FooterSection from '@/components/FooterSection';

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  { slug: 'chemical-products', title: 'Chemical Products', description: 'A wide portfolio of high-quality specialty and bulk chemicals sourced, packaged, and delivered to spec.', image: '/images/project/project1.png' },
  { slug: 'ftwz', title: 'FTWZ', description: 'Duty-free warehousing, value-added operations, and hassle-free import/export no local entity needed.', image: '/images/project/project2.png' },
  { slug: 'integrated-3pl', title: 'Integrated 3PL', description: 'End-to-end logistics including storage, handling, inventory management, and efficient global distribution.', image: '/images/project/project3.png' },
];

export async function generateStaticParams() {
  return projects.map((proj) => ({ slug: proj.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return <div className="p-20 text-center">Project not found</div>;
  }
  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <Navbar />
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-8">{project.title}</h1>
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          className="rounded-3xl shadow-lg mb-8 w-full h-auto object-cover"
        />
        <p className="text-lg text-gray-700 leading-relaxed mb-12">{project.description}</p>
        {/* Additional project details could go here */}
      </div>
      <BookACall />
      <ServiceSlider />
      <div className="mt-20 ">
        <div className="">
          <FooterSection />
        </div>
      </div>
      <Navbar />
    </main>
  );
} 