import React from 'react';
import { Link } from 'react-router-dom';
import {supabase} from "../../supabaseClient.js";

export default function PortalPage() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: '#f4f4f4',
        display: 'grid',
      }}
      id="container-portal"
    >
      <nav
        style={{
          backgroundColor: '#327f92',
          padding: '10px',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
        }}
        className="navbar-container"
      >
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
          }}
          className="navbar"
        >
          <li>
            <Link className="navLink" to="/online-pharmacy">Online Pharmacy</Link>
          </li>
          <li>
            <Link className="navLink" to="/send-message">Send Message</Link>
          </li>
          <li>
            <Link className="navLink" to="/request-appointment">Request Appointment</Link>
          </li>
        </ul>
      </nav>
      <section className="container">
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="sidebar-container">
          <div className="sidebar">
            <ul>
              <li><Link className="sideLink" to="/appointments">Appointments</Link></li>
              <li><Link className="sideLink" to="/clinical-summary">Clinical Summary</Link></li>
              <li><Link className="sideLink" to="/documents">Documents</Link></li>
              <li><Link className="sideLink" to="/library">Library</Link></li>
              <li><Link className="sideLink" to="/medications">Medications</Link></li>
              <li><Link className="sideLink" to="/messages">Messages</Link></li>
              <li><Link className="sideLink" to="/timeline">Timeline</Link></li>
              <li><Link className="sideLink" to="/visits">Visits</Link></li>
              <li><Link className="sideLink" to="/wellness">Wellness</Link></li>
            </ul>
          </div>
        </nav>

        <aside className="content-container">
          <div className="display-container">
            {/* Dynamic content will go here based on selected sidebar link */}
          </div>
        </aside>
      </section>
    </div>
  );
}
