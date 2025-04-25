import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function OrderSection() {
  return (
    <div className="bg-primary/5 rounded-xl p-8">
      <h2 className="mb-6 text-2xl font-bold">Ready to Order?</h2>
      <p className="mb-6 text-gray-500">
        Start your affordable landing page project today and get your
        professional page live in as little as 3 weeks with our fast website
        design service.
      </p>

      <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">Landing Page Package</h3>
          <div className="text-primary text-2xl font-bold">$990</div>
        </div>

        <ul className="mb-6 space-y-3">
          <li className="flex items-start">
            <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
            <span>Expert-designed, conversion-focused layout</span>
          </li>
          <li className="flex items-start">
            <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
            <span>Mobile & desktop responsive design</span>
          </li>
          <li className="flex items-start">
            <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
            <span>Your branding integration</span>
          </li>
          <li className="flex items-start">
            <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
            <span>Contact/lead form integration</span>
          </li>
          <li className="flex items-start">
            <Check className="mt-0.5 mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
            <span>Basic SEO setup</span>
          </li>
        </ul>

        <Button size="lg" className="w-full" asChild>
          <Link
            href="/order"
            className="flex items-center justify-center gap-2"
          >
            Order Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      <div className="rounded-lg bg-white p-6">
        <h3 className="mb-4 font-semibold">What happens after you order:</h3>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            You&apos;ll receive an email with our onboarding questionnaire
          </li>
          <li>
            We&apos;ll schedule an optional brief call to confirm project
            details
          </li>
          <li>You&apos;ll submit your content and preferences</li>
          <li>Our team will build your landing page</li>
          <li>You&apos;ll review and we&apos;ll make any needed refinements</li>
          <li>Your page goes live!</li>
        </ol>
      </div>
    </div>
  );
}
