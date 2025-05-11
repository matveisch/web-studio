import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function Footer({ lang }: { lang: "he" | "en" }) {
  const dict = await getDictionary(lang);

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold">{dict.layout.siteName}</h3>
            <p className="text-sm text-gray-500">
              {dict.layout.footer.description}
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-bold">
              {dict.layout.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${lang}/`}
                  className="hover:text-primary text-gray-500"
                >
                  {dict.layout.footer.quickLinks.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="hover:text-primary text-gray-500"
                >
                  {dict.layout.footer.quickLinks.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/order`}
                  className="hover:text-primary text-gray-500"
                >
                  {dict.layout.footer.quickLinks.orderNow}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/faq`}
                  className="hover:text-primary text-gray-500"
                >
                  {dict.layout.footer.quickLinks.faq}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">
              {dict.layout.footer.contactTitle}
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>support@desight.co</li> {/* Email kept as-is */}
              {/* <li>(555) 123-4567</li> */}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold">{dict.layout.footer.legalTitle}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary text-gray-500">
                  {dict.layout.footer.legal.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary text-gray-500">
                  {dict.layout.footer.legal.termsOfService}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p dir="ltr">
            © {new Date().getFullYear()} Swift Desight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
