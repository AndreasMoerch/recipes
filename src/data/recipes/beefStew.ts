import { Recipe } from '../../types/Recipe';

export const beefStew: Recipe = {
  id: "beef-stew",
  name: "Hearty Beef Stew",
  category: "dinner",
  prepTime: { amount: 150, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1664741662725-bd131742b7b7?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Stew",
      ingredients: [
        { name: "beef chuck (cubed)", amount: "1", unit: "kg" },
        { name: "carrots", amount: "3", unit: "medium" },
        { name: "potatoes", amount: "3", unit: "medium" },
        { name: "onion", amount: "1", unit: "large" },
        { name: "garlic", amount: "3", unit: "cloves" },
        { name: "beef stock", amount: "4", unit: "cups" },
        { name: "tomato paste", amount: "2", unit: "tbsp" },
        { name: "bay leaves", amount: "2", unit: "pieces" },
        { name: "salt", amount: "1", unit: "tsp" },
        { name: "black pepper", amount: "1/2", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Brown Beef",
      steps: [
        "Season beef cubes with salt and pepper.",
        "Brown the beef in batches in a heavy pot with a little oil over medium-high heat; remove and set aside."
      ]
    },
    {
      name: "Build Stew",
      steps: [
        "Sauté onions and garlic in the same pot until softened.",
        "Add tomato paste and cook 1-2 minutes, then deglaze with a splash of stock.",
        "Return beef to the pot, add carrots, potatoes, bay leaves, and remaining stock.",
        "Simmer on low heat for 1.5-2 hours until beef is tender."
      ]
    },
    {
      name: "Finish",
      steps: [
        "Adjust seasoning and remove bay leaves before serving.",
        "Serve hot with crusty bread."
      ]
    }
  ]
};