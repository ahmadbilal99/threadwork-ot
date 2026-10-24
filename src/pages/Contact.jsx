import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { SITE } from "../data/site.js";
import { submitForm } from "../api/submitForm.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitForm("contact", form);
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section className="section page-top">
      <p className="kicker">Contact</p>
      <h1>Get in touch</h1>
      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-row"><MapPin size={20} /><span>{SITE.address}</span></div>
          <div className="info-row"><Phone size={20} /><span>{SITE.phone}</span></div>
          <div className="info-row"><Mail size={20} /><span>{SITE.email}</span></div>
          <div className="info-row"><Clock size={20} /><span>{SITE.hours}</span></div>
          <div className="map-placeholder">
            <MapPin size={28} strokeWidth={1.4} />
            <span>{SITE.accessibilityNote}</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          {status === "sent" ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={24} />
              <p>Thanks, {form.name || "friend"} — we'll reply within one business day.</p>
            </div>
          ) : (
            <>
              <label>
                Name
                <input required value={form.name} onChange={update("name")} />
              </label>
              <label>
                Email
                <input required type="email" value={form.email} onChange={update("email")} />
              </label>
              <label>
                Message
                <textarea required rows={5} value={form.message} onChange={update("message")} />
              </label>
              {status === "error" && <p className="form-error" role="alert">{error}</p>}
              <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
