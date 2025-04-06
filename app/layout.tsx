import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Studio - Professional Landing Pages for $990",
  description:
    "Get your professional, conversion-focused landing page for just $990. Fast 3-week turnaround and expert design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
            <Link href="/" className="text-xl font-bold">
              Web Studio
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="hover:text-primary text-sm font-medium">
                Home
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary text-sm font-medium"
              >
                Contact
              </Link>
              <Button size="sm" asChild>
                <Link href="/order">Order Now</Link>
              </Button>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t bg-gray-50">
          <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="mb-4 font-bold">Web Studio</h3>
                <p className="text-sm text-gray-500">
                  Professional landing pages for businesses of all sizes. Fixed
                  price, fast turnaround.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-bold">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-primary text-gray-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-primary text-gray-500"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/order"
                      className="hover:text-primary text-gray-500"
                    >
                      Order Now
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-primary text-gray-500"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>hello@webstudio.com</li>
                  <li>(555) 123-4567</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="hover:text-primary text-gray-500">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary text-gray-500">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} Web Studio. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
