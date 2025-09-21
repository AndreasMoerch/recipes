import { Recipe } from '../../types/Recipe';

export const bananaBread: Recipe = {
  id: "banana-bread",
  name: "Banana Bread",
  isAiGenerated: true,
  category: "dessert",
  prepTime: { amount: 70, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1569762404472-026308ba6b64?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Batter",
      ingredients: [
        { name: "ripe bananas", amount: "3", unit: "medium" },
        { name: "all-purpose flour", amount: "2", unit: "cups" },
        { name: "sugar", amount: "3/4", unit: "cup" },
        { name: "butter (melted)", amount: "1/2", unit: "cup" },
        { name: "eggs", amount: "2", unit: "large" },
        { name: "baking soda", amount: "1", unit: "tsp" },
        { name: "salt", amount: "1/2", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Make Batter",
      steps: [
        "Preheat oven to 175°C (350°F).",
        "Mash bananas and mix with melted butter and sugar.",
        "Stir in eggs and dry ingredients until just combined, pour into loaf pan and bake for 50-60 minutes."
      ]
    }
  ]
};