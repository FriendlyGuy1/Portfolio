import React, { useState } from "react";
import "./css/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close the menu after a section is clicked
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="menu-icon" onClick={handleToggleMenu}>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`menu-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <button onClick={() => handleScroll("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScroll("about")}>About</button>
        </li>
        <li>
          <button onClick={() => handleScroll("projects")}>Projects</button>
        </li>
        <li>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
