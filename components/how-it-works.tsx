import {
  CheckSquare,
  MoveDown,
  Paintbrush,
  Rocket,
  ShoppingCart,
  Upload,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Order Package & Initial Chat",
      text: "Optional brief call to confirm fit.",
      icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    },
    {
      title: "Submit Your Materials",
      text: "Use a clear form/checklist: logo, text, images, color preferences, font choice.",
      icon: <Upload className="h-5 w-5 text-primary" />,
    },
    {
      title: "We Build & Brand Your Page",
      text: "Our team gets to work!",
      icon: <Paintbrush className="h-5 w-5 text-primary" />,
    },
    {
      title: "Review & Refine",
      text: "You review the draft; one round of minor tweaks for text/colors included.",
      icon: <CheckSquare className="h-5 w-5 text-primary" />,
    },
    {
      title: "Launch!",
      text: "We help you get it live or provide the files.",
      icon: <Rocket className="h-5 w-5 text-primary" />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            The Simple Process
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            From order to launch in 5 easy steps
          </p>
        </div>

        <div>
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center justify-center"
            >
              <div className="min-w-[64px] w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-white border-2 border-primary text-primary font-bold text-xl shadow-md z-10">
                <div className="min-w-[40px] w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full">
                  {step.icon}
                </div>
              </div>
              <div className="max-w-sm flex flex-col items-center mt-5">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-500 text-center">{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <MoveDown size={48} strokeWidth={1} className="my-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
