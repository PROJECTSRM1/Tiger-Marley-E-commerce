import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarFilter from './filters/SideBarFilter';
import SortBar from './filters/SortBar';
import ProductGrid from './products/ProductGrid';
// import products from '../data/products';
import './ProductsPage.css';

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    inStockOnly: false,
    priceRange: [0, 14000]
  });
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');


  const filteredProducts = products.filter(product => {
    if (filters.inStockOnly && product.soldOut) return false;
    const price = product.price;
    return price >= filters.priceRange[0] && price <= filters.priceRange[1];
  });

  // Sort filtered products based on sortBy
  const sortedProducts = React.useMemo(() => {
    const list = [...filteredProducts];
    switch (sortBy) {
      case 'priceLowHigh':
        return list.sort((a, b) => a.price - b.price);
      case 'priceHighLow':
        return list.sort((a, b) => b.price - a.price);
      case 'nameAZ':
        return list.sort((a, b) => a.name.localeCompare(b.name));
      case 'newest':
      default:
        // No createdAt field: assume higher id = newer
        return list.sort((a, b) => b.id - a.id);
    }
  }, [filteredProducts, sortBy]);

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>UPTO 30% OFF</h1>
      </header>
      
      <div className="products-content">
        <SideBarFilter filters={filters} setFilters={setFilters} />
        
        <main className="products-main">
          <SortBar sortBy={sortBy} setSortBy={setSortBy} viewMode={viewMode} setViewMode={setViewMode} />
          <ProductGrid products={sortedProducts} viewMode={viewMode} />
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;