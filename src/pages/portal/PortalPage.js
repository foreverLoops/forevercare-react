import React from 'react';
import './PortalPage.css'

export default function PortalPage() {
  return (
    

    <div id="container-portal" >
      <nav className="navbar-container">
      <ul className="navbar">
        <li className="navLink">Online Pharmacy</li>
        <li className="navLink">Send Message</li>
        <li className="navLink">Request Appointment</li>
      </ul>
    </nav>
    <section className="container-portal">

      <input type="checkbox" id="menu-toggle"/>
      <label for="menu-toggle" className="hamburger">
          <span className='burger-strip'></span>
          <span className='burger-strip'></span>
          <span className='burger-strip'></span>
      </label>

      <nav className="sidebar-container">
        <div className="sidebar-inner-container">
          <a href='http' className="sideLink">Appointments</a>
          <a href='http' className="sideLink">Clinical Summary</a>
          <a href='http' className="sideLink">Documents</a>
          <a href='http' className="sideLink">library</a>
          <a href='http' className="sideLink">Medications</a>
          <a href='http' className="sideLink">Messages</a>
          <a href='http' className="sideLink">Timeline</a>
          <a href='http' className="sideLink">Visits</a>
          <a href='http' className="sideLink">Wellness</a>
        </div>
      </nav>

      <aside side className="content-data">
        <div className="display-data">

        </div>
      </aside>
    </section>
    </div>
  )
}
