import React from "react";
import "./BackproductCard.css";

function BackproductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image-container">
        {/* Discount badge with dynamic discount */}
        <div className="discount-badge">{product.discount}</div>

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {/* Optional out-of-stock overlay */}
        {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>
          <span className="discounted-price">₹{product.price.toLocaleString()}</span>
          <span className="mrp-text">MRP</span>
          <span className="mrp-price">₹{product.mrp.toLocaleString()}</span>
        </p>
      </div>
    </div>
  );
}

export default BackproductCard;
