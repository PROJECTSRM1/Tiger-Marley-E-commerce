import React from "react";
import ProductCard from "./PassproductCard";
import "./PassproductGrid.css";

const PassproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default PassproductGrid;
