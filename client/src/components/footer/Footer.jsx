import React from "react";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <div>
          <h2>accredian</h2>
          <p>credentials that matter</p>
        </div>
        <div className="btn">
          <button>Schedule 1-on-1 call now</button>
          <p>Speak with our Learning Advisors</p>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>Programs</h3>
            <ul>
              <li>Data Science & AI</li>
              <li>Product Management</li>
              <li>Business Analytics</li>
              <li>Digital Transformation</li>
              <li>Business Management</li>
              <li>Project Management</li>
              <li>Strategy & Leadership</li>
              <li>Senior Management</li>
              <li>Fintech</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                Email us (For Data Science Queries): admissions@accredian.com
              </li>
              <li>
                Email us (For Product Management Queries): pm@accredian.com
              </li>
              <li>
                Data Science Admission Helpline: +91 9079635929 (9 AM - 7 PM)
              </li>
              <li>Product Management Admission Helpline: +91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969222507</li>
              <li>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector
                18, Gurugram, Haryana 122015
              </li>
            </ul>
            <div className="footer-follow">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <FacebookIcon style={{ fontSize: "1rem" }}/>
                <TwitterIcon style={{ fontSize: "1rem" }}/>
                <LinkedInIcon style={{ fontSize: "1rem" }}/>
                <InstagramIcon style={{ fontSize: "1rem" }}/>
                <YouTubeIcon style={{ fontSize: "1rem" }}/>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3>Accredian</h3>
            <ul>
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
              <li>Referral Policy</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Master FAQs</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
      <div className="footer-note">
        <p>
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
