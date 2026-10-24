import Testimonial from "../components/Testimonial.jsx";
import { TESTIMONIALS } from "../data/testimonials.js";

export default function Testimonials() {
  return (
    <section className="section page-top">
      <p className="kicker">Testimonials</p>
      <h1>In their own words</h1>
      <div className="testimonial-list">
        {TESTIMONIALS.map((t) => (
          <Testimonial key={t.name + t.quote.slice(0, 12)} item={t} />
        ))}
      </div>
    </section>
  );
}
