import { Recipe } from '../../types/Recipe';

export const pancakes: Recipe = {
  id: "pancakes",
  name: "Fluffy Pancakes",
  isAiGenerated: true,
  category: "breakfast",
  prepTime: { amount: 20, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1597524305544-cd821476715f?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Batter",
      ingredients: [
        { name: "all-purpose flour", amount: "1 1/2", unit: "cups" },
        { name: "baking powder", amount: "3 1/2", unit: "tsp" },
        { name: "salt", amount: "1", unit: "tsp" },
        { name: "granulated sugar", amount: "1", unit: "tbsp" },
        { name: "milk", amount: "1 1/4", unit: "cups" },
        { name: "egg", amount: "1", unit: "large" },
        { name: "butter (melted)", amount: "3", unit: "tbsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Make Batter",
      steps: [
        "Whisk together flour, baking powder, salt, and sugar in a large bowl.",
        "In another bowl, beat the egg with milk and melted butter, then pour into dry ingredients and stir until just combined."
      ]
    },
    {
      name: "Cook Pancakes",
      steps: [
        "Heat a non-stick skillet or griddle over medium heat and lightly grease with butter.",
        "Pour 1/4 cup batter per pancake onto the skillet and cook until bubbles form on the surface, then flip and cook until golden."
      ]
    },
    {
      name: "Serve",
      steps: [
        "Serve hot with maple syrup, fresh berries, or toppings of your choice."
      ]
    }
  ]
};