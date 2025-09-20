import { Recipe } from '../../types/Recipe';

export const cheesePlatter: Recipe = {
  id: "cheese-platter",
  name: "Simple Cheese Platter",
  category: "snack",
  prepTime: { amount: 10, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1700760933443-84ef4f5feac4?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Platter",
      ingredients: [
        { name: "assorted cheeses", amount: "300", unit: "g" },
        { name: "crackers", amount: "1", unit: "box" },
        { name: "grapes", amount: "1", unit: "cup" },
        { name: "nuts", amount: "1/2", unit: "cup" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Arrange",
      steps: [
        "Arrange cheeses, crackers, grapes and nuts on a board and serve."
      ]
    }
  ]
};