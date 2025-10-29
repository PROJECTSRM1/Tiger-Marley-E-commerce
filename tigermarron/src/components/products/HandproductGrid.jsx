import React from "react";
import ProductCard from "./HandproductCard";
import "./handproductGrid.css";

const HandproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HandproductGrid;
