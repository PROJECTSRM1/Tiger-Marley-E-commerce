import React from "react";
import "./Filters.css";

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
