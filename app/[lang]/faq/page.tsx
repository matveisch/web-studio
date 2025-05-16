import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";
import { getDictionary } from "../dictionaries";

// Define Props to get route parameters (assuming locale is in params)
type Props = {
  params: Promise<{ lang: "he" | "en" }>;
};

// Make generateMetadata async to load the dictionary for metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    // Use translated metadata from the dictionary
    title: dict.faqPage.metadata.title,
    description: dict.faqPage.metadata.description,
    keywords: dict.faqPage.metadata.keywords, // Keywords array from dictionary
  };
}

// Page component - make it async to load the dictionary
export default async function FAQPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // Get the keys for the questions (e.g., 'item-1', 'item-2', ...)
  // This ensures the order is maintained as defined in the JSON
  const questionKeys = Object.keys(dict.faqPage.questions);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="bg-primary/5 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          {/* Link back to home */}
          <Link
            href={`/${lang}/`}
            className="text-primary mb-6 inline-flex items-center text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4 rtl:mr-0 rtl:ml-2 rtl:rotate-180" />{" "}
            {/* Icon kept as-is */}
            {dict.faqPage.backToHomeLink} {/* Use dictionary */}
          </Link>
          {/* Main page headline */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {dict.faqPage.headline} {/* Use dictionary */}
          </h1>
          {/* Main page description */}
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            {dict.faqPage.description} {/* Use dictionary */}
          </p>
        </div>
      </div>

      <div className="container flex-1 px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Map over the question keys to get data from the dictionary */}
          {/* Type assertion for safety, assuming keys match Accordion values */}
          <Accordion type="single" collapsible className="space-y-4">
            {questionKeys.map((itemKeyString) => {
              // Assert the string key to be one of the valid keys from the dictionary
              type QuestionKey = keyof typeof dict.faqPage.questions;
              const itemKey = itemKeyString as QuestionKey;

              const questionData = dict.faqPage.questions[itemKey];

              return (
                <AccordionItem
                  key={itemKey}
                  value={itemKey}
                  className="rounded-lg border px-6"
                >
                  <AccordionTrigger className="py-4 text-lg font-medium">
                    {questionData.trigger} {/* Use dictionary */}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-gray-500">
                    {/* Content can be a single string or an array of strings/HTML */}
                    {Array.isArray(questionData.content) ? (
                      questionData.content.map((contentItem, i) => {
                        // Check if the item includes HTML tags to decide rendering method
                        const containsHtml = /<\/?[a-z][\s\S]*>/i.test(
                          contentItem,
                        );
                        if (containsHtml) {
                          // Use dangerouslySetInnerHTML for content containing HTML (like strong, em, ul, li)
                          // Be cautious and ensure your CMS/source sanitizes HTML
                          return (
                            <p
                              key={i}
                              dangerouslySetInnerHTML={{ __html: contentItem }}
                            />
                          );
                        } else {
                          // Render plain text inside a paragraph or appropriate tag
                          return <p key={i}>{contentItem}</p>;
                        }
                      })
                    ) : (
                      // Handle case where content is a single string
                      <p>{questionData.content}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Footer note with dynamic date placeholder */}
          <div className="mt-12 text-center text-sm text-gray-500">
            {/* Replace {date} placeholder with the actual date (e.g., using locale date formatting) */}
            <p>{dict.faqPage.footerNote.replace("{date}", "April 6, 2025")}</p>{" "}
            {/* Example: replace with hardcoded date for now */}
          </div>
        </div>
      </div>
    </main>
  );
}
