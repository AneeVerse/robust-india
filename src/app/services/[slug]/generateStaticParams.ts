export const serviceImages = [
  {
    slug: 'integrated-3pl-ftwz',
    image: '/images/demo/ftw.jpg',
    fullImage: '/images/integrated1.jpg',
    smallImages: [
      '/images/integrated2.jpg',
      '/images/integrated3.jpg',
    ],
  },
  {
    slug: 'end-to-end-solutions',
    image: '/images/end-to-end2.jpg',
    fullImage: '/images/3pl2.jpg',
    smallImages: [
      '/images/3pl1.jpg',
      '/images/3pl3.jpg',
    ],
  },
];

export function generateStaticParams() {
  return serviceImages.map((service) => ({ slug: service.slug }));
} 