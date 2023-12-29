import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/mentors/(.*)',
    '/sso-callback',
    '/welcome',
    '/welcome-back',
    '/api/webhook',
    '/_vercel/speed-insights/vitals',
  ],
  // ignoredRoutes: ['/api/trpc/(.*)'],
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)',
    '/',
  ],
};
