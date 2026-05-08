import { useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    "About",
    "Skills",
    "Capabilities",
    "Experience",
    "Services",
    "Projects",
    "Contact",
  ];

  return (
    <nav>
      <span className="nav-logo">MD</span>
      <ul id="portfolio-nav" className={`nav-links ${open ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            {/* Clicking a link closes mobile menu */}
            <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          </li>
        ))}
      </ul>
      {/* Hamburger / close icon */}
      <button
        className="nav-mobile"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="portfolio-nav"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
}

export default Nav;
