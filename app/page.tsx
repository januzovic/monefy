import ProblemCard from "@/components/ProblemCard";
import Link from "next/link";
import { problems } from "@/lib/home-page-data";
import HeroSvg from "@/components/HeroSvg";

export default function Home() {
  return (
    <main className="site-main">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="title-primary">
              <span className="line">Spend Smarter,</span>
              <span className="line">
                Save <span className="marked">Faster</span>
              </span>
            </h1>

            <p className="subtitle">
              Track daily expenses and turn small savings into bigger progress —
              no spreadsheets, no shame, no maths degree required.
            </p>

            <ol className="hero-list">
              <li className="hero-list-item">
                Understand your spending habits instantly
              </li>
              <li className="hero-list-item">
                Stay on top of your budget without effort
              </li>
              <li className="hero-list-item">
                Built for daily use, not financial experts
              </li>
            </ol>

            <div className="hero-cta">
              <Link href="/register" className="btn">
                Start Now — Free
                <span className="arr">↗</span>
              </Link>
              <p className="hero-cta-aside">
                No card. No catch. Two minutes to first entry.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <HeroSvg />
          </div>
        </div>
      </section>

      <section className="pad-section">
        <div className="container">
          <header className="section-head section-head--problem">
            <h2 className="title-secondary">
              Your money <em>disappears</em>
              <br />
              without you noticing.
            </h2>
            <p className="problem-lede">
              Tracking your expenses shouldn’t require spreadsheets, notes, or
              guessing. But for most people, that’s exactly how it works —
              messy, unclear, and inconsistent.
            </p>
          </header>

          <div className="grid-col-2">
            {problems.map((p) => (
              <ProblemCard key={p.id} title={p.title} text={p.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="pad-section solution-section">
        <h2 className="title-secondary"></h2>
      </section>
    </main>
  );
}
