import { Recipe } from '../../types/Recipe';

export const greekSalad: Recipe = {
  id: "greek-salad",
  name: "Greek Salad",
  isAiGenerated: true,
  category: "side",
  prepTime: { amount: 15, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Salad",
      ingredients: [
        { name: "cucumber", amount: "1", unit: "medium" },
        { name: "tomatoes", amount: "3", unit: "medium" },
        { name: "red onion", amount: "1/2", unit: "small" },
        { name: "feta cheese", amount: "150", unit: "g" },
        { name: "kalamata olives", amount: "1/2", unit: "cup" },
        { name: "olive oil", amount: "2", unit: "tbsp" },
        { name: "lemon juice", amount: "1", unit: "tbsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Assemble",
      steps: [
        "Chop cucumber, tomatoes and red onion into bite-sized pieces.",
        "Combine in a bowl with olives and crumbled feta, drizzle with olive oil and lemon juice, toss gently and serve."
      ]
    }
  ]
};