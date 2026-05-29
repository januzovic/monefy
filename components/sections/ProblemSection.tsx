import Card from "@/components/Card";
import { problems } from "@/lib/home-page-data";
export default function ProblemSection() {
  return (
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
            guessing. But for most people, that’s exactly how it works — messy,
            unclear, and inconsistent.
          </p>
        </header>

        <div className="grid-col-2">
          {problems.map((p) => (
            <Card key={p.id} title={p.title} text={p.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
