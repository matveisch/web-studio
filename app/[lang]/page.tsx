import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import WhatsIncluded from "@/components/whats-included";
import Script from "next/script";
import { getDictionary } from "./dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "he" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    description: dict.home.metadataDescription,
    // You could also override title or other metadata if needed
    // title: dict.layout.metadata.title, // Example reusing layout title
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "he" | "en" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Script id="homepage-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".hero-description"] // CSS selectors typically not translated
            },
            "name": "${dict.home.schema.name}", // Use dictionary
            "description": "${dict.home.schema.description}", // Use dictionary
            "mainEntity": {
              "@type": "Service",
              "name": "${dict.home.schema.serviceName}", // Use dictionary
              "offers": {
                "@type": "Offer",
                "price": "990", // Price kept as-is
                "priceCurrency": "USD" // Currency kept as-is
              }
            }
          }
        `}
      </Script>
      <main className="flex min-h-screen flex-col items-center justify-between pt-16">
        <HeroSection lang={lang} />
        <ProblemSolution lang={lang} />
        <WhatsIncluded lang={lang} />
      </main>
    </> // Add to Cart
  );
}
