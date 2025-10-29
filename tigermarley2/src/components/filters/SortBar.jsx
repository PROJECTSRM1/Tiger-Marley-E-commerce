import React from "react";
import "../filters/Filters.css";

export default function SortBar({ sortBy, setSortBy }) {
  return (
    <div className="sortbar-row">
      <div className="sort-left" />
      <div className="sort-right">
        <label className="small-muted">Sort by:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="manual">Manual</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="nameAZ">Name: A–Z</option>
        </select>
      </div>
    </div>
  );
}
import React from "react";
import "../styles/SortBar.css";

export default function SortBar({ sortBy, setSortBy }) {
  return (
    <div className="sort-bar">
      <span>Sort by:</span>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="sort-dropdown"
      >
        <option value="newest">Newest First</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="nameAZ">Name: A → Z</option>
      </select>
    </div>
  );
}
