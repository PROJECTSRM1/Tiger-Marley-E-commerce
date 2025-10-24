import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages and Components
// import CategoriesPage from './components/CategoriesPage';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import HeroSections from './components/HeroSections';
import CustomisationPage from './Pages/CustomisationPage';
import ProductDetail from './components/product';
import ProductDetail1 from './components/products/product1';

import ProductsPage from './components/ProductsPage';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      {/* Common layout components */}
      <ProductDetail />
      <CategoryGrid />
      <HeroSections />
      <CustomisationPage />

      
    </div>
  );
}

export default App;