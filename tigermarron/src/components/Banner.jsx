import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "./Banner.css";
import logo from "../assets/logo.jpeg";

export default function Banner() {
  const location = useLocation();

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic banner text
  const getBannerTitle = () => {
    switch (location.pathname) {
      case "/":
      case "/home":
        return "HOME";
      case "/sale":
      return "UPTO 30% OFF";
      case "/festive":
        return "FESTIVE";
      case "/martingale":
        return "MARTINGALE COLLECTION";
      case "/bags":
        return "BAGS";
        case"/bags/totes":
        return "TOTES";

        case"/bags/handbags":
        return "HANDBAGS";
        case"/bags/crossbody":
        return "CROSSBODY";
        case"/bags/minibags":
        return "MINIBAGS";
        case"/bags/laptopbags":
        return "LAPTOP BAGS";
        case"/bags/backpacks":
        return "BACKPACKS";
        case"/bags/dufflebags":
        return "DUFFLE BAGS";
        case"/bags/luggagebags":
        return "LUGGAGE BAGS";
      case "/accessories":
        
        return "ACCESSORIES";
        case"/accessories/jewellery":
        return "JEWELLERY";
        case"/accessories/wallets":
        return "WALLETS";
        case"/accessories/cardholder":
        return "CARD HOLDER";
        case"/accessories/passportholder":
        return "PASSPORT HOLDER";
        case"/accessories/diaries":
        return "DIARIES";
        case"/accessories/belts":
        return "BELTS";
        case"/accessories/charms":
        return "CHARMS";
        case"/accessories/laptopsleeve":
        return "LAPTOP SLEEVE";
        case"/accessories/keychains":
        return "KEYCHAINS";
      case "/corporategifts":
        return "CORPORATE GIFTS";
      default:
        return "TIGER MARRÓN";
    }
  };

  // Dynamic banner background images
  const getBannerImage = () => {
    switch (location.pathname) {
      case "/":
      case "/home":
        return "homebanner.jpg";
      case "/sale":
        return "sale1.webp";
      case "/festive":
        return "festive1.webp";
      case "/martingale":
        return "Martingale.webp";
      case "/bags":
        return "bags.webp";
        case"/bags/totes":
        return"bags.webp";
        case"/bags/handbags":
        return"bags.webp";
        case"/bags/crossbody":
        return"bags.webp";
        case"/bags/minibags":
        return"bags.webp";
        case"/bags/laptopbags":
        return"bags.webp";
        case"/bags/backpacks":
        return"bags.webp";
        case"/bags/dufflebags":
        return"bags.webp";
        case"/bags/luggagebags":
        return"bags.webp";

      case "/accessories":
        return "Accessories.webp";
        case"/accessories/jewellery":
        return"Accessories.webp";
        case"/accessories/wallets":
        return"Accessories.webp";
        case"/accessories/cardholder":
        return"Accessories.webp";
        case"/accessories/passportholder":

        return"Accessories.webp";
        case"/accessories/diaries":
        return"Accessories.webp";
        case"/accessories/belts":
        return"Accessories.webp";
        case"/accessories/charms":
        return"Accessories.webp";
        case"/accessories/laptopsleeve":
        return"Accessories.webp";
        case"/accessories/keychains":
        return"Accessories.webp";

      case "/corporategifts":
        return "";
      default:
        return "Homebanner.jpg";
    }
  };

  return (
    <div className="banner">
      {/* Offer Bar */}
      <div className="offer-bar">
        USE LEGEND10 CODE TO GET 10% OFF
      </div>

      {/* Navbar */}
      <div className="nav">
        <header className="navbar">
          <div className="navbar-logo">
            <h1>
              <span className="logo-icon">TIGER</span>
      <img src={logo} alt="Logo" style={{ width: "25px" ,height:"30px",marginTop:"20px"}} />
    {" "}
              <span className="logo-highlight">MARLEY</span>
            </h1>
          </div>

          <nav className="nav-links">
           <a href="#sale" className="sale-link">SALE</a>

            <Link to="/martingale">MARTINGALE COLLECTION</Link>
            <Link to="/festive">FESTIVE</Link>

            {/* Bags Dropdown */}
            <div className="dropdown">
              <Link to="/bags" className="dropbtn">BAGS</Link>
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

            {/* Accessories Dropdown */}
            <div className="dropdown">
              <Link to="/accessories" className="dropbtn">ACCESSORIES</Link>
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

            <Link to="/corporategifts">CORPORATE GIFTS</Link>
            <Link to="/home">HOME</Link>
          </nav>

          <div className="nav-icons">
            <span className="icon">👤</span>
            <span className="icon">🔍</span>
            <span className="icon">👜</span>
          </div>
        </header>

        {/* Hero Banner with dynamic background */}
        <section
          className="hero-banner"
          style={{ backgroundImage: `url(${getBannerImage()})` }}
        >
          <div className="overlay"></div>
          <h2 className="banner-text">{getBannerTitle()}</h2>
        </section>
      </div>
    </div>
  );
}
