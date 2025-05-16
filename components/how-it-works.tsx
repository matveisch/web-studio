import { getDictionary } from "@/app/[lang]/dictionaries";
import {
  CheckSquare,
  MoveDown,
  Paintbrush,
  Rocket,
  ShoppingCart,
  Upload,
} from "lucide-react";

// Define icons separately, as they are JSX, not text
const stepIcons = {
  step1: <ShoppingCart className="text-primary h-5 w-5" />,
  step2: <Upload className="text-primary h-5 w-5" />,
  step3: <Paintbrush className="text-primary h-5 w-5" />,
  step4: <CheckSquare className="text-primary h-5 w-5" />,
  step5: <Rocket className="text-primary h-5 w-5" />,
};

// Get the specific literal types of the step keys ('step1' | 'step2' | ...)
type StepKey = keyof typeof stepIcons;

export default async function HowItWorks({ lang }: { lang: "he" | "en" }) {
  const dict = await getDictionary(lang);

  return (
    <section className="w-full bg-gray-50 py-12 md:py-24">
      <div className="px-4 md:px-6">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            {dict.howItWorks.headline} {/* Use dictionary */}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
            {dict.howItWorks.subheadline} {/* Use dictionary */}
          </p>
        </div>

        <div>
          {/* Map over the keys of the steps object to maintain order */}
          {/* Assert the type of stepKeyString to be StepKey */}
          {Object.keys(dict.howItWorks.steps).map((stepKeyString, index) => {
            const stepKey = stepKeyString as StepKey; // Type assertion here

            // Now TypeScript knows stepKey is 'step1' | 'step2' | ...
            const icon = stepIcons[stepKey]; // Access stepIcons using the asserted type
            const stepData = dict.howItWorks.steps[stepKey]; // Access step data using the asserted type

            return (
              <div
                key={stepKey} // Use the step key as the unique key
                className="flex flex-col items-center justify-center"
              >
                <div className="border-primary text-primary z-10 flex h-16 w-16 min-w-[64px] flex-shrink-0 items-center justify-center rounded-full border-2 bg-white text-xl font-bold shadow-md">
                  <div className="flex h-10 w-10 min-w-[40px] flex-shrink-0 items-center justify-center rounded-full">
                    {icon} {/* Use the icon defined in the component */}
                  </div>
                </div>
                <div className="mt-5 flex max-w-sm flex-col items-center">
                  <div className="mb-2 flex items-center">
                    <h3 className="text-xl font-bold">
                      {stepData.title} {/* Use stepData */}
                    </h3>
                  </div>
                  <p className="text-center text-gray-500">
                    {stepData.text} {/* Use stepData */}
                  </p>
                </div>
                {/* Add the MoveDown icon between steps */}
                {index < Object.keys(dict.howItWorks.steps).length - 1 && (
                  <MoveDown size={48} strokeWidth={1} className="my-5" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
