/**
 * Base recipe information - represents the core recipe details
 */
export interface BaseRecipe {
  /** The display name of the recipe */
  name: string;
}

/**
 * Complete recipe with unique identifier - used for the final recipe list
 */
export interface Recipe extends BaseRecipe {
  /** Unique identifier */
  id: number;
}