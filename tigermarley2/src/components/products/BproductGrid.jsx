import React from "react";
import ProductCard from "./BProductCard";
import "./BproductGrid.css";

const BproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default BproductGrid;
