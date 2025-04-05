import ExamplesShowcase from "@/components/examples-showcase";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import ProblemSolution from "@/components/problem-solution";
import WhatsIncluded from "@/components/whats-included";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProblemSolution />
      <WhatsIncluded />
      <HowItWorks />
      <ExamplesShowcase />
      {/* Other sections will go here */}
    </main>
  );
}
