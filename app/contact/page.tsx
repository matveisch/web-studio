import ContactForm from "@/components/contact-form";
import OrderSection from "@/components/order-section";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <div className="bg-primary/5 py-8 md:py-12">
        <div className="px-4 md:px-6">
          <Link
            href="/"
            className="text-primary mb-6 inline-flex items-center text-sm font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get Started with Your Landing Page
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            Have questions or ready to order? We&apos;re here to help you get
            your professional landing page up and running.
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 py-12 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {/* Contact Form Section */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Have Questions?</h2>
            <p className="mb-8 text-gray-500">
              Fill out this simple form if you have pre-sale questions about our
              landing page package. We&apos;ll get back to you within 1 business
              day.
            </p>

            <ContactForm />

            <div className="mt-8 space-y-4">
              <h3 className="font-semibold">Prefer to reach us directly?</h3>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-400" />
                <a
                  href="mailto:hello@webstudio.com"
                  className="text-primary hover:underline"
                >
                  hello@webstudio.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-400" />
                <a
                  href="tel:+15551234567"
                  className="text-primary hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Order Section */}
          <OrderSection />
        </div>
      </div>
    </main>
  );
}
