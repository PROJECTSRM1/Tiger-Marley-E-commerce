import React, { useState } from "react";
import SideBarFilter from "../components/filters/SideBarFilter";
import ProductCard from "../components/products/ProductCard";
import productsData from "../components/data/crossbodypageproducts";
import "./CrossbodyPage.css";

const CrossbodyPage = () => {
  const [filters, setFilters] = useState({
    inStockOnly: false,
    priceRange: [0, 14000],
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
          <h2 className="collection-title">CROSSBODY</h2>

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

export default CrossbodyPage;
