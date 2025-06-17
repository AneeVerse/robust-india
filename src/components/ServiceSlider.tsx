"use client"
import React from 'react';
import Image from 'next/image';

const services = [
  { name: 'OIL & GAS', img: '/images/service/oil-rig (2) 1.png' },
  { name: 'Agrochemicals', img: '/images/service/chemicals 1.png' },
  { name: 'Water Treatment', img: '/images/service/wastewater 1.png' },
  { name: 'Mining & Metals', img: '/images/service/mining 1.png' },
  { name: 'Paints & Coatings', img: '/images/service/varnish 1 (1).png' },
  { name: 'Polymers & Plastics', img: '/images/service/polymer 1.png' },
  { name: 'Pharmaceuticals', img: '/images/service/pill 1.png' },
  { name: 'Textiles & Fibers', img: '/images/service/thread 1.png' },
  { name: 'Automotive & Lubricants', img: '/images/service/automotive 1.png' },
];

export default function ServiceSlider() {
  // Duplicate the array for seamless infinite effect
  const sliderItems = [...services, ...services];

  return (
    <div className="mt-12 min-h-[520px] py-30 flex flex-col bg-[#181a1b] w-full overflow-hidden mt-45 rounded-3xl">
      <div className="max-w-5xl mx-auto w-full px-4 mr-100">
        <h2
          className="text-white text-left text-4xl md:text-6xl font-normal mb-14 leading-tight"
          style={{ fontFamily: 'Segoe UI, Arial, sans-serif', letterSpacing: '-1px', wordBreak: 'break-word' }}
        >
          Supporting Diverse<br />Industrial Sectors
        </h2>
      </div>
      {/* Full-width slider row below heading */}
      <div className="relative w-full overflow-hidden mt-10">
        {/* Left blur overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, #181a1b 70%, transparent 100%)'}} />
        {/* Right blur overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, #181a1b 70%, transparent 100%)'}} />
        <div
          className="flex w-max animate-[slide_30s_linear_infinite] ml-10 md:ml-24 mt-10"
          style={{ animation: 'slide 30s linear infinite' }}
        >
          {sliderItems.map((service, idx) => (
            <div
              className="flex items-center mx-14 min-w-[220px]"
              key={idx}
            >
              <Image
                src={service.img}
                alt={service.name}
                width={96}
                height={96}
                className="w-24 h-24 mr-6"
              />
              <span className="text-white text-2xl md:text-3xl font-extrabold whitespace-nowrap">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
