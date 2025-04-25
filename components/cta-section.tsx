import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary/5 w-full py-16 md:py-24" id="contact">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="grid md:grid-cols-5">
            {/* Left side - colored background */}
            <div className="bg-primary flex flex-col justify-center p-8 text-white md:col-span-2 md:p-12">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                Why clients choose our affordable landing page package
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Fixed $990 price with no surprises or hidden fees</span>
                </li>
                <li className="flex items-start">
                  <Check className="mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>
                    Fast 3-week turnaround with our quick website design process
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Professional design optimized for conversions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>
                    Simple, streamlined process with clear communication
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mt-1 mr-2 h-5 w-5 flex-shrink-0" />
                  <span>Mobile-responsive and SEO-friendly</span>
                </li>
              </ul>
            </div>

            {/* Right side - CTA content */}
            <div className="flex flex-col justify-center p-8 md:col-span-3 md:p-12">
              <div className="mb-8 text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to launch your affordable landing page?
                </h2>
                <p className="text-xl text-gray-500">
                  Get started today with our fast website design service and
                  have your page live in as little as 3 weeks.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-6 md:items-start">
                <div className="flex items-center">
                  <div className="text-primary text-4xl font-bold">$990</div>
                  <div className="ml-2 text-gray-500">one-time payment</div>
                </div>

                <Button
                  size="lg"
                  className="w-full px-8 py-6 text-lg md:w-auto"
                  asChild
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2"
                  >
                    Start Your Project for $990
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <div className="text-center text-sm text-gray-500 md:text-left">
                  <p>No commitment required to get started.</p>
                  <p>
                    We&apos;ll discuss your project before any payment is made.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
