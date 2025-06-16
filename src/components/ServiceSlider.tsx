"use client"
import React from 'react';

const services = [
  { name: 'OIL & GAS', img: '/images/service/da42257ad279c4d6f8aed2227ff751aadf429df4.png' },
  { name: 'Agrochemicals', img: '/images/service/8ab1b9003e3075efd68ed2380913f8202fd843f0.png' },
  { name: 'Water Treatment', img: '/images/service/81d7b605e9eb5a1a91c63e11db9c903d3153c925.png' },
  { name: 'Mining & Metals', img: '/images/service/f8d9e9bf2b73d6d1005831f6156cbc9d88d9745c.png' },
  { name: 'Paints & Coatings', img: '/images/service/e68dd2540e06771f29ae7ae2276b3fff8f7acbdb.png' },
  { name: 'Polymers & Plastics', img: '/images/service/5533b3b677a0c420f28cf9c61360c2cd110ce182.png' },
  { name: 'Pharmaceuticals', img: '/images/service/a0774780939bf9ab3ed22ec539eabfa48d67564c.png' },
  { name: 'Textiles & Fibers', img: '/images/service/8278642b6bbd09dd87a607378e4474aa69122841.png' },
  { name: 'Automotive & Lubricants', img: '/images/service/711edce868106dea0ae501668c6cbea3ec516b42.png' },
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
              <img
                src={service.img}
                alt={service.name}
                className="w-24 h-24 mr-6 filter invert brightness-200"
                style={{ filter: 'brightness(0) invert(1)' }}
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
