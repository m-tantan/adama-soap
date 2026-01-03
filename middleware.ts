import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // List of supported locales
  locales: ['en', 'de'],
  
  // Default locale
  defaultLocale: 'en',
  
  // Always show locale in URL
  localePrefix: 'always'
});

export const config = {
  // Match all pathnames except API routes, Next.js internals, and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
