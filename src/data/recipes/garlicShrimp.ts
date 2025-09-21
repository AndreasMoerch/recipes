import { Recipe } from '../../types/Recipe';

export const garlicShrimp: Recipe = {
  id: "garlic-shrimp",
  name: "Garlic Butter Shrimp",
  isAiGenerated: true,
  category: "dinner",
  prepTime: { amount: 20, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1748659118761-44a30b82478c?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Shrimp",
      ingredients: [
        { name: "large shrimp (peeled)", amount: "500", unit: "g" },
        { name: "garlic", amount: "4", unit: "cloves" },
        { name: "butter", amount: "3", unit: "tbsp" },
        { name: "lemon juice", amount: "1", unit: "tbsp" },
        { name: "parsley", amount: "2", unit: "tbsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Cook",
      steps: [
        "Sauté garlic in butter until fragrant, add shrimp and cook until pink, finish with lemon juice and parsley."
      ]
    }
  ]
};