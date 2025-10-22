import React from "react";
import "./LproductCard.css";

function LproductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image-container">
        <div className="discount-badge">{product.discount}</div>

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

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

export default LproductCard;
