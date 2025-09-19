import { useState } from 'react';
import { Recipe } from '../types/Recipe';

/**
 * Custom hook for recipe filtering and category management
 * Handles category selection and recipe filtering (no URL routing)
 */
export const useRecipeFiltering = (recipes: Recipe[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from all recipes
  const categories = Array.from(new Set(recipes.map(recipe => recipe.category)));

  // Toggle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategory === category) {
      // Deselect category
      setSelectedCategory(null);
    } else {
      // Select category
      setSelectedCategory(category);
    }
  };

  // Filter recipes based on selected category
  const filteredRecipes = selectedCategory
      ? recipes.filter(recipe => recipe.category === selectedCategory)
      : recipes;

  return {
    selectedCategory,
    categories,
    filteredRecipes,
    toggleCategory
  };
};