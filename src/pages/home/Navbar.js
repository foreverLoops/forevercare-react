import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const navLinks = [
    {
      id: 1,
      label: "About",
      href: "#about",
    },
    {
      id: 2,
      label: "Department",
      href: "#departments",
    },
    {
      id: 3,
      label: "Services",
      href: "#services",
    },
    {
      id: 4,
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header>
      {/* Small Top Navbar */}
      <nav className="small-navbar" id="navbar">
        <ul>
          <li>
            <i className="fa-solid fa-phone"></i>
            <p>021 7402 5314</p>
          </li>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <p>Saltriver, Cape Town, South Africa</p>
          </li>
          <li>
            <Link to="/">login</Link> | <Link to="/SignupForm">signup</Link>
          </li>
        </ul>
      </nav>

      {/* Main Navbar */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <a href="#home">
          <h4>FOREVERCARE</h4>
        </a>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <button className="button-style mobile-button">Appointment</button>
          </li>
        </ul>

        <div className="user-box">
          <button className="button-style">Appointment</button>
          <Link to="/portal">
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="mobile">
          <Link to="/portal">
            <i className="fa-solid fa-user"></i>
          </Link>
          <i
            id="bar"
            className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}
            onClick={toggleNavbar}
          ></i>
        </div>
      </nav>
    </header>
  );
}
