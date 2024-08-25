import React, { useState } from "react";
import "./herosection.css";
import RefModal from "../refModal/RefModal";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className="hero-section">
      <div className="container">
        <img src="images/hero.png" alt="hero" />
        <div className="content">
          <h1>Let's Learn & Earn</h1>
          <p>Get a chance to win up-to <span>Rs. 15,000</span></p>
          <button onClick={handleOpen} className="btn-refer-now">
            Refer Now
          </button>
          <RefModal open={open} handleClose={handleClose} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
