import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL || 'https://robustindia.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/temp/',
          '/thank-you',
          '/confirmation',
        ],
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'Claude-Web', 'Bytespider', 'CCBot', 'PerplexityBot', 'Applebot-Extended'],
        allow: '/',
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
