// src/components/Sections/MadeToOrderSection.jsx
import React from "react";
import "./SectionStyles.css";

const MadeToOrderSection = () => {
  return (
    <div className="section-container reverse">
      <div className="section-image">
        <img src="/assets/AERY7784.webp" alt="Made To Order" />
      </div>
      <div className="section-text">
        <p className="section-subtitle">YOUR STYLE, YOUR STORY</p>
        <h1 className="section-title">MADE TO ORDER</h1>
        <p className="section-desc">
          Every Tiger Marrón piece is meticulously handcrafted. With our made-to-order
          option, you can choose the material, colour, and details that match your
          individuality. Your bag, your identity — made uniquely for you.
        </p>
      </div>
    </div>
  );
};

export default MadeToOrderSection;
