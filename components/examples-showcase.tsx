import Image from "next/image";

// Define the expected dictionary structure for this component
interface Dictionary {
  examplesShowcase: {
    headline: string;
    subheadline: string;
    imageAltDesktop: string; // Alt text pattern
    imageAltMobile: string; // Alt text pattern
    examples: {
      // Explicitly define the known keys here
      example1: {
        title: string;
        description: string;
        desktopImage: string;
        mobileImage: string;
        benefits: string[];
      };
      example2: {
        title: string;
        description: string;
        desktopImage: string;
        mobileImage: string;
        benefits: string[];
      };
      example3: {
        title: string;
        description: string;
        desktopImage: string;
        mobileImage: string;
        benefits: string[];
      };
      // Add index signature if you want to allow any string key (less strict)
      // [key: string]: { ... }; // <-- Optional, if your structure might have unknown keys
    };
  };
}

interface ExamplesShowcaseProps {
  dict: Dictionary;
}

// Get the specific literal types of the example keys ('example1' | 'example2' | ...)
type ExampleKey = keyof Dictionary["examplesShowcase"]["examples"];

export default function ExamplesShowcase({ dict }: ExamplesShowcaseProps) {
  // Get the keys for the examples (e.g., 'example1', 'example2', 'example3')
  const exampleKeys = Object.keys(
    dict.examplesShowcase.examples,
  ) as ExampleKey[]; // Assert the type of the array

  return (
    <section
      className="w-full overflow-hidden bg-white py-12 md:py-24"
      id="examples"
    >
      <div className="px-4 md:px-6">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            {dict.examplesShowcase.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
            {dict.examplesShowcase.subheadline}
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* Map over the example keys to get data from the dictionary */}
          {/* exampleKey is already asserted as ExampleKey by asserting the array type */}
          {exampleKeys.map((exampleKey, index) => {
            // No assertion needed here if the array was asserted above
            const example = dict.examplesShowcase.examples[exampleKey];

            // Generate alt text using the translated pattern and example title
            const desktopAlt = dict.examplesShowcase.imageAltDesktop.replace(
              "{title}",
              example.title,
            );
            const mobileAlt = dict.examplesShowcase.imageAltMobile.replace(
              "{title}",
              example.title,
            );

            return (
              // Using exampleKey as the key for React list rendering
              <div
                key={exampleKey}
                className="grid items-center gap-8 md:grid-cols-2"
              >
                {/* Desktop & Mobile Preview - Always on the left for consistency */}
                <div className="relative">
                  {/* Desktop Preview */}
                  <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-lg">
                    <Image
                      src={example.desktopImage || "/placeholder.svg"}
                      alt={desktopAlt} // Use dynamic alt text
                      width={1200}
                      height={600}
                      className="h-auto w-full"
                      priority={index === 0} // Prioritize the first image
                    />
                  </div>

                  {/* Mobile Preview - Positioned to overlap */}
                  <div className="absolute -bottom-10 w-1/4 overflow-hidden rounded-lg border-4 border-white shadow-lg ltr:-right-5 rtl:-left-5">
                    <Image
                      src={example.mobileImage || "/placeholder.svg"}
                      alt={mobileAlt} // Use dynamic alt text
                      width={400}
                      height={800}
                      className="h-auto w-full"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{example.title}</h3>
                  <p className="text-gray-500">{example.description}</p>
                  <ul className="space-y-2">
                    {/* Map over the benefits array from the dictionary */}
                    {example.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
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
                        {/* Benefit text from dictionary */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
