import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const navLinks = [
    {
      id: 1,
      label: "About",
      href: "#about"
    },
    {
      id: 2,
      label: "Department",
      href: "#departments"
    },
    {
      id: 3,
      label: "Services",
      href: "#services"
    },
    {
      id: 4,
      label: "Contact",
      href: "#contact"
    }
  ];
  
  return (
    <div>
          <header>
        <nav className="small-navbar" id="navbar">
            <ul>
                <li><i className="fa-solid fa-phone"></i>
                    <p>021 7402 5314</p>
                </li>
                <li><i className="fa-solid fa-location-dot"></i>
                    <p>Saltriver, Cape Town, South Africa</p>
                </li>
                <li><Link to="/loginForm">login</Link>|<Link to="/signupForm">signup</Link> </li>
            </ul>
        </nav>
        <nav className="navbar">
            <a href="#home">
                <h4>FOREVERCARE</h4>
            </a>
            <ul>
                {navLinks.map(link => (
                  <a href={link.href} key={link.id}>
                  <li>{link.label}</li>
                </a>
                ))}
                <li>
            <button className="button-style mobile-button">Appointment</button>
          </li>
            </ul>
            <div className="user-box">
                <button className="button-style" id="mobile-button">Appointment</button>
                <Link to="/portal"><i className="fa-solid fa-user"></i></Link>
            </div>

            <div className="mobile">
                <Link to="/portal"><i className="fa-solid fa-user"></i></Link>
                <i id="bar" className="fa-solid fa-bars"></i>
            </div>
        </nav>
    </header>
    </div>
  )
}
