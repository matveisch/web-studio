import ContactForm from "@/components/contact-form";
import OrderSection from "@/components/order-section";
import { ArrowLeft, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "../dictionaries";

type Props = {
  params: Promise<{ lang: "he" | "en" }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    title: dict.contactPage.metadata.title,
    description: dict.contactPage.metadata.description,
  };
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-primary/5 py-8 md:py-12">
        <div className="px-4 md:px-6">
          <Link
            href={`/${lang}/`}
            className="text-primary mb-6 inline-flex items-center text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4 rtl:ml-2 rtl:rotate-180" />{" "}
            {dict.contactPage.backToHomeLink}
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {dict.contactPage.headline}
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            {dict.contactPage.description}
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 py-12 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-2xl font-bold">
              {dict.contactPage.questionsSection.headline}
            </h2>
            <p className="mb-8 text-gray-500">
              {dict.contactPage.questionsSection.description}
            </p>
            <ContactForm dict={dict} />
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold">
                {dict.contactPage.directContactHeadline}
              </h3>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400 rtl:ml-2" />
                <a
                  href="mailto:support@desight.co"
                  className="text-primary hover:underline"
                >
                  support@desight.co
                </a>
              </div>
            </div>
          </div>
          <OrderSection dict={dict} lang={lang} />
        </div>
      </div>
    </main>
  );
}
