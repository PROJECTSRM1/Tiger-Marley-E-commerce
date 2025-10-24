// src/components/Sections/GiftingSection.jsx
import React from "react";
import "./SectionStyles.css";


const GiftingSection = () => {
  return (
    <div className="section-container">
      <div className="section-image">
        <img src="/assets/TMMBG-053-6.jpg" alt="Gifting" />
      </div>
      <div className="section-text">
        <p className="section-subtitle">MAKE IT MEMORABLE</p>
        <h1 className="section-title">GIFTING & BULK ORDERS</h1>
        <p className="section-desc">
          From corporate gifts to wedding favors, our custom gifting solutions let
          you share elegance and utility. Personalise every piece to carry a message
          that lasts — classy, functional, and unforgettable.
        </p>
      </div>
    </div>
  );
};

export default GiftingSection;
