import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allRecipes } from '../../data/allRecipes';

/**
 * Component that displays details for a single recipe
 * Uses URL parameter to find and display the specific recipe
 */
const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = allRecipes.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <div>
        <h1>Recipe not found</h1>
        <Link to="/">Back to recipes</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">← Back to recipes</Link>
      <h1>{recipe.name}</h1>
      <p>Recipe details coming soon...</p>
    </div>
  );
};

export default RecipeDetail;