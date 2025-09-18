import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allRecipes } from '../../data/allRecipes';
import Breadcrumb from '../Breadcrumb';
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
      <Breadcrumb currentPageLabel={recipe.name} />
      <h1 className="recipe-title">{recipe.name}</h1>
      
      <section className="ingredients-section">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.name} className="ingredient-item">
              <span className="ingredient-amount">{ingredient.amount}</span>
              {ingredient.unit && <span className="ingredient-unit">{ingredient.unit}</span>}
              <span className="ingredient-name">{ingredient.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RecipeDetail;