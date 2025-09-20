import { Recipe } from '../../types/Recipe';

export const chickenTikkaMasala: Recipe = {
  id: "chicken-tikka-masala",
  name: "Chicken Tikka Masala",
  category: "dinner",
  prepTime: { amount: 45, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Chicken Marinade",
      ingredients: [
        { name: "chicken breast", amount: "1", unit: "lb" },
        { name: "plain yogurt", amount: "1/2", unit: "cup" },
        { name: "garlic", amount: "2", unit: "cloves" },
        { name: "ginger", amount: "1/2", unit: "tbsp" },
        { name: "garam masala", amount: "1", unit: "tsp" },
        { name: "paprika", amount: "1/2", unit: "tsp" },
        { name: "cumin", amount: "1/2", unit: "tsp" }
      ]
    },
    {
      name: "Masala Sauce",
      ingredients: [
        { name: "vegetable oil", amount: "2", unit: "tbsp" },
        { name: "onion", amount: "1", unit: "large" },
        { name: "garlic", amount: "1", unit: "clove" },
        { name: "ginger", amount: "1/2", unit: "tbsp" },
        { name: "garam masala", amount: "1", unit: "tsp" },
        { name: "paprika", amount: "1/2", unit: "tsp" },
        { name: "cumin", amount: "1/2", unit: "tsp" },
        { name: "crushed tomatoes", amount: "1", unit: "can" },
        { name: "heavy cream", amount: "1/2", unit: "cup" },
        { name: "salt", amount: "1", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Prepare Chicken",
      steps: [
        "Cut chicken breast into bite-sized pieces.",
        "In a bowl, mix yogurt, minced garlic, ginger, garam masala, paprika, and cumin.",
        "Add chicken pieces to the marinade and let sit for at least 30 minutes."
      ]
    },
    {
      name: "Cook Chicken",
      steps: [
        "Heat 1 tbsp oil in a large skillet over medium-high heat.",
        "Cook marinated chicken until browned and cooked through, about 6-8 minutes.",
        "Remove chicken and set aside."
      ]
    },
    {
      name: "Make Masala Sauce",
      steps: [
        "In the same skillet, add remaining oil and sauté diced onion until softened and golden, about 5 minutes.",
        "Add remaining garlic, ginger, garam masala, paprika, and cumin. Cook for 1 minute until fragrant.",
        "Pour in crushed tomatoes and simmer for 10 minutes, stirring occasionally.",
        "Stir in heavy cream and return chicken to the skillet.",
        "Simmer for 5 more minutes and season with salt to taste."
      ]
    },
    {
      name: "Serve",
      steps: [
        "Serve hot with rice or naan bread."
      ]
    }
  ]
};