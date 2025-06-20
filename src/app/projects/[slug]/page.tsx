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
  tags: string[];
  fullImage: string;
  smallImages: string[];
}

const projects: Project[] = [
  {
    slug: 'chemical-products',
    title: 'Chemical Products',
    description: 'Our Chemical Products division sources a comprehensive range of high-purity specialty and bulk chemicals from leading global producers. From precise formulation and rigorous quality assurance testing to custom packaging and compliant distribution, we manage every aspect of the supply chain to deliver tailored solutions that meet the exacting specifications of clients across industries. Our expertise in regulatory compliance and logistical coordination ensures safe, reliable delivery, helping businesses innovate and scale with confidence.',
    image: '/images/project/project1.png',
    fullImage: '/images/project/SLUG/1st project-width.avif',
    smallImages: [
      '/images/project/SLUG/1st project 2nd.avif',
      '/images/project/SLUG/1st project 3rd.avif',
    ],
    tags: ['Chemical Products', 'Global Distribution', 'Packaging', 'Brand Identity'],
  },
  {
    slug: 'ftwz',
    title: 'FTWZ',
    description: 'FTWZ (Free Trade Warehousing Zone) provides fully bonded storage facilities and value-added services without the need for a local entity. We streamline import and export processes through seamless customs handling, real-time inventory tracking, and integrated digital reporting. Our turnkey solutions include kitting, labeling, and distribution under one roof, enabling businesses to optimize cash flow, reduce overhead, and accelerate time to market.',
    image: '/images/project/project2.png',
    fullImage: '/images/project/SLUG/2nd project-width.avif',
    smallImages: [
      '/images/project/SLUG/2nd project 2nd.avif',
      '/images/project/SLUG/2nd image 3rd.avif',
    ],
    tags: ['FTWZ', 'Inventory Management', 'Import/Export', 'Warehousing'],
  },
  {
    slug: 'integrated-3pl',
    title: 'Integrated 3PL',
    description: 'Our Integrated 3PL service offers end-to-end logistics management, combining warehousing, transportation, and inventory control under a unified platform. Leveraging advanced warehouse management systems, predictive analytics, and a global carrier network, we optimize storage layouts, automate order fulfillment, and provide real-time visibility across the supply chain. From inbound procurement to last-mile delivery, we ensure cost-effective, scalable solutions tailored to each client\'s unique operational needs.',
    image: '/images/project/project3.png',
    fullImage: '/images/project/SLUG/3rd project-width.avif',
    smallImages: [
      '/images/project/SLUG/3rd project 2nd.avif',
      '/images/project/SLUG/3rd project 3rd.avif',
    ],
    tags: ['Integrated 3PL', 'Logistics', 'Storage', 'Global Distribution'],
  },
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
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-5">
      <Navbar />
      <div className="w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={1920}
          height={1080}
          className="w-full h-[95vh] object-cover rounded-xl"
        />
      </div>
      <div className="w-full px-4 sm:px-6 md:px-5 py-16">
        <h1 className="text-5xl font-normal text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{project.title}</h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{project.description}</p>
        <p className="text-lg font-semibold mb-4 text-gray-900 mt-10" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>Services provided</p>
        <div className="flex flex-wrap gap-4 mb-12 mt-10 -ml-4">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-block bg-[#f5f5f5] text-[#222] rounded-[1.2rem] px-4 py-1 text-base font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* Stats section */}
      <div className="w-full px-4 sm:px-6 md:px-5 mb-16">
        <hr className="border-gray-300 mb-8" />
        <div className="flex items-center flex-wrap gap-8">
          <div>
            <p className="text-lg text-gray-900">Headquarters</p>
            <p className="text-base md:text-md font-medium text-gray-800">Amsterdam</p>
          </div>
          <div>
            <p className="text-lg text-gray-900">Industry</p>
            <p className="text-base md:text-md font-medium text-gray-800">EdTech</p>
          </div>
          <div>
            <svg className="inline-block h-10 w-8 text-gray-400 transform rotate-90" fill="none" viewBox="0 0 27 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.10696C4.89099 6.10696 10.4306 6.79673 13.9209 4.58335C17.2052 2.50058 13.7605 -0.43632 11.8165 1.80381C11.0323 2.70752 10.4356 4.55498 10.9011 5.72606C13.5121 12.295 22.6498 7.43559 26 4.48555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-lg text-gray-900">Monthly Visitors</p>
            <p className="text-base md:text-md font-medium text-[#6164f6]">250K+</p>
          </div>
          <div>
            <p className="text-lg text-gray-900">Used by</p>
            <p className="text-base md:text-md font-medium text-[#6164f6]">600+ organizations</p>
          </div>
        </div>
      </div>
      {/* Additional project showcase images */}
      <div className="w-full mb-16">
        <Image
          src={project.fullImage}
          alt={project.title}
          width={1920}
          height={1080}
          className="w-full h-[95vh] object-cover rounded-xl"
        />
      </div>
      <div className="w-full mb-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {project.smallImages.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`${project.title} detail ${idx + 1}`}
              width={800}
              height={500}
              className="w-full h-auto rounded-xl"
            />
          ))}
        </div>
      </div>
      <BookACall />
   
      <div className="mt-0 mb-2 ">
        <div className="">
          <FooterSection />
        </div>
      </div>
      <Navbar />
    </main>
  );
} 