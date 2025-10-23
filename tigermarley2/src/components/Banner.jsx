import React, { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import "./Banner.css";
import tiger1 from "../assets/tiger1.jpeg";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";
import { useNavigate } from "react-router-dom";


export default function Banner() {
  // const [isScrolled, setIsScrolled] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
  const location = useLocation();
  const [showShopNow, setShowShopNow] = useState(false);
  const [showLogoSlider, setShowLogoSlider] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

    // const [isFixed, setIsFixed] = useState(false);


  const tigerImages = [slide1, slide2, slide3, slide4];

  // 🟢 Auto-slide logic when logo slider is active
  useEffect(() => {
    let interval;
    if (showLogoSlider) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % tigerImages.length);
      }, 2000);
    } else {
      clearInterval(interval);
      setCurrentImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [showLogoSlider]);

  // 🟢 Reset states when route changes (stop slider, hide Shop Now)
  useEffect(() => {
    setShowShopNow(false);
    setShowLogoSlider(false);
  }, [location.pathname]);


  
 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // 🟢 Handle Tiger Marley click
const handleLogoClick = () => {
  setShowLogoSlider(true);
  setShowShopNow(true);
  navigate("/landingpage"); // 👈 navigates to landing page
};


  const getBannerImage = () => {
    if (showLogoSlider) {
      return tigerImages[currentImageIndex];
    }

    switch (location.pathname) {
      case "/":
      case "/home":
        return "homebanner.jpg";
      case "/sale":
        return "sale1.webp";
      case "/festive":
        return "festivebags.jpg";
      case "/martingale":
        return "Martingale.webp";
      case "/bags":
      case "/bags/totes":
      case "/bags/handbags":
      case "/bags/crossbody":
      case "/bags/minibags":
      case "/bags/laptopbags":
      case "/bags/backpacks":
      case "/bags/dufflebags":
      case "/bags/luggagebags":
        return "bags.webp";
      case "/accessories":
      case "/accessories/jewellery":
      case "/accessories/wallets":
      case "/accessories/cardholder":
      case "/accessories/passportholder":
      case "/accessories/diaries":
      case "/accessories/belts":
      case "/accessories/charms":
      case "/accessories/laptopsleeve":
      case "/accessories/keychains":
        return "Accessories.webp";
        case "/corporategifts":
        return "CorporateGifts.jpg";
      
    }
  };

  const getBannerTitle = () => {
    if (showLogoSlider) return "TIGER MARLEY COLLECTION";
    switch (location.pathname) {
      case "/":
      case "/home":
        return "HOME";
      case "/sale":
        return "UPTO 30% OFF";
      case "/festive":
        return "FESTIVE BAGS";
      case "/martingale":
        return "MARTINGALE COLLECTION";
      case "/bags":
      case "/bags/totes":
        return "TOTES";
      case "/bags/handbags":
        return "HANDBAGS";
      case "/bags/crossbody":
        return "CROSSBODY";
      case "/bags/minibags":
        return "MINI BAGS";
      case "/bags/laptopbags":
        return "LAPTOP BAGS";
      case "/bags/backpacks":
        return "BACKPACKS";
      case "/bags/dufflebags":  
        return "DUFFLE BAGS";
      case "/bags/luggagebags":
        return "LUGGAGE BAGS";
      case "/accessories":
        return "ACCESSORIES";
      case "/accessories/jewellery":
        return "JEWELLERY";
      case "/accessories/wallets":
        return "WALLETS";
      case "/accessories/cardholder":
        return "CARD HOLDER";
      case "/accessories/passportholder":
        return "PASSPORT HOLDER";
      case "/accessories/diaries":
        return "DIARIES";
      case "/accessories/belts":
        return "BELTS";
      case "/accessories/charms":
        return "CHARMS";

      case "/accessories/laptopsleeve":
        return "LAPTOP SLEEVE";
      case "/accessories/keychains":
        return "KEYCHAINS";
      case "/corporategifts":
        return "CORPORATE GIFTS";
     
    }
  };

  return (
     <div className="banner">
     
      {/* <div className={`offer-bar ${scrolled ? "hidden" : ""}`}>
        USE LEGEND10 CODE TO GET 10% OFF
      </div> */}
 <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

        <div
          className="navbar-logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <h1>
            <span className="logo-icon">TIGER</span>
            <img
              src={tiger1}
              alt="Logo"
              style={{ width: "35px", height: "30px", margin: "0 5px" }}
            />
            <span className="logo-highlight">MARLEY</span>
          </h1>
        </div>

        <nav className="nav-links">
          {/* 🟢 When clicking a link, stop the slider */}
          <Link to="/sale" onClick={() => setShowLogoSlider(false)} className="sale-link">
            SALE
          </Link>
          <Link to="/martingale" onClick={() => setShowLogoSlider(false)}>MARTINGALE COLLECTION</Link>
          <Link to="/festive" onClick={() => setShowLogoSlider(false)}>FESTIVE</Link>
          
          <div className="dropdown">
            <Link to="/bags" onClick={() => setShowLogoSlider(false)} className="dropbtn">BAGS</Link>
            <div className="dropdown-content">
              <Link to="/bags/totes">Totes</Link>
              <Link to="/bags/handbags">Handbags</Link>
              <Link to="/bags/crossbody">Crossbody</Link>
              <Link to="/bags/minibags">Minibags</Link>
              <Link to="/bags/laptopbags">Laptop Bags</Link>
              <Link to="/bags/backpacks">Backpacks</Link>
              <Link to="/bags/dufflebags">Duffle Bags</Link>
              <Link to="/bags/luggagebags">Luggage Bags</Link>
            </div>
          </div>

          <div className="dropdown">
            <Link to="/accessories" onClick={() => setShowLogoSlider(false)} className="dropbtn">ACCESSORIES</Link>
            <div className="dropdown-content">
              <Link to="/accessories/jewellery">Jewellery</Link>
              <Link to="/accessories/wallets">Wallets</Link>
              <Link to="/accessories/cardholder">Card Holder</Link>
              <Link to="/accessories/passportholder">Passport Holder</Link>
              <Link to="/accessories/diaries">Diaries</Link>
              <Link to="/accessories/belts">Belts</Link>
              <Link to="/accessories/charms">Charms</Link>
              <Link to="/accessories/laptopsleeve">Laptop Sleeve</Link>
              <Link to="/accessories/keychains">Keychains</Link>
            </div>
          </div>

          <Link to="/corporategifts" onClick={() => setShowLogoSlider(false)}>CORPORATE GIFTS</Link>
          <Link to="/home" onClick={() => setShowLogoSlider(false)}>HOME</Link>
        </nav>

             <div className="nav-icons">
              <Link to="/login" className="icon" title="Login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg></Link>
              {/* <Link to="/search" className="icon" title="Search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></Link> */}

              {/* Search icon toggles search bar */}
                 <span
                className="icon search-toggle"
                title="Search"
                onClick={() => setShowSearch(!showSearch)}
              ><Link to="/search" className="icon" title="Search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg></Link>


            

              </span>
              <Link to="/cart" className="icon" title="Cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </svg></Link>
              <Link to="/Wishlist" className="icon" title="Wishlist"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg></Link>
            </div>
      </header>

      {/* 🟢 Hero banner expands when logo slider active */}
      <section
        className={`hero-banner ${showLogoSlider ? "expanded" : ""}`}
        style={{
          backgroundImage: `url(${getBannerImage()})`,
        }}
      >
        <div className="overlay"></div>
        <h2 className="banner-text">{getBannerTitle()}</h2>
        
        {showShopNow && <button className="shop-now-btn">SHOP NOW</button>}
      </section>
    </div>
  );
}
