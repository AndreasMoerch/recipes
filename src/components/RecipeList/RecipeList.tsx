import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../types/Recipe';
import { allRecipes } from '../../data/allRecipes';
import './RecipeList.css';

/**
 * Component that displays a list of all available recipes
 * Each recipe name is a clickable link to the recipe detail page
 */
const RecipeList: React.FC = () => {
  const recipes: Recipe[] = allRecipes;

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
          <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;