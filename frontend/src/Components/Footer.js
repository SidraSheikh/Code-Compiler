import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer bg-dark py-3">
      <div className="follow-us">
        <h1>FOLLOW US ON</h1>
        <div className="icon">
          <FaLinkedin size={50} />
          <BiLogoGmail size={50} />
          <FaTwitter size={50} />
          <FiInstagram size={50} />
          <FaFacebookF size={50} />
        </div>
      </div>
      <div className="legal">
        <img src="logo.png" alt="Logo" width="70" height="70" />
        <div className="info">
          <p>© 2024 CodeEase</p>
          <p>Demo or it didn't happen.</p>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
