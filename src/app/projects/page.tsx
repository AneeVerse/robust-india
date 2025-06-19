import React from 'react';
import Image from 'next/image';
import ServiceSlider from '@/components/ServiceSlider';
import FooterSection from '@/components/FooterSection';
import Navbar from '@/components/Navbar';
import BookACall from '@/components/BookCallSection';

const projects = [
  {
    image: '/images/project/project1.png',
    title: 'Chemical Products',
    description: 'A wide portfolio of high-quality specialty and bulk chemicals sourced, packaged, and delivered to spec.',
  },
  {
    image: '/images/project/project2.png',
    title: 'FTWZ',
    description: 'Duty-free warehousing, value-added operations, and hassle-free import/export no local entity needed.',
  },
  {
    image: '/images/project/project3.png',
    title: 'Integrated 3PL',
    description: 'End-to-end logistics including storage, handling, inventory management, and efficient global distribution.',
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Gradient top left, rotated */}
      <div className="absolute top-0 left-0 w-[700px] h-[400px] -z-10" style={{ background: 'radial-gradient(circle at 0% 0%, #97CCFB 0%, #B9E0FF 30%, #f8f6f4 60%)', transform: 'rotate(-20deg)' }} />
      <div className="w-full">
        <section className="relative flex flex-col items-center justify-center w-full text-center px-4 md:px-8 pt-16 pb-2 z-10">
          {/* Company logo and name */}
          <div className="flex items-center justify-center gap-3 mb-4 mt-2">
            <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} />
            <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wide">ROBUST INDIA</span>
          </div>
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-light text-center text-gray-900 mb-8 md:mb-18 leading-tight mt-8 md:mt-20" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>Some of our favorite projects</h1>
          
          {/* Projects Container */}
          <div className="w-full max-w-[1400px]">
            {/* Top two project images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {projects.slice(0, 2).map((project) => (
                <div key={project.title} className="rounded-2xl overflow-hidden shadow-lg bg-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
            {/* Titles and descriptions for top two */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full text-left">
              {projects.slice(0, 2).map((project) => (
                <div key={project.title} className="px-2 md:px-4">
                  <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed line-clamp-2 w-[500px]" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.description}</p>
                </div>
              ))}
            </div>
            {/* Third project full-width */}
            <div className="mt-16 md:mt-24 w-full">
              <div className="w-full rounded-3xl overflow-hidden shadow-lg bg-white">
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  width={1200}
                  height={600}
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="mt-8 w-full text-left px-2 md:px-4">
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-2">{projects[2].title}</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed line-clamp-2 w-[500px]" style={{ display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{projects[2].description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/*book a call section*/ }
      <div className="mt-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <BookACall />
        </div>
      </div>
      
      {/* Service Slider Section */}
      <div className="mt-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          <ServiceSlider />
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="mt-20 px-4 md:px-8 -mb-16">
        <div className="max-w-[1400px] mx-auto">
          <FooterSection />
        </div>
      </div>
      
      {/* Navbar */}
      <div className="mt-20 px-4 md:px-8" style={{ marginBottom: '100px' }}>
        <Navbar />
      </div>
    </div>
  );
} 