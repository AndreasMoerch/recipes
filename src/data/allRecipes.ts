import { Recipe } from '../types/Recipe';
import { spaghettiCarbonara } from './recipes/spaghettiCarbonara';
import { chickenTikkaMasala } from './recipes/chickenTikkaMasala';

/**
 * Complete list of recipes.
 * 
 * When adding a new recipe, remember to add it here!
 */
export const allRecipes: Recipe[] = [
  { id: 1, ...spaghettiCarbonara },
  { id: 2, ...chickenTikkaMasala }
];