import React, { useState } from "react";
import "./referral.css";
import UserIcon from './icons/user.svg';
import RewardsIcon from './icons/rewards.svg';
import BonusIcon from './icons/bonus.svg';
import RefModal from "../refModal/RefModal";

const steps = [
  { icon: UserIcon, title: 'Submit referrals easily', description: 'Submit referrals easily via our website’s referral section.' },
  { icon: RewardsIcon, title: 'Earn rewards', description: 'Earn rewards once your referral joins an Accredian program.' },
  { icon: BonusIcon, title: 'Receive bonus', description: 'Both parties receive a bonus 30 days after program enrollment.' },
];

const Referral = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className="referral-steps">
      <div className="container">
        <h2>How Do I <span className="highlight">Refer?</span></h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="icon">
                <img src={step.icon} alt={step.title} />
              </div>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="btn-refer-now" onClick={handleOpen}>Refer Now</button>
      <RefModal open={open} handleClose={handleClose} />
    </section>
  );
};

export default Referral;
