import React from 'react';
import { Link } from 'react-router-dom';
import './PortalPage.css'
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
          <Link className="sideLink">Appointments</Link>
          <Link className="sideLink">Clinical Summary</Link>
          <Link className="sideLink">Documents</Link>
          <Link className="sideLink">library</Link>
          <Link className="sideLink">Medications</Link>
          <Link className="sideLink">Messages</Link>
          <Link className="sideLink">Timeline</Link>
          <Link className="sideLink">Visits</Link>
          <Link className="sideLink">Wellness</Link>
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
