import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-container">
      <div className="nav-items u-container">
        <Link to="/">
          <button className="nav-logo">
            <img
              src="/images/logo-black.svg"
              className="trilogy-logo"
              alt="Trilogy in all uppercase"
            />
          </button>
        </Link>
        <div className="nav-links">
          <div className="nav-links-container">
            <Link to="/company">
              <button className="first-btn">Company</button>
            </Link>
            <Link to="/portfolio">
              <button>Portfolio</button>
            </Link>
            <Link to="/careers">
              <button>Careers</button>
            </Link>
            <Link to="/residents">
              <button>Residents</button>
            </Link>
            <Link to="/management">
              <button>Management</button>
            </Link>
            <Link to="/investors">
              <button>Investors</button>
            </Link>
            <Link to="/contact">
              <button className="last-btn">Contact</button>
            </Link>
          </div>
        </div>
        <div
          className={`hamburger-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="mm-nav-links u-container">
          <h5 className="mobile-eyebrow">Navigation</h5>
          <Link className="mobile-links" to="/company" onClick={toggleMenu}>
            Company
          </Link>
          <Link className="mobile-links" to="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link className="mobile-links" to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
        <div className="mm-client-links u-container">
          <h5 className="mobile-eyebrow">Client Access</h5>
          <Link className="mobile-links" to="/careers" onClick={toggleMenu}>
            Careers
          </Link>
          <Link className="mobile-links" to="/residents" onClick={toggleMenu}>
            Residents
          </Link>
          <Link className="mobile-links" to="/management" onClick={toggleMenu}>
            Management
          </Link>
          <Link className="mobile-links" to="/investors" onClick={toggleMenu}>
            Investors
          </Link>
        </div>
        <div className="mobile-footer">
          <div className="mf-divider"></div>
          <div className="mobile-footer-inner-content u-container">
            <p>© 2023 Trilogy Real Estate Group</p>
            <div className="mf-links-container">
              <a href="#">TERMS</a>
              <a href="#">PRIVACY POLICY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
