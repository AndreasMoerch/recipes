import { useMemo } from 'react';
import { Recipe } from '../types/Recipe';

interface UseRecipeFilterProps {
  recipes: Recipe[];
  selectedCategory: string | null;
}

/**
 * Hook for filtering recipes based on current selections
 * Pure filtering logic without any state management
 */
export const useRecipeFilter = ({ 
  recipes, 
  selectedCategory
}: UseRecipeFilterProps) => {
  
  // Find all unique cateogries for all recipes
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));

  // Apply category filter to recipes
  const filteredRecipes = selectedCategory
      ? recipes.filter(recipe => recipe.category === selectedCategory)
      : recipes;

  return {
    categories,
    filteredRecipes
  };
};