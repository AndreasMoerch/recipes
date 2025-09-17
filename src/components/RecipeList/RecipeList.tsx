import React from 'react';
import { Recipe } from '../../types/Recipe';
import { allRecipes } from '../../data/allRecipes';

/**
 * Component that displays a list of all available recipes, without caring about specific details (e.g. steps) about it.
 */
const RecipeList: React.FC = () => {


  return (
    <div>
      {allRecipes.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>
      ))}
    </div>
  );
};

export default RecipeList;