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
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/why-choose-us">Why Choose Us</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
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
            <Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          </li>
          <li>
            <Link to="/why-choose-us" onClick={() => setMenuOpen(false)}>Why Choose Us</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
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
