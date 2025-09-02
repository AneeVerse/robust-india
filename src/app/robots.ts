import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/private/',
        '/temp/',
        '*.json',
        '*.xml',
        '/thank-you',
      ],
    },
    sitemap: 'https://robustindia.com/sitemap.xml',
    host: 'https://robustindia.com',
  }
}
