import React from "react";
import "./CProductCard.css";

function CProductCard({ product }) {
 
  const price = product?.price ?? 0;
  const mrp = product?.mrp ?? 0;
  const discount = product?.discount ?? "";
  const image = product?.image ?? "";
  const name = product?.name ?? "Unnamed Product";
  const inStock = product?.inStock ?? true;

  return (
    <div className="product-card">
      <div className="image-container">
        {/* Show discount badge only if in stock */}
        {inStock && discount && (
          <div className="discount-badge">{discount}</div>
        )}

        <img
          src={image}
          alt={name}
          className="product-image"
        />

        {/* Out-of-stock overlay */}
        {!inStock && <div className="out-of-stock">Out of Stock</div>}
      </div>

      <div className="product-info">
        <h3>{name}</h3>
        <p>
          <span className="discounted-price">₹{price.toLocaleString()}</span>

          {/* Show MRP only if in stock */}
          {inStock && (
            <>
              <span className="mrp-text">MRP</span>
              <span className="mrp-price">₹{mrp.toLocaleString()}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default CProductCard;
