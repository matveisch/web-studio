let locales = ["he"];

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

  if (pathnameHasLocale || pathname === "/") return;

  // Redirect to the preferred locale if no locale is found in the pathname
  const preferredLocale = getLocale(request);
  return Response.redirect(`${request.nextUrl.origin}/${preferredLocale}`, 307);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
