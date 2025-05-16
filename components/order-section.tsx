import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

// Define the expected dictionary structure for this component
interface Dictionary {
  orderSection: {
    headline: string;
    description: string;
    priceLabel: string;
    packageSummary: {
      title: string;
      benefits: string[]; // benefits is an array of strings
    };
    postOrderHeadline: string;
    postOrderSteps: string[]; // postOrderSteps is an array of strings
  };
  layout: {
    // Need layout for the Order Now button text
    nav: {
      orderNowButton: string;
      // ... other nav items if needed
    };
    // ... other layout sections if needed
  };
}

interface OrderSectionProps {
  dict: Dictionary;
  lang: "he" | "en";
}

export default function OrderSection({ dict, lang }: OrderSectionProps) {
  return (
    <div className="bg-primary/5 rounded-xl p-8">
      <h2 className="mb-6 text-2xl font-bold">{dict.orderSection.headline}</h2>
      <p className="mb-6 text-gray-500">{dict.orderSection.description}</p>

      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">
            {dict.orderSection.packageSummary.title}
          </h3>
          <div className="text-primary text-2xl font-bold">
            {dict.orderSection.priceLabel}
          </div>
        </div>

        <ul className="mb-6 space-y-3">
          {dict.orderSection.packageSummary.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500 rtl:ml-2" />{" "}
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <Button size="lg" className="w-full" asChild>
          <Link
            href={`/${lang}/order`}
            className="flex items-center justify-center gap-2"
          >
            {dict.layout.nav.orderNowButton}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
          </Link>
        </Button>
      </div>

      <div className="rounded-lg bg-white p-6">
        <h3 className="mb-4 font-semibold">
          {dict.orderSection.postOrderHeadline}
        </h3>
        <ol className="list-decimal space-y-3 pl-5 rtl:pr-5">
          {/* Map over the post-order steps array from the dictionary */}
          {dict.orderSection.postOrderSteps.map((step, index) => (
            <li key={index}>
              {/* Use dictionary - apostrophes handled in JSON */}
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
