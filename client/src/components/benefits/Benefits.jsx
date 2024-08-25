import React, { useState } from "react";
import "./benefits.css";
import RefModal from "../refModal/RefModal";

const benefits = [
  {
    program: "Professional Certificate Program in Product Management",
    referrerBonus: "₹ 7,000",
    refereeBonus: "₹ 9,000",
  },
  {
    program: "PG Certificate Program in Strategic Product Management",
    referrerBonus: "₹ 9,000",
    refereeBonus: "₹ 11,000",
  },
  {
    program: "Executive Program in Data Driven Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    program:
      "Executive Program in Product Management and Digital Transformation",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    program: "Executive Program in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    program: "Advanced Certification in Product Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
  {
    program: "Executive Program in Product Management and Project Management",
    referrerBonus: "₹ 10,000",
    refereeBonus: "₹ 10,000",
  },
];

const BenefitsSection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className="benefits-section">
      <div className="container">
        <h2>
          What Are The <span className="highlight">Referral Benefits?</span>
        </h2>
        <div className="programs-container">
          <div className="programs-list">
            <div className="programs-header">ALL PROGRAMS</div>
            <ul>
              <li>Product Management</li>
              <li>Strategy & Leadership</li>
              <li>Business Management</li>
              <li>Fintech</li>
              <li>Senior Management</li>
              <li>Data Science</li>
              <li>Digital Transformation</li>
              <li>Business Analytics</li>
            </ul>
          </div>
          <div className="benefits-table">
            <table>
              <thead>
                <tr>
                  <th>Programs</th>
                  <th>Referrer Bonus</th>
                  <th>Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                {benefits.map((benefit, index) => (
                  <tr key={index}>
                    <td>{benefit.program}</td>
                    <td>{benefit.referrerBonus}</td>
                    <td>{benefit.refereeBonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn-refer-now" onClick={handleOpen}>Refer Now</button>
            <RefModal open={open} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
