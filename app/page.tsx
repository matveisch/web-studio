import HeroSection from "@/components/hero-section"
import ProblemSolution from "@/components/problem-solution"
import WhatsIncluded from "@/components/whats-included"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProblemSolution />
      <WhatsIncluded />
      {/* Other sections will go here */}
    </main>
  )
}
