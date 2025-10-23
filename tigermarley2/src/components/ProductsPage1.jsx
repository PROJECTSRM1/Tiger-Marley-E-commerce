import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarFilter from './filters/SideBarFilter1';
import SortBar from './filters/SortBar1';
import ProductGrid from './products/ProductGrid1';
import products from '../data/products1';
import './ProductsPage1.css';

const ProductsPage1 = () => {
  const [filters, setFilters] = useState({
    inStockOnly: false,
    priceRange: [0, 14000]
  });
  const [sortBy, setSortBy] = useState('newest');


  const filteredProducts = products.filter(product => {
    if (filters.inStockOnly && product.soldOut) return false;
    const price = product.price;
    return price >= filters.priceRange[0] && price <= filters.priceRange[1];
  });

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>UPTO 30% OFF</h1>
      </header>
      
      <div className="products-content">
        <SideBarFilter filters={filters} setFilters={setFilters} />
        
        <main className="products-main">
          <SortBar sortBy={sortBy} setSortBy={setSortBy} />
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  );
};

export default ProductsPage1;