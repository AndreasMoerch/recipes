import { Recipe } from '../types/Recipe';
import { allRecipes } from '../data/allRecipes';

/**
 * Custom hook for fetching recipe data by ID
 * Returns recipe data or null if not found
 */
export const useRecipeData = (id: string | undefined): Recipe | null => {
  if (!id) return null;
  return allRecipes.find(recipe => recipe.id === id) || null;
};