import React from "react";
import "./Footer.css"; // Import your Footer.css

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <div className="container">
        <div className="flex-container">
          <div className="column">
            <h2 className="headline-1">Get in touch</h2>
            <p className="description">
              Provide us with project information and reach out to our team.
            </p>
            <a href="/contact" className="button">
              Contact us
            </a>
          </div>
          <div className="column column-2">
            <a href="mailto:office@north2.net">office@techFlux.net</a>
            <div className="copyright">
              North2&nbsp;2023©&nbsp; All rights reserved
            </div>
          </div>
          <div className="social-icons">
          <ul>
            <li>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} className="instagram" />
              </a>
            </li>
            <li>
              <a href="https://web.whatsapp.com/">
                <FontAwesomeIcon icon={faWhatsapp} className="whatsapp" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} className="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} className="facebook" />
              </a>
            </li>
          </ul>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
