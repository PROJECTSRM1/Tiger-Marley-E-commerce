// src/components/Sections/PersonalisationSection.jsx
import React from "react";
import "./SectionStyles.css";

const PersonalisationSection = () => {
  return (
    <div className="section-container">
      <div className="section-image">
        <img src="/assets/personalisation_website.webp" alt="Personalisation" />
      </div>
      <div className="section-text">
        <p className="section-subtitle">DON'T JUST BUY IT, OWN IT!</p>
        <h1 className="section-title">PERSONALISATION</h1>
        <p className="section-desc">
          From adding your name, your bae's initials, your power quote, even your
          hashtag or anything that's personal to you, our personalised customisation
          services go as far to ensure what's yours, feels and breathes like you. You
          name it and we can put your name on it.
        </p>
      </div>
    </div>
  );
};

export default PersonalisationSection;
