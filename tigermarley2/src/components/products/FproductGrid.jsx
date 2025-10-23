import React from "react";
import ProductCard from "./FproductCard";
import "./FproductGrid.css";

const FproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FproductGrid;
