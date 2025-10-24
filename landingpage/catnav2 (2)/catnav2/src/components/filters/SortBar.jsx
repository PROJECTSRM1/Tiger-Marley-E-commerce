import React from "react";
import "./Filters.css";

export default function SortBar({ sortBy, setSortBy, viewMode, setViewMode }) {
  return (
    <div className="controls-bar">
      <div className="view-toggle" role="tablist" aria-label="view toggle">
        {/* Simple SVG icons for grid/list */}
        <button
          className={`icon-btn ${viewMode === 'grid' ? 'active' : ''}`}
          title="Grid view"
          aria-pressed={viewMode === 'grid'}
          onClick={() => setViewMode('grid')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="3" y="3" width="8" height="8" rx="1" fill="#333" />
            <rect x="13" y="3" width="8" height="8" rx="1" fill="#333" />
            <rect x="3" y="13" width="8" height="8" rx="1" fill="#333" />
            <rect x="13" y="13" width="8" height="8" rx="1" fill="#333" />
          </svg>
        </button>
        <button
          className={`icon-btn ${viewMode === 'list' ? 'active' : ''}`}
          title="List view"
          aria-pressed={viewMode === 'list'}
          onClick={() => setViewMode('list')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect x="4" y="5" width="16" height="2" rx="1" fill="#333" />
            <rect x="4" y="11" width="16" height="2" rx="1" fill="#333" />
            <rect x="4" y="17" width="16" height="2" rx="1" fill="#333" />
          </svg>
        </button>
      </div>

      <div className="sort-area">
        <label className="sort-label" htmlFor="sort-select">Sort by</label>
        <select
          id="sort-select"
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
    </div>
  );
}
