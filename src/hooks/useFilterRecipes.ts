import { Recipe } from '../types/Recipe';

interface UseFilteredRecipesProps {
    recipes: Recipe[];
    selectedCategory: string | null;
    selectedMaxPrepTime: number | null;
    selectedSource: string | null;
}

/**
 * Hook that handles all recipe filtering logic
 * Returns filtered recipes
 */
export const useFilteredRecipes = ({
    recipes,
    selectedCategory,
    selectedMaxPrepTime,
    selectedSource,
}: UseFilteredRecipesProps) => {

    // Default is just all recipes
    let filteredRecipes = recipes;

    // Temporary filter to remove AI recipes from the page (selectedSource === null => all recipes)
    if (selectedSource === "AI") {
        filteredRecipes = filteredRecipes.filter(recipes => recipes.isAiGenerated)
    } else if (selectedSource === "Non-AI") (
        filteredRecipes = filteredRecipes.filter(recipe => !recipe.isAiGenerated)
    )

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