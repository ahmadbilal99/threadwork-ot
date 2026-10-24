import { useEffect, useState } from "react";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Team from "./pages/Team.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Booking from "./pages/Booking.jsx";
import { NAV_ITEMS } from "./data/nav.js";
import { useHashRoute } from "./hooks/useHashRoute.js";

// Add a new page: create it in /pages, add it here and in data/nav.js.
const PAGES = {
  home: Home,
  services: Services,
  team: Team,
  testimonials: Testimonials,
  contact: Contact,
  booking: Booking,
};

export default function App() {
  const [page, go] = useHashRoute(NAV_ITEMS.map((item) => item.id));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [page]);

  const Page = PAGES[page];

  return (
    <div className="site">
      <Nav page={page} go={go} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Page go={go} />
      </main>
      <Footer go={go} />
    </div>
  );
}
