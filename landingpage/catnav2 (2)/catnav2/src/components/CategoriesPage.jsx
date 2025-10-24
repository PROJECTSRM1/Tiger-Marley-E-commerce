import React from 'react';
import CategoryCard from './CategoryCard';
import './CategoriesPage.css';


const categoriesData = [
  { 
    id: 1, 
    name: 'HANDBAGS', 
    image: '/images/cat1.webp', 
  },
  { 
    id: 2, 
    name: 'SHOULDER BAGS', 
    image: '/images/cat2.webp', 
    link: '/collections/shoulder-bags' 
  },
  { 
    id: 3, 
    name: 'DUFFLE BAGS', 
    image: '/images/cat3.webp', 
    link: '/collections/duffle-bags' 
  },
  { 
    id: 4, 
    name: 'LAPTOP BAGS', 
    image: '/images/cat4.webp', 
    link: '/collections/laptop-bags' 
  },
];

const CategoriesPage = () => {
  return (
    <div className="categories-page-container">
      
      <h2 className="page-heading">CATEGORIES</h2>
      
      <div className="categories-grid">
        {categoriesData.map(category => (
          <CategoryCard
            key={category.id}
            imageSrc={category.image}
            categoryName={category.name}
            shopLink={category.link}
          />
        ))}
      </div>

    </div>
  );
};

export default CategoriesPage;