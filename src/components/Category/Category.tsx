import React from 'react';
import './Category.css';

const CATEGORY_EMOJIS: Record<string, string> = {
  dinner: '🍽️',
  dessert: '🍰',
};

interface CategoryProps {
  /** The category name to display */
  name: string;
}

/**
 * Component for displaying recipe category with consistent styling
 */
const Category: React.FC<CategoryProps> = ({ name }) => {
  const emoji = CATEGORY_EMOJIS[name.toLowerCase()] || '🍴';

  return (
    <span className="category">
      <span className="category-emoji">{emoji}</span>
      <span className="category-text">{name}</span>
    </span>
  );
};

export default Category;