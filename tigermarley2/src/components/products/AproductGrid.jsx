import React from "react";
import ProductCard from "./AproductCard";
import "./AproductGrid.css";

const AproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AproductGrid;
