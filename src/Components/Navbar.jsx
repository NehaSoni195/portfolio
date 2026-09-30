import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          NS<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={handleClick}>
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            Resume
          </a>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
