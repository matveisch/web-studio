import OrderForm from "@/components/order-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OrderPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="bg-primary/5 py-8 md:py-12">
        <div className="px-4 md:px-6">
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-medium text-primary mb-6 hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Contact
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Order Your Landing Page
          </h1>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl">
            Complete this form to start your landing page project. We&apos;ll be
            in touch within 1 business day to confirm details.
          </p>
        </div>
      </div>

      <div className="flex-1 container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <OrderForm />
        </div>
      </div>
    </main>
  );
}
