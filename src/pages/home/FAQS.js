import React, { useState } from "react";
import { FAQs } from './homeData'

export default function FAQS() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleToggleFAQ = (id) => {
    // If the same FAQ is clicked, close it, otherwise open it
    setActiveFAQ(activeFAQ === id ? null : id);
  };
  return (
    <section className="FAQ-section">
      <h2>Answers To</h2>
      <h1> Frequently Asked Questions</h1>
      <div className="FAQ-container">
        {FAQs.map((FAQ) => (
          <div className="FAQ-box" key={FAQ.id}>
            <div
              className="FAQ-question"
              onClick={() => handleToggleFAQ(FAQ.id)}
            >
              <span>{activeFAQ === FAQ.id ? "-" : "+"}</span>
              <p>{activeFAQ === FAQ.id ? FAQ.answer : FAQ.question}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

