'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  GiChemicalDrop, 
  GiTestTubes, 
  GiAtomicSlashes, 
  GiMolecule, 
  GiAcid,
  GiDna2,
  GiCrystalBars,
  GiPlantRoots,
  GiPaintBrush,
  GiDeadlyStrike,
  GiElectric
} from 'react-icons/gi';
import { 
  IoWaterOutline 
} from 'react-icons/io5';

interface ChemicalProduct {
  name: string;
  code?: string;
  description?: string;
  physicalProperties?: {
    appearance: string;
    odor: string;
    boilingPoint: string;
    density: string;
    flashPoint: string;
    solubility: string;
    viscosity: string;
  };
  applications?: {
    title: string;
    description: string;
  }[];
  industriesServed?: string[];
}

interface ChemicalCategory {
  name: string;
  count: number;
  products: ChemicalProduct[];
  IconComponent: React.ComponentType<{ className?: string }>;
}

const chemicalCategories: ChemicalCategory[] = [
  {
    name: 'Basic Petrochemicals & Feedstocks',
    count: 12,
    IconComponent: GiChemicalDrop,
    products: [
      { 
        name: 'Naphtha',
        description: 'A highly volatile, flammable liquid hydrocarbon mixture derived from crude oil refining or natural gas processing.',
        physicalProperties: {
          appearance: 'Clear to pale yellow liquid',
          odor: 'Strong gasoline-like smell',
          boilingPoint: '30-200°C (86-392°F), varies by type',
          density: '~0.65-0.75 g/cm³',
          flashPoint: 'Typically < 30°C (86°F), making it highly flammable',
          solubility: 'Insoluble in water, soluble in organic solvents',
          viscosity: 'Low'
        },
        applications: [
          { title: 'Petrochemical Feedstock', description: 'Used as a feedstock for the production of ethylene, propylene, and other olefins' },
          { title: 'Fuel Blending', description: 'A key ingredient in blending gasoline to enhance octane levels' },
          { title: 'Solvent Applications', description: 'Used as a solvent in paints, coatings, adhesives, and cleaning agents' },
          { title: 'Aromatics Production', description: 'Serves as a feedstock for producing benzene, toluene, and xylene (BTX)' },
          { title: 'Industrial Processing', description: 'Acts as a processing solvent in industries such as rubber, textiles, and agrochemicals' },
          { title: 'Energy and Heating', description: 'Used as a fuel in certain industrial heating systems and turbines' }
        ],
        industriesServed: ['Petrochemicals', 'Fuel and Energy', 'Paints and Coatings', 'Adhesives and Sealants', 'Agrochemicals', 'Textiles and Rubber']
      },
      { 
        name: 'Propylene',
        description: 'A colorless gas hydrocarbon with a faint petroleum-like odor, primarily used as a building block for plastics and chemicals.',
        physicalProperties: {
          appearance: 'Colorless gas',
          odor: 'Faint petroleum-like odor',
          boilingPoint: '-47.6°C (-53.7°F)',
          density: '0.51 g/cm³ (liquid at -47°C)',
          flashPoint: '-108°C (-162°F)',
          solubility: 'Slightly soluble in water, soluble in organic solvents',
          viscosity: 'Very low'
        },
        applications: [
          { title: 'Polypropylene Production', description: 'Primary raw material for manufacturing polypropylene plastics' },
          { title: 'Chemical Intermediates', description: 'Used to produce propylene oxide, isopropanol, and other chemicals' },
          { title: 'Fuel Applications', description: 'Used in fuel blending and as a component in liquefied petroleum gas (LPG)' },
          { title: 'Synthetic Rubber', description: 'Raw material for producing synthetic rubber and elastomers' }
        ],
        industriesServed: ['Plastics and Polymers', 'Chemical Manufacturing', 'Automotive', 'Packaging', 'Textiles', 'Construction']
      },
      { name: 'Isobutylene (IB)' },
      { 
        name: 'Benzene',
        description: 'A colorless, highly flammable liquid with a sweet odor, serving as a fundamental building block in petrochemical industry.',
        physicalProperties: {
          appearance: 'Colorless liquid',
          odor: 'Sweet aromatic odor',
          boilingPoint: '80.1°C (176.2°F)',
          density: '0.8765 g/cm³',
          flashPoint: '-11°C (12°F)',
          solubility: 'Slightly soluble in water, miscible with organic solvents',
          viscosity: 'Low'
        },
        applications: [
          { title: 'Styrene Production', description: 'Major feedstock for producing styrene monomer used in polystyrene' },
          { title: 'Phenol Manufacturing', description: 'Key raw material for phenol production via cumene process' },
          { title: 'Cyclohexane Production', description: 'Used to produce cyclohexane for nylon manufacturing' },
          { title: 'Chemical Solvents', description: 'Industrial solvent for various chemical processes' }
        ],
        industriesServed: ['Petrochemicals', 'Plastics', 'Synthetic Fibers', 'Pharmaceuticals', 'Paints and Coatings', 'Rubber']
      },
      { name: 'Toluene' },
      { name: 'Paraxylene (PX)' },
      { name: 'Ortho Xylene (OX)' },
      { name: 'Cyclohexane' },
      { name: 'Isohexane SBP' },
      { name: 'C-6 Aliphatic Hydrocarbons' },
      { name: 'Methanol' },
      { name: 'Sulphur' }
    ]
  },
  {
    name: 'Fuel Additives (Oxygenates)',
    count: 3,
    IconComponent: IoWaterOutline,
    products: [
      { name: 'MTBE (Methyl Tert-Butyl Ether)' },
      { name: 'ETBE (Ethyl Tert-Butyl Ether)' },
      { name: 'Bio-ETBE' }
    ]
  },
  {
    name: 'Polymers & Intermediates',
    count: 5,
    IconComponent: GiMolecule,
    products: [
      { name: 'Polypropylene (PP)' },
      { name: 'Polyethylene (PE)' },
      { name: 'Styrene Monomer' },
      { name: 'Vinyl Chloride Monomer' },
      { name: 'Ethylene Glycol' }
    ]
  },
  {
    name: 'Phosphorus-Based Chemicals',
    count: 4,
    IconComponent: GiAtomicSlashes,
    products: [
      { name: 'Phosphoric Acid' },
      { name: 'Phosphorus Pentoxide' },
      { name: 'Triphenyl Phosphite' },
      { name: 'Phosphorus Trichloride' }
    ]
  },
  {
    name: 'Sulfur-Based Chemicals',
    count: 3,
    IconComponent: GiAcid,
    products: [
      { name: 'Sulfuric Acid' },
      { name: 'Sodium Bisulfite' },
      { name: 'Sulfur Dioxide' }
    ]
  },
  {
    name: 'Amines & Amine Derivatives',
    count: 6,
    IconComponent: GiDna2,
    products: [
      { name: 'Diethylamine' },
      { name: 'Triethylamine' },
      { name: 'Monoethanolamine' },
      { name: 'Diethanolamine' },
      { name: 'Triethanolamine' },
      { name: 'N-Methylpyrrolidone' }
    ]
  },
  {
    name: 'Phenols & Derivatives',
    count: 7,
    IconComponent: GiCrystalBars,
    products: [
      { name: 'Phenol' },
      { name: 'Bisphenol A' },
      { name: 'Cresol' },
      { name: 'Resorcinol' },
      { name: 'Hydroquinone' },
      { name: 'Catechol' },
      { name: 'Nonylphenol' }
    ]
  },
  {
    name: 'Aromatic Hydrocarbons & Derivatives',
    count: 4,
    IconComponent: GiPlantRoots,
    products: [
      { name: 'Toluene Diisocyanate' },
      { name: 'Methylene Diphenyl Diisocyanate' },
      { name: 'Aniline' },
      { name: 'Nitrobenzene' }
    ]
  },
  {
    name: 'Acrylic Monomers & Derivatives',
    count: 3,
    IconComponent: GiPaintBrush,
    products: [
      { name: 'Acrylic Acid' },
      { name: 'Methyl Methacrylate' },
      { name: 'Butyl Acrylate' }
    ]
  },
  {
    name: 'Cyanide-Based Chemicals',
    count: 1,
    IconComponent: GiDeadlyStrike,
    products: [
      { name: 'Sodium Cyanide' }
    ]
  },
  {
    name: 'Organometallic-Based Chemicals',
    count: 4,
    IconComponent: GiElectric,
    products: [
      { name: 'Tetraethyl Lead' },
      { name: 'Tributyltin Oxide' },
      { name: 'Organotin Compounds' },
      { name: 'Organozinc Compounds' }
    ]
  }
];

export default function ChemicalFamilySection() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<ChemicalCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to create URL-friendly slugs from chemical names
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = 'none';
      }
      const bottomNav = document.querySelector('[data-navbar="bottom"]');
      if (bottomNav) {
        (bottomNav as HTMLElement).style.display = 'none';
      }
    } else {
      document.body.style.overflow = 'unset';
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = '';
      }
      const bottomNav = document.querySelector('[data-navbar="bottom"]');
      if (bottomNav) {
        (bottomNav as HTMLElement).style.display = '';
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = '';
      }
      const bottomNav = document.querySelector('[data-navbar="bottom"]');
      if (bottomNav) {
        (bottomNav as HTMLElement).style.display = '';
      }
    };
  }, [isModalOpen]);

  const openModal = (category: ChemicalCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const ChemicalModal = ({ category, isOpen, onClose }: { category: ChemicalCategory | null; isOpen: boolean; onClose: () => void }) => {
    if (!isOpen || !category) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center z-[9999] p-2 pt-6">
        <div className="bg-white/95 backdrop-blur-xl border border-blue-300/30 rounded-3xl max-w-7xl w-full h-auto overflow-visible shadow-2xl shadow-blue-900/30">
          <div className="p-8 border-b border-white/20 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
                <category.IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  {category.name}
                </h2>
                <p className="text-blue-600 mt-1">{category.count} products available</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 cursor-pointer"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {category.products.map((product, index) => (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => {
                    if (product.description) {
                      const slug = createSlug(product.name);
                      router.push(`/chemical/${slug}`);
                    }
                  }}
                >
                  <div className="bg-blue-500/15 backdrop-blur-md border border-blue-300/40 rounded-2xl p-4 hover:bg-blue-500/20 hover:border-blue-300/50 hover:shadow-lg transition-all duration-300 shadow-sm hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                        <GiTestTubes className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-blue-900 leading-tight" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (product.description) {
                          const slug = createSlug(product.name);
                          router.push(`/chemical/${slug}`);
                        }
                      }}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-300"
                      disabled={!product.description}
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Request Detailed Information
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-24 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
              <GiTestTubes className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              Chemical Family
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
            Explore our comprehensive range of chemical products and
            <br />
            solutions designed to innovate and scale with confidence.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chemicalCategories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => openModal(category)}
              className="group cursor-pointer h-full"
            >
              <div className="relative overflow-hidden bg-white/95 backdrop-blur-xl border border-blue-300/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:bg-white/100 h-full flex flex-col">
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 to-blue-700/3 backdrop-blur-lg"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <category.IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-blue-400/20 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:bg-blue-400/30 transition-colors duration-300 border border-blue-300/40">
                      <svg className="w-4 h-4 text-blue-700 group-hover:text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300 flex-1" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {category.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium text-blue-700 bg-blue-100/60 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200/50">
                      {category.count} products
                    </span>
                    <span className="text-xs text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      View Products →
                    </span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ChemicalModal 
        category={selectedCategory}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

    </>
  );
} 