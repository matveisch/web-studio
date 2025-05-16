import { getDictionary } from "@/app/[lang]/dictionaries";
import {
  FileImage,
  FormInput,
  Layout,
  MousePointerClick,
  Palette,
  Search,
  Smartphone,
  Zap,
} from "lucide-react";

// Accept dict as a prop
export default async function WhatsIncluded({ lang }: { lang: "he" | "en" }) {
  const dict = await getDictionary(lang);

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="px-4 md:px-6">
        <div className="mb-10 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            {/* Using 'apos' for the apostrophe was a workaround, now use dictionary */}
            {dict.whatsIncluded.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-500">
            {dict.whatsIncluded.subheadline}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Layout className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {dict.whatsIncluded.features.feature1.title}
            </h3>
            <p className="text-gray-500">
              {dict.whatsIncluded.features.feature1.description}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Smartphone className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {dict.whatsIncluded.features.feature2.title}
            </h3>
            <p className="text-gray-500">
              {dict.whatsIncluded.features.feature2.description}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Palette className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {dict.whatsIncluded.features.feature3.title}
            </h3>
            <p className="text-gray-500">
              {dict.whatsIncluded.features.feature3.description}
            </p>
          </div>

          {/* Feature 4 */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <FileImage className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {dict.whatsIncluded.features.feature4.title}
            </h3>
            <p className="text-gray-500">
              {/* Using 'apos' was a workaround, now use dictionary */}
              {dict.whatsIncluded.features.feature4.description}
            </p>
          </div>

          {/* Feature 5 */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <FormInput className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {dict.whatsIncluded.features.feature5.title}
            </h3>
            <p className="text-gray-500">
              {dict.whatsIncluded.features.feature5.description}
            </p>
          </div>

          {/* Feature 6 */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <MousePointerClick className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {dict.whatsIncluded.features.feature6.title}
            </h3>
            <p className="text-gray-500">
              {dict.whatsIncluded.features.feature6.description}
            </p>
          </div>

          {/* Feature 7 */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Search className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {dict.whatsIncluded.features.feature7.title}
            </h3>
            <p className="text-gray-500">
              {dict.whatsIncluded.features.feature7.description}
            </p>
          </div>

          {/* Feature 8 */}
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
              <Zap className="text-primary h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">
              {dict.whatsIncluded.features.feature8.title}
            </h3>
            <p className="text-gray-500">
              {dict.whatsIncluded.features.feature8.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
