import { Users } from "lucide-react";
import { TEAM } from "../data/team.js";

export default function Team() {
  return (
    <section className="section page-top">
      <p className="kicker">Our team</p>
      <h1>Four therapists, one approach</h1>
      <p className="section-lead">
        Small enough that you'll always work with the same therapist, large enough
        to cover pediatric, hand, neuro, and older-adult care under one roof.
      </p>
      <div className="team-grid">
        {TEAM.map((t, i) => (
          <div className={"team-card" + (i % 2 === 1 ? " offset" : "")} key={t.name}>
            <div className="team-avatar" aria-hidden="true">
              <Users size={30} strokeWidth={1.5} />
            </div>
            <h3>{t.name}</h3>
            <p className="team-creds">{t.creds}</p>
            <p className="team-focus">{t.focus}</p>
            <p>{t.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
