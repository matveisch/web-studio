import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ExamplesShowcase() {
  const examples = [
    {
      id: 1,
      title: "Local Bakery",
      description:
        "A mouth-watering landing page for a local bakery that showcases their artisanal products and drives in-store visits.",
      desktopImage: "/bakery-desktop.png",
      mobileImage: "/bakery-mobile.png",
      benefits: [
        "Menu showcase with beautiful imagery",
        "Easy location and hours information",
        "Online order form for special requests",
      ],
    },
    {
      id: 2,
      title: "Fitness Challenge",
      description:
        "An energetic, motivational landing page for a 30-day fitness challenge program with clear sign-up process.",
      desktopImage: "/fitness-desktop.png",
      mobileImage: "/fitness-mobile.png",
      benefits: [
        "Personalized workout plan previews",
        "Community forum access for support and motivation",
        "Simple registration process with payment integration",
      ],
    },
    {
      id: 3,
      title: "Educational Blog",
      description:
        "A clean, content-focused landing page for an educational blog that highlights key articles and encourages subscriptions.",
      desktopImage: "/blog-desktop.png",
      mobileImage: "/blog-mobile.png",
      benefits: [
        "Categorized article previews with featured images",
        "Category and tag system",
        "Email newsletter subscription form",
      ],
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 bg-white overflow-hidden"
      id="examples"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Examples of Our Work
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            See what your $990 landing page could look like
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {examples.map((example) => (
            <div
              key={example.id}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Desktop & Mobile Preview - Always on the left for consistency */}
              <div className="relative">
                {/* Desktop Preview */}
                <div className="relative rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <Image
                    src={example.desktopImage || "/placeholder.svg"}
                    alt={`${example.title} desktop view`}
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                {/* Mobile Preview - Positioned to overlap */}
                <div className="absolute -bottom-10 -right-5 w-1/4 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src={example.mobileImage || "/placeholder.svg"}
                    alt={`${example.title} mobile view`}
                    width={400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{example.title}</h3>
                <p className="text-gray-500">{example.description}</p>
                <ul className="space-y-2">
                  {example.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-green-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="#contact">Get Your Landing Page Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
