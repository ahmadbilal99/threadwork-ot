import Logo from "./Logo.jsx";
import { NAV_ITEMS } from "../data/nav.js";
import { SITE } from "../data/site.js";

export default function Footer({ go }) {
  return (
    <footer className="site-footer">
      <div>
        <div className="brand footer-brand">
          <Logo size={26} />
          <span>{SITE.name}</span>
        </div>
        <p className="footer-tag">{SITE.tagline}</p>
      </div>
      <div className="footer-links">
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => go(item.id)}>{item.label}</button>
        ))}
      </div>
      <p className="footer-fine">© {new Date().getFullYear()} {SITE.fullName}. This is a demo site.</p>
    </footer>
  );
}
