import React from "react";
import "./FeaturedInSection.css";

const FeaturedInSection = () => {
  return (
    <div className="featured-in-section">
      {/* Featured Text and Logos */}
      <h2>Featured In</h2>
      <p>
        "Crafted to Perfection – Born as an ode to contemporary global design,
        fused perfectly with the finesse of expert artisanship, Tiger Marrón
        offers an array of products in top-quality leather and fabrics at
        attractive prices."
      </p>
      <div className="featured-logos">
        <img src="/assets/VOGUE.avif" alt="VOGUE" />
        <img src="/assets/ELLE.webp" alt="ELLE" />
        <img src="/assets/indian.webp" alt="The Indian EXPRESS" />
      </div>

      {/* Hero Image with Overlay */}
      <div className="featured-image-overlay">
        <img src="/assets/TIGER_ONBRAND.webp" alt="Tiger Marrón Hero" />
        <div className="overlay-text">TIGER & ON BRAND</div>
      </div>

      {/* Elevator Pitch Section */}
      <div className="elevator-pitch">
        <h2>THE ELEVATOR PITCH</h2>
        <p>
          Our love for leather and fabric dates back four decades. With a
          manufacturing unit that has created works of art for global brands,
          we understand the fashion landscape like few others. Tiger Marrón
          blends animal instinct with fine old-world charm and contemporary
          design to deliver timeless pieces.
        </p>

        <div className="pitch-icons">
          <div className="pitch-item">
            <img src="/assets/product.webp" alt="Product Engineering & Quality" />
            <span>PRODUCT ENGINEERING & QUALITY</span>
          </div>
          <div className="pitch-item">
            <img src="/assets/Legacy_Experience.avif" alt="Legacy & Experience" />
            <span>LEGACY & EXPERIENCE</span>
          </div>
          <div className="pitch-item">
            <img src="/assets/style_and_design.webp" alt="Style & Design" />
            <span>STYLE & DESIGN</span>
          </div>
          <div className="pitch-item">
            <img src="/assets/Made_to_order_Bespoke.webp" alt="Made to Order & Bespoke" />
            <span>MADE TO ORDER & BESPOKE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInSection;
