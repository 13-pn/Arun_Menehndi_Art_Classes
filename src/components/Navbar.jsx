import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
       <img
          src="https://lh3.googleusercontent.com/d/18eAbQ1RXXrczaTTM-J4m4JNqwFl1fqCB"
          alt="Arun Mehndi Art & Classes Logo"
          className="logo-img"
        />

      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/T-A-C">Terms and Conditions</Link></li>
        
      </ul>

      <div className="nav-button">
        <Link to="/payment" className="book-btn">Book your slot</Link>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-links">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li>
             <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
          </li>
          <li>
             <Link to="/T-A-C" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
          </li>
        </ul>

        <Link
          to="/payment"
          className="book-btn mobile-book-btn"
          onClick={() => setMenuOpen(false)}
        >
          Book your slot
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;