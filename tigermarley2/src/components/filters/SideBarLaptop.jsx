import React, { useState } from "react";
import "./SideBarLaptop.css";

const SideBarLaptop = ({ filters, setFilters }) => {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);

  return (
    <div className="sidebar-filter">
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
        >
          <span className="filter-title">AVAILABILITY</span>
          <span className="arrow">{isAvailabilityOpen ? "▲" : "▼"}</span>
        </div>

        {isAvailabilityOpen && (
          <div className="filter-content">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) =>
                  setFilters({ ...filters, inStockOnly: e.target.checked })
                }
              />
              In stock only
            </label>
          </div>
        )}
      </div>

      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}
        >
          <span className="filter-title">PRICE RANGE</span>
          <span className="arrow">{isPriceRangeOpen ? "▲" : "▼"}</span>
        </div>

        {isPriceRangeOpen && (
          <div className="filter-content">
            <input
              type="range"
              min="0"
              max="5950"
              step="50"
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [0, parseInt(e.target.value)],
                })
              }
              className="price-slider"
            />
            <div className="price-values">
              <span>₹{filters.priceRange[0]}</span>
              <span>₹{filters.priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBarLaptop;