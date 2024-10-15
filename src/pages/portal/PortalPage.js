import React from 'react'

export default function PortalPage() {
  return (
    
    <div id="container-portal" >
      <nav class="navbar-container">
      <ul class="navbar">
        <a href="#">Online Store</a>
        <a href="#">Send Message</a>
        <a href="/public/appointment.html">Request Appointment</a>
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
          <li>Appointments</li>
          <li>Clinical Summary</li>
          <li>Documents</li>
          <li>Library</li>
          <li>Medications</li>
          <li>Messages</li>
          <li>Timeline</li>
          <li>Visits</li>
          <li>Wellness</li>
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
