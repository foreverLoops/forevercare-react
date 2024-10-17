import React from 'react';
import { Link } from 'react-router-dom';
export default function PortalPage() {
  return (
    

    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      backgroundColor: '#f4f4f4',
      display: 'grid',
      }} id="container-portal" >
      <nav style={{
        backgroundColor: '#327f92',
        padding: '10px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',}} class="navbar-container">
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',}} class="navbar">
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
        <div class="sidebar">
          <Link className="sideLink">Appointments</Link>
          <Link className="sideLink">Clinical Summary</Link>
          <Link className="sideLink">Documents</Link>
          <Link className="sideLink">library</Link>
          <Link className="sideLink">Medications</Link>
          <Link className="sideLink">Messages</Link>
          <Link className="sideLink">Timeline</Link>
          <Link className="sideLink">Visits</Link>
          <Link className="sideLink">Wellness</Link>
        </div>
      </nav>

      <aside class="content">
        <div class="display">

        </div>
      </aside>
    </section>
    </div>
  )
}
