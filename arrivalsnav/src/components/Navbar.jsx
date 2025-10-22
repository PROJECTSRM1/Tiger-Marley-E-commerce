import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Tiger Marron" />
        </Link>
        <div className="nav-links">
          <Link to="/sale" className="nav-link">SALE</Link>
          <Link to="/collection/martingale" className="nav-link">MARTINGALE COLLECTION</Link>
          <Link to="/festive" className="nav-link">FESTIVE</Link>
          <Link to="/bags" className="nav-link">BAGS</Link>
          <Link to="/accessories" className="nav-link">ACCESSORIES</Link>
          <Link to="/corporate-gifts" className="nav-link">CORPORATE GIFTS</Link>
          <Link to="/" className="nav-link">HOME</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;