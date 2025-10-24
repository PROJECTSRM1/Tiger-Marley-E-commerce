import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductGrid.css";

const ProductGrid = ({ products, viewMode = 'grid' }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={`product-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
      {products.map((product) => (
        <div
          key={product.id}
          className={`product-card ${product.soldOut ? "sold-out" : ""} ${viewMode === 'list' ? 'list-item' : ''}`}
          onClick={() => handleProductClick(product.id)}
        >
          <div className="image-container">
            {product.discount && (() => {
              const m = String(product.discount).match(/(\d+)%/);
              const label = m ? `SAVE ${m[1]}%` : String(product.discount);
              return <div className="discount-badge">{label}</div>;
            })()}
            <img src={product.image} alt={product.name} />
          </div>

          <h3>{product.name}</h3>
          <div className="price-group">
            <span className="current-price">₹ {product.price.toLocaleString('en-IN')}</span>
            {product.mrp && (
              <span className="original-mrp">MRP ₹ {product.mrp.toLocaleString('en-IN')}</span>
            )}
          </div>
          {/* no inline green discount text here — badge shows the savings */}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
