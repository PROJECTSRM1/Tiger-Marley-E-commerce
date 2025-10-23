import React, { useState } from "react";
import "./SearchPage.css";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <section className="search-page">
      <div className="search-overlay">
        <input
          type="text"
          className="search-input"
          placeholder="Search for products, collections, or categories..."
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="close-search" onClick={handleClose}>
          ✕
        </button>
      </div>
    </section>
  );
}
