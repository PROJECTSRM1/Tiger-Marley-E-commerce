import React from "react";
import ProductCard from "./TotesProductCard";
import "./TotesProductGrid.css";

const TotesProductGrid = ({ products }) => {
  return (
    <div className="tm-product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default TotesProductGrid;
