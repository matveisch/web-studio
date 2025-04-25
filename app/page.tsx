import CTASection from "@/components/cta-section";
import ExamplesShowcase from "@/components/examples-showcase";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import ProblemSolution from "@/components/problem-solution";
import TurnaroundTime from "@/components/turnaround-time";
import WhatsIncluded from "@/components/whats-included";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  description:
    "Get your professional, affordable landing page for just $990. Fast website design with 3-week turnaround and expert design.",
};

export default function Home() {
  return (
    <>
      <Script id="homepage-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["h1", ".hero-description"]
            },
            "name": "Affordable Landing Page Design for $990",
            "description": "Professional landing page design service with fast 3-week turnaround for just $990",
            "mainEntity": {
              "@type": "Service",
              "name": "Landing Page Design",
              "offers": {
                "@type": "Offer",
                "price": "990",
                "priceCurrency": "USD"
              }
            }
          }
        `}
      </Script>
      <main className="flex min-h-screen flex-col items-center justify-between pt-16">
        <HeroSection />
        <ProblemSolution />
        <WhatsIncluded />
        <HowItWorks />
        <ExamplesShowcase />
        <TurnaroundTime />
        <CTASection />
      </main>
    </>
  );
}
