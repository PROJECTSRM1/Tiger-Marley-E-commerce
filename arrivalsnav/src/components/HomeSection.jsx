
import React, { useState } from "react";
import ViewToggle from "./ViewToggle";
import SideBarFilter from "./filters/SideBarFilter";
import ProductCard from "./products/ProductCard";
import productsData from "../data/products";
import "./HomeSection.css";


const HomeSection = () => {
const [filters, setFilters] = useState({
inStockOnly: false,
priceRange: [0, 5950],
sortBy: "manual",
});


// 👇 control grid/compact mode
const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'compact'


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
return a.id - b.id; // default/manual
});


return (
<div className="full-page-container">
{/* ✅ Fixed Header Section */}
<div className="full-width-header-fixed">
<div className="header-content-wrapper">
<div className="left-header-controls">
{/* ✅ Use view toggle properly */}
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
</select>
</div>
</div>
</div>
</div>


{/* ✅ Page Content */}
<div className="home-layout">
{/* Sidebar */}
<aside className="sidebar-section">
<SideBarFilter filters={filters} setFilters={setFilters} />
</aside>


{/* Product Grid */}
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


export default HomeSection;

