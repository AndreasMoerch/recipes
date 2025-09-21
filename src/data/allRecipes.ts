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
import { greekSalad } from './recipes/greekSalad';
import { chiliConCarne } from './recipes/chiliConCarne';
import { bananaBread } from './recipes/bananaBread';
import { garlicShrimp } from './recipes/garlicShrimp';
import { avocadoToast } from './recipes/avocadoToast';
import { nachos } from './recipes/nachos';
import { bruschetta } from './recipes/bruschetta';
import { cheesePlatter } from './recipes/cheesePlatter';
import { pastaSalat } from './recipes/pastaSalat';
import { poelsehorn } from './recipes/poelsehorn';

/**
 * Complete list of AI recipes.
 * These will eventually be removed. Are here for testing purposes.
 */
export const allAiRecipes: Recipe[] = [
  spaghettiCarbonara,
  chickenTikkaMasala,
  lasagna,
  scrambledEggs,
  pancakes,
  tomatoSoup,
  beefStew,
  roastPotatoes,
  vegetableStirFry,
  greekSalad,
  chiliConCarne,
  bananaBread,
  garlicShrimp,
  avocadoToast,
  liquoriceCheesecake,
  nachos,
  bruschetta,
  cheesePlatter,
]

/**
 * Complete list of all recipes.
 *
 * When adding a new recipe, remember to add it here!
 */
export const allRecipes: Recipe[] = [
  ...allAiRecipes,
  pastaSalat,
  poelsehorn,
];

/**
 * Complete list of unique categories.
 */
export const allCategories: string[] = Array.from(new Set(allRecipes.map(recipe => recipe.category)));