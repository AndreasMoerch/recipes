import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Recipe } from '../../types/Recipe';
import { allRecipes } from '../../data/allRecipes';
import Category from '../Category';
import './RecipeList.css';

/**
 * Displays a list of all available recipes with category filtering capabilities.
 * Allows users to filter recipes by category, updates the URL to reflect the selected category,
 * and synchronizes the selected category with the URL for direct navigation and bookmarking.
 */
const RecipeList: React.FC = () => {
  const recipes: Recipe[] = allRecipes;
  const { category: urlCategory } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from all recipes
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));

  // Sync URL category with state
  useEffect(() => {
    setSelectedCategory(urlCategory || null);
  }, [urlCategory]);

  // Toggle category selection and update URL
  const toggleCategory = (category: string) => {
    if (selectedCategory === category) {
      // Deselect - go back to home
      navigate('/');
    } else {
      // Select - navigate to category URL
      navigate(`/category/${category}`);
    }
  };

  // Filter recipes based on selected category
  const filteredRecipes = selectedCategory 
    ? recipes.filter(recipe => recipe.category === selectedCategory)
    : recipes;

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
          <div key={recipe.id} className="recipe-item">
            <Link to={`/category/${recipe.category}/recipe/${recipe.id}`} className="recipe-link">
              {recipe.name}
            </Link>
            <Category name={recipe.category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;