import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Extend NextRequest to include geo property
interface NextRequestWithGeo extends NextRequest {
  geo?: {
    country?: string;
    region?: string;
    city?: string;
  };
}

export function middleware(request: NextRequestWithGeo) {
  // Get country from geolocation or common CDN headers (Vercel, Cloudflare, etc.)
  const country =
    request.geo?.country ||
    // Vercel provides the country via this header for Edge Functions
    request.headers.get('x-vercel-ip-country') ||
    // Cloudflare provides the country via this header if routed through CF
    request.headers.get('cf-ipcountry') ||
    'US';
  
  // Always default to English regardless of country
  const detectedLanguage = 'en';
  
  const response = NextResponse.next();

  // Always refresh the auto-detected cookie (regardless of any previous
  // "preferred-language") so that each request is driven by the user's
  // current location/IP.
  const currentAutoCookie = request.cookies.get('auto-detected-language')?.value;
  if (currentAutoCookie !== detectedLanguage) {
    response.cookies.set('auto-detected-language', detectedLanguage, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }

  // Add headers for debugging / verification in Network tab
  response.headers.set('x-detected-country', country);
  response.headers.set('x-detected-language', detectedLanguage);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 