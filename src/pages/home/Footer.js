import React from 'react'
import "./home.css"

export default function Footer() {
  return (
    <div id='footer'>
      <div class="footer-img">
        </div>

        <div class="footer_list-box">
            <ul class="footer-socials">
                <li><i class="fa-brands fa-linkedin"></i></li>
                <li><i class="fa-brands fa-google-plus"></i></li>
                <li><i class="fa-brands fa-square-twitter"></i></li>
                <li><i class="fa-brands fa-facebook"></i></li>
            </ul>
            <div class="footer_list">
                <dl>
                    <dt>Quick Links</dt>
                    <dd>Home</dd>
                    <dd>About Us</dd>
                    <dd>Services & Departments</dd>
                    <dd>Contact Us</dd>
                </dl>
                <dl>
                    <dt>Other Links</dt>
                    <dd>FAQs</dd>
                    <dd>Privacy Policy</dd>
                    <dd>Terms & Conditions</dd>
                    <dd>Support</dd>
                </dl>
                <dl>
                    <dt>Contact Info</dt>
                    <dd><i class="fa-solid fa-phone"></i>021 7402 5314</dd>
                    <dd><a href=""></a><i class="fa-solid fa-location-dot"></i>Saltriver, Cape Town</dd>
                    <dd><i class="fa-solid fa-envelope"></i>forevercare@gmail.com</dd>
                    <dd><i class="fa-solid fa-clock"></i>24hr open</dd>
                </dl>
            </div>

            <p class="footer-text">© 2024 ForeverCare. All rights reserved.</p>
        </div>
    </div>
  )
}
