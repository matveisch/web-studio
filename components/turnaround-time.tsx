import { Calendar, Clock, Rocket } from "lucide-react";

// Define the expected dictionary structure for this component
interface Dictionary {
  turnaroundTime: {
    headline: string;
    subheadline: string;
    mainContent: {
      title: string;
      description: string;
    };
    weeksLabel: string;
    timeline: {
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
      // If you add more timeline steps, add them here
    };
  };
}

interface TurnaroundTimeProps {
  dict: Dictionary;
}

export default function TurnaroundTime({ dict }: TurnaroundTimeProps) {
  // Define timeline steps structure separately, referencing dictionary keys
  // This allows us to easily loop through them while keeping icons/structure in code
  const timelineSteps = [
    {
      key: "step1" as keyof Dictionary["turnaroundTime"]["timeline"],
      icon: <Calendar className="text-primary h-6 w-6" />,
    },
    {
      key: "step2" as keyof Dictionary["turnaroundTime"]["timeline"],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary h-6 w-6"
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
      ),
    },
    {
      key: "step3" as keyof Dictionary["turnaroundTime"]["timeline"],
      icon: <Rocket className="text-primary h-6 w-6" />,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-24">
      <div className="px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="bg-primary/10 mb-4 inline-flex items-center justify-center rounded-full p-2">
              <Clock className="text-primary h-6 w-6" /> {/* Icon kept as-is */}
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              {dict.turnaroundTime.headline}
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-500">
              {dict.turnaroundTime.subheadline}
            </p>
          </div>

          {/* Main content */}
          <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">
                  {dict.turnaroundTime.mainContent.title}
                </h3>
                <p className="text-gray-500">
                  {dict.turnaroundTime.mainContent.description}
                </p>
              </div>

              <div className="flex flex-1 justify-center">
                {/* Simplified 3 weeks circle */}
                <div className="relative h-[200px] w-[200px]">
                  <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                  {/* CSS clip-path related to visual style, not translatable text */}
                  <div
                    className="border-t-primary border-r-primary absolute inset-0 rounded-full border-8 border-transparent"
                    style={{
                      clipPath:
                        "polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%, 50% 50%)",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-primary text-5xl font-bold">3</span>
                    {/* Number 3 kept as-is */}
                    <span className="text-sm font-medium text-gray-500">
                      {dict.turnaroundTime.weeksLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {timelineSteps.map((step) => {
                const stepData = dict.turnaroundTime.timeline[step.key]; // Access step data using the key

                return (
                  <div
                    key={step.key}
                    className="rounded-lg bg-gray-50 p-6 text-center"
                  >
                    <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                      {step.icon} {/* Icon kept as-is */}
                    </div>
                    <h4 className="mb-2 font-bold">{stepData.title}</h4>
                    <p className="text-sm text-gray-500">
                      {stepData.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
