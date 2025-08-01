'use client';

import React from 'react';
import Image from 'next/image';

interface GHSSymbolsProps {
  symbols: string[];
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GHS_SYMBOLS = {
  'Health Hazard': {
    description: 'Carcinogen, Mutagenicity, Reproductive Toxicity, Respiratory Sensitizer, Target Organ Toxicity, Aspiration Toxicity',
    image: '/images/regulation/health-hazard-removebg-preview.png'
  },
  'Flame': {
    description: 'Flammables, Pyrophorics, Self-Heating, Emits Flammable Gas, Self-Reactives, Organic Peroxides',
    image: '/images/regulation/Flame-removebg-preview.png'
  },
  'Exclamation Mark': {
    description: 'Irritant (skin and eye), Skin Sensitizer, Acute Toxicity (harmful), Narcotic Effects, Respiratory Tract Irritant',
    image: '/images/regulation/Exclamation_Mark-removebg-preview.png'
  },
  'Gas Cylinder': {
    description: 'Gases Under Pressure',
    image: '/images/regulation/Gas_Cylinder-removebg-preview.png'
  },
  'Corrosion': {
    description: 'Skin Corrosion/Burns, Eye Damage, Corrosive to Metals',
    image: '/images/regulation/Corrosion-removebg-preview.png'
  },
  'Exploding Bomb': {
    description: 'Explosives, Self-Reactives, Organic Peroxides',
    image: '/images/regulation/Exploding_Bomb-removebg-preview.png'
  },
  'Flame Over Circle': {
    description: 'Oxidizers',
    image: '/images/regulation/Flame_Over_Circle-removebg-preview.png'
  },
  'Environment': {
    description: 'Aquatic Toxicity',
    image: '/images/regulation/Environment-removebg-preview.png'
  },
  'Skull and Crossbones': {
    description: 'Acute Toxicity (fatal or toxic)',
    image: '/images/regulation/Skull_and_Crossbones-removebg-preview.png'
  }
};

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16'
};

export default function GHSSymbols({ symbols, size = 'md', className = '' }: GHSSymbolsProps) {
  if (!symbols || symbols.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {symbols.map((symbol, index) => {
        const symbolKey = symbol.trim();
        const symbolData = GHS_SYMBOLS[symbolKey as keyof typeof GHS_SYMBOLS];
        
        if (!symbolData) {
          return null;
        }

        return (
          <div
            key={index}
            className={`${sizeClasses[size]} relative group cursor-help`}
            title={`${symbolKey}: ${symbolData.description}`}
          >
            <Image
              src={symbolData.image}
              alt={symbolKey}
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        );
      })}
    </div>
  );
} 