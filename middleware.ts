import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/rounting';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  const response = intlMiddleware(req);

  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.rewrite(new URL("/not-authorized", req.url));
  }

  return response;
}

export const config = {
  matcher: ['/', '/(uz|ru|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};