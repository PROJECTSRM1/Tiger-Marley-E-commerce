import React from "react";
import ProductCard from "./LuggageproductCard";
import "./LuggageproductGrid.css";

const LuggageproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default LuggageproductGrid;
