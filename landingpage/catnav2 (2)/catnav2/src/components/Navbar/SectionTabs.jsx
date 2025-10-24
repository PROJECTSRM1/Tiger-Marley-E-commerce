// src/components/Navbar/SectionTabs.jsx
import React from "react";
import "./SectionTabs.css";

const SectionTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="section-tabs">
      {["PERSONALISATION", "MADE TO ORDER", "GIFTING & BULK ORDERS"].map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SectionTabs;
