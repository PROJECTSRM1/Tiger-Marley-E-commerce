import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { name, image, price, soldOut, discount, mrp } = product;

  return (
    <div className="tm-product-card">
      {soldOut && <div className="sold-out-badge">SOLD OUT</div>}

      <div className="image-container">
        {discount && <div className="discount-badge">{discount}</div>}
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="price-group">
          <span className="current-price">₹ {price.toLocaleString('en-IN')}</span>
          {mrp && (
            <span className="original-mrp">MRP ₹ {mrp.toLocaleString('en-IN')}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
