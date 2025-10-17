import Footer from "@/components/footer";
import Header from "@/components/header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { getDictionary } from "./dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "he" | "en" }>;
}) {
  const { lang } = await params;
  if (!["he", "en"].includes(lang)) {
    return null; // or redirect("/")
  }
  const dict = await getDictionary(lang);
  return {
    title: dict.layout.metadata.title,
    description: dict.layout.metadata.description,
    keywords: dict.layout.metadata.keywords,
    openGraph: {
      title: dict.layout.og.title,
      description: dict.layout.og.description,
      url: "https://swift.desight.co",
      siteName: dict.layout.siteName,
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
  params: Promise<{ lang: "he" | "en" }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  if (!["he", "en"].includes(lang)) {
    return null; // or redirect("/")
  }
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"}>
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "${dict.layout.schema.serviceName}", 
              "description": "${dict.layout.schema.serviceDescription}",
              "provider": {
                "@type": "Organization",
                "name": "Swift Desight",
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
        <Header lang={lang} />
        {children}
        <Footer lang={lang} />
      </body>
      <GoogleAnalytics gaId="AW-17172490707" />
    </html>
  );
}
