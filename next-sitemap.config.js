/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://robustindia.co',
  generateRobotsTxt: true, // (optional)
  // exclude: ['/server-sitemap.xml'], // <= exclude here
  generateIndexSitemap: false, // (optional) since we have relatively few pages
  sitemapSize: 7000,
  // ...other options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  // Optional: Transform function to modify URLs before they're added to sitemap
  transform: async (config, path) => {
    // Set custom priorities and changefreq for different page types
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/chemical/')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path.startsWith('/services')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/product')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/about' || path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/demo') {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path === '/terms' || path === '/thank-you') {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  additionalPaths: async (config) => {
    // Add any additional dynamic paths that aren't automatically discovered
    const result = [];
    
    // Add chemical product paths
    const chemicalSlugs = [
      'naphtha', 'propylene-propene', 'benzene', 'red-phosphorus',
      'trimethyl-phosphite-tmpi', 'triphenyl-phosphite-tppi', 'triethyl-phosphite-tepi',
      'diethyl-phosphite-depi', 'dimethyl-phosphite-dmpi', 'dimethyl-methylphosphonate-dmmp',
      'carbon-disulfide-cs2', 'sodium-sulfide-na2s', 'methyl-tertiary-butyl-ether-mtbe',
      'sulfur', 'etbe', 'pta', 'meg', 'px', 'ox', 'toluene', 'cyclohexane',
      'antioxidant-1010', 'antioxidant-1076', 'antioxidant-168', 'antioxidant-1098',
      'antioxidant-l135', 'antioxidant-1135', 'antioxidant-1315', 'antioxidant-blend-168-1010',
      'potassium-bicarbonate', 'mixed-hexenes', 'tert-butylamine', 'methanol', 'isobutylene',
      'ptbba', 'ptbmb', 'isohexane', 'toa', 'tba', 'naamps', 'atbs', '4-butylaniline',
      'c10-aromatic-solvent', '3-phenylpentane', 'tertiary-amyl-benzene', 'secondary-butyl-benzene',
      'normal-butyl-benzene', 'isobutyl-benzene', 'zddp-md', 'zddp-im', 'phosphorus-pentoxide',
      'hp-mtbe', 'sodium-cyanide', 'cyanuric-chloride', 'ethylenediamine', 'piperazine',
      'ortho-tert-butyl-phenol-otbp', 'osbp', 'osbp-detailed', '2-6-di-sec-butyl-phenol-2-6-dsbp',
      'polybutadiene-rubber-pbr', 'styrene-butadiene-rubber-sbr', 'polyvinyl-chloride-pvc',
      'polyethylene-pe', 'polypropylene-pp', 'polyester-staple-fiber-psf',
      'polyester-filament-yarn-pfy', 'polyethylene-terephthalate-pet'
    ];

    chemicalSlugs.forEach((slug) => {
      result.push({
        loc: `/chemical/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Add service paths
    const serviceSlugs = ['integrated-3pl-ftwz', 'end-to-end-solutions'];
    serviceSlugs.forEach((slug) => {
      result.push({
        loc: `/services/${slug}`,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};
