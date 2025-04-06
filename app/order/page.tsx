import OrderForm from "@/components/order-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
            Order Your Landing Page
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            Complete this form to start your landing page project. We&apos;ll be
            in touch within 1 business day to confirm details.
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
