import { getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface Dictionary {
  ctaSection: {
    benefitsHeadline: string;
    benefits: string[];
    ctaPrice: string;
    ctaHeadline: string;
    ctaDescription: string;
    oneTimePaymentLabel: string;
    ctaButton: string;
    noCommitmentText: string;
    discussionText: string;
  };
}

export default async function CTASection({ lang }: { lang: "he" | "en" }) {
  const dict = await getDictionary(lang);

  return (
    <section className="bg-primary/5 w-full py-16 md:py-24" id="contact">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="grid md:grid-cols-5">
            {/* Left side - colored background */}
            <div className="bg-primary flex flex-col justify-center p-8 text-white md:col-span-2 md:p-12">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                {dict.ctaSection.benefitsHeadline}
              </h3>
              <ul className="space-y-4">
                {/* Map over the benefits array from the dictionary */}
                {dict.ctaSection.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mt-1 mr-2 h-5 w-5 flex-shrink-0" />{" "}
                    {/* Icon kept as-is */}
                    <span>{benefit}</span> {/* Benefit text from dictionary */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - CTA content */}
            <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-12">
              <div className="mb-8 text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  {dict.ctaSection.ctaHeadline}
                </h2>
                <p className="text-xl text-gray-500">
                  {dict.ctaSection.ctaDescription}
                </p>
              </div>

              <div className="flex flex-col items-center space-y-6 md:items-start">
                <div className="flex items-center">
                  <div className="text-primary text-4xl font-bold">
                    {dict.ctaSection.ctaPrice}
                  </div>
                  {/* Price kept as-is */}
                  <div className="ml-2 text-gray-500 rtl:mr-2">
                    {dict.ctaSection.oneTimePaymentLabel}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full px-8 py-6 text-lg md:w-auto"
                  asChild
                >
                  <Link
                    href={`/${lang}/contact`}
                    className="flex items-center justify-center gap-2"
                  >
                    {dict.ctaSection.ctaButton}
                    <ArrowRight className="h-5 w-5 rtl:rotate-180" />{" "}
                    {/* Icon kept as-is */}
                  </Link>
                </Button>

                <div className="text-center text-sm text-gray-500 md:text-left">
                  <p>{dict.ctaSection.noCommitmentText}</p>{" "}
                  <p>{dict.ctaSection.discussionText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
