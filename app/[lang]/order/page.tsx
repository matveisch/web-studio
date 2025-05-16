import OrderForm from "@/components/order-form";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "../dictionaries";

// Define Props to get route parameters (assuming locale is in params)
type Props = {
  params: { lang: "en" | "he" };
};

// Make generateMetadata async to load the dictionary for metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    // Use translated metadata from the dictionary
    title: dict.orderPage.metadata.title,
    description: dict.orderPage.metadata.description,
    // You might also want to adjust openGraph metadata here if it's page-specific
  };
}

// Page component - make it async to load the dictionary
export default async function OrderPage({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Header */}
      <div className="bg-primary/5 py-8 md:py-12">
        <div className="px-4 md:px-6">
          <Link
            href={`/${lang}/`}
            className="text-primary mb-6 inline-flex items-center text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4 rtl:mr-0 rtl:ml-2 rtl:rotate-180" />{" "}
            {/* Icon kept as-is */}
            {dict.orderPage.backToContactLink}
          </Link>
          {/* Main page headline */}
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {dict.orderPage.headline}
          </h1>
          {/* Main page sub-description */}
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            {dict.orderPage.description}
          </p>
        </div>
      </div>

      <div className="container flex-1 px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* OrderForm component - assuming it handles its own text or receives dict */}
          <OrderForm dict={dict} lang={lang} />
        </div>
      </div>
    </main>
  );
}
