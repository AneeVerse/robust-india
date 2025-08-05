"use client"
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const services = [
  { key: 'oilAndGas', img: '/images/service/oil-rig (2) 1.png' },
  { key: 'agrochemicals', img: '/images/service/chemicals 1.png' },
  { key: 'waterTreatment', img: '/images/service/wastewater 1.png' },
  { key: 'miningMetals', img: '/images/service/mining 1.png' },
  { key: 'paintsCoatings', img: '/images/service/varnish 1 (1).png' },
  { key: 'polymersPlastics', img: '/images/service/polymer 1.png' },
  { key: 'pharmaceuticals', img: '/images/service/pill 1.png' },
  { key: 'textilesFibers', img: '/images/service/thread 1.png' },
  { key: 'automotiveLubricants', img: '/images/service/automotive 1.png' },
];

export default function ServiceSlider() {
  const { t } = useTranslation();
  // Duplicate the array for seamless infinite effect
  const sliderItems = [...services, ...services]; // keep two copies for seamless loop

  return (
    <div className="my-8 sm:my-20 md:my-24 min-h-[200px] sm:min-h-[300px] py-6 sm:py-12 md:py-16 lg:py-20 sm:min-h-[520px] flex flex-col bg-[#181a1b] w-full overflow-hidden rounded-3xl">
      <div className="w-full px-4 flex justify-center items-center -mt-4 sm:-mt-8">
        <h2 
          className="text-white text-center text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-normal mb-4 sm:mb-6 md:mb-14 leading-tight px-2"
          style={{ letterSpacing: '-1px', whiteSpace: 'nowrap' }}
        >
          {t('serviceSlider.title.line1')}{t('serviceSlider.title.line2')}
        </h2>
      </div>
      {/* Full-width slider row below heading */}
      <div className="relative w-full overflow-hidden mt-4 sm:mt-10 px-4 sm:px-0">
        {/* Left blur overlay */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, #181a1b 70%, transparent 100%)'}} />
        {/* Right blur overlay */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, #181a1b 70%, transparent 100%)'}} />
        <div
          className="flex w-max animate-[slide_40s_linear_infinite] mx-auto mt-6 sm:mt-8 md:mt-12 justify-center"
          style={{ willChange: 'transform', animation: 'slide 40s linear infinite' }}
        >
          {sliderItems.map((service, idx) => (
            <div
              className="flex-none flex items-center mx-4 sm:mx-14 min-w-[220px]"
              key={idx}
            >
              <Image
                src={service.img}
                alt={t(`serviceSlider.sectors.${service.key}`)}
                width={66}
                height={66}
                className="w-12 h-12 mr-2 sm:w-16 sm:h-16 sm:mr-6"
              />
              <span className="text-white text-lg sm:text-2xl md:text-4xl font-extrabold whitespace-nowrap">
                {t(`serviceSlider.sectors.${service.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
