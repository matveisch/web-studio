import { getDictionary } from "@/app/[lang]/dictionaries";
import { CheckCircle, Clock, DollarSign, Zap } from "lucide-react";

// Accept dict as a prop
export default async function ProblemSolution({ lang }: { lang: "he" | "en" }) {
  const dict = await getDictionary(lang);

  return (
    <section className="w-full bg-gray-50 py-12 md:py-24">
      <div className="px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Problem Column */}
          <div className="space-y-6">
            <div className="mb-2 inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">
              {dict.problemSolution.problemTitle}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {dict.problemSolution.problemHeadline}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-red-100 p-2">
                  <DollarSign className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {dict.problemSolution.problem1.title}
                  </h3>
                  <p className="text-gray-500">
                    {dict.problemSolution.problem1.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-red-100 p-2">
                  <Clock className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {dict.problemSolution.problem2.title}
                  </h3>
                  <p className="text-gray-500">
                    {dict.problemSolution.problem2.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-red-100 p-2">
                  <Zap className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {dict.problemSolution.problem3.title}
                  </h3>
                  <p className="text-gray-500">
                    {dict.problemSolution.problem3.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div className="space-y-6">
            <div className="mb-2 inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
              {dict.problemSolution.solutionTitle}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {dict.problemSolution.solutionHeadline}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-green-100 p-2">
                  <CheckCircle className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {dict.problemSolution.solution1.title}
                  </h3>
                  <p className="text-gray-500">
                    {dict.problemSolution.solution1.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-green-100 p-2">
                  <CheckCircle className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {dict.problemSolution.solution2.title}
                  </h3>
                  <p className="text-gray-500">
                    {dict.problemSolution.solution2.description}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-green-100 p-2">
                  <CheckCircle className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {dict.problemSolution.solution3.title}
                  </h3>
                  <p className="text-gray-500">
                    {dict.problemSolution.solution3.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
