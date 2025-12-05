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
    id: 'phosphorus-pentoxide',
    titleKey: 'chemicalDetail.products.phosphorus-pentoxide.overview.name',
    descriptionKey: 'chemicalDetail.products.phosphorus-pentoxide.overview.description',
    category: 'chemical',
    url: '/chemical/phosphorus-pentoxide',
    keywordsKey: 'search.items.phosphorusPentoxide.keywords'
  },
  {
    id: 'hp-mtbe',
    titleKey: 'chemicalDetail.products.hp-mtbe.overview.name',
    descriptionKey: 'chemicalDetail.products.hp-mtbe.overview.description',
    category: 'chemical',
    url: '/chemical/hp-mtbe',
    keywordsKey: 'search.items.hpMtbe.keywords'
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
  {
    id: 'antioxidant-168',
    titleKey: 'chemicalDetail.products.antioxidant-168.overview.name',
    descriptionKey: 'chemicalDetail.products.antioxidant-168.overview.description',
    category: 'chemical',
    url: '/chemical/antioxidant-168',
    keywordsKey: 'search.items.antioxidant168.keywords'
  },
  {
    id: 'antioxidant-1098',
    titleKey: 'chemicalDetail.products.antioxidant-1098.overview.name',
    descriptionKey: 'chemicalDetail.products.antioxidant-1098.overview.description',
    category: 'chemical',
    url: '/chemical/antioxidant-1098',
    keywordsKey: 'search.items.antioxidant1098.keywords'
  },
  {
    id: 'antioxidant-l135',
    titleKey: 'chemicalDetail.products.antioxidant-l135.overview.name',
    descriptionKey: 'chemicalDetail.products.antioxidant-l135.overview.description',
    category: 'chemical',
    url: '/chemical/antioxidant-l135',
    keywordsKey: 'search.items.antioxidantL135.keywords'
  },
  {
    id: 'antioxidant-1135',
    titleKey: 'chemicalDetail.products.antioxidant-1135.overview.name',
    descriptionKey: 'chemicalDetail.products.antioxidant-1135.overview.description',
    category: 'chemical',
    url: '/chemical/antioxidant-1135',
    keywordsKey: 'search.items.antioxidant1135.keywords'
  },
  {
    id: 'antioxidant-1315',
    titleKey: 'chemicalDetail.products.antioxidant-1315.overview.name',
    descriptionKey: 'chemicalDetail.products.antioxidant-1315.overview.description',
    category: 'chemical',
    url: '/chemical/antioxidant-1315',
    keywordsKey: 'search.items.antioxidant1315.keywords'
  },
  {
    id: 'antioxidant-blend-168-1010',
    titleKey: 'chemicalDetail.products.antioxidant-blend-168-1010.overview.name',
    descriptionKey: 'chemicalDetail.products.antioxidant-blend-168-1010.overview.description',
    category: 'chemical',
    url: '/chemical/antioxidant-blend-168-1010',
    keywordsKey: 'search.items.antioxidantBlend.keywords'
  },
  {
    id: 'ptbmb',
    titleKey: 'chemicalDetail.products.ptbmb.overview.name',
    descriptionKey: 'chemicalDetail.products.ptbmb.overview.description',
    category: 'chemical',
    url: '/chemical/ptbmb',
    keywordsKey: 'search.items.ptbmb.keywords'
  },
  {
    id: 'toa',
    titleKey: 'chemicalDetail.products.toa.overview.name',
    descriptionKey: 'chemicalDetail.products.toa.overview.description',
    category: 'chemical',
    url: '/chemical/toa',
    keywordsKey: 'search.items.toa.keywords'
  },
  {
    id: 'naamps',
    titleKey: 'chemicalDetail.products.naamps.overview.name',
    descriptionKey: 'chemicalDetail.products.naamps.overview.description',
    category: 'chemical',
    url: '/chemical/naamps',
    keywordsKey: 'search.items.naamps.keywords'
  },
  {
    id: '3-phenylpentane',
    titleKey: 'chemicalDetail.products.3-phenylpentane.overview.name',
    descriptionKey: 'chemicalDetail.products.3-phenylpentane.overview.description',
    category: 'chemical',
    url: '/chemical/3-phenylpentane',
    keywordsKey: 'search.items.3phenylpentane.keywords'
  },
  {
    id: 'tertiary-amyl-benzene',
    titleKey: 'chemicalDetail.products.tertiary-amyl-benzene.overview.name',
    descriptionKey: 'chemicalDetail.products.tertiary-amyl-benzene.overview.description',
    category: 'chemical',
    url: '/chemical/tertiary-amyl-benzene',
    keywordsKey: 'search.items.tertiaryAmylBenzene.keywords'
  },
  {
    id: 'normal-butyl-benzene',
    titleKey: 'chemicalDetail.products.normal-butyl-benzene.overview.name',
    descriptionKey: 'chemicalDetail.products.normal-butyl-benzene.overview.description',
    category: 'chemical',
    url: '/chemical/normal-butyl-benzene',
    keywordsKey: 'search.items.normalButylBenzene.keywords'
  },
  {
    id: 'isobutyl-benzene',
    titleKey: 'chemicalDetail.products.isobutyl-benzene.overview.name',
    descriptionKey: 'chemicalDetail.products.isobutyl-benzene.overview.description',
    category: 'chemical',
    url: '/chemical/isobutyl-benzene',
    keywordsKey: 'search.items.isobutylBenzene.keywords'
  },
  {
    id: 'zddp-md',
    titleKey: 'chemicalDetail.products.zddp-md.overview.name',
    descriptionKey: 'chemicalDetail.products.zddp-md.overview.description',
    category: 'chemical',
    url: '/chemical/zddp-md',
    keywordsKey: 'search.items.zddpMd.keywords'
  },
  {
    id: 'zddp-im',
    titleKey: 'chemicalDetail.products.zddp-im.overview.name',
    descriptionKey: 'chemicalDetail.products.zddp-im.overview.description',
    category: 'chemical',
    url: '/chemical/zddp-im',
    keywordsKey: 'search.items.zddpIm.keywords'
  },

  {
    id: 'ortho-tert-butyl-phenol-otbp',
    titleKey: 'chemicalDetail.products.ortho-tert-butyl-phenol-otbp.overview.name',
    descriptionKey: 'chemicalDetail.products.ortho-tert-butyl-phenol-otbp.overview.description',
    category: 'chemical',
    url: '/chemical/ortho-tert-butyl-phenol-otbp',
    keywordsKey: 'search.items.orthoTertButylPhenol.keywords'
  },
  {
    id: 'osbp',
    titleKey: 'chemicalDetail.products.osbp.overview.name',
    descriptionKey: 'chemicalDetail.products.osbp.overview.description',
    category: 'chemical',
    url: '/chemical/osbp',
    keywordsKey: 'search.items.osbp.keywords'
  },
  {
    id: 'potassium-bicarbonate',
    titleKey: 'chemicalDetail.products.potassium-bicarbonate.overview.name',
    descriptionKey: 'chemicalDetail.products.potassium-bicarbonate.overview.description',
    category: 'chemical',
    url: '/chemical/potassium-bicarbonate',
    keywordsKey: 'search.items.potassiumBicarbonate.keywords'
  },
  {
    id: 'isohexane',
    titleKey: 'chemicalDetail.products.isohexane.overview.name',
    descriptionKey: 'chemicalDetail.products.isohexane.overview.description',
    category: 'chemical',
    url: '/chemical/isohexane',
    keywordsKey: 'search.items.isohexane.keywords'
  },
  {
    id: 'atbs',
    titleKey: 'chemicalDetail.products.atbs.overview.name',
    descriptionKey: 'chemicalDetail.products.atbs.overview.description',
    category: 'chemical',
    url: '/chemical/atbs',
    keywordsKey: 'search.items.atbs.keywords'
  },
  {
    id: 'tba',
    titleKey: 'chemicalDetail.products.tba.overview.name',
    descriptionKey: 'chemicalDetail.products.tba.overview.description',
    category: 'chemical',
    url: '/chemical/tba',
    keywordsKey: 'search.items.tba.keywords'
  },
  {
    id: 'c10-aromatic-solvent',
    titleKey: 'chemicalDetail.products.c10-aromatic-solvent.overview.name',
    descriptionKey: 'chemicalDetail.products.c10-aromatic-solvent.overview.description',
    category: 'chemical',
    url: '/chemical/c10-aromatic-solvent',
    keywordsKey: 'search.items.c10AromaticSolvent.keywords'
  },
  {
    id: '4-butylaniline',
    titleKey: 'chemicalDetail.products.4-butylaniline.overview.name',
    descriptionKey: 'chemicalDetail.products.4-butylaniline.overview.description',
    category: 'chemical',
    url: '/chemical/4-butylaniline',
    keywordsKey: 'search.items.4butylaniline.keywords'
  },
  {
    id: 'dimethyl-methylphosphonate-dmmp',
    titleKey: 'chemicalDetail.products.dimethyl-methylphosphonate-dmmp.overview.name',
    descriptionKey: 'chemicalDetail.products.dimethyl-methylphosphonate-dmmp.overview.description',
    category: 'chemical',
    url: '/chemical/dimethyl-methylphosphonate-dmmp',
    keywordsKey: 'search.items.dimethylMethylphosphonate.keywords'
  },
  {
    id: 'sodium-sulfide-na2s',
    titleKey: 'chemicalDetail.products.sodium-sulfide-na2s.overview.name',
    descriptionKey: 'chemicalDetail.products.sodium-sulfide-na2s.overview.description',
    category: 'chemical',
    url: '/chemical/sodium-sulfide-na2s',
    keywordsKey: 'search.items.sodiumSulfide.keywords'
  },
  {
    id: '2-6-di-sec-butyl-phenol-2-6-dsbp',
    titleKey: 'chemicalDetail.products.2-6-di-sec-butyl-phenol-2-6-dsbp.overview.name',
    descriptionKey: 'chemicalDetail.products.2-6-di-sec-butyl-phenol-2-6-dsbp.overview.description',
    category: 'chemical',
    url: '/chemical/2-6-di-sec-butyl-phenol-2-6-dsbp',
    keywordsKey: 'search.items.2-6-di-sec-butyl-phenol.keywords'
  },

  // Missing chemicals from generateStaticParams
  {
    id: 'antioxidant-1076',
    titleKey: 'chemicalDetail.products.antioxidant-1076.overview.name',
    descriptionKey: 'chemicalDetail.products.antioxidant-1076.overview.description',
    category: 'chemical',
    url: '/chemical/antioxidant-1076',
    keywordsKey: 'search.items.antioxidant1076.keywords'
  },
  {
    id: 'ptbba',
    titleKey: 'chemicalDetail.products.ptbba.overview.name',
    descriptionKey: 'chemicalDetail.products.ptbba.overview.description',
    category: 'chemical',
    url: '/chemical/ptbba',
    keywordsKey: 'search.items.ptbba.keywords'
  },
  {
    id: 'secondary-butyl-benzene',
    titleKey: 'chemicalDetail.products.secondary-butyl-benzene.overview.name',
    descriptionKey: 'chemicalDetail.products.secondary-butyl-benzene.overview.description',
    category: 'chemical',
    url: '/chemical/secondary-butyl-benzene',
    keywordsKey: 'search.items.secondaryButylBenzene.keywords'
  },
  {
    id: 'osbp-detailed',
    titleKey: 'chemicalDetail.products.osbp-detailed.overview.name',
    descriptionKey: 'chemicalDetail.products.osbp-detailed.overview.description',
    category: 'chemical',
    url: '/chemical/osbp-detailed',
    keywordsKey: 'search.items.osbpDetailed.keywords'
  },
  {
    id: 'polybutadiene-rubber-pbr',
    titleKey: 'chemicalDetail.products.polybutadiene-rubber-pbr.overview.name',
    descriptionKey: 'chemicalDetail.products.polybutadiene-rubber-pbr.overview.description',
    category: 'chemical',
    url: '/chemical/polybutadiene-rubber-pbr',
    keywordsKey: 'search.items.polybutadieneRubber.keywords'
  },
  {
    id: 'styrene-butadiene-rubber-sbr',
    titleKey: 'chemicalDetail.products.styrene-butadiene-rubber-sbr.overview.name',
    descriptionKey: 'chemicalDetail.products.styrene-butadiene-rubber-sbr.overview.description',
    category: 'chemical',
    url: '/chemical/styrene-butadiene-rubber-sbr',
    keywordsKey: 'search.items.styreneButadieneRubber.keywords'
  },
  {
    id: 'polyvinyl-chloride-pvc',
    titleKey: 'chemicalDetail.products.polyvinyl-chloride-pvc.overview.name',
    descriptionKey: 'chemicalDetail.products.polyvinyl-chloride-pvc.overview.description',
    category: 'chemical',
    url: '/chemical/polyvinyl-chloride-pvc',
    keywordsKey: 'search.items.polyvinylChloride.keywords'
  },
  {
    id: 'polyethylene-pe',
    titleKey: 'chemicalDetail.products.polyethylene-pe.overview.name',
    descriptionKey: 'chemicalDetail.products.polyethylene-pe.overview.description',
    category: 'chemical',
    url: '/chemical/polyethylene-pe',
    keywordsKey: 'search.items.polyethylene.keywords'
  },
  {
    id: 'polypropylene-pp',
    titleKey: 'chemicalDetail.products.polypropylene-pp.overview.name',
    descriptionKey: 'chemicalDetail.products.polypropylene-pp.overview.description',
    category: 'chemical',
    url: '/chemical/polypropylene-pp',
    keywordsKey: 'search.items.polypropylene.keywords'
  },
  {
    id: 'polyester-staple-fiber-psf',
    titleKey: 'chemicalDetail.products.polyester-staple-fiber-psf.overview.name',
    descriptionKey: 'chemicalDetail.products.polyester-staple-fiber-psf.overview.description',
    category: 'chemical',
    url: '/chemical/polyester-staple-fiber-psf',
    keywordsKey: 'search.items.polyesterStapleFiber.keywords'
  },
  {
    id: 'polyester-filament-yarn-pfy',
    titleKey: 'chemicalDetail.products.polyester-filament-yarn-pfy.overview.name',
    descriptionKey: 'chemicalDetail.products.polyester-filament-yarn-pfy.overview.description',
    category: 'chemical',
    url: '/chemical/polyester-filament-yarn-pfy',
    keywordsKey: 'search.items.polyesterFilamentYarn.keywords'
  },
  {
    id: 'polyethylene-terephthalate-pet',
    titleKey: 'chemicalDetail.products.polyethylene-terephthalate-pet.overview.name',
    descriptionKey: 'chemicalDetail.products.polyethylene-terephthalate-pet.overview.description',
    category: 'chemical',
    url: '/chemical/polyethylene-terephthalate-pet',
    keywordsKey: 'search.items.polyethyleneTerephthalate.keywords'
  },

  // New chemicals from brochure - Phosphorus Based
  {
    id: 'tributyl-phosphate-tbp',
    titleKey: 'chemicalDetail.products.tributyl-phosphate-tbp.overview.name',
    descriptionKey: 'chemicalDetail.products.tributyl-phosphate-tbp.overview.description',
    category: 'chemical',
    url: '/chemical/tributyl-phosphate-tbp',
    keywordsKey: 'search.items.tributylPhosphate.keywords'
  },

  // New chemicals from brochure - Alkanolamines Group
  {
    id: 'diethylenetriamine-deta',
    titleKey: 'chemicalDetail.products.diethylenetriamine-deta.overview.name',
    descriptionKey: 'chemicalDetail.products.diethylenetriamine-deta.overview.description',
    category: 'chemical',
    url: '/chemical/diethylenetriamine-deta',
    keywordsKey: 'search.items.diethyleneTriamine.keywords'
  },
  {
    id: 'aminoethyl-ethanolamine-aeea',
    titleKey: 'chemicalDetail.products.aminoethyl-ethanolamine-aeea.overview.name',
    descriptionKey: 'chemicalDetail.products.aminoethyl-ethanolamine-aeea.overview.description',
    category: 'chemical',
    url: '/chemical/aminoethyl-ethanolamine-aeea',
    keywordsKey: 'search.items.aminoethylEthanolamine.keywords'
  },
  {
    id: 'aminoethyl-piperazine-aep',
    titleKey: 'chemicalDetail.products.aminoethyl-piperazine-aep.overview.name',
    descriptionKey: 'chemicalDetail.products.aminoethyl-piperazine-aep.overview.description',
    category: 'chemical',
    url: '/chemical/aminoethyl-piperazine-aep',
    keywordsKey: 'search.items.aminoethylpiperazine.keywords'
  },
  {
    id: 'triisopropanolamine-tipa',
    titleKey: 'chemicalDetail.products.triisopropanolamine-tipa.overview.name',
    descriptionKey: 'chemicalDetail.products.triisopropanolamine-tipa.overview.description',
    category: 'chemical',
    url: '/chemical/triisopropanolamine-tipa',
    keywordsKey: 'search.items.triisopropanolamine.keywords'
  },
  {
    id: 'monoethanolamine-mea',
    titleKey: 'chemicalDetail.products.monoethanolamine-mea.overview.name',
    descriptionKey: 'chemicalDetail.products.monoethanolamine-mea.overview.description',
    category: 'chemical',
    url: '/chemical/monoethanolamine-mea',
    keywordsKey: 'search.items.monoethanolamine.keywords'
  },
  {
    id: 'diethanolamine-dea',
    titleKey: 'chemicalDetail.products.diethanolamine-dea.overview.name',
    descriptionKey: 'chemicalDetail.products.diethanolamine-dea.overview.description',
    category: 'chemical',
    url: '/chemical/diethanolamine-dea',
    keywordsKey: 'search.items.diethanolamine.keywords'
  },
  {
    id: 'triethanolamine-tea',
    titleKey: 'chemicalDetail.products.triethanolamine-tea.overview.name',
    descriptionKey: 'chemicalDetail.products.triethanolamine-tea.overview.description',
    category: 'chemical',
    url: '/chemical/triethanolamine-tea',
    keywordsKey: 'search.items.triethanolamine.keywords'
  },
  {
    id: '2-phenoxy-ethanol',
    titleKey: 'chemicalDetail.products.2-phenoxy-ethanol.overview.name',
    descriptionKey: 'chemicalDetail.products.2-phenoxy-ethanol.overview.description',
    category: 'chemical',
    url: '/chemical/2-phenoxy-ethanol',
    keywordsKey: 'search.items.phenoxyEthanol.keywords'
  },
  {
    id: 'diethanol-isopropanolamine-deipa',
    titleKey: 'chemicalDetail.products.diethanol-isopropanolamine-deipa.overview.name',
    descriptionKey: 'chemicalDetail.products.diethanol-isopropanolamine-deipa.overview.description',
    category: 'chemical',
    url: '/chemical/diethanol-isopropanolamine-deipa',
    keywordsKey: 'search.items.diethanolIsopropanolamine.keywords'
  },
  {
    id: 'n-2-hydroxy-ethyl-pyrrolidine',
    titleKey: 'chemicalDetail.products.n-2-hydroxy-ethyl-pyrrolidine.overview.name',
    descriptionKey: 'chemicalDetail.products.n-2-hydroxy-ethyl-pyrrolidine.overview.description',
    category: 'chemical',
    url: '/chemical/n-2-hydroxy-ethyl-pyrrolidine',
    keywordsKey: 'search.items.hydroxyEthylPyrrolidine.keywords'
  },

  // New chemicals from brochure - Bromine Derivatives
  {
    id: 'calcium-bromide',
    titleKey: 'chemicalDetail.products.calcium-bromide.overview.name',
    descriptionKey: 'chemicalDetail.products.calcium-bromide.overview.description',
    category: 'chemical',
    url: '/chemical/calcium-bromide',
    keywordsKey: 'search.items.calciumBromide.keywords'
  },
  {
    id: 'sodium-bromide',
    titleKey: 'chemicalDetail.products.sodium-bromide.overview.name',
    descriptionKey: 'chemicalDetail.products.sodium-bromide.overview.description',
    category: 'chemical',
    url: '/chemical/sodium-bromide',
    keywordsKey: 'search.items.sodiumBromide.keywords'
  },
  {
    id: 'zinc-bromide',
    titleKey: 'chemicalDetail.products.zinc-bromide.overview.name',
    descriptionKey: 'chemicalDetail.products.zinc-bromide.overview.description',
    category: 'chemical',
    url: '/chemical/zinc-bromide',
    keywordsKey: 'search.items.zincBromide.keywords'
  },
  {
    id: 'hydrobromic-acid',
    titleKey: 'chemicalDetail.products.hydrobromic-acid.overview.name',
    descriptionKey: 'chemicalDetail.products.hydrobromic-acid.overview.description',
    category: 'chemical',
    url: '/chemical/hydrobromic-acid',
    keywordsKey: 'search.items.hydrobromicAcid.keywords'
  },
  {
    id: 'diphenyl-oxide',
    titleKey: 'chemicalDetail.products.diphenyl-oxide.overview.name',
    descriptionKey: 'chemicalDetail.products.diphenyl-oxide.overview.description',
    category: 'chemical',
    url: '/chemical/diphenyl-oxide',
    keywordsKey: 'search.items.diphenylOxide.keywords'
  },

  // New chemicals from brochure - Phenols
  {
    id: 'para-tertiary-butyl-phenol-ptbp',
    titleKey: 'chemicalDetail.products.para-tertiary-butyl-phenol-ptbp.overview.name',
    descriptionKey: 'chemicalDetail.products.para-tertiary-butyl-phenol-ptbp.overview.description',
    category: 'chemical',
    url: '/chemical/para-tertiary-butyl-phenol-ptbp',
    keywordsKey: 'search.items.paraTertiaryButylPhenol.keywords'
  },
  {
    id: '2-4-di-tertiary-butyl-phenol',
    titleKey: 'chemicalDetail.products.2-4-di-tertiary-butyl-phenol.overview.name',
    descriptionKey: 'chemicalDetail.products.2-4-di-tertiary-butyl-phenol.overview.description',
    category: 'chemical',
    url: '/chemical/2-4-di-tertiary-butyl-phenol',
    keywordsKey: 'search.items.2-4-di-tert-butyl-phenol.keywords'
  },
  {
    id: '2-6-di-tertiary-butyl-phenol',
    titleKey: 'chemicalDetail.products.2-6-di-tertiary-butyl-phenol.overview.name',
    descriptionKey: 'chemicalDetail.products.2-6-di-tertiary-butyl-phenol.overview.description',
    category: 'chemical',
    url: '/chemical/2-6-di-tertiary-butyl-phenol',
    keywordsKey: 'search.items.2-6-di-tert-butyl-phenol.keywords'
  },

  // New chemicals from brochure - Aliphatic & Benzyl
  {
    id: 'n-benzyl-ethanolamine',
    titleKey: 'chemicalDetail.products.n-benzyl-ethanolamine.overview.name',
    descriptionKey: 'chemicalDetail.products.n-benzyl-ethanolamine.overview.description',
    category: 'chemical',
    url: '/chemical/n-benzyl-ethanolamine',
    keywordsKey: 'search.items.nBenzylEthanolamine.keywords'
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