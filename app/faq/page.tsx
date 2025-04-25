import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Affordable $990 Landing Page | Fast Website Design",
  description:
    "Frequently asked questions about our affordable $990 landing page package with fast 3-week turnaround time.",
  keywords: [
    "affordable landing page FAQ",
    "fast website design questions",
    "$990 landing page details",
  ],
};

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="bg-primary/5 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Link
            href="/"
            className="text-primary mb-6 inline-flex items-center text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            Here are answers to common questions about our affordable $990
            Landing Page with fast website design.
          </p>
        </div>
      </div>

      <div className="container flex-1 px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                What exactly can I customize on the affordable landing page?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <p>
                  You have significant flexibility! You can choose your
                  preferred colors, fonts (from standard web-safe options or
                  Google Fonts), and background images. You also dictate the
                  order of the different content sections on the page. We build
                  each page custom for you – there are no restrictive templates.
                  You&apos;ll also provide specific images like your logo or
                  product photos to be included.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                What content do I need to provide?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <p>
                  You will need to provide essential information specific to
                  your needs, such as your contact details, company logo, and
                  any specific images you want featured. For the main text
                  sections (headlines, descriptions, etc.), if you don&apos;t
                  have final copy ready, we can use well-structured placeholder
                  text to build the page. However, please note (as explained in
                  question 4) that updating this text later requires coding
                  assistance unless arranged differently beforehand. We can use
                  icons and placeholder images where needed, which you would
                  replace by providing your final images to us.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                Is hosting or a domain name included in the $990 price?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Domain Name:</strong> No, the domain name (e.g.,
                    www.yourcompany.com) is not included. You will need to
                    purchase this yourself from a domain registrar. We can offer
                    guidance on this process if needed.
                  </li>
                  <li>
                    <strong>Hosting:</strong> We provide complimentary basic
                    hosting for your landing page initially. This hosting is
                    suitable for typical landing page traffic levels. If your
                    page&apos;s traffic grows significantly and requires more
                    server resources, we will discuss transitioning to a
                    standard paid hosting plan with you and can assist in
                    setting that up.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                Can I update the content myself later?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <p className="mb-4">
                  Typically, no. The standard landing page is built using code
                  (HTML/CSS/JS) for optimal performance and design flexibility.
                  This means changes to text, images, or layout after the site
                  is live require coding knowledge. Any updates needed after the
                  project completion would be handled as a separate request, and
                  we can provide a quote for the work involved.
                </p>
                <p>
                  <strong>Exception:</strong> If you know beforehand that
                  you&apos;ll need to frequently update specific sections
                  yourself (like portfolio images or promotional banners),
                  please discuss this with us <em>before</em> the project
                  starts. We can potentially build those specific parts using a
                  different method that allows easier updates, which might
                  affect the project scope and cost.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                What is the estimated turnaround time?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <p>
                  Our standard turnaround time is approximately 3 weeks,
                  starting from when we receive the 50% deposit and all
                  necessary content/information from you (like your logo,
                  specific text, images, and customization choices). This
                  timeline can be adjusted if the scope involves specific,
                  complex requirements discussed beforehand.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                What if I need more pages or features later?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <p>
                  This offer is specifically for a single landing page. If you
                  decide later that you need a full multi-page website or
                  additional features (like a blog, e-commerce, or booking
                  system), we&apos;d be happy to discuss that as a separate
                  project and provide a new quote based on your requirements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                What does &apos;Basic SEO&apos; include?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <p className="mb-4">
                  Our Basic SEO setup ensures your landing page is technically
                  ready for search engines. This includes:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Setting up essential meta tags (like Title tags and Meta
                    Descriptions) based on the content provided.
                  </li>
                  <li>
                    Ensuring the page structure uses appropriate header tags
                    (H1, H2, etc.).
                  </li>
                  <li>Submitting your landing page to Google for indexing.</li>
                  <li>Ensuring the page is mobile-friendly.</li>
                </ul>
                <p className="mt-4">
                  This service focuses on the technical on-page setup but does
                  not include advanced SEO strategies like keyword research,
                  link building, or ongoing content creation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                How many revisions are included?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <p>
                  We include up to 5 rounds of revisions during the design and
                  development phase. A revision round typically involves you
                  providing feedback on the current draft, and us implementing
                  those changes. We aim to get everything perfect within these
                  rounds. If further changes are requested after these 5 rounds
                  are exhausted, they will be quoted separately based on the
                  extent of the requested changes.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="rounded-lg border px-6">
              <AccordionTrigger className="py-4 text-lg font-medium">
                What is the cost and how do I pay?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-gray-500">
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Total Cost:</strong> $990 USD.
                  </li>
                  <li>
                    <strong>Payment Terms:</strong> We require a 50% deposit
                    ($495) upfront to begin the project, with the remaining 50%
                    ($495) due upon completion and your final approval, before
                    the page goes live on your hosting/domain.
                  </li>
                  <li>
                    <strong>Payment Methods:</strong> We accept major
                    credit/debit cards. If you are located locally, we may be
                    able to arrange cash payment upon request.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>FAQ as of April 6, 2025. Pricing and terms subject to change.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
