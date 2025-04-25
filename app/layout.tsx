import LanguageSwitcher from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Swift Desight - Affordable Landing Page Design for $990 | Fast Website Design",
  description:
    "Get your professional, affordable landing page for just $990. Fast 3-week turnaround with expert design. Affordable landing page design with quick delivery.",
  keywords: [
    "affordable landing page",
    "fast website design",
    "$990 landing page",
    "professional landing page",
    "quick website design",
    "budget landing page",
    "landing page package",
    "3-week website",
    "business landing page",
  ],
  openGraph: {
    title: "Affordable Landing Page Design for $990 | Fast Website Design",
    description:
      "Professional landing pages with 3-week turnaround. Fixed price of $990 with no hidden fees.",
    url: "https://swift.desight.co",
    siteName: "Swift Desight",
    images: [
      {
        url: "https://swift.desight.co/bakery-desktop.png",
        width: 1200,
        height: 630,
        alt: "Swift Desight - Affordable Landing Page Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Affordable Landing Page Design",
              "description": "Professional landing page design service for $990 with fast 3-week turnaround",
              "provider": {
                "@type": "Organization",
                "name": "Web Studio",
                "url": "https://swift.desight.co",
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
                alt="Swift Desight Logo"
                width={32}
                height={32}
              />
              Swift Desight
            </Link>
            <div className="flex items-center gap-4">
              <nav className="flex items-center space-x-6">
                <Link
                  href="/"
                  className="hover:text-primary text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-primary text-sm font-medium"
                >
                  Contact
                </Link>
                <LanguageSwitcher />

                <Button size="sm" asChild>
                  <Link href="/order">Order Now</Link>
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
                <h3 className="mb-4 font-bold">Swift Desight</h3>
                <p className="text-sm text-gray-500">
                  Professional affordable landing pages for businesses of all
                  sizes. Fixed $990 price, fast turnaround.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-bold">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-primary text-gray-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-primary text-gray-500"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/order"
                      className="hover:text-primary text-gray-500"
                    >
                      Order Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-primary text-gray-500"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>support@desight.co</li>
                  {/* <li>(555) 123-4567</li> */}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-primary text-gray-500">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary text-gray-500">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} Swift Desight. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
