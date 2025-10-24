import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './products/ProductCard';
// import products from '../data/products';
import './Home.css';

const Home = () => {
  const visible = products.slice(0, 8);

  return (
    <div className="home-new-arrivals">
      <h2 className="na-heading">UPTO 30% OFF</h2>

      <div className="na-carousel" role="region" aria-label="New arrivals carousel">
        <div className="na-track">
          {visible.map((p) => (
            <div key={p.id} className="na-card-wrap">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="na-cta">
        <Link to="/products" className="na-view-all">VIEW ALL PRODUCTS</Link>
      </div>
    </div>
  );
};

export default Home;