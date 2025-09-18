import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allRecipes } from '../../data/allRecipes';
import './RecipeDetail.css';

/**
 * Component that displays details for a single recipe
 * Uses URL parameter to find and display the specific recipe
 */
const RecipeDetail: React.FC = () => {
  // Fetch id from uri query params.
  const { id } = useParams<{ id: string }>();

  const recipe = allRecipes.find(recipe => recipe.id === id);

  if (!recipe) {
    return (
      <div>
        <h1>Recipe not found</h1>
        <Link to="/">Back to recipes</Link>
      </div>
    );
  }

  return (
    <div className="recipe-detail">
      <nav className="breadcrumb">
        <Link to="/">RECIPES</Link>
        <span className="breadcrumb-separator">›</span>
        <span>{recipe.name.toUpperCase()}</span>
      </nav>
      <Link to="/" className="back-link">← Back to recipes</Link>
      <h1 className="recipe-title">{recipe.name}</h1>
      <p>Recipe details coming soon...</p>
    </div>
  );
};

export default RecipeDetail;