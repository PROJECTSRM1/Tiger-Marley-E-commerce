import React from "react";
import ProductCard from "./JproductCard";
import "./JproductGrid.css";

const productGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default JproductGrid;
