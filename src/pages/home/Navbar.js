import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function Navbar({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);  // Track user state
  const navigate = useNavigate();

  const toggleNavbar = () => setIsOpen(!isOpen);

  // Check for an authenticated user on component mount
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);  // Set user if logged in, otherwise null
    });

    return () => authListener  // Clean up the listener
  }, []);

  // Handle user logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");  // Redirect to home after logout
  };

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
            {user ? (
              <p className="home-logout" onClick={handleLogout}>Logout</p>
            ) : (
              <>
                <Link to="/">Login</Link> | <Link to="/SignupForm">Signup</Link>
              </>
            )}
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
