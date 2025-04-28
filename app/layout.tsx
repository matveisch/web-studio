import Footer from "@/components/footer";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export default async function RootLayout({
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
        // todo as i get it the only thing to do is to put header and footer components into each page
        <Header lang="en" />
        {children}
        <Footer lang="en" />
      </body>
    </html>
  );
}
