import { CheckCircle, Clock, DollarSign, Zap } from "lucide-react"

export default function ProblemSolution() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Problem Column */}
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-2">The Problem</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Why Most Businesses Struggle with Web Design
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-red-100 p-2 rounded-full">
                  <DollarSign className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Too Expensive</h3>
                  <p className="text-gray-500">
                    Custom websites often cost $5,000-$20,000+, putting them out of reach for many small businesses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-red-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Too Slow</h3>
                  <p className="text-gray-500">
                    Traditional web design projects can take 2-6 months, delaying your ability to attract customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-red-100 p-2 rounded-full">
                  <Zap className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Too Complicated</h3>
                  <p className="text-gray-500">
                    Complex processes, endless revisions, and technical jargon make the experience frustrating.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 mb-2">
              Our Solution
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">The $990 Landing Page Package</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Affordable Fixed Price</h3>
                  <p className="text-gray-500">One transparent price of $990 with no hidden fees or surprise costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Fast 3-Week Turnaround</h3>
                  <p className="text-gray-500">
                    Get your professional landing page live and generating leads in just 3 weeks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Simple, Streamlined Process</h3>
                  <p className="text-gray-500">
                    Our proven template and clear process eliminates complexity and delivers results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
