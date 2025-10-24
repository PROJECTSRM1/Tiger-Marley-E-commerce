import React from 'react';
import './CategoryGrid.css'; // Import the CSS file

// Data representing the four categories from the image
const categories = [
  { 
    id: 1, 
    title: "TOTES", 
    link: "/shop/totes", 
    imageAlt: "Leather Totes",
    imageSrc: "/images/Totes.webp" // Use local paths or import images
  },
  { 
    id: 2, 
    title: "MINIBAGS", 
    link: "/shop/mini-bags", 
    imageAlt: "Leather MiniBags",
    imageSrc: "/images/MINI_Bags.webp"
  },
  { 
    id: 3, 
    title: "BACKPACKS", 
    link: "/shop/backpacks", 
    imageAlt: "Leather Backpacks",
    imageSrc: "/images/Backpacks.webp"
  },
  { 
    id: 4, 
    title: "WALLETS", 
    link: "/shop/wallets", 
    imageAlt: "Leather Wallets",
    imageSrc: "/images/wallets.webp"
  },
];

const CategoryGrid = () => {
  return (
    <section className="category-section">
      
      <div className="category-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <a href={category.link} className="card-link">
              <img 
                src={category.imageSrc} 
                alt={category.imageAlt} 
                className="category-image"
              />
              <div className="overlay-content">
                <h3 className="overlay-title">{category.title}</h3>
                <button className="shop-button">Shop Now</button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;