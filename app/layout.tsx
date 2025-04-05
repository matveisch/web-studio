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
          <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">
              Web Studio
            </Link>
            <nav className="space-x-6">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h3 className="font-bold mb-4">Web Studio</h3>
                <p className="text-sm text-gray-500">
                  Professional landing pages for businesses of all sizes. Fixed
                  price, fast turnaround.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="text-gray-500 hover:text-primary">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-500 hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/order"
                      className="text-gray-500 hover:text-primary"
                    >
                      Order Now
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>hello@webstudio.com</li>
                  <li>(555) 123-4567</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-primary">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-primary">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
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
