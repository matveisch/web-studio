import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function OrderSection() {
  return (
    <div className="bg-primary/5 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">Ready to Order?</h2>
      <p className="text-gray-500 mb-6">
        Start your landing page project today and get your professional page
        live in as little as 3 weeks.
      </p>

      <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Landing Page Package</h3>
          <div className="text-2xl font-bold text-primary">$990</div>
        </div>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Expert-designed, conversion-focused layout</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Mobile & desktop responsive design</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Your branding integration</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
            <span>Contact/lead form integration</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
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

      <div className="bg-white rounded-lg p-6">
        <h3 className="font-semibold mb-4">What happens after you order:</h3>
        <ol className="space-y-3 list-decimal pl-5">
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
