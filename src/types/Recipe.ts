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
 * Represents a group of ingredients for a specific part of the recipe
 */
export interface IngredientGroup {
  /** The name of the group (e.g., "sauce", "marinade", "garnish") */
  name: string;
  /** List of ingredients in this group */
  ingredients: Ingredient[];
}

/**
 * Represents a group of steps for a specific part of the recipe
 */
export interface StepGroup {
  /** The name of the group (e.g., "sauce", "potatoes", "assembly") */
  name: string;
  /** Step-by-step instructions for this group */
  steps: string[];
}

/**
 * Represents preparation time with flexible amount and unit
 */
export interface PrepTime {
  /** The amount of time (e.g., 15, 30, 45) */
  amount: number;
  /** The unit of time (e.g., "minutes", "hours", "days") */
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
  /** Whether the recipe was AI generated (true) or not (false) */
  isAiGenerated: boolean;
  /** Recipe category (e.g., "dinner", "dessert", "breakfast") */
  category: string;
  /** Grouped ingredients for different parts of the recipe */
  ingredientGroups: IngredientGroup[];
  /** Grouped step-by-step cooking instructions */
  stepGroups: StepGroup[];
  /** Preparation time with amount and unit */
  prepTime: PrepTime;
  /** Recipe image URL (optional) */
  imageUrl?: string;
}