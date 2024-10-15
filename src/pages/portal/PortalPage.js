import React from 'react';
import { Link } from 'react-router-dom';

export default function PortalPage() {
  return (
    
    <div id="container-portal" >
      <nav class="navbar-container">
      <ul class="navbar">
        <Link className="navLink">Online Pharmacy</Link>
        <Link className="navLink">Send Message</Link>
        <Link className="navLink">Request Appointment</Link>
      </ul>
    </nav>
    <section class="container">
      
      <input type="checkbox" id="menu-toggle"/>
      <label for="menu-toggle" class="hamburger">
          <span></span>
          <span></span>
          <span></span>
      </label>

      <nav class="sidebar-container">
        <ul class="sidebar">
          <Link>Appointments</Link>
          <Link>Clinical Summary</Link>
          <Link>Documents</Link>
          <Link>library</Link>
          <Link>Medications</Link>
          <Link>Messages</Link>
          <Link>Timeline</Link>
          <Link>Visits</Link>
          <Link>Wellness</Link>
        </ul>
      </nav>

      <aside class="content">
        <div class="display">

        </div>
      </aside>
    </section>
    </div>
  )
}
