import { Recipe } from '../../types/Recipe';

export const nachos: Recipe = {
  id: "loaded-nachos",
  name: "Loaded Nachos",
  category: "snack",
  prepTime: { amount: 25, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1570466199120-80bba1eabad7?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Toppings",
      ingredients: [
        { name: "tortilla chips", amount: "1", unit: "bag" },
        { name: "ground beef", amount: "300", unit: "g" },
        { name: "cheddar cheese", amount: "200", unit: "g" },
        { name: "jalapeños", amount: "2", unit: "pieces" },
        { name: "salsa", amount: "1", unit: "cup" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Assemble",
      steps: [
        "Bake or microwave tortilla chips on a tray, scatter cooked seasoned beef and cheese, bake until cheese melts, top with jalapeños and salsa."
      ]
    }
  ]
};