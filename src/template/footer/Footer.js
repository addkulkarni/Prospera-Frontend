import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* Footer Left: Useful Links or About */}
      <div className="footer-left">
        <h3>Prospera Finance</h3>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>

      {/* Footer Middle: Social Media Icons */}
      <div className="footer-middle">
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      {/* Footer Right: Copyright Notice */}
      <div className="footer-right">
        <p>
          © 2024 Prospera Finance. All Rights Reserved. <br />
          <i class="bi bi-globe"></i> <a href="#">www.prosperafinance.com</a><br/>
          <i class="bi bi-telephone"></i> +91-7547854425
          <br/>+91-8965745823
          <br/><i class="bi bi-envelope"></i> prosperafinance@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
