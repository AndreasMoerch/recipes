import { Recipe } from '../../types/Recipe';

export const scrambledEggs: Recipe = {
  id: "scrambled-eggs",
  name: "Scrambled Eggs",
  category: "breakfast",
  prepTime: { amount: 10, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1687630433648-294f1c78b070?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Main Ingredients",
      ingredients: [
        { name: "eggs", amount: "4", unit: "large" },
        { name: "milk", amount: "1/4", unit: "cup" },
        { name: "butter", amount: "1", unit: "tbsp" },
        { name: "salt", amount: "1/4", unit: "tsp" },
        { name: "black pepper", amount: "1/8", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Prepare Ingredients",
      steps: [
        "Crack the eggs into a bowl and whisk together with milk, salt, and pepper until well combined."
      ]
    },
    {
      name: "Cook Eggs",
      steps: [
        "Heat butter in a non-stick skillet over medium heat until melted.",
        "Pour the egg mixture into the skillet and let it sit for a few seconds without stirring.",
        "Gently stir the eggs with a spatula, pushing them from the edges toward the center, until curds form and the eggs are cooked to your desired consistency."
      ]
    },
    {
      name: "Serve",
      steps: [
        "Remove from heat and serve immediately with toast or your favorite breakfast sides."
      ]
    }
  ]
};