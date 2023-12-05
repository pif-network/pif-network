import { authMiddleware, withClerkMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// export default authMiddleware({
//   publicRoutes: ['/', '/sso-callback', '/welcome', '/welcome-back'],
//   ignoredRoutes: ['/((?!api|trpc))(_next.*|.+.[w]+$)'],
// });

export default withClerkMiddleware(() => {
  NextResponse.next();
});

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

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
