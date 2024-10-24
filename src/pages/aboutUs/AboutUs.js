import React from 'react';
import Footer from '../home/Footer';

import "../aboutUs/aboutUs.css"
import Navbar from '../home/Navbar';


export default function AboutUs() {
  
  
  const aboutLinks = [
    {
      id: 1,
      label: "About",
      href: "#about"
    },
    {
      id: 2,
      label: "Our Story",
      href: "#uniqueStory"
    },
    {
      id: 3,
      label: "Healthcare Proffesionals",
      href: "#doctors"
    },
    {
      id: 4,
      label: "Development Team",
      href: "#devTeam"
    }]


  return (
    <div>
      {/* Header */}
      <header>
        <Navbar navLinks={aboutLinks}/>
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
            </div>
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
                <a href="https://github.com/ncayiyane"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/aphiwe-ncayiyane-4149b31a8"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="team-member">
              <img src="/media/mogamat.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Mogamat Jaleel Lee</p>
              <p className="quote">"Be the change you wish to see <br />in the world"</p>
              <div className="social-icons">
                <a href="https://github.com/Lee01-bit "><i className="fa-brands fa-github"></i></a>
                <a href="www.linkedin.com/in/jaleel-lee-6b441920b"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div  className="team-member">
              <img src="/media/petersen.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Shabbeer Petersen</p>
              <p className="quote">"Everything you've done up until<br/>now has not gone to waste."</p>
              <div className="social-icons">
                <a href="https://github.com/Shabbeer10"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/shabbeer-petersen-342868277"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="team-member">
              <img src="/media/yusri.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Yusri Nelson</p>
              <p className="quote">"Futures don't make themselves,<br/> you create them."</p>
              <div className="social-icons">
                <a href="https://github.com/yusrinelson"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/yusri-nelson/"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
            <div className="team-member">
              <img src="/media/mulalo.jpg" alt="Profile Picture" className="avatar" />
              <p className="name">Mulalo Masithembi</p>
              <p className="quote">"Your patience is your power."</p>
              <div className="social-icons">
                <a href="https://github.com/Mu936/"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/mulalo-ivy-masithembi-7a74b9329"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </main>
    </div>
  );
}
