'use client';

import React, { useState, useEffect } from 'react';

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
}

const chemicalCategories: ChemicalCategory[] = [
  {
    name: 'Basic Petrochemicals & Feedstocks',
    count: 12,
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
    products: [
      { name: 'MTBE (Methyl Tert-Butyl Ether)' },
      { name: 'ETBE (Ethyl Tert-Butyl Ether)' },
      { name: 'Bio-ETBE' }
    ]
  },
  {
    name: 'Polymers & Intermediates',
    count: 5,
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
    products: [
      { name: 'Sulfuric Acid' },
      { name: 'Sodium Bisulfite' },
      { name: 'Sulfur Dioxide' }
    ]
  },
  {
    name: 'Amines & Amine Derivatives',
    count: 6,
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
    products: [
      { name: 'Acrylic Acid' },
      { name: 'Methyl Methacrylate' },
      { name: 'Butyl Acrylate' }
    ]
  },
  {
    name: 'Cyanide-Based Chemicals',
    count: 1,
    products: [
      { name: 'Sodium Cyanide' }
    ]
  },
  {
    name: 'Organometallic-Based Chemicals',
    count: 4,
    products: [
      { name: 'Tetraethyl Lead' },
      { name: 'Tributyltin Oxide' },
      { name: 'Organotin Compounds' },
      { name: 'Organozinc Compounds' }
    ]
  }
];

export default function ChemicalFamilySection() {
  const [selectedCategory, setSelectedCategory] = useState<ChemicalCategory | null>(null);
  const [selectedChemical, setSelectedChemical] = useState<ChemicalProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChemicalDetailOpen, setIsChemicalDetailOpen] = useState(false);

  // Hide navbar and prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isChemicalDetailOpen) {
      // Hide navbar and prevent body scroll
      document.body.style.overflow = 'hidden';
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = 'none';
      }
      // Hide any fixed bottom navigation
      const bottomNav = document.querySelector('[data-navbar="bottom"]');
      if (bottomNav) {
        (bottomNav as HTMLElement).style.display = 'none';
      }
    } else {
      // Restore navbar and allow body scroll
      document.body.style.overflow = 'unset';
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.display = '';
      }
      // Restore any fixed bottom navigation
      const bottomNav = document.querySelector('[data-navbar="bottom"]');
      if (bottomNav) {
        (bottomNav as HTMLElement).style.display = '';
      }
    }

    // Cleanup on component unmount
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
  }, [isModalOpen, isChemicalDetailOpen]);

  const openModal = (category: ChemicalCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  const openChemicalDetail = (chemical: ChemicalProduct) => {
    setSelectedChemical(chemical);
    setIsChemicalDetailOpen(true);
    setIsModalOpen(false);
  };

  const closeChemicalDetail = () => {
    setIsChemicalDetailOpen(false);
    setSelectedChemical(null);
  };

  const backToCategory = () => {
    setIsChemicalDetailOpen(false);
    setIsModalOpen(true);
  };

  const ChemicalModal = ({ category, isOpen, onClose }: { category: ChemicalCategory | null; isOpen: boolean; onClose: () => void }) => {
    if (!isOpen || !category) return null;

    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              {category.name}
            </h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.products.map((product, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-[#6164F6] rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,3L8,12C8,15.31 9.79,18 12,18C14.21,18 16,15.31 16,12L12,3Z"/>
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                      {product.name}
                    </h3>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (product.description) {
                        openChemicalDetail(product);
                      }
                    }}
                    className="text-xs text-gray-600 hover:text-[#6164F6] transition-colors flex items-center gap-1"
                    disabled={!product.description}
                  >
                    View Details
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="w-full bg-[#131518] text-white py-3 px-6 rounded-xl hover:bg-[#323B4A] transition-colors font-medium">
                Request Detailed Information
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ChemicalDetailModal = ({ chemical, isOpen, onClose, onBack }: { 
    chemical: ChemicalProduct | null; 
    isOpen: boolean; 
    onClose: () => void;
    onBack: () => void;
  }) => {
    if (!isOpen || !chemical || !chemical.description) return null;

    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4">
        <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                {chemical.name}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-6">
            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {chemical.description}
              </p>
            </div>

            {/* Physical Properties */}
            {chemical.physicalProperties && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  Physical Properties
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Appearance</h4>
                    <p className="text-gray-600 text-sm">{chemical.physicalProperties.appearance}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Odor</h4>
                    <p className="text-gray-600 text-sm">{chemical.physicalProperties.odor}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Boiling Point</h4>
                    <p className="text-gray-600 text-sm">{chemical.physicalProperties.boilingPoint}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Density</h4>
                    <p className="text-gray-600 text-sm">{chemical.physicalProperties.density}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Flash Point</h4>
                    <p className="text-gray-600 text-sm">{chemical.physicalProperties.flashPoint}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Solubility</h4>
                    <p className="text-gray-600 text-sm">{chemical.physicalProperties.solubility}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Viscosity</h4>
                    <p className="text-gray-600 text-sm">{chemical.physicalProperties.viscosity}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Applications */}
            {chemical.applications && chemical.applications.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  Applications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {chemical.applications.map((app, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-900 mb-2">{app.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Industries Served */}
            {chemical.industriesServed && chemical.industriesServed.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  Industries Served
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {chemical.industriesServed.map((industry, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-sm font-medium text-gray-800">{industry}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Request Information Button */}
            <div className="mt-8">
              <button className="w-full bg-[#131518] text-white py-3 px-6 rounded-xl hover:bg-[#323B4A] transition-colors font-medium">
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
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-[#6164F6] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 2V7H8.5C7.67 7 7 7.67 7 8.5V9L2.4 18.8C2.1 19.4 2.5 20 3.2 20H20.8C21.5 20 21.9 19.4 21.6 18.8L17 9V8.5C17 7.67 16.33 7 15.5 7H15V2H9M11 4H13V7H11V4M9 9H15V9.5L19.2 18H4.8L9 9.5V9Z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>Chemical Family</h2>
        </div>
        <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
          Explore our comprehensive range of chemical products and solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chemicalCategories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => openModal(category)}
              className="bg-[#131518] rounded-xl p-6 text-white hover:bg-[#5056E5] transition-colors duration-200 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-3 leading-tight" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {category.name}
                  </h3>
                  <div className="text-xs text-gray-300">
                    View Products <span className="ml-1">{category.count}</span>
                  </div>
                </div>
                <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,3L8,12C8,15.31 9.79,18 12,18C14.21,18 16,15.31 16,12L12,3Z"/>
                  </svg>
                </div>
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
      
      <ChemicalDetailModal 
        chemical={selectedChemical}
        isOpen={isChemicalDetailOpen}
        onClose={closeChemicalDetail}
        onBack={backToCategory}
      />
    </>
  );
} 