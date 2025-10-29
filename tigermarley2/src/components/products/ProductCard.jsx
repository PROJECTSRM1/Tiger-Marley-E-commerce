import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="tm-product-card">
      {!product.inStock && <div className="sold-out-badge">SOLD OUT</div>}

      <div className="image-container">
        <img src={product.image} alt={product.name} />
        
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">₹ {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
