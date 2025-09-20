import { useMemo } from 'react';
import { Recipe } from '../types/Recipe';

interface UseFilteredRecipesProps {
    recipes: Recipe[];
    selectedCategory: string | null;
    selectedMaxPrepTime: number | null;
}

/**
 * Hook that handles all recipe filtering logic
 * Returns filtered recipes
 */
export const useFilteredRecipes = ({
    recipes,
    selectedCategory,
    selectedMaxPrepTime
}: UseFilteredRecipesProps) => {

    // Default is just all recipes
    let filteredRecipes = recipes;

    // Filter on category (if selected)
    if (selectedCategory) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === selectedCategory);
    }

    // Filter on max prep time (if selected)
    if (selectedMaxPrepTime) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.prepTime.amount <= selectedMaxPrepTime);
    }

    return {
        filteredRecipes
    };
};