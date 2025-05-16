import { getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./language-switcher";

export default async function Header({ lang }: { lang: "he" | "en" }) {
  const dict = await getDictionary(lang);

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-1.5 text-xl font-bold"
        >
          <Image
            src="/logo.png"
            alt="Swift Desight Logo" // Kept as-is, common for logos
            width={32}
            height={32}
          />
          <h1 className="hidden sm:block">{dict.layout.siteName}</h1>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center space-x-6">
            <Link
              href={`/${lang}`}
              className="hover:text-primary text-sm font-medium"
            >
              {dict.layout.nav.home}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="hover:text-primary text-sm font-medium"
            >
              {dict.layout.nav.contact}
            </Link>
            <LanguageSwitcher />
            {/* Assumes LanguageSwitcher handles its own text */}
            <Button size="sm" asChild>
              <Link href={`/${lang}/order`}>
                {dict.layout.nav.orderNowButton}
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
