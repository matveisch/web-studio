import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Get Your Professional Landing Page for $990
              </h1>
              <p className="text-gray-500 md:text-xl">
                Our expert-designed template, customized with your brand, live in as little as 3 weeks.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="px-8 py-6 text-lg" asChild>
                <Link href="#examples" className="flex items-center gap-2">
                  View the Landing Page Package
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image section that overrides container padding */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/visual.png"
            alt="Landing page template mockup showing desktop and mobile versions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/90 w-[100px] left-0" />
        </div>
        <div className="absolute bottom-12 left-12 bg-white p-4 rounded-lg shadow-lg z-20">
          <div className="text-sm font-medium">Ready in</div>
          <div className="text-2xl font-bold">3 Weeks</div>
        </div>
      </div>

      {/* Mobile image (shown only on smaller screens) */}
      <div className="mt-8 lg:hidden relative w-full h-[400px]">
        <Image
          src="/visual.png"
          alt="Landing page template mockup showing desktop and mobile versions"
          fill
          className="object-cover md:object-contain rounded-lg"
          priority
        />
        <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
          <div className="text-sm font-medium">Ready in</div>
          <div className="text-2xl font-bold">3 Weeks</div>
        </div>
      </div>
    </section>
  )
}
