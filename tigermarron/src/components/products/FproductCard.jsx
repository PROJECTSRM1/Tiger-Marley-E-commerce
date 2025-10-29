import React from "react";
import "./FproductCard.css";

function FProductCard({ product }) {

  const discountPercentage = product.mrp
    ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
    : null;

  return (
    <div className="product-card">
      <div className="image-container">

        {discountPercentage > 0 && (
          <div className="discount-badge">Save {discountPercentage}%</div>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

   
        <div className="price-section">
          <span className="discounted-price">₹{product.price.toLocaleString()}</span>
          {product.mrp && (
            <>
              <span className="mrp-label"> MRP </span>
              <span className="original-price">₹{product.mrp.toLocaleString()}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FproductCard;
