import { Button } from "@/components/ui/button";
import { Calendar, Clock, Rocket } from "lucide-react";
import Link from "next/link";

export default function TurnaroundTime() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl mb-4">
              Fast Turnaround Time
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Get your professional landing page up and running quickly
            </p>
          </div>

          {/* Main content */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">
                  Up to 3 weeks from receiving your final content and
                  preferences
                </h3>
                <p className="text-gray-500">
                  While most web design projects can take months, our
                  streamlined process and focused approach allows us to deliver
                  your landing page in as little as 3 weeks.
                </p>
                <div className="pt-4">
                  <Button size="lg" asChild>
                    <Link href="#contact">Start Your Project Today</Link>
                  </Button>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                {/* Simplified 3 weeks circle */}
                <div className="relative w-[200px] h-[200px]">
                  <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-transparent border-t-primary border-r-primary"
                    style={{
                      clipPath:
                        "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%)",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-5xl font-bold text-primary">3</span>
                    <span className="text-sm font-medium text-gray-500">
                      WEEKS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Week 1</h4>
                <p className="text-gray-500 text-sm">
                  Initial setup, content organization, and design planning based
                  on your materials.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Week 2</h4>
                <p className="text-gray-500 text-sm">
                  Design implementation, content integration, and functionality
                  development.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Week 3</h4>
                <p className="text-gray-500 text-sm">
                  Final review, refinements based on your feedback, and
                  preparation for launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
