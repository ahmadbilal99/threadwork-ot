import { useState } from "react";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { SERVICES } from "../data/services.js";
import { TIME_SLOTS } from "../data/site.js";
import { submitForm } from "../api/submitForm.js";

const EMPTY = {
  name: "", email: "", phone: "", service: SERVICES[0].title, date: "", time: "", notes: "",
};

export default function Booking() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });
  const today = new Date().toISOString().split("T")[0];

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitForm("booking", form);
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <section className="section page-top">
        <div className="booking-confirm" role="status">
          <CheckCircle2 size={34} />
          <h1>You're on the calendar</h1>
          <p>
            We've pencilled in a {form.service.toLowerCase()} visit for {form.name} on{" "}
            {form.date || "a date to confirm"} {form.time && `(${form.time})`}. A confirmation
            call will follow within one business day.
          </p>
          <button
            className="btn btn-ghost"
            onClick={() => { setForm(EMPTY); setStatus("idle"); }}
          >
            Book another visit
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section page-top">
      <p className="kicker">Booking</p>
      <h1>Book a visit</h1>
      <p className="section-lead">
        Tell us a little about what you need. This holds your spot — we'll confirm details by phone.
      </p>

      <form className="booking-form" onSubmit={submit}>
        <div className="form-grid">
          <label>
            Full name
            <input required value={form.name} onChange={update("name")} />
          </label>
          <label>
            Email
            <input required type="email" value={form.email} onChange={update("email")} />
          </label>
          <label>
            Phone
            <input required type="tel" value={form.phone} onChange={update("phone")} />
          </label>
          <label>
            Service
            <select value={form.service} onChange={update("service")}>
              {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </label>
          <label>
            Preferred date
            <input required type="date" min={today} value={form.date} onChange={update("date")} />
          </label>
          <label>
            Preferred time
            <select required value={form.time} onChange={update("time")}>
              <option value="">Select a time</option>
              {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
        </div>
        <label className="full-width">
          Anything we should know?
          <textarea
            rows={4}
            value={form.notes}
            onChange={update("notes")}
            placeholder="Referral details, accessibility needs, past diagnoses..."
          />
        </label>
        {status === "error" && <p className="form-error" role="alert">{error}</p>}
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          <CalendarDays size={18} /> {status === "sending" ? "Sending..." : "Confirm booking request"}
        </button>
      </form>
    </section>
  );
}
