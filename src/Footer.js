import React from "react";
import "./Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <div id="footer" className="footer-container">
      <div className="container">
        <div className="flex-container">
          
            <h2 className="headline">
              Get in touch
            </h2>
          
          <div className="column-1">
            <p className="description">
              Provide us with project information and reach out to our team.
            </p>
            <a href="/contact" className="button">
              Contact us
            </a>
          </div>
        </div>
        <div className="flex-cont">
          <div className="column-2">
            <a href="mailto:office@north2.net">office@techFlux.net</a>
            <div className="copyright">
              North2&nbsp;2023©&nbsp; All rights reserved
            </div>
          </div>
          <div className="column social-icons">
            <a href="https://hr.linkedin.com/company/north2" target="_blank" aria-label="Open Linkedin">
              {/* LinkedIn Icon */}
            </a>
            <a href="https://www.facebook.com/north2.net/" target="_blank" aria-label="Open Facebook">
              {/* Facebook Icon */}
            </a>
            <a href="https://www.instagram.com/north2studio/" target="_blank" aria-label="Open Instagram">
              {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
