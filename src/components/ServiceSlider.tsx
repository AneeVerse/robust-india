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
    <div className="mt-12 min-h-[300px] py-8 sm:py-30 sm:min-h-[520px] flex flex-col bg-[#181a1b] w-full overflow-hidden rounded-3xl">
      <div className="max-w-5xl mx-auto w-full px-4 mr-100">
        <h2
          className="text-white text-left text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-normal mb-6 sm:mb-14 leading-tight"
          style={{ fontFamily: 'Segoe UI, Arial, sans-serif', letterSpacing: '-1px', wordBreak: 'break-word' }}
        >
          Supporting Diverse<br />Industrial Sectors
        </h2>
      </div>
      {/* Full-width slider row below heading */}
      <div className="relative w-full overflow-hidden mt-4 sm:mt-10 px-4 sm:px-0">
        {/* Left blur overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, #181a1b 70%, transparent 100%)'}} />
        {/* Right blur overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, #181a1b 70%, transparent 100%)'}} />
        <div
          className="flex w-max animate-[slide_80s_linear_infinite] ml-0 sm:ml-10 md:ml-24 mt-4 sm:mt-10"
        >
          {sliderItems.map((service, idx) => (
            <div
              className="flex items-center mx-4 sm:mx-14 min-w-[220px]"
              key={idx}
            >
              <Image
                src={service.img}
                alt={service.name}
                width={66}
                height={66}
                className="w-12 h-12 mr-2 sm:w-16 sm:h-16 sm:mr-6"
              />
              <span className="text-white text-lg sm:text-2xl md:text-4xl font-extrabold whitespace-nowrap">{service.name}</span>
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
