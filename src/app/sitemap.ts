import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://robustindia.com'
  const currentDate = new Date()

  // All chemical product slugs from generateStaticParams
  const chemicalSlugs = [
    'naphtha',
    'propylene-propene', 
    'benzene',
    'red-phosphorus',
    'trimethyl-phosphite-tmpi',
    'triphenyl-phosphite-tppi',
    'triethyl-phosphite-tepi',
    'diethyl-phosphite-depi',
    'dimethyl-phosphite-dmpi',
    'dimethyl-methylphosphonate-dmmp',
    'carbon-disulfide-cs2',
    'sodium-sulfide-na2s',
    'methyl-tertiary-butyl-ether-mtbe',
    'sulfur',
    'etbe',
    'pta',
    'meg',
    'px',
    'ox',
    'toluene',
    'cyclohexane',
    'antioxidant-1010',
    'antioxidant-1076',
    'antioxidant-168',
    'antioxidant-1098',
    'antioxidant-l135',
    'antioxidant-1135',
    'antioxidant-1315',
    'antioxidant-blend-168-1010',
    'potassium-bicarbonate',
    'mixed-hexenes',
    'tert-butylamine',
    'methanol',
    'isobutylene',
    'ptbba',
    'ptbmb',
    'isohexane',
    'toa',
    'tba',
    'naamps',
    'atbs',
    '4-butylaniline',
    'c10-aromatic-solvent',
    '3-phenylpentane',
    'tertiary-amyl-benzene',
    'secondary-butyl-benzene',
    'normal-butyl-benzene',
    'isobutyl-benzene',
    'zddp-md',
    'zddp-im',
    'phosphorus-pentoxide',
    'hp-mtbe',
    'sodium-cyanide',
    'cyanuric-chloride',
    'ethylenediamine',
    'piperazine',
    'ortho-tert-butyl-phenol-otbp',
    'osbp',
    'osbp-detailed',
    '2-6-di-sec-butyl-phenol-2-6-dsbp',
    'polybutadiene-rubber-pbr',
    'styrene-butadiene-rubber-sbr',
    'polyvinyl-chloride-pvc',
    'polyethylene-pe',
    'polypropylene-pp',
    'polyester-staple-fiber-psf',
    'polyester-filament-yarn-pfy',
    'polyethylene-terephthalate-pet'
  ];

  // Service slugs
  const serviceSlugs = [
    'integrated-3pl-ftwz',
    'end-to-end-solutions'
  ];

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/product/chemical`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/thank-you`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.2,
    },

    // Service detail pages
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Chemical product pages
    ...chemicalSlugs.map((slug) => ({
      url: `${baseUrl}/chemical/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
