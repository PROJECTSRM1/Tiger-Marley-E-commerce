import React, { useState } from "react";
import SideBarFilter from "./filters/SideBarFilter";
import ProductCard from "./products/ProductCard";
import productsData from "../data/products";
import "./HomeSection.css";

const HomeSection = () => {
  const [filters, setFilters] = useState({
    inStockOnly: false,
    priceRange: [0, 5500],
    sortBy: "manual",
  });

  // --- Filtering Logic ---
  const filteredProducts = productsData.filter((p) => {
    const withinPrice =
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
    const inStock = filters.inStockOnly ? p.inStock === true : true;
    return withinPrice && inStock;
  });

  // --- Sorting Logic ---
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === "priceLowHigh") return a.price - b.price;
    if (filters.sortBy === "priceHighLow") return b.price - a.price;
    if (filters.sortBy === "newest") return b.id - a.id;
    if (filters.sortBy === "nameAZ")
      return a.name.localeCompare(b.name);
    if (filters.sortBy === "nameZA")
      return b.name.localeCompare(a.name);  

    return a.id - b.id; // default / manual
  });

  return (
    <div className="home-layout">
      {/* Sidebar */}
      <aside className="sidebar-section">
        <SideBarFilter filters={filters} setFilters={setFilters} />
      </aside>

      {/* Main Area */}
      <main className="main-section">
        {/* Top Header Row */}
        <div className="top-controls">
          <h2 className="collection-title">UPTO 30% OFF</h2>

          <div className="sort-control">
            <label htmlFor="sort" className="sort-label">
              SORT BY
            </label>
            <select
              id="sort"
              value={filters.sortBy}
              onChange={(e) =>
                setFilters({ ...filters, sortBy: e.target.value })
              }
              className="sort-select"
            >
              <option value="manual">Featured</option>
              <option value="newest">Newest</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="nameAZ">Alphabetically, A–Z</option>
              <option value="nameZA">Alphabetically, Z–A</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <p className="no-products">No products found in this range.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomeSection;
