import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allRecipes } from '../../data/allRecipes';
import { Recipe } from '../../types/Recipe';
import FilterBar from '../FilterBar/FilterBar';
import Category from '../Category/Category';
import PrepTime from '../PrepTime/PrepTime';
import './RecipeList.css';

/**
 * Displays a list of all available recipes with filtering capabilities.
 * The FilterBar handles all filtering logic internally.
 */
const RecipeList: React.FC = () => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(allRecipes);

  return (
    <div className="recipe-list-container">
      <FilterBar
        recipes={allRecipes}
        onFilteredRecipesChange={setFilteredRecipes}
      />

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