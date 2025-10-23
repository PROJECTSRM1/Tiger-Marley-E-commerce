import React from "react";
import ProductCard from "./WproductCard";
import "./WproductGrid.css";

const WproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default WproductGrid;
