import OrderForm from "@/components/order-form";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Your $990 Landing Page | Fast Website Design",
  description:
    "Order your affordable landing page for just $990. Fast website design with 3-week turnaround. Start your project today.",
};

export default function OrderPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Header */}
      <div className="bg-primary/5 py-8 md:py-12">
        <div className="px-4 md:px-6">
          <Link
            href="/contact"
            className="text-primary mb-6 inline-flex items-center text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Contact
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Order Your $990 Landing Page
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            Complete this form to start your affordable landing page project.
            Our fast website design process ensures delivery in just 3 weeks.
          </p>
        </div>
      </div>

      <div className="container flex-1 px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <OrderForm />
        </div>
      </div>
    </main>
  );
}
