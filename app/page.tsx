import CTASection from "@/components/cta-section";
import ExamplesShowcase from "@/components/examples-showcase";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import ProblemSolution from "@/components/problem-solution";
import TurnaroundTime from "@/components/turnaround-time";
import WhatsIncluded from "@/components/whats-included";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <HeroSection />
      <ProblemSolution />
      <WhatsIncluded />
      <HowItWorks />
      <ExamplesShowcase />
      <TurnaroundTime />
      <CTASection />
    </main>
  );
}
