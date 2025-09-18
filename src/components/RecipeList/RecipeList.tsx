import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../types/Recipe';
import { allRecipes } from '../../data/allRecipes';

/**
 * Component that displays a list of all available recipes
 * Each recipe name is a clickable link to the recipe detail page
 */
const RecipeList: React.FC = () => {
  const recipes: Recipe[] = allRecipes;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;