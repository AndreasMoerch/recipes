import { useState, useEffect } from 'react';
import { Recipe } from '../types/Recipe';

/**
 * Custom hook for recipe filtering and category management
 * Handles category selection and recipe filtering (no URL routing)
 */
export const useRecipeFiltering = (recipes: Recipe[], favoriteIds: string[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);

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

  // Toggle favorites filter
  const toggleFavoritesFilter = () => {
    setShowFavoritesOnly(!showFavoritesOnly);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory(null);
    setShowFavoritesOnly(false);
  };

  // Auto-disable favorites filter when no favorites exist
  useEffect(() => {
    if (showFavoritesOnly && favoriteIds.length === 0) {
      setShowFavoritesOnly(false);
    }
  }, [favoriteIds.length, showFavoritesOnly]);

  // Filter recipes based on selected category and favorites
  let filteredRecipes = recipes;

  // Apply category filter
  if (selectedCategory) {
    filteredRecipes = filteredRecipes.filter(recipe => recipe.category === selectedCategory);
  }

  // Apply favorites filter
  if (showFavoritesOnly) {
    filteredRecipes = filteredRecipes.filter(recipe => favoriteIds.includes(recipe.id));
  }

  return {
    selectedCategory,
    categories,
    filteredRecipes,
    toggleCategory,
    showFavoritesOnly,
    toggleFavoritesFilter,
    clearAllFilters,
    hasActiveFilters: selectedCategory !== null || showFavoritesOnly
  };
};