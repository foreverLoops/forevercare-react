import React from 'react';

import "../aboutUs/aboutUs.css"


export default function AboutUs() {
  
  
  

  // const aboutNavLinks = [
  //   { id: 1, label: 'Home', 
  //     href: '/home' 
  //   },
  //   { id: 2, label: 'Our Story', 
  //     href: '#uniqueStory' 
  //   },
  //   { id: 3, label: 'Healthcare Professionals', 
  //     href: '#doctors' 
  //   },
  //   { id: 4, label: 'Development Team', 
  //     href: '#devTeam' 

  //   },
  //   // { id: 5, label: 'Appointment', 
  //   //   button: true 

  //   // },
  // ];


  return (
    <div>
      {/* Header */}
      <header>
        <nav className="small-navbar">
          <ul>
            <li><i className="fa-solid fa-phone"></i>021 123 4566</li>
            <li><i className="fa-solid fa-location-dot"></i>Saltriver, Cape Town, South Africa</li>
            <li><a href="/LoginForm">login</a> | <a href="/signUp">signup</a></li>
          </ul>
        </nav>
        <nav className="navbar">
          <h4>FOREVERCARE</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="#uniqueStory">Our Story</a></li>
            <li><a href="#doctors">Healthcare Professionals</a></li>
            <li><a href="#devTeam">Development Team</a></li>
            <li><button className="button-style mobile-button">Appointment</button></li>
          </ul>
          <div className="user-box">
            <a href="/appointment"><button className="button-style" id="mobile-button">Appointment</button></a>
            <a href="portal.html"><i className="fa-solid fa-user"></i></a>
          </div>
          <div className="mobile">
            <i id="bar" className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main>
        {/* About Us Content */}
        <section className="aboutUsContent">
          <div className="aboutUsHeader">
            <h2>Get To Know More About Us..</h2>
          </div>
        </section>

        {/* About Us Details */}
        <section className="aboutUsDetails">
          <div className="aboutUsBackground">
            <div className="aboutUsInfo">
              <h3 className='heading3'>Who are we</h3>
              <div className="line"></div>
              <p>ForeverCare Hospital is a leading healthcare provider dedicated to offering top-quality medical services with compassion and expertise. Our team of skilled professionals is committed to delivering personalized care in a state-of-the-art facility. At ForeverCare, your health and well-being are our top priorities. We strive to make every patient’s experience positive and supportive, ensuring the best possible outcomes.</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="ourStoryBackground">
          <div id="uniqueStory" className="our-story">
            <h4>Our Unique Story</h4>
            <div className="border"></div>
            <p className="message">A commitment that Lasts a Lifetime, forever Yours.</p>
          </div>
          <div className="story">
            <p>"Forever Yours" is not just a name; it's our promise. We are dedicated to being there for you and your loved ones through every stage of life, offering not just treatments but a hand to hold, a shoulder to lean on, and a community that understands the importance of both health and hope. Our unique blend of advanced medical expertise and heartfelt care ensures that you are not just treated, you are truly cared for, in every sense of the word. We pride ourselves on fostering relationships that last a lifetime, with a commitment to your well-being that transcends the typical patient-caregiver relationship.</p>
          </div>
        </section>


        {/* Carousel Section */}
        <section className="carousel">
          <div className="card-wrapper container">
            <i id="left" className="fa-solid fa-circle-arrow-left"></i>
            <div className="card-list">
              <div className="card-item box1">
                <div className="card-link">
                  <h3 className="card-title purpose">Our purpose</h3>
                  <p className="badge">Our purpose is making life better. And we fulfill that purpose by means of our compassionate and patient-centric approach.</p>
                </div>
              </div>
              <div className="card-item box2">
                <div className="card-link">
                  <h3 className="card-title Values">Core Values</h3>
                  <h4>Our values consist of:</h4>
                  <p className="badge">
                    1.<b>Care:</b> Provide compassionate and dedicated medical care<br /><br />
                    2.<b>Responsibility:</b> Take ownership of our actions and decisions<br /><br />
                    3.<b>Participation:</b> Encourage active participation from patients and the community<br /><br />
                    4.<b>Excellence:</b> Strive for excellence in medical care and services.
                  </p>
                </div>
              </div>
              <div className="card-item box1">
                <div className="card-link">
                  <h3 className="card-title Mission">Mission</h3>
                  <p className="badge Mission">We are committed to delivering exceptional medical care, education, and research to improve the healthcare and well-being of our patients.</p>
                </div>
              </div>
              <div className="card-item box1">
                <div className="card-link">
                  <h3 className="card-title vision">Vision</h3>
                  <p className="badge">“Transforming healthcare to improve lives”</p>
                </div>
              </div>
            </div>
            <i id="right" className="fa-solid fa-circle-arrow-right"></i>
          </div>
        </section>
        
        

        {/* Our Doctors Section */}
        <section className="our-doctors">
          <h2 className="heading-center">Our Healthcare Professionals</h2>
          <div id="doctors" className="grid-container">
            <div className="card"><img src="/media/doctor1.jpg" alt="Doll Jolly" className="doctor-img" /><h3 className='doctorName'>Smith Patel</h3><p className="occupation">GYNECOLOGIST</p></div>
            <div className="card"><img src="/media/doctor2.png" alt="Martine Adam" className="doctor-img" /><h3 className='doctorName'>Martine Adam</h3><p className="occupation">NEUROLOGIST</p></div>
            <div className="card"><img src="/media/doctor3.jpg" alt="Lucika Lorem" className="doctor-img" /><h3 className='doctorName'>Lucika Jane</h3><p className="occupation">CARDIOLOGIST</p></div>
            <div className="card"><img src="/media/doctor4.jpg" alt="Piter Parker" className="doctor-img" /><h3 className='doctorName'>Piter Parker</h3><p className="occupation">PSYCHOLOGIST</p></div>
            <div className="card"><img src="/media/doctor6.png" alt="Jonathan Doe" className="doctor-img" /><h3 className='doctorName'>Jonathan Doe</h3><p className="occupation">PEDIATRICIAN</p></div>
          </div>
        </section>

        {/* Development Team Section */}
        <section id="devTeam"className="team-section">
          <h1 className="heading-center">Development Team</h1>
          <div className="team-container">
            <div className="team-member">
              <img src="/media/Aphiwe.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Aphiwe Ncayiyane</p>
              <p className="quote">"How is never as important as why"</p>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="team-member">
              <img src="/media/mogamat.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Mogamat Jaleel Lee</p>
              <p className="quote">"Be the change you wish to see <br />in the world"</p>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="team-member">
              <img src="/media/petersen.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Shabbeer Petersen</p>
              <p className="quote">"Everything you've done up until<br/>now has not gone to waste."</p>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="team-member">
              <img src="/media/yusri.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Yusri Nelson</p>
              <p className="quote">"Futures don't make themselves,<br/> you create them."</p>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="team-member">
              <img src="/media/mulalo.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Mulalo Masithembi</p>
              <p className="quote">"Your patience is your power."</p>
              <div className="social-icons">
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <footer>
          <div className="footer-list-box">
            <ul className="footer-socials">
              <li><i className="fa-brands fa-linkedin"></i></li>
              <li><i className="fa-brands fa-google-plus"></i></li>
              <li><i className="fa-brands fa-square-twitter"></i></li>
              <li><i className="fa-brands fa-facebook"></i></li>
            </ul>
            <div className="footer-list">
              <dl>
                <dt>Quick Links</dt>
                <dd>Home</dd>
                <dd>About Us</dd>
                <dd>Services & Departments</dd>
                <dd>Contact Us</dd>
              </dl>
              <dl>
                <dd>FAQs</dd>
                <dd>Privacy Policy</dd>
                <dd>Terms & Conditions</dd>
                <dd>Support</dd>
              </dl>
              <dl>
                <dt>Contact Info</dt>
                <dd><i className="fa-solid fa-phone"></i>021 7402 5314</dd>
                <dd><i className="fa-solid fa-location-dot"></i>Saltriver, Cape Town</dd>
                <dd><i className="fa-solid fa-envelope"></i>forevercare@gmail.com</dd>
                <dd><i className="fa-solid fa-clock"></i>24hr open</dd>
              </dl>
            </div>
            <p className="footer-text">© 2024 ForeverCare. All rights reserved.</p>
          </div> */}
        {/* </footer> */}
      </main>
    </div>
  );
}
