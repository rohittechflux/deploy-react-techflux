import React, { useState } from "react";
import "./Header.css";
import logo from './logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`header ${isOpen ? "open" : ""}`}>
      <div className="logo">
      <img className={`logo-img ${isOpen ? "open" : ""}`} src={logo} alt="Logo" />
      </div>
      <div
        className={`menu-block ${isOpen ? "green-transition" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className={`hamburger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {isOpen && (
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
      <div className="lets-talk-button">
        Let's Talk <span className="arrow">→</span>
      </div>
    </header>
  );
};

export default Header;
