import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <p>
          Navigate your ideal career path with tailored expert advice&nbsp;
          <a href="#" className="contact-expert">
            Contact Expert
          </a>
        </p>
      </div>
      <header className="header">
        <div className="container">
          <img src="/images/logo.png" alt="Logo" className="logo" />
          <nav className="nav">
            <button className="courses">
              <a href="#" style={{ color: "white" }}>
                Courses
              </a>
            </button>
            <a href="#">Refer & Earn</a>
            <a href="#">Resources</a>
            <a href="#">About Us</a>
            <button className="btn-login">
              <a href="#">Login</a>
            </button>
            <a href="#" className="btn-try-free">
              Try for free
            </a>
          </nav>
        </div>
        <div className="tab-bar">
          <div>
            <a href="#">Refer</a>
            <a href="#">Benefits</a>
            <a href="#">FAQs</a>
            <a href="#">Doubts</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
