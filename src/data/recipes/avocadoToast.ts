import { Recipe } from '../../types/Recipe';

export const avocadoToast: Recipe = {
  id: "avocado-toast",
  name: "Simple Avocado Toast",
  category: "breakfast",
  prepTime: { amount: 10, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Toast",
      ingredients: [
        { name: "bread slices", amount: "2", unit: "pieces" },
        { name: "ripe avocado", amount: "1", unit: "medium" },
        { name: "salt", amount: "1/4", unit: "tsp" },
        { name: "black pepper", amount: "1/8", unit: "tsp" },
        { name: "lemon juice", amount: "1", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Assemble",
      steps: [
        "Toast bread, mash avocado with lemon juice, salt and pepper, spread on toast and serve."
      ]
    }
  ]
};