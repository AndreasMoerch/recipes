import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../types/Recipe';
import { allRecipes } from '../data/allRecipes';

/**
 * Custom hook for fetching recipe data by ID
 * Automatically redirects to home if recipe is not found
 */
export const useRecipeData = (id: string | undefined): Recipe => {
  const navigate = useNavigate();
  const recipe = id ? allRecipes.find(recipe => recipe.id === id) : null;

  // Redirect to home if recipe not found
  useEffect(() => {
    if (!recipe) {
      navigate('/');
    }
  }, [recipe, navigate]);

  // Safe to assert non-null because redirect handles null case
  return recipe as Recipe;
};