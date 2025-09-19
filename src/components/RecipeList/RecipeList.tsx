import React from 'react';
import { Link } from 'react-router-dom';
import { allRecipes } from '../../data/allRecipes';
import { useRecipeFiltering } from '../../hooks/useRecipeFiltering';
import Category from '../Category/Category';
import PrepTime from '../PrepTime/PrepTime';
import './RecipeList.css';

/**
 * Displays a list of all available recipes with category filtering capabilities.
 * Allows users to filter recipes by category, updates the URL to reflect the selected category,
 * and synchronizes the selected category with the URL for direct navigation and bookmarking.
 */
const RecipeList: React.FC = () => {
  const { selectedCategory, categories, filteredRecipes, toggleCategory } = useRecipeFiltering(allRecipes);

  return (
    <div className="recipe-list-container">
      <div className="categories-section">
        <h2>Categories</h2>
        <div className="categories-list">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => toggleCategory(category)}
            >
              <Category name={category} />
            </button>
          ))}
        </div>
      </div>

      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="recipe-item-link"
          >
            <div className="recipe-item">
              <div className="recipe-main-info">
                <div className="recipe-name">
                  {recipe.name}
                </div>
                <div className="recipe-meta">
                  <PrepTime prepTime={recipe.prepTime} />
                  <Category name={recipe.category} />
                </div>
              </div>
              
              {recipe.imageUrl && (
                <div className="recipe-image">
                  <img src={recipe.imageUrl} alt={recipe.name} />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;