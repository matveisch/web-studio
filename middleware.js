import { NextResponse } from "next/server";

let locales = ["en", "he"];

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return locales[0];

  const preferredLocale = acceptLanguage
    .split(",")
    .map((locale) => locale.split(";")[0].trim())
    .find((locale) => locales.includes(locale));

  return preferredLocale || locales[0];
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return;
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Redirect to the preferred locale if no locale is found in the pathname
  const preferredLocale = getLocale(request);
  return Response.redirect(`${request.nextUrl.origin}/${preferredLocale}`, 307);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - files with extensions (.jpg, .png, etc)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
