import { Recipe } from '../../types/Recipe';

export const vegetableStirFry: Recipe = {
  id: "vegetable-stir-fry",
  name: "Quick Vegetable Stir-Fry",
  category: "dinner",
  prepTime: { amount: 20, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1599297915779-0dadbd376d49?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Vegetables",
      ingredients: [
        { name: "broccoli florets", amount: "2", unit: "cups" },
        { name: "bell pepper", amount: "1", unit: "medium" },
        { name: "carrot", amount: "1", unit: "medium" },
        { name: "snap peas", amount: "1", unit: "cup" },
        { name: "garlic", amount: "2", unit: "cloves" }
      ]
    },
    {
      name: "Sauce",
      ingredients: [
        { name: "soy sauce", amount: "3", unit: "tbsp" },
        { name: "sesame oil", amount: "1", unit: "tbsp" },
        { name: "honey", amount: "1", unit: "tbsp" },
        { name: "cornstarch", amount: "1", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Prepare",
      steps: [
        "Mix sauce ingredients together in a small bowl.",
        "Chop vegetables into bite-sized pieces."
      ]
    },
    {
      name: "Stir-Fry",
      steps: [
        "Heat a wok or large skillet over high heat with a little oil.",
        "Stir-fry vegetables starting with the hardest first (carrot, broccoli), then add quicker-cooking ones (peppers, snap peas).",
        "Add garlic and pour the sauce into the pan; cook until sauce thickens and vegetables are coated."
      ]
    },
    {
      name: "Serve",
      steps: [
        "Serve hot over steamed rice or noodles."
      ]
    }
  ]
};