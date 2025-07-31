'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
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
  id: string;
  count: number;
  products: ChemicalProduct[];
  IconComponent: React.ComponentType<{ className?: string }>;
}

const chemicalCategories: ChemicalCategory[] = [
  {
    id: 'basicPetrochemicals',
    count: 1, // updated count after removing chemical intermediates
    IconComponent: GiChemicalDrop,
    products: [
      { name: 'C-6 Aliphatic Hydrocarbons' }
    ]
  },
  {
    id: 'fuelAdditives',
    count: 1, // updated count after removing ETBE
    IconComponent: IoWaterOutline,
    products: [
      { name: 'Bio-ETBE' }
    ]
  },
  {
    id: 'additives',
    count: 2, // updated count after removing cyanuric chloride
    IconComponent: GiTestTubes,
    products: [
      { name: 'Zinc Dialkyl Dithiophosphate (ZDDP-MD)', code: 'zddp-md' },
      { name: 'Zinc Dialkyl Dithiophosphate (ZDDP-IM)', code: 'zddp-im' }
    ]
  },
  {
    id: 'polymerIntermediates',
    count: 3, // updated count after removing polymers
    IconComponent: GiMolecule,
    products: [
      { name: 'Styrene Monomer' },
      { name: 'Vinyl Chloride Monomer' },
      { name: 'Ethylene Glycol' }
    ]
  },
  {
    id: 'phosphorus',
    count: 6, // update count to 6
    IconComponent: GiAtomicSlashes,
    products: [
      { name: 'Phosphoric Acid' },
      { name: 'Phosphorus Pentoxide' },
      { name: 'Triphenyl Phosphite (TPPi)', code: 'triphenyl-phosphite-tppi' },
      { name: 'Phosphorus Trichloride' },
      { name: 'Red Phosphorus', code: 'red-phosphorus' },
      { name: 'Trimethyl Phosphite (TMPi)', code: 'trimethyl-phosphite-tmpi' },
      { name: 'Triethyl Phosphite (TEPi)', code: 'triethyl-phosphite-tepi' },
      { name: 'Diethyl Phosphite (DEPi)', code: 'diethyl-phosphite-depi' },
      { name: 'Dimethyl Phosphite (DMPi)', code: 'dimethyl-phosphite-dmpi' },
      { name: 'Dimethyl Methylphosphonate (DMMP)', code: 'dimethyl-methylphosphonate-dmmp' },
      { name: 'Sulfur', code: 'sulfur' }
    ]
  },
  {
    id: 'sulfur',
    count: 5, // corrected count
    IconComponent: GiAcid,
    products: [
      { name: 'Sulfuric Acid' },
      { name: 'Sodium Bisulfite' },
      { name: 'Sulfur Dioxide' },
      { name: 'Carbon Disulfide (CS₂)', code: 'carbon-disulfide-cs2' },
      { name: 'Sodium Sulfide (Na₂S)', code: 'sodium-sulfide-na2s' }
    ]
  },
  {
    id: 'amines',
    count: 11, // updated count after removing tert-butylamine
    IconComponent: GiDna2,
    products: [
      { name: 'Diethylamine' },
      { name: 'Triethylamine' },
      { name: 'Monoethanolamine' },
      { name: 'Diethanolamine' },
      { name: 'Diethylene Triamine (DETA)', code: 'diethylene-triamine' },
      { name: 'Aminoethyl Ethanolamine (AEEA)', code: 'aminoethyl-ethanolamine' },
      { name: 'Aminoethylpiperazine (AEP)', code: 'aminoethylpiperazine' },
      { name: 'Triethanolamine' },
      { name: 'N-Methylpyrrolidone' },
      { name: 'Ethylenediamine (EDA)', code: 'ethylenediamine' },
      { name: 'Piperazine', code: 'piperazine' }
    ]
  },
  {
    id: 'phenols',
    count: 8, // updated count after removing PTBBA
    IconComponent: GiCrystalBars,
    products: [
      { name: 'Phenol' },
      { name: 'Bisphenol A' },
      { name: 'Cresol' },
      { name: 'Resorcinol' },
      { name: 'Hydroquinone' },
      { name: 'Catechol' },
      { name: 'Nonylphenol' },
      { name: 'Para-Tertiary Butyl Phenol (PTBP)', code: 'para-tertiary-butyl-phenol-ptbp' },
      { name: '2,4-Di-Tert-Butyl Phenol (2,4-DTBP)', code: '2-4-di-tert-butyl-phenol-2-4-dtbp' },
      { name: '2,6-Di-Tert-Butyl Phenol (2,6-DTBP)', code: '2-6-di-tert-butyl-phenol-2-6-dtbp' },
      { name: 'Di-Sec-Butyl Phenol (2,6-DSBP)', code: '2-6-di-sec-butyl-phenol-2-6-dsbp' },
      { name: 'Ortho-Tert-Butyl Phenol (OTBP)', code: 'ortho-tert-butyl-phenol-otbp' },
      { name: 'Ortho-Sec-Butyl Phenol (OSBP)', code: 'osbp' }
    ]
  },
  {
    id: 'aromatics',
    count: 4, // updated count after removing chemical intermediates
    IconComponent: GiPlantRoots,
    products: [
      { name: 'Toluene Diisocyanate' },
      { name: 'Methylene Diphenyl Diisocyanate' },
      { name: 'Aniline' },
      { name: 'Nitrobenzene' }
    ]
  },
  {
    id: 'acrylics',
    count: 3, // updated count after removing acrylamide and sulphonic acid-based chemicals
    IconComponent: GiPaintBrush,
    products: [
      { name: 'Acrylic Acid' },
      { name: 'Methyl Methacrylate' },
      { name: 'Butyl Acrylate' }
    ]
  },
  {
    id: 'cyanide',
    count: 2,
    IconComponent: GiDeadlyStrike,
    products: [
      { name: 'Sodium Cyanide (NaCN)', code: 'sodium-cyanide' }
    ]
  },
  {
    id: 'organometallic',
    count: 4,
    IconComponent: GiElectric,
    products: [
      { name: 'Tetraethyl Lead' },
      { name: 'Tributyltin Oxide' },
      { name: 'Organotin Compounds' },
      { name: 'Organozinc Compounds' }
    ]
  },
  {
    id: 'inorganics',
    count: 0, // updated count after removing potassium bicarbonate
    IconComponent: GiAcid,
    products: []
  },
  {
    id: 'alcohols',
    count: 0, // updated count after removing methanol
    IconComponent: GiAcid,
    products: []
  },
  {
    id: 'solvents',
    count: 0, // updated count after removing isohexane
    IconComponent: GiAcid,
    products: []
  },
  {
    id: 'benzeneBased',
    count: 7,
    IconComponent: GiPlantRoots,
    products: [
      { name: 'Iso Butyl Benzene (IBB)', code: 'isobutyl-benzene' },
      { name: 'Normal Butyl Benzene (NBB)', code: 'normal-butyl-benzene' },
      { name: 'Secondary Butyl Benzene (SBB)', code: 'secondary-butyl-benzene' },
      { name: 'Tertiary Amyl Benzene (TAB)', code: 'tertiary-amyl-benzene' },
      { name: '3-Phenylpentane (3-PP)', code: '3-phenylpentane' },
      { name: 'C10 Aromatic Solvent / Aromatic 150', code: 'c10-aromatic-solvent' },
      { name: '4-Butylaniline', code: '4-butylaniline' }
    ]
  },
  {
    id: 'acrylamideSulphonic',
    count: 4,
    IconComponent: GiMolecule,
    products: [
      { name: '2-Acrylamido-2-Methylpropane Sulphonic Acid (ATBS)', code: 'atbs' },
      { name: 'N-Tertiary Butyl Acrylamide (TBA)', code: 'tba' },
      { name: 'Sodium Salt of 2-Acrylamido-2-Methylpropane Sulphonic Acid (NaATBS)', code: 'naamps' },
      { name: 'N-Tertiary Octyl Acrylamide (TOA)', code: 'toa' }
    ]
  },
  {
    id: 'aliphaticBenzyl',
    count: 7, // updated count after removing MTBE
    IconComponent: GiChemicalDrop,
    products: [
      { name: 'Isohexane SBP', code: 'isohexane' },
      { name: 'Methyl 4-Tertiary Butyl Benzoate (PTBMB)', code: 'ptbmb' },
      { name: 'Para Tertiary Butyl Benzoic Acid (PTBBA)', code: 'ptbba' },
      { name: 'Isobutylene (IB)', code: 'isobutylene' },
      { name: 'Methanol', code: 'methanol' },
      { name: 'Tertiary-Butylamine', code: 'tert-butylamine' },
      { name: 'Mixed Hexene (C-6 Aliphatic Hydrocarbons)', code: 'mixed-hexenes' }
    ]
  },
  {
    id: 'potassiumBased',
    count: 1,
    IconComponent: GiAcid,
    products: [
      { name: 'Potassium Bicarbonate (KHCO3)', code: 'potassium-bicarbonate' }
    ]
  },
  {
    id: 'antioxidants',
    count: 8,
    IconComponent: GiMolecule,
    products: [
      { name: 'Antioxidant 1010', code: 'antioxidant-1010' },
      { name: 'Antioxidant 1076', code: 'antioxidant-1076' },
      { name: 'Antioxidant 168', code: 'antioxidant-168' },
      { name: 'Antioxidant 1098', code: 'antioxidant-1098' },
      { name: 'Antioxidant L135', code: 'antioxidant-l135' },
      { name: 'Antioxidant 1135', code: 'antioxidant-1135' },
      { name: 'Antioxidant 1315', code: 'antioxidant-1315' },
      { name: 'Antioxidant Blend (1:2 of CAS 31570-04-4 and 6683-19-8)', code: 'antioxidant-blend-168-1010' }
    ]
  },
  {
    id: 'petrochemicalProducts',
    count: 5,
    IconComponent: GiChemicalDrop,
    products: [
      { name: 'Propylene', code: 'propylene-propene' },
      { name: 'Naphtha', code: 'naphtha' },
      { name: 'Sulphur', code: 'sulfur' },
      { name: 'Methyl Tertiary Butyl Ether (MTBE)', code: 'methyl-tertiary-butyl-ether-mtbe' },
      { name: 'Ethyl Tertiary Butyl Ether (ETBE)', code: 'etbe' }
    ]
  },
  {
    id: 'polyesterProducts',
    count: 3,
    IconComponent: GiMolecule,
    products: [
      { name: 'Polyester Staple Fiber (PSF)', code: 'polyester-staple-fiber-psf' },
      { name: 'Polyester Filament Yarn (PFY)', code: 'polyester-filament-yarn-pfy' },
      { name: 'Polyethylene Terephthalate (PET)', code: 'polyethylene-terephthalate-pet' }
    ]
  },
  {
    id: 'chemicalIntermediates',
    count: 8, // updated count after adding cyanuric chloride
    IconComponent: GiMolecule,
    products: [
      { name: 'Purified Terephthalic Acid (PTA)', code: 'pta' },
      { name: 'Mono Ethylene Glycol (MEG)', code: 'meg' },
      { name: 'Paraxylene (PX)', code: 'px' },
      { name: 'Ortho Xylene (OX)', code: 'ox' },
      { name: 'Benzene', code: 'benzene' },
      { name: 'Toluene', code: 'toluene' },
      { name: 'Cyclohexane', code: 'cyclohexane' },
      { name: 'Cyanuric Chloride', code: 'cyanuric-chloride' }
    ]
  },
  {
    id: 'syntheticRubber',
    count: 2,
    IconComponent: GiMolecule,
    products: [
      { name: 'Styrene Butadiene Rubber (SBR)', code: 'styrene-butadiene-rubber-sbr' },
      { name: 'Polybutadiene Rubber (PBR)', code: 'polybutadiene-rubber-pbr' }
    ]
  },
  {
    id: 'polymers',
    count: 3,
    IconComponent: GiMolecule,
    products: [
      { name: 'Polyethylene (PE)', code: 'polyethylene-pe' },
      { name: 'Polypropylene (PP)', code: 'polypropylene-pp' },
      { name: 'Polyvinyl Chloride (PVC)', code: 'polyvinyl-chloride-pvc' }
    ]
  }
];

export default function ChemicalFamilySection() {
  const router = useRouter();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<ChemicalCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <>
        <style jsx global>{`
          .chemical-modal-scroll {
            scrollbar-width: none; /* Firefox */
          }
          .chemical-modal-scroll::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center z-[9999] p-2 pt-6">
          <div className="chemical-modal-scroll bg-white/95 backdrop-blur-xl border border-blue-300/30 rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-900/30">
            <div className="p-8 border-b border-white/20 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <category.IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                    {t(`chemicalFamily.categories.${category.id}.name`)}
                  </h2>
                  <p className="text-blue-600 mt-1">
                    {t('chemicalFamily.productsAvailable', { count: category.products.length })}
                  </p>
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
                      if (product.code) {
                        router.push(`/chemical/${product.code}`);
                      }
                    }}
                  >
                    <div className="bg-blue-500/15 backdrop-blur-md border border-blue-300/40 rounded-2xl p-4 hover:bg-blue-500/20 hover:border-blue-300/50 hover:shadow-lg transition-all duration-300 shadow-sm hover:-translate-y-1 min-h-[140px] h-[140px] max-h-[120px] flex flex-col justify-between">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                          <GiTestTubes className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-blue-900 leading-tight" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                            {t(`chemicalNames.${product.name}`, product.name)}
                          </h3>
                        </div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (product.code) {
                            router.push(`/chemical/${product.code}`);
                          }
                        }}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-300"
                        disabled={!product.code}
                      >
                        {t('chemicalFamily.viewDetails')}
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
                  {t('chemicalFamily.requestInfo')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // Filter out products without a code and remove empty categories
  const filteredChemicalCategories: ChemicalCategory[] = chemicalCategories
    .map(category => ({
      ...category,
      products: category.products.filter(product => !!product.code),
    }))
    .filter(category => category.products.length > 0);

  return (
    <>
      <div id="chemical-family-section" className="mt-24 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
              <GiTestTubes className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              {t('chemicalFamily.title')}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed" style={{ fontFamily: 'FusionNeue, sans-serif' }}>
            {t('chemicalFamily.subtitle')}
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredChemicalCategories.map((category, index) => (
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
                    {t(`chemicalFamily.categories.${category.id}.name`)}
                  </h3>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-medium text-blue-700 bg-blue-100/60 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-200/50">
                      {t('chemicalFamily.productsAvailable', { count: category.products.length })}
                    </span>
                    <span className="text-xs text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      {t('chemicalFamily.viewProducts')} →
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