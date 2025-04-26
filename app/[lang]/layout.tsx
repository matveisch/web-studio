import LanguageSwitcher from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getDictionary } from "./dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "he" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.layout.metadata.title,
    description: dict.layout.metadata.description,
    // ... other metadata fields using dict
    openGraph: {
      title: dict.layout.og.title,
      description: dict.layout.og.description,
      // ... rest of og config
      images: [
        {
          url: "https://swift.desight.co/bakery-desktop.png",
          width: 1200,
          height: 630,
          alt: dict.layout.og.imageAlt,
        },
      ],
      locale: lang,
      type: "website",
    },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: "he" }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${dict.layout.schema.serviceName}", // Use dictionary
              "description": "${dict.layout.schema.serviceDescription}", // Use dictionary
              "provider": {
                "@type": "Organization",
                "name": "Web Studio", // Kept as-is, potentially not translated
                "url": "https://swift.desight.co"
              },
              "offers": {
                "@type": "Offer",
                "price": "990",
                "priceCurrency": "USD",
                "priceValidUntil": "${new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0]}"
              }
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xl font-bold"
            >
              <Image
                src="/logo.png"
                alt="Swift Desight Logo" // Kept as-is, common for logos
                width={32}
                height={32}
              />
              {dict.layout.siteName}
            </Link>
            <div className="flex items-center gap-4">
              <nav className="flex items-center space-x-6">
                <Link
                  href="/"
                  className="hover:text-primary text-sm font-medium"
                >
                  {dict.layout.nav.home}
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-primary text-sm font-medium"
                >
                  {dict.layout.nav.contact}
                </Link>
                <LanguageSwitcher />
                {/* Assumes LanguageSwitcher handles its own text */}
                <Button size="sm" asChild>
                  <Link href="/order">{dict.layout.nav.orderNowButton}</Link>
                </Button>
              </nav>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t bg-gray-50">
          <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="mb-4 font-bold">{dict.layout.siteName}</h3>
                <p className="text-sm text-gray-500">
                  {dict.layout.footer.description}
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-bold">
                  {dict.layout.footer.quickLinksTitle}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-primary text-gray-500">
                      {dict.layout.footer.quickLinks.home}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-primary text-gray-500"
                    >
                      {dict.layout.footer.quickLinks.contact}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/order"
                      className="hover:text-primary text-gray-500"
                    >
                      {dict.layout.footer.quickLinks.orderNow}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-primary text-gray-500"
                    >
                      {dict.layout.footer.quickLinks.faq}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">
                  {dict.layout.footer.contactTitle}
                </h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>support@desight.co</li> {/* Email kept as-is */}
                  {/* <li>(555) 123-4567</li> */}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">
                  {dict.layout.footer.legalTitle}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-primary text-gray-500">
                      {dict.layout.footer.legal.privacyPolicy}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary text-gray-500">
                      {dict.layout.footer.legal.termsOfService}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
              <p>
                {/* Use dictionary and replace placeholder */}
                {dict.layout.footer.copyright.replace(
                  "{year}",
                  new Date().getFullYear().toString(),
                )}
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
