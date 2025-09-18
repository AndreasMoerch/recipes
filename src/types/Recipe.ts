/**
 * Represents a single ingredient in a recipe
 */
export interface Ingredient {
  /** The ingredient name (e.g., "flour", "eggs", "olive oil") */
  name: string;
  /** The amount/quantity (e.g., "2", "1/2", "3") */
  amount: string;
  /** The unit of measurement (e.g., "cups", "tbsp", "large", "cloves", "whole", "pinch") */
  unit: string;
}

/**
 * A single recipe, with everything included.
 */
export interface Recipe {
  /** Unique identifier for the recipe */
  id: string;
  /** Display name of the recipe */
  name: string;
  /** List of ingredients needed for the recipe */
  ingredients: Ingredient[];
  /** Step-by-step cooking instructions */
  steps: string[];
}