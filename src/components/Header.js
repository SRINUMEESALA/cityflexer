import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <FaHome className="logo-icon" />
            <span className="logo-text">CityFixer</span>
          </Link>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`nav-link ${isActive("/services") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="/scrap-pickup"
              className={`nav-link ${
                isActive("/scrap-pickup") ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Scrap Pickup
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
