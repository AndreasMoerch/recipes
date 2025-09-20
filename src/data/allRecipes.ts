import { Recipe } from '../types/Recipe';
import { spaghettiCarbonara } from './recipes/spaghettiCarbonara';
import { chickenTikkaMasala } from './recipes/chickenTikkaMasala';
import { liquoriceCheesecake } from './recipes/liquoriceCheesecake';

/**
 * Complete list of all recipes.
 *
 * When adding a new recipe, remember to add it here!
 */
export const allRecipes: Recipe[] = [
  spaghettiCarbonara,
  chickenTikkaMasala,
  liquoriceCheesecake
];

/**
 * Complete list of unique categories.
 */
export const allCategories: string[] = Array.from(new Set(allRecipes.map(recipe => recipe.category)));