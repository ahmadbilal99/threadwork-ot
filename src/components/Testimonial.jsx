import { Quote } from "lucide-react";

export default function Testimonial({ item, small = true }) {
  return (
    <div className="testimonial-card">
      <Quote size={22} strokeWidth={1.5} />
      <p className={"pull-quote" + (small ? " small" : "")}>"{item.quote}"</p>
      <p className="pull-attribution">{item.name} — {item.context}</p>
    </div>
  );
}
