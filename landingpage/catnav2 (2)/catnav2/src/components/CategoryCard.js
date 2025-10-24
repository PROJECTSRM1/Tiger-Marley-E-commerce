import React from 'react';
import './CategoryCard1.css'; 
const CategoryCard = ({ imageSrc, categoryName, shopLink }) => {
  return (
    // Use <Link to={shopLink}> from 'react-router-dom' in a real app
    <a href={shopLink} className="category-card">
      <div className="image-container">
        <img 
          src={imageSrc} 
          alt={categoryName} 
          className="category-image" 
        />
        {/* You can use this overlay for visual effects */}
        <div className="overlay"></div> 
      </div>
      
      <p className="category-name">{categoryName}</p>
      
      <div className="shop-button-container">
        <span className="shop-button-text">SHOP NOW</span>
      </div>
    </a>
  );
};

export default CategoryCard;