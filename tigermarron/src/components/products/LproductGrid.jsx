import React from "react";
import ProductCard from "./LproductCard";
import "./LproductGrid.css";

const LproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default LproductGrid;
