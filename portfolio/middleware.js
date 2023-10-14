import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

export function middleware(req) {
  let lng;
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !req.nextUrl.pathname.startsWith('/_next') &&
    !req.nextUrl.pathname.startsWith('/robots.txt')
  ) {
    if (!languages.some((loc) => req.nextUrl.pathname.split('/')[1] === loc)) {
      const newPath = req.nextUrl.pathname.split('/');
      const startWith = languages.filter((lang) => req.nextUrl.pathname.startsWith(`/${lang}`));
      if (startWith.length) {
        newPath[1] = [startWith];
        return NextResponse.redirect(new URL(newPath.join('/'), req.url));
      }
      return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
    }
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'));
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
