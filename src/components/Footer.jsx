import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Paulius Savickas</p>
      <div className="social-icons">
        <a
          href="https://github.com/FriendlyGuy1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/paulius-savickas-544327250/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
