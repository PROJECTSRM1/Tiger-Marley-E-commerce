import React from "react";
import ProductCard from "./MproductCard";
import "./MproductGrid.css";

const MproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MproductGrid;
