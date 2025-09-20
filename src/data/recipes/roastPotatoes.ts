import { Recipe } from '../../types/Recipe';

export const roastPotatoes: Recipe = {
  id: "roast-potatoes",
  name: "Crispy Roast Potatoes",
  category: "side",
  prepTime: { amount: 60, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1726455414693-4323bf8cbb75?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Potatoes",
      ingredients: [
        { name: "potatoes", amount: "1.2", unit: "kg" },
        { name: "olive oil", amount: "3", unit: "tbsp" },
        { name: "rosemary", amount: "1", unit: "tbsp" },
        { name: "salt", amount: "1", unit: "tsp" },
        { name: "black pepper", amount: "1/2", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Prep Potatoes",
      steps: [
        "Preheat oven to 220°C (425°F).",
        "Parboil potatoes for 8-10 minutes until just tender, drain and rough up the edges."
      ]
    },
    {
      name: "Roast",
      steps: [
        "Toss potatoes with olive oil, rosemary, salt and pepper.",
        "Spread on a baking tray and roast for 35-40 minutes until golden and crispy, turning once."
      ]
    },
    {
      name: "Serve",
      steps: [
        "Serve hot as a side with your favourite roast."
      ]
    }
  ]
};