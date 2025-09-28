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
        {recipe.ingredientGroups.map((group) => (
          <div key={group.name} className="ingredient-group">
            <h3 className="ingredient-group-title">{group.name}</h3>
            <ul className="ingredients-list">
              {group.ingredients.map((ingredient) => (
                <li key={ingredient.name} className="ingredient-item">
                  <span className="ingredient-amount">{ingredient.amount}</span>
                  <span className="ingredient-unit">{ingredient.unit}</span>
                  <span className="ingredient-name">{ingredient.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="steps-section">
        <h2>Steps</h2>
        {recipe.stepGroups.map((group) => (
          <div key={group.name} className="step-group">
            <h3 className="step-group-title">{group.name}</h3>
            <ol className="steps-list">
              {group.steps.map((step, index) => (
                <li key={index} className="step-item">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RecipeDetail;