import { NextRequest, NextResponse } from 'next/server';

// Supported locales
const locales = ['id', 'en'];
const defaultLocale = 'id';

// Get locale from Accept-Language header
function getLocaleFromHeader(request: NextRequest): string {
  const acceptLanguage = request.headers.get('Accept-Language');
  
  if (!acceptLanguage) return defaultLocale;
  
  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q = '1'] = lang.trim().split(';q=');
      return { code: code.split('-')[0], quality: parseFloat(q) };
    })
    .sort((a, b) => b.quality - a.quality);
  
  // Find supported locale
  for (const lang of languages) {
    if (locales.includes(lang.code)) {
      return lang.code;
    }
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // Determine locale to redirect to
  let locale = defaultLocale;
  
  // Check for locale preference in cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    locale = localeCookie;
  } else {
    // Fall back to browser language detection
    locale = getLocaleFromHeader(request);
  }
  
  // Create new URL with locale prefix
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  
  // Redirect to localized URL
  const response = NextResponse.redirect(newUrl);
  
  // Set locale preference cookie for future visits
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: false, // Allow client-side access for language switcher
    sameSite: 'lax',
  });
  
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
     * - robots.txt, sitemap.xml (SEO files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)',
  ],
}; 