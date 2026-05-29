import { premiumCard, solutions } from "@/lib/home-page-data";
import Card from "../Card";
import Button from "../Button";
export default function SolutionSection() {
  return (
    <section className="pad-section solution-section">
      <div className="container">
        <h2 className="title-secondary text-center">
          Everything you need to manage your finances with clarity
        </h2>
        <p className="subtitle">
          Track expenses, monitor your spending habits, and build smarter saving
          routines — all from a clean and simple interface designed for everyday
          use.
        </p>
        <div className="premium-card">
          <h3 className="title-tertiary">{premiumCard[0].title}</h3>
          <p className="subtitle">{premiumCard[0].subtitle}</p>
          <div className="grid grid-2-col">
            {premiumCard[0].list.map((l) => (
              <div className="grid-item" key={l}>
                {l}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-3-col">
          {solutions.map((s) => (
            <Card key={s.id} title={s.title} text={s.subtitle} />
          ))}
        </div>
        <Button
          className="btn btn-center btn-primary mt-30"
          text={"Start Now — Free"}
        />
      </div>
    </section>
  );
}
