import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeData } from '../../hooks/useRecipeData';
import Breadcrumb from '../Breadcrumb';
import PrepTime from '../PrepTime/PrepTime';
import './RecipeDetail.css';

/**
 * Component that displays details for a single recipe
 * Uses URL parameter to find and display the specific recipe
 */
const RecipeDetail: React.FC = () => {
  // Fetch id from uri query params.
  const { id } = useParams<{ id: string }>();
   // Navigates to root if no recipe
  const recipe = useRecipeData(id);

  return (
    <div className="recipe-detail">
      <Breadcrumb 
        currentPageLabel={recipe.name} 
      />
      <h1 className="recipe-title">{recipe.name}</h1>
      
      {recipe.imageUrl && (
        <div className="recipe-hero-image">
          <img src={recipe.imageUrl} alt={recipe.name} />
        </div>
      )}
      
      <PrepTime prepTime={recipe.prepTime} />
      
      <section className="ingredients-section">
        <h2>Ingredients</h2>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.name} className="ingredient-item">
              <span className="ingredient-amount">{ingredient.amount}</span>
              <span className="ingredient-unit">{ingredient.unit}</span>
              <span className="ingredient-name">{ingredient.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="steps-section">
        <h2>Instructions</h2>
        <ol className="steps-list">
          {recipe.steps.map((step, index) => (
            <li key={index} className="step-item">
              {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default RecipeDetail;