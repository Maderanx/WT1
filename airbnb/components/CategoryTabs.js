// src/components/CategoryTabs.js
import React from 'react';
import './CategoryTabs.css';

const categories = [
  "Icons", "Amazing views", "Farms", "Amazing pools", "Rooms", "New", 
  "Beachfront", "OMG!", "Countryside", "Luxe", "Treehouses", "Islands"
];

const CategoryTabs = ({ onSelectCategory }) => {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
