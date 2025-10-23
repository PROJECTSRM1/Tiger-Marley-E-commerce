import React from "react";
import ProductCard from "./CardproductCard";
import "./CardproductGrid.css";

const CardproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardproductGrid;
