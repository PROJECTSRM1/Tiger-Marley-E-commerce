import React from "react";
import './HeroSections.css'; // Import CSS for styling
function HeroSections() {
  return (
    <>
      {/* Top Hero Section */}
      <section className="hero-section hero-top">
        <div className="hero-image">
          <img
            src="/images/Roam_Roar_Website_1.webp"
            alt="Man walking with horse and leather bag"
          />
        </div>
        <div className="hero-text">
          <p>TRAVEL</p>
          <h1>ROAM AND ROAR WITH TIGER MARRÓN</h1>
          <a href="/collections/view-all-travel" className="link">
            SHOP NOW
          </a>
        </div>
      </section>

      {/* Bottom Hero Section */}
      <section className="hero-section hero-bottom">
        <div className="hero-image">
          <img
            src="/images/office_unwind.webp"
            alt="Woman sitting with handbag"
          />
        </div>
        <div className="hero-text">
          <p>TIGER TOTE</p>
          <h1>OFFICE GRIND TO EVENING UNWIND</h1>
          <a href="/collections/view-all-totes" className="link">
            SHOP NOW
          </a>
        </div>
      </section>
    </>
  );
}

export default HeroSections;