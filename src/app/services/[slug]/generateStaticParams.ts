export const serviceImages = [
  {
    slug: 'integrated-3pl-ftwz',
    image: '/images/demo/ftw.jpg',
    fullImage: '/images/project/slug1/ftw-1.png',
    smallImages: [
      '/images/project/slug1/ftw-2.png',
      '/images/project/slug1/ftw-3.png',
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