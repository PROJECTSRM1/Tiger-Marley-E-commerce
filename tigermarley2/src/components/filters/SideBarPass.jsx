import React from "react";
import "./SideBarFilter.css";

export default function SideBarFilter({ filters, setFilters }) {
  const handlePriceChange = (e, index) => {
    const value = Number(e.target.value);
    const newRange = [...filters.priceRange];
    newRange[index] = value;
    // Prevent crossing
    if (index === 0 && value > newRange[1]) newRange[0] = newRange[1];
    if (index === 1 && value < newRange[0]) newRange[1] = newRange[0];
    setFilters({ ...filters, priceRange: newRange });
  };

  return (
    <aside className="sidebar">
      <div className="filter-section">
        <div className="filter-header">
          <h4>AVAILABILITY</h4>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={() =>
              setFilters({ ...filters, inStockOnly: !filters.inStockOnly })
            }
          />
          <span className="slider"></span>
        </label>
        <span className="label-text">In stock only</span>
      </div>

      <div className="filter-section">
        <div className="filter-header">
          <h4>PRICE</h4>
        </div>

        <div className="price-slider">
          <input
            type="range"
            min="0"
            max="2800"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
          />
          <input
            type="range"
            min="0"
            max="2800"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
          />
        </div>

        <div className="price-inputs">
          <span>₹</span>
          <input
            type="number"
            value={filters.priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
          />
          <span>to</span>
          <span>₹</span>
          <input
            type="number"
            value={filters.priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
          />
        </div>
      </div>
    </aside>
  );
}
