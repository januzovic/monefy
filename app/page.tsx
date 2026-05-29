import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";

export default function Home() {
  return (
    <main className="site-main">
      <Hero />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}
