import React from "react";
import ProductCard from "./BackproductCard";
import "./BackproductGrid.css";

const BackproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BackproductGrid;
