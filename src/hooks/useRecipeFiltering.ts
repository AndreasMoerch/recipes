import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Recipe } from '../types/Recipe';

/**
 * Custom hook for recipe filtering and category management
 * Handles URL synchronization, category selection, and recipe filtering
 */
export const useRecipeFiltering = (recipes: Recipe[]) => {
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

  return {
    selectedCategory,
    categories,
    filteredRecipes,
    toggleCategory
  };
};