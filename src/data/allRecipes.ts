import { Recipe } from '../types/Recipe';
import { spaghettiCarbonara } from './recipes/spaghettiCarbonara';
import { chickenTikkaMasala } from './recipes/chickenTikkaMasala';

/**
 * Complete list of all recipes.
 *
 * When adding a new recipe, remember to add it here!
 */
export const allRecipes: Recipe[] = [
  spaghettiCarbonara,
  chickenTikkaMasala
];