import { getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Accept dict as a prop
export default async function HeroSection({ lang }: { lang: "he" | "en" }) {
  const dict = await getDictionary(lang);

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24 lg:py-32">
      <div className="relative z-10 px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {dict.hero.headline}
              </h1>
              <p className="text-gray-500 md:text-xl">
                {dict.hero.subheadline}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="px-8 py-6 text-lg" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  {dict.hero.ctaButton}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image section that overrides container padding */}
      <div
        className={`absolute top-0 hidden h-full w-1/2 lg:block ltr:right-0 rtl:left-0`}
      >
        <div className="relative h-full w-full">
          <Image
            src="/visual.png"
            alt={dict.hero.imageAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="inset-s-0 absolute inset-0 w-[100px] bg-gradient-to-r from-white/90 to-transparent rtl:bg-gradient-to-l" />
        </div>
        <div className="absolute bottom-12 left-12 z-20 rounded-lg bg-white p-4 shadow-lg">
          <div className="text-sm font-medium">{dict.hero.readyInLabel}</div>
          <div className="text-2xl font-bold">{dict.hero.readyInValue}</div>
        </div>
      </div>

      {/* Mobile image (shown only on smaller screens) */}
      <div className="relative mt-8 h-[400px] w-full lg:hidden">
        <Image
          src="/visual.png"
          alt={dict.hero.imageAlt}
          fill
          className="rounded-lg object-cover md:object-contain"
          priority
        />
        <div className="absolute right-4 bottom-4 rounded-lg bg-white p-4 shadow-lg">
          <div className="text-sm font-medium">{dict.hero.readyInLabel}</div>
          <div className="text-2xl font-bold">{dict.hero.readyInValue}</div>
        </div>
      </div>
    </section>
  );
}
