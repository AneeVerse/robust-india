import Image from 'next/image';
import BookACall from '@/components/BookCallSection';
import FooterSection from '@/components/FooterSection';
import ChemicalFamilySection from '@/components/ChemicalFamilySection';
import ServiceSlider from '@/components/ServiceSlider';

export default function ProductChemicalPage() {
  const service = {
    slug: 'chemical-products',
    title: 'Chemical Products',
    description: 'Our Chemical Products division sources a comprehensive range of high-purity specialty and bulk chemicals from leading global producers. From precise formulation and rigorous quality assurance testing to custom packaging and compliant distribution, we manage every aspect of the supply chain to deliver tailored solutions that meet the exacting specifications of clients across industries. Our expertise in regulatory compliance and logistical coordination ensures safe, reliable delivery, helping businesses innovate and scale with confidence.',
    image: '/images/product2.jpg',
    fullImage: '/images/project/slug1/chemical-product-1.png',
    smallImages: [
      '/images/product.jpg',
      '/images/product3.jpg',
    ],
    tags: ['Chemical Products', 'Global Distribution', 'Packaging', 'Brand Identity'],
  };

  return (
    <main className="min-h-screen bg-white p-4 sm:p-6 md:p-5">
      <div className="w-full">
        <Image
          src={service.image}
          alt={service.title}
          width={1920}
          height={1080}
          className="w-full h-[95vh] object-cover rounded-xl"
        />
      </div>
      <div className="w-full px-4 sm:px-6 md:px-5 py-16">
        <h1 className="text-5xl font-normal text-gray-900 mb-4" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{service.title}</h1>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'NoiGrotesk, sans-serif' }}>{service.description}</p>
        
        {/* Chemical Family section */}
        <ChemicalFamilySection />
      </div>
      {/* Stats section */}
      <div className="w-full px-4 sm:px-6 md:px-5 mb-16">
        <hr className="border-gray-300 mb-8" />
        <div className="flex items-center flex-wrap gap-8">
          <div>
            <p className="text-lg text-gray-900">Headquarters</p>
            <p className="text-base md:text-md font-medium text-gray-800">Mumbai</p>
          </div>
          <div>
            <svg className="inline-block h-10 w-8 text-gray-400 transform rotate-90" fill="none" viewBox="0 0 27 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6.10696C4.89099 6.10696 10.4306 6.79673 13.9209 4.58335C17.2052 2.50058 13.7605 -0.43632 11.8165 1.80381C11.0323 2.70752 10.4356 4.55498 10.9011 5.72606C13.5121 12.295 22.6498 7.43559 26 4.48555" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-lg text-gray-900">Monthly Visitors</p>
            <p className="text-base md:text-md font-medium text-[#6164f6]">250K+</p>
          </div>
          <div>
            <p className="text-lg text-gray-900">Used by</p>
            <p className="text-base md:text-md font-medium text-[#6164f6]">100+ organizations</p>
          </div>
        </div>
      </div>
      
      <div className="w-full mb-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {service.smallImages.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`${service.title} detail ${idx + 1}`}
              width={800}
              height={500}
              className="w-full h-[450px] sm:h-[500px] md:h-[550px] object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
      
      {/* Supporting Diverse Industrial Sectors Section */}
      <div className="w-full overflow-x-hidden">
        <ServiceSlider />
      </div>

      <BookACall />
   
      <div className="mt-0 mb-24 sm:mb-2">
        <div className="">
          <FooterSection />
        </div>
      </div>
    </main>
  );
} 