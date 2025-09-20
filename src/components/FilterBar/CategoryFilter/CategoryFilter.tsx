import React from 'react';
import { FilterProps } from '../FilterProp';
import './CategoryFilter.css';

/**
 * Category filter component for filtering recipes by category
 */
const CategoryFilter: React.FC<FilterProps<string>> = ({ options, selected, onToggle }) => {
  return (
    <div className="category-filter-section">
      <h2>Categories</h2>
      <div className="category-filter-list">
        {options.map((category) => (
          <button
            key={category}
            className={`category-filter-button ${selected === category ? 'active' : ''}`}
            onClick={() => onToggle(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;