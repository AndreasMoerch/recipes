import { Recipe } from '../../types/Recipe';

export const chiliConCarne: Recipe = {
  id: "chili-con-carne",
  name: "Chili Con Carne",
  isAiGenerated: true,
  category: "dinner",
  prepTime: { amount: 120, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1658308766948-01c85ade2737?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Chili",
      ingredients: [
        { name: "ground beef", amount: "500", unit: "g" },
        { name: "onion", amount: "1", unit: "large" },
        { name: "garlic", amount: "3", unit: "cloves" },
        { name: "kidney beans", amount: "1", unit: "can" },
        { name: "crushed tomatoes", amount: "1", unit: "can" },
        { name: "chili powder", amount: "2", unit: "tbsp" },
        { name: "cumin", amount: "1", unit: "tsp" },
        { name: "salt", amount: "1", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Cook",
      steps: [
        "Brown ground beef with chopped onion and garlic.",
        "Stir in spices, tomatoes and beans, then simmer for 1-1.5 hours until flavours meld."
      ]
    }
  ]
};