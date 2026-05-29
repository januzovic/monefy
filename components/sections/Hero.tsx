import Link from "next/link";
import HeroSvg from "../HeroSvg";
import Button from "../Button";

export default function Hero() {
  return (
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
            <Button className="btn" text={"Start Now — Free"} />
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
  );
}
