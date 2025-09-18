import React from 'react';
import './Category.css';

interface CategoryProps {
  /** The category name to display */
  name: string;
}

/**
 * Component for displaying recipe category with consistent styling
 */
const Category: React.FC<CategoryProps> = ({ name }) => {
  return (
    <span className="category">
      {name}
    </span>
  );
};

export default Category;