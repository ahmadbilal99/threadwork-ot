import { Quote } from "lucide-react";
import StitchDivider from "../components/StitchDivider.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { SERVICES } from "../data/services.js";
import { TESTIMONIALS } from "../data/testimonials.js";
import { STATS } from "../data/site.js";

export default function Home({ go }) {
  const featured = TESTIMONIALS[0];

  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="kicker">Occupational therapy, Riverbend & online</p>
          <h1>
            Relearn the moves<br />that make up a life.
          </h1>
          <p className="hero-sub">
            Dressing. Cooking. Writing a name. Getting back to work. Threadwork
            helps children and adults rebuild the everyday skills that
            illness, injury, or development have made harder — one visit at a time.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => go("booking")}>Book a consultation</button>
            <button className="btn btn-ghost" onClick={() => go("services")}>See our services</button>
          </div>
        </div>
        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-num">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <StitchDivider />

      <section className="section">
        <h2>What we work on</h2>
        <div className="services-grid compact">
          {SERVICES.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} service={s} showAge={false} />
          ))}
        </div>
        <button className="text-link" onClick={() => go("services")}>View all six services</button>
      </section>

      <StitchDivider />

      <section className="section quote-section">
        <Quote size={28} strokeWidth={1.5} />
        <p className="pull-quote">"{featured.quote}"</p>
        <p className="pull-attribution">{featured.name} — {featured.context}</p>
      </section>

      <section className="cta-band">
        <div>
          <h2>Not sure where to start?</h2>
          <p>A first consultation is a conversation, not a commitment. We'll help you figure out the right kind of support.</p>
        </div>
        <button className="btn btn-primary" onClick={() => go("booking")}>Book a consultation</button>
      </section>
    </>
  );
}
