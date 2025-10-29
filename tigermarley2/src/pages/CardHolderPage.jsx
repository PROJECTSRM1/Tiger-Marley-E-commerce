import React, { useState } from "react";
import ViewToggle from "../components/ViewToggle";
import SideBarFilter from "../components/filters/SideBarCard";
import ProductCard from "../components/products/CardproductsCard";
import productsData from "../components/data/cardproducts";
import "./CardHolderPage.css";

const CardHolderPage = () => {
  const [filters, setFilters] = useState({
    inStockOnly: false,
    priceRange: [0, 1750],
    sortBy: "manual",
  });

  
  const [viewMode, setViewMode] = useState("grid");

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
  if (filters.sortBy === "nameAZ") return a.name.localeCompare(b.name);
  if (filters.sortBy === "nameZA") return b.name.localeCompare(a.name);
  return a.id - b.id; 
});


  return (
    <div className="full-page-container">
      <div className="full-width-header-fixed">
        <div className="header-content-wrapper">
          <div className="left-header-controls">
            <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
          </div>

          <div className="sortbar-input">
            <div className="sort-input-wrapper">
              <select
                id="sort"
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters({ ...filters, sortBy: e.target.value })
                }
                className="sort-select"
              >
                <option value="manual">SORT BY</option>
                <option value="newest">Newest</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="nameAZ">Alphabetically, A–Z</option>
                <option value="nameZA">Alphabetically, Z–A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="home-layout">
      
        <aside className="sidebar-section">
          <SideBarFilter filters={filters} setFilters={setFilters} />
        </aside>

       
        <main className="main-section">
          <div
            className={`product-grid ${
              viewMode === "compact" ? "compact-view" : "grid-view"
            }`}
          >
            {sortedProducts.length > 0 ? (
              sortedProducts.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <p className="no-products">No products found in this range.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CardHolderPage;
