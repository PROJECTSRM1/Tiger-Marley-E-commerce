import React from "react";
import ProductCard from "./SleeveproductCard";
import "./SleeveproductGrid.css";

const SleeveproductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SleeveproductGrid;
