import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/rounting';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(uz|ru|en)/:path*']
};