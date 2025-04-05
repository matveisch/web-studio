import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary/5" id="contact">
      <div className="px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left side - colored background */}
            <div className="md:col-span-2 bg-primary p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Why clients choose our landing page package
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Fixed price with no surprises or hidden fees</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Fast 3-week turnaround from content to launch</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Professional design optimized for conversions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Simple, streamlined process with clear communication
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>Mobile-responsive and SEO-friendly</span>
                </li>
              </ul>
            </div>

            {/* Right side - CTA content */}
            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-center md:text-left mb-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Ready to launch your professional landing page?
                </h2>
                <p className="text-xl text-gray-500">
                  Get started today and have your page live in as little as 3
                  weeks.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start space-y-6">
                <div className="flex items-center">
                  <div className="text-4xl font-bold text-primary">$990</div>
                  <div className="ml-2 text-gray-500">one-time payment</div>
                </div>

                <Button
                  size="lg"
                  className="text-lg px-8 py-6 w-full md:w-auto"
                  asChild
                >
                  <Link
                    href="#order-form"
                    className="flex items-center justify-center gap-2"
                  >
                    Start Your Project for $990
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                <div className="text-sm text-gray-500 text-center md:text-left">
                  <p>No commitment required to get started.</p>
                  <p>We'll discuss your project before any payment is made.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
