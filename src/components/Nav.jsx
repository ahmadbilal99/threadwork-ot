import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { NAV_ITEMS } from "../data/nav.js";
import { SITE } from "../data/site.js";

export default function Nav({ page, go, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={() => go("home")}>
          <Logo />
          <span>{SITE.name}</span>
        </button>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={"nav-link" + (page === item.id ? " active" : "")}
              onClick={() => go(item.id)}
              aria-current={page === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="nav-mobile" aria-label="Primary mobile">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={"nav-link-mobile" + (page === item.id ? " active" : "")}
              onClick={() => go(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
