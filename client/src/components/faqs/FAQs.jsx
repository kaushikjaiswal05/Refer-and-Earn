import React, { useState } from 'react';
import './faqs.css';


const faqs = [
  {
    question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
  },
  {
    question: "What is the minimum system configuration required?",
    answer: "You need a computer with at least 4GB RAM, 256GB SSD, and a modern web browser.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked <span className="highlight">Questions</span></h2>
        <div className="faq-container">
          <div className="faq-sidebar">
            <button className="faq-button active">Eligibility</button>
            <button className="faq-button">How To Use?</button>
            <button className="faq-button">Terms & Conditions</button>
          </div>
          <div className="faq-content">
            {faqs.map((faq, index) => ( 
              <div className="faq-item" key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? "▲" : "▼"}</span>
                </div>
                {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
