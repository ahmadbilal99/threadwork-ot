import ServiceCard from "../components/ServiceCard.jsx";
import { SERVICES } from "../data/services.js";

export default function Services({ go }) {
  return (
    <section className="section page-top">
      <p className="kicker">Services</p>
      <h1>Care built around daily function</h1>
      <p className="section-lead">
        Every plan starts with the tasks that matter to you — not a generic protocol.
        Below are the areas we work in most; if yours isn't listed, ask us anyway.
      </p>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title} service={s} />
        ))}
      </div>
      <div className="cta-band inline">
        <p>Ready to talk through your situation?</p>
        <button className="btn btn-primary" onClick={() => go("booking")}>Book a consultation</button>
      </div>
    </section>
  );
}
