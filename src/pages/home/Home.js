import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { departments, services } from './homeData'
import FAQS from './FAQS'
import HowWeWork from './HowWeWork'

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
export default function Home() {

  return (
    <div>
      <Navbar navLinks={navLinks} />
      <section className="hero" id="home">
        <article>
          <h5>FOREVERCARE</h5>
          <h1><i>Health in a Loop, <br />
            Forever Yours.</i></h1>
          <p>our commitment to providing continuous, personalized care. At ForeverCare, your health is our ongoing
            priority, ensuring an enduring relationship of trust and support.</p>
          <Link to="/appointment"><button className="button-style">Book Appointment</button></Link>
        </article>
      </section>
      <div className="about-container">
        <section className="about" id="about">
          <div className="home_heading-left">
            <div>
              <h6>Get to know more</h6>
              <h1>ABOUT US</h1>
            </div>
          </div>
          <div className="about-text">
            <p> At ForeverCare, we are committed to providing continuous, compassionate healthcare that supports you
              at every stage of life. Our services are designed to ensure that your well-being is always our
              priority, offering a seamless loop of care that never ends. </p>
            <Link to="/about">
              <div className="button-box">
                <button className="button-style">more about us<i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </Link>
          </div>
        </section>
        <aside id='home-aside'>
          <div className="about-img">

          </div>
        </aside>
      </div>
      <section className="services-container">
        <div className="home_heading-center">
          <div>
            <h6>we offer a range of</h6>
            <h1>SERVICES</h1>
          </div>
        </div>

        <div className="services_outer-box" id="departments">
          <div className="departments-box service-box1">
            <h1>MAIN DEPARTMENTS</h1>
            <h6>At foreverCare we ensure to provide our
              patients with quality care and service in
              our different departments.</h6>
          </div>
          {departments.map((department) => (
            <div className="departments-box" key={department.id}>
              <i className={`fa-solid ${department.icon}`}></i>
              <h5>{department.title}(ED)</h5>
              <p>{department.description}</p>
            </div>
          ))}
        </div>

        <div className="line-split"></div>

        <div className="services_outer-box" id="services">
          {services.slice(0, 2).map((service) => (
            <div className="services-box" key={service.id}>
              <i className={`fa-solid ${service.icon}`}></i>
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          ))}
          <div className="services-box service-box1">
            <h1>
              OUR TOP SERVICES</h1>
            <h6> At foreverCare we ensure to provide our
              patients the correct care they deserve as
              quick as possible.</h6>
          </div>
          {services.slice(-3).map((service) => (
            <div className="services-box" key={service.id}>
              <i className={`fa-solid ${service.icon}`}></i>
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <HowWeWork />
      <FAQS/>
      
      <section className="contact" id="contact">
        <div className="home_heading-center">
          <div>
            <h6>get in touch</h6>
            <h1>CONTACT</h1>
          </div>
        </div>
        <div className="contact-box">
          <div className="map-box">
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.3017348887875!2d18.45808437501857!3d-33.933366722404706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5db42c93a685%3A0xec815c21c6eaef71!2sCapaCiTi%20Tech%20Career%20Accelerator!5e0!3m2!1sen!2sza!4v1724001290503!5m2!1sen!2sza"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
          </div>
          <div className="form-box">
            <h1>Send Us A Message</h1>
            <form className='home-form'>
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone Number" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea name="" id="" cols="30" rows="8" placeholder="Message"></textarea>
              <button className="button-style">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <a href="#navbar"><span class="toTop">
            <i class="fa-solid fa-caret-up"></i>
        </span>
    </a>
      <Footer />
    </div>
  )
}
