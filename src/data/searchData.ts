export interface SearchItem {
  id: string;
  titleKey: string; // Translation key for title
  descriptionKey: string; // Translation key for description
  category: 'page' | 'chemical' | 'service' | 'content' | 'category';
  url: string;
  keywordsKey?: string; // Translation key for keywords array
}

// Function to get localized search data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getLocalizedSearchData = (_t: (key: string) => string | string[]): SearchItem[] => [
  // Pages
  {
    id: 'home',
    titleKey: 'search.items.home.title',
    descriptionKey: 'search.items.home.description',
    category: 'page',
    url: '/',
    keywordsKey: 'search.items.home.keywords'
  },
  {
    id: 'about',
    titleKey: 'search.items.about.title',
    descriptionKey: 'search.items.about.description',
    category: 'page',
    url: '/about',
    keywordsKey: 'search.items.about.keywords'
  },
  {
    id: 'contact',
    titleKey: 'search.items.contact.title',
    descriptionKey: 'search.items.contact.description',
    category: 'page',
    url: '/contact',
    keywordsKey: 'search.items.contact.keywords'
  },
  {
    id: 'services',
    titleKey: 'search.items.services.title',
    descriptionKey: 'search.items.services.description',
    category: 'page',
    url: '/services',
    keywordsKey: 'search.items.services.keywords'
  },
  {
    id: 'products',
    titleKey: 'search.items.products.title',
    descriptionKey: 'search.items.products.description',
    category: 'page',
    url: '/product/chemical',
    keywordsKey: 'search.items.products.keywords'
  },

  // Chemical Family Categories - All link to product page with hash anchors
  {
    id: 'basic-petrochemicals',
    titleKey: 'chemicalFamily.categories.basicPetrochemicals.name',
    descriptionKey: 'search.items.basicPetrochemicals.description',
    category: 'category',
    url: '/product/chemical#basicPetrochemicals',
    keywordsKey: 'search.items.basicPetrochemicals.keywords'
  },
  {
    id: 'fuel-additives',
    titleKey: 'chemicalFamily.categories.fuelAdditives.name',
    descriptionKey: 'search.items.fuelAdditives.description',
    category: 'category',
    url: '/product/chemical#fuelAdditives',
    keywordsKey: 'search.items.fuelAdditives.keywords'
  },
  {
    id: 'polymers-intermediates',
    titleKey: 'chemicalFamily.categories.polymers.name',
    descriptionKey: 'search.items.polymersIntermediates.description',
    category: 'category',
    url: '/product/chemical#polymers',
    keywordsKey: 'search.items.polymersIntermediates.keywords'
  },
  {
    id: 'phosphorus-chemicals',
    titleKey: 'chemicalFamily.categories.phosphorus.name',
    descriptionKey: 'search.items.phosphorusChemicals.description',
    category: 'category',
    url: '/product/chemical#phosphorus',
    keywordsKey: 'search.items.phosphorusChemicals.keywords'
  },
  {
    id: 'sulfur-chemicals',
    titleKey: 'chemicalFamily.categories.sulfur.name',
    descriptionKey: 'search.items.sulfurChemicals.description',
    category: 'category',
    url: '/product/chemical#sulfur',
    keywordsKey: 'search.items.sulfurChemicals.keywords'
  },
  {
    id: 'amines-derivatives',
    titleKey: 'chemicalFamily.categories.amines.name',
    descriptionKey: 'search.items.aminesDerivatives.description',
    category: 'category',
    url: '/product/chemical#amines',
    keywordsKey: 'search.items.aminesDerivatives.keywords'
  },
  {
    id: 'phenols-derivatives',
    titleKey: 'chemicalFamily.categories.phenols.name',
    descriptionKey: 'search.items.phenolsDerivatives.description',
    category: 'category',
    url: '/product/chemical#phenols',
    keywordsKey: 'search.items.phenolsDerivatives.keywords'
  },
  {
    id: 'aromatics-derivatives',
    titleKey: 'chemicalFamily.categories.aromatics.name',
    descriptionKey: 'search.items.aromaticsDerivatives.description',
    category: 'category',
    url: '/product/chemical#aromatics',
    keywordsKey: 'search.items.aromaticsDerivatives.keywords'
  },
  {
    id: 'acrylic-monomers',
    titleKey: 'chemicalFamily.categories.acrylics.name',
    descriptionKey: 'search.items.acrylicMonomers.description',
    category: 'category',
    url: '/product/chemical#acrylics',
    keywordsKey: 'search.items.acrylicMonomers.keywords'
  },
  {
    id: 'cyanide-chemicals',
    titleKey: 'chemicalFamily.categories.cyanide.name',
    descriptionKey: 'search.items.cyanideChemicals.description',
    category: 'category',
    url: '/product/chemical#cyanide',
    keywordsKey: 'search.items.cyanideChemicals.keywords'
  },
  {
    id: 'organometallic-chemicals',
    titleKey: 'chemicalFamily.categories.organometallic.name',
    descriptionKey: 'search.items.organometallicChemicals.description',
    category: 'category',
    url: '/product/chemical#organometallic',
    keywordsKey: 'search.items.organometallicChemicals.keywords'
  },
  {
    id: 'additives-lubricants',
    titleKey: 'chemicalFamily.categories.additives.name',
    descriptionKey: 'search.items.additivesLubricants.description',
    category: 'category',
    url: '/product/chemical#additives',
    keywordsKey: 'search.items.additivesLubricants.keywords'
  },
  {
    id: 'inorganic-chemicals',
    titleKey: 'chemicalFamily.categories.inorganics.name',
    descriptionKey: 'search.items.inorganicChemicals.description',
    category: 'category',
    url: '/product/chemical#inorganics',
    keywordsKey: 'search.items.inorganicChemicals.keywords'
  },
  {
    id: 'alcohols-glycols',
    titleKey: 'chemicalFamily.categories.alcohols.name',
    descriptionKey: 'search.items.alcoholsGlycols.description',
    category: 'category',
    url: '/product/chemical#alcohols',
    keywordsKey: 'search.items.alcoholsGlycols.keywords'
  },
  {
    id: 'solvents-hydrocarbons',
    titleKey: 'chemicalFamily.categories.solvents.name',
    descriptionKey: 'search.items.solventsHydrocarbons.description',
    category: 'category',
    url: '/product/chemical#solvents',
    keywordsKey: 'search.items.solventsHydrocarbons.keywords'
  },

  // Chemical Products - Only chemicals that exist in generateStaticParams
  {
    id: 'naphtha',
    titleKey: 'chemicalDetail.products.naphtha.overview.name',
    descriptionKey: 'chemicalDetail.products.naphtha.overview.description',
    category: 'chemical',
    url: '/chemical/naphtha',
    keywordsKey: 'search.items.naphtha.keywords'
  },
  {
    id: 'propylene-propene',
    titleKey: 'chemicalDetail.products.propylene-propene.overview.name',
    descriptionKey: 'chemicalDetail.products.propylene-propene.overview.description',
    category: 'chemical',
    url: '/chemical/propylene-propene',
    keywordsKey: 'search.items.propylene.keywords'
  },
  {
    id: 'benzene',
    titleKey: 'chemicalDetail.products.benzene.overview.name',
    descriptionKey: 'chemicalDetail.products.benzene.overview.description',
    category: 'chemical',
    url: '/chemical/benzene',
    keywordsKey: 'search.items.benzene.keywords'
  },
  {
    id: 'red-phosphorus',
    titleKey: 'chemicalDetail.products.red-phosphorus.overview.name',
    descriptionKey: 'chemicalDetail.products.red-phosphorus.overview.description',
    category: 'chemical',
    url: '/chemical/red-phosphorus',
    keywordsKey: 'search.items.redPhosphorus.keywords'
  },
  {
    id: 'trimethyl-phosphite-tmpi',
    titleKey: 'chemicalDetail.products.trimethyl-phosphite-tmpi.overview.name',
    descriptionKey: 'chemicalDetail.products.trimethyl-phosphite-tmpi.overview.description',
    category: 'chemical',
    url: '/chemical/trimethyl-phosphite-tmpi',
    keywordsKey: 'search.items.trimethylPhosphite.keywords'
  },
  {
    id: 'triphenyl-phosphite-tppi',
    titleKey: 'chemicalDetail.products.triphenyl-phosphite-tppi.overview.name',
    descriptionKey: 'chemicalDetail.products.triphenyl-phosphite-tppi.overview.description',
    category: 'chemical',
    url: '/chemical/triphenyl-phosphite-tppi',
    keywordsKey: 'search.items.triphenylPhosphite.keywords'
  },
  {
    id: 'triethyl-phosphite-tepi',
    titleKey: 'chemicalDetail.products.triethyl-phosphite-tepi.overview.name',
    descriptionKey: 'chemicalDetail.products.triethyl-phosphite-tepi.overview.description',
    category: 'chemical',
    url: '/chemical/triethyl-phosphite-tepi',
    keywordsKey: 'search.items.triethylPhosphite.keywords'
  },
  {
    id: 'diethyl-phosphite-depi',
    titleKey: 'chemicalDetail.products.diethyl-phosphite-depi.overview.name',
    descriptionKey: 'chemicalDetail.products.diethyl-phosphite-depi.overview.description',
    category: 'chemical',
    url: '/chemical/diethyl-phosphite-depi',
    keywordsKey: 'search.items.diethylPhosphite.keywords'
  },
  {
    id: 'dimethyl-phosphite-dmpi',
    titleKey: 'chemicalDetail.products.dimethyl-phosphite-dmpi.overview.name',
    descriptionKey: 'chemicalDetail.products.dimethyl-phosphite-dmpi.overview.description',
    category: 'chemical',
    url: '/chemical/dimethyl-phosphite-dmpi',
    keywordsKey: 'search.items.dimethylPhosphite.keywords'
  },
  {
    id: 'toluene',
    titleKey: 'chemicalDetail.products.toluene.overview.name',
    descriptionKey: 'chemicalDetail.products.toluene.overview.description',
    category: 'chemical',
    url: '/chemical/toluene',
    keywordsKey: 'search.items.toluene.keywords'
  },
  {
    id: 'methanol',
    titleKey: 'chemicalDetail.products.methanol.overview.name',
    descriptionKey: 'chemicalDetail.products.methanol.overview.description',
    category: 'chemical',
    url: '/chemical/methanol',
    keywordsKey: 'search.items.methanol.keywords'
  },
  {
    id: 'px',
    titleKey: 'chemicalDetail.products.px.overview.name',
    descriptionKey: 'chemicalDetail.products.px.overview.description',
    category: 'chemical',
    url: '/chemical/px',
    keywordsKey: 'search.items.paraxylene.keywords'
  },
  {
    id: 'ox',
    titleKey: 'chemicalDetail.products.ox.overview.name',
    descriptionKey: 'chemicalDetail.products.ox.overview.description',
    category: 'chemical',
    url: '/chemical/ox',
    keywordsKey: 'search.items.orthoXylene.keywords'
  },
  {
    id: 'cyclohexane',
    titleKey: 'chemicalDetail.products.cyclohexane.overview.name',
    descriptionKey: 'chemicalDetail.products.cyclohexane.overview.description',
    category: 'chemical',
    url: '/chemical/cyclohexane',
    keywordsKey: 'search.items.cyclohexane.keywords'
  },
  {
    id: 'sulfur',
    titleKey: 'chemicalDetail.products.sulfur.overview.name',
    descriptionKey: 'chemicalDetail.products.sulfur.overview.description',
    category: 'chemical',
    url: '/chemical/sulfur',
    keywordsKey: 'search.items.sulfur.keywords'
  },
  {
    id: 'mtbe',
    titleKey: 'chemicalDetail.products.methyl-tertiary-butyl-ether-mtbe.overview.name',
    descriptionKey: 'chemicalDetail.products.methyl-tertiary-butyl-ether-mtbe.overview.description',
    category: 'chemical',
    url: '/chemical/methyl-tertiary-butyl-ether-mtbe',
    keywordsKey: 'search.items.mtbe.keywords'
  },
  {
    id: 'etbe',
    titleKey: 'chemicalDetail.products.etbe.overview.name',
    descriptionKey: 'chemicalDetail.products.etbe.overview.description',
    category: 'chemical',
    url: '/chemical/etbe',
    keywordsKey: 'search.items.etbe.keywords'
  },
  {
    id: 'pta',
    titleKey: 'chemicalDetail.products.pta.overview.name',
    descriptionKey: 'chemicalDetail.products.pta.overview.description',
    category: 'chemical',
    url: '/chemical/pta',
    keywordsKey: 'search.items.pta.keywords'
  },
  {
    id: 'meg',
    titleKey: 'chemicalDetail.products.meg.overview.name',
    descriptionKey: 'chemicalDetail.products.meg.overview.description',
    category: 'chemical',
    url: '/chemical/meg',
    keywordsKey: 'search.items.meg.keywords'
  },
  {
    id: 'isobutylene',
    titleKey: 'chemicalDetail.products.isobutylene.overview.name',
    descriptionKey: 'chemicalDetail.products.isobutylene.overview.description',
    category: 'chemical',
    url: '/chemical/isobutylene',
    keywordsKey: 'search.items.isobutylene.keywords'
  },
  {
    id: 'carbon-disulfide-cs2',
    titleKey: 'chemicalDetail.products.carbon-disulfide-cs2.overview.name',
    descriptionKey: 'chemicalDetail.products.carbon-disulfide-cs2.overview.description',
    category: 'chemical',
    url: '/chemical/carbon-disulfide-cs2',
    keywordsKey: 'search.items.carbonDisulfide.keywords'
  },
  {
    id: 'sodium-cyanide',
    titleKey: 'chemicalDetail.products.sodium-cyanide.overview.name',
    descriptionKey: 'chemicalDetail.products.sodium-cyanide.overview.description',
    category: 'chemical',
    url: '/chemical/sodium-cyanide',
    keywordsKey: 'search.items.sodiumCyanide.keywords'
  },
  {
    id: 'antioxidant-1010',
    titleKey: 'chemicalDetail.products.antioxidant-1010.overview.name',
    descriptionKey: 'chemicalDetail.products.antioxidant-1010.overview.description',
    category: 'chemical',
    url: '/chemical/antioxidant-1010',
    keywordsKey: 'search.items.antioxidant1010.keywords'
  },
  {
    id: 'mixed-hexenes',
    titleKey: 'chemicalDetail.products.mixed-hexenes.overview.name',
    descriptionKey: 'chemicalDetail.products.mixed-hexenes.overview.description',
    category: 'chemical',
    url: '/chemical/mixed-hexenes',
    keywordsKey: 'search.items.mixedHexenes.keywords'
  },
  {
    id: 'tert-butylamine',
    titleKey: 'chemicalDetail.products.tert-butylamine.overview.name',
    descriptionKey: 'chemicalDetail.products.tert-butylamine.overview.description',
    category: 'chemical',
    url: '/chemical/tert-butylamine',
    keywordsKey: 'search.items.tertButylamine.keywords'
  },
  {
    id: 'cyanuric-chloride',
    titleKey: 'chemicalDetail.products.cyanuric-chloride.overview.name',
    descriptionKey: 'chemicalDetail.products.cyanuric-chloride.overview.description',
    category: 'chemical',
    url: '/chemical/cyanuric-chloride',
    keywordsKey: 'search.items.cyanuricChloride.keywords'
  },
  {
    id: 'ethylenediamine',
    titleKey: 'chemicalDetail.products.ethylenediamine.overview.name',
    descriptionKey: 'chemicalDetail.products.ethylenediamine.overview.description',
    category: 'chemical',
    url: '/chemical/ethylenediamine',
    keywordsKey: 'search.items.ethylenediamine.keywords'
  },
  {
    id: 'piperazine',
    titleKey: 'chemicalDetail.products.piperazine.overview.name',
    descriptionKey: 'chemicalDetail.products.piperazine.overview.description',
    category: 'chemical',
    url: '/chemical/piperazine',
    keywordsKey: 'search.items.piperazine.keywords'
  },

  // Services - Use actual service routes that exist
  {
    id: 'integrated-3pl-ftwz',
    titleKey: 'projects.ftwz.title',
    descriptionKey: 'projects.ftwz.description',
    category: 'service',
    url: '/services/integrated-3pl-ftwz',
    keywordsKey: 'search.items.projectFtwz.keywords'
  },
  {
    id: 'end-to-end-solutions',
    titleKey: 'projects.3pl.title',
    descriptionKey: 'projects.3pl.description',
    category: 'service',
    url: '/services/end-to-end-solutions',
    keywordsKey: 'search.items.project3pl.keywords'
  },

  // Content/Industries - All link to main services page
  {
    id: 'oil-gas',
    titleKey: 'projects.oilAndGas.title',
    descriptionKey: 'projects.oilAndGas.description',
    category: 'content',
    url: '/services',
    keywordsKey: 'search.items.oilGas.keywords'
  },
  {
    id: 'agrochemicals',
    titleKey: 'projects.agrochemicals.title',
    descriptionKey: 'projects.agrochemicals.description',
    category: 'content',
    url: '/services',
    keywordsKey: 'search.items.agrochemicals.keywords'
  },
  {
    id: 'water-treatment',
    titleKey: 'projects.waterTreatment.title',
    descriptionKey: 'projects.waterTreatment.description',
    category: 'content',
    url: '/services',
    keywordsKey: 'search.items.waterTreatment.keywords'
  },
  {
    id: 'mining-metals',
    titleKey: 'projects.miningMetals.title',
    descriptionKey: 'projects.miningMetals.description',
    category: 'content',
    url: '/services',
    keywordsKey: 'search.items.miningMetals.keywords'
  },
  {
    id: 'paints-coatings',
    titleKey: 'projects.paintsCoatings.title',
    descriptionKey: 'projects.paintsCoatings.description',
    category: 'content',
    url: '/services',
    keywordsKey: 'search.items.paintsCoatings.keywords'
  },
  {
    id: 'polymers-plastics',
    titleKey: 'projects.polymersPlastics.title',
    descriptionKey: 'projects.polymersPlastics.description',
    category: 'content',
    url: '/services',
    keywordsKey: 'search.items.polymersPlastics.keywords'
  },
  {
    id: 'pharmaceuticals',
    titleKey: 'projects.pharmaceuticals.title',
    descriptionKey: 'projects.pharmaceuticals.description',
    category: 'content',
    url: '/services',
    keywordsKey: 'search.items.pharmaceuticals.keywords'
  }
];

// Category display names with translation keys
export const getCategoryNames = (t: (key: string) => string) => ({
  page: t('search.categories.pages'),
  chemical: t('search.categories.chemicals'),
  service: t('search.categories.services'),
  content: t('search.categories.industries'),
  category: t('search.categories.categories')
}); 