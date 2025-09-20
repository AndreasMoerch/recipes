import { Recipe } from '../types/Recipe';
import { spaghettiCarbonara } from './recipes/spaghettiCarbonara';
import { chickenTikkaMasala } from './recipes/chickenTikkaMasala';
import { liquoriceCheesecake } from './recipes/liquoriceCheesecake';
import { lasagna } from './recipes/lasagna';
import { scrambledEggs } from './recipes/scrambledEggs';
import { pancakes } from './recipes/pancakes';
import { tomatoSoup } from './recipes/tomatoSoup';
import { beefStew } from './recipes/beefStew';
import { roastPotatoes } from './recipes/roastPotatoes';
import { vegetableStirFry } from './recipes/vegetableStirFry';

/**
 * Complete list of all recipes.
 *
 * When adding a new recipe, remember to add it here!
 */
export const allRecipes: Recipe[] = [
  spaghettiCarbonara,
  chickenTikkaMasala,
  lasagna,
  scrambledEggs,
  pancakes,
  tomatoSoup,
  beefStew,
  roastPotatoes,
  vegetableStirFry,
  liquoriceCheesecake,
];

/**
 * Complete list of unique categories.
 */
export const allCategories: string[] = Array.from(new Set(allRecipes.map(recipe => recipe.category)));