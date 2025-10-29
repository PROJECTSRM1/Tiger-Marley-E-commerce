import React from "react";
import ProductCard from "./MiniProductCard";
import "./MiniProductGrid.css";

const MiniProductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MiniProductGrid;
