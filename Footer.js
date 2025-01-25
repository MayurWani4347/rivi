import React from "react";
import "../styles/footer.css"; // Ensure to link your CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-links">
      <div className="footer-section">
  
        <h2>Rivi</h2>
      <p><img src="https://rivi.co/assets/images/rivi.png" className="demo"></img></p>  <p>315 Montgomery St, 10th Fl,<br/> San Francisco, CA, 94104</p>
      </div>
        <div className="footer-section">
          <h3>Rivi</h3>
          <ul>
            <li>Labs</li>
            <li>App</li>
            <li>Blog</li>
            <li>Deals</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Terms</h3>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
