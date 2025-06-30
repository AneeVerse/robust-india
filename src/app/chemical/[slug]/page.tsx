import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';
import BookCallSection from '@/components/BookCallSection';

import { TbAtom, TbFlask } from 'react-icons/tb';
import { GiMolecule } from 'react-icons/gi';

interface ChemicalProduct {
  name: string;
  slug: string;
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

const chemicalProducts: ChemicalProduct[] = [
  { 
    name: 'Naphtha',
    slug: 'naphtha',
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
    slug: 'propylene',
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
  { 
    name: 'Benzene',
    slug: 'benzene',
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
  }
];

export async function generateStaticParams() {
  return chemicalProducts.map((chemical) => ({ slug: chemical.slug }));
}

export default async function ChemicalDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chemical = chemicalProducts.find((c) => c.slug === slug);
  
  if (!chemical || !chemical.description) {
    return <div className="p-20 text-center">Chemical not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-8 z-10 max-w-full">
        {/* Company logo and name */}
        <Link href="/" className="flex items-center justify-center gap-2 sm:gap-3 mb-4 mt-2">
          <Image src="/images/top-logo.png" alt="Robust India Logo" width={38} height={38} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-wide">ROBUST INDIA</span>
        </Link>
        
        <h1 
          className="font-normal text-gray-900 mb-6 leading-tight mt-8 tracking-tight text-center max-w-5xl"
          style={{ 
            fontFamily: 'NoiGrotesk, sans-serif',
            fontSize: 'clamp(2rem, 6vw, 4rem)'
          }}
        >
          {chemical.description}
        </h1>
        
        <div className="my-8 mt-50">
          <Image
            src="/images/SVG.png"
            alt=""
            width={150}
            height={150}
            className="transform rotate-270 mx-auto"
          />
        </div>
      </section>

      {/* Chemical Details Section */}
      <section className="w-full px-4 sm:px-6 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Chemical Name */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              {chemical.name}
            </h2>
            <p className="text-lg md:text-xl text-gray-600" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
              Chemical Product Details
            </p>
          </div>

          {/* Physical Properties */}
          {chemical.physicalProperties && (
            <div className="mb-16">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                    <TbAtom className="w-6 h-6 text-white" />
                  </div>
                  Physical Properties
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(chemical.physicalProperties).map(([key, value], index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg capitalize" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h4>
                      <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Applications */}
          {chemical.applications && chemical.applications.length > 0 && (
            <div className="mb-16">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                    <TbFlask className="w-6 h-6 text-white" />
                  </div>
                  Applications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {chemical.applications.map((app, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
                      <h4 className="font-semibold text-gray-900 mb-4 text-xl" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {app.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {app.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Industries Served */}
          {chemical.industriesServed && chemical.industriesServed.length > 0 && (
            <div className="mb-16">
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 flex items-center gap-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                  <div className="w-12 h-12 bg-[#6164F6] rounded-2xl flex items-center justify-center">
                    <GiMolecule className="w-6 h-6 text-white" />
                  </div>
                  Industries Served
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {chemical.industriesServed.map((industry, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-all duration-300">
                      <p className="font-medium text-gray-900" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>
                        {industry}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Book Call Section */}
      <BookCallSection />
      
      {/* Footer */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mb-24 sm:mb-8 w-full overflow-x-hidden">
        <FooterSection />
      </div>
    </main>
  );
} 