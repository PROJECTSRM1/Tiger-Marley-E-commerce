import React, { useState } from "react";
import "./App.css";

function App() {
  const slides = [
    { src: "/images/9V0A8883.webp", caption: "LOVE FOR RAINBOW" },
    { src: "/images/Untitled_design_png_png.webp", caption: "TAKIN NOTES" },
    { src: "/images/TMMBG-062-1.webp", caption: "Down to Business" },
    {
      src: "/images/TMACC-032-1_c3b5588a-4721-470b-a62f-e4f0a02d0670.webp",
      caption: "The Mile High Club",
    },
    { src: "/images/TMMWT-054-1_1.webp", caption: "Daddy" },
    { src: "/images/TMACC-104-1.webp", caption: "Networking" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const visibleSlides = slides.slice(startIndex, startIndex + 3);
  const imagesToShow =
    visibleSlides.length < 3
      ? [...visibleSlides, ...slides.slice(0, 3 - visibleSlides.length)]
      : visibleSlides;

  return (
    <div className="corporate-gifts">
      <h2 className="title">CORPORATE GIFTS</h2>

    
      <div className="gift-grid">
        <div className="gift-card">
          <img
            src="/images/DESIGNED_WITH_PRECISION_3.webp"
            alt="Bespoke Packaging"
            className="gift-image"
          />
        </div>
        <div className="gift-card">
          <img
            src="/images/Corporate_Gifting_2025_TM.webp"
            alt="Customised Gifts"
            className="gift-image"
          />
        </div>
        <div className="gift-card">
          <img
            src="/images/DESIGNED_WITH_PRECISION.webp"
            alt="Bulk Gifting"
            className="gift-image"
          />
        </div>
      </div>

 
      <p className="best">BESTSELLER</p>
      <div className="carousel-section">
        <div className="carousel-container">
     
          <button className="nav-btn left" onClick={prevSlide}>
            &#10094;
          </button>

    
          <div className="carousel-track">
            {imagesToShow.map((item, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="carousel-image"
                />
         
                <p className="carousel-caption">{item.caption}</p>
              </div>
            ))}
          </div>

  
          <button className="nav-btn right" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

 
      <div className="contact-section">
        <p>
          CONTACT US{" "}
          <a href="mailto:support@tigermarrley.com">
            support@tigermarrley.com
          </a>
        </p>
        <p>Ph: +91 99100 26537</p>
        <p>
          You can request for our corporate catalogue which will give you an
          insight into the product range and prices.
        </p>
      </div>
    </div>
  );
}

export default App;
