import ContactForm from "@/components/contact-form";
import OrderSection from "@/components/order-section";
import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "../dictionaries";

type Props = {
  params: { lang: "en" | "he" };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.contactPage.metadata.title,
    description: dict.contactPage.metadata.description,
  };
}

// Page component - make it async to load the dictionary
export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="bg-primary/5 py-8 md:py-12">
        <div className="px-4 md:px-6">
          {/* Link back to home using dictionary text */}
          <Link
            href="/" // Adjust href if your home page path is also localized
            className="text-primary mb-6 inline-flex items-center text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4 rtl:ml-2 rtl:rotate-180" />{" "}
            {/* Icon kept as-is */}
            {dict.contactPage.backToHomeLink}
          </Link>
          {/* Main page headline */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {dict.contactPage.headline}
          </h1>
          {/* Main page sub-description */}
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            {/* Use dictionary - &apos; is handled in JSON */}
            {dict.contactPage.description}
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 py-12 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Contact Form Section */}
          <div>
            {/* Contact form section headline */}
            <h2 className="mb-6 text-2xl font-bold">
              {dict.contactPage.questionsSection.headline}
            </h2>
            {/* Contact form section description */}
            <p className="mb-8 text-gray-500">
              {/* Use dictionary - &apos; is handled in JSON */}
              {dict.contactPage.questionsSection.description}
            </p>
            {/* Pass dictionary section to ContactForm if needed */}
            <ContactForm dict={dict} />
            <div className="mt-8 space-y-4">
              {/* Direct contact options headline */}
              <h3 className="font-semibold">
                {dict.contactPage.directContactHeadline}
              </h3>
              {/* Email contact - email and link text kept as-is */}
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400 rtl:ml-2" />
                {/* Icon kept as-is */}
                <a
                  href="mailto:support@desight.co" // Email kept as-is
                  className="text-primary hover:underline"
                >
                  support@desight.co {/* Link text kept as-is */}
                </a>
              </div>
              {/* Phone contact (commented out in original) */}
              {/*
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <a
                  href="tel:+15551234567"
                  className="text-primary hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>
              */}
              {/* WhatsApp contact (commented out in original) */}
              {/*
              <div>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-0 bg-[#25D366] text-white hover:bg-[#128C7E]"
                  asChild
                >
                  <a
                    href={`https://wa.me/0`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp // This text would need internationalization if uncommented
                  </a>
                </Button>
              </div>
              */}
            </div>
          </div>

          {/* Order Section - assuming it handles its own text or receives dict */}
          <OrderSection dict={dict} />
        </div>
      </div>
    </main>
  );
}
