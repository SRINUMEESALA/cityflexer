import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaHome className="footer-logo-icon" />
              <span className="footer-logo-text">CityFixer</span>
            </div>
            <p className="footer-description">
              Fast, reliable home services at your doorstep. We provide
              professional cleaning, AC repair, plumbing, and scrap pickup
              services to make your life easier.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/scrap-pickup">Scrap Pickup</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li>Cleaning</li>
              <li>AC Repair</li>
              <li>Plumbing</li>
              <li>Fan/TV Fix</li>
              <li>Cooking Help</li>
              <li>Door Repair</li>
              <li>Sofa Repair</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>123-483-7960</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@cityfixer.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>134 Mart Six Hame, City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 CityFixer. All rights reserved.</p>
            <div className="social-links">
              <a
                href="https://facebook.com/cityfixer"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/cityfixer"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/cityfixer"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
