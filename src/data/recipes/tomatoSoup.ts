import { Recipe } from '../../types/Recipe';

export const tomatoSoup: Recipe = {
  id: "tomato-soup",
  name: "Creamy Tomato Soup",
  isAiGenerated: true,
  category: "lunch",
  prepTime: { amount: 35, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1620418029653-f708dd37096a?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Soup",
      ingredients: [
        { name: "olive oil", amount: "2", unit: "tbsp" },
        { name: "onion", amount: "1", unit: "medium" },
        { name: "garlic", amount: "2", unit: "cloves" },
        { name: "crushed tomatoes", amount: "2", unit: "cans" },
        { name: "vegetable stock", amount: "2", unit: "cups" },
        { name: "heavy cream", amount: "1/2", unit: "cup" },
        { name: "salt", amount: "1", unit: "tsp" },
        { name: "black pepper", amount: "1/2", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Make Soup",
      steps: [
        "Heat oil in a large pot and sauté chopped onion until translucent.",
        "Add garlic and cook for 1 minute until fragrant.",
        "Add crushed tomatoes and stock; simmer for 15-20 minutes.",
        "Blend the soup until smooth, return to pot, stir in cream, and season to taste."
      ]
    },
    {
      name: "Serve",
      steps: [
        "Serve hot with crusty bread and a drizzle of cream if desired."
      ]
    }
  ]
};