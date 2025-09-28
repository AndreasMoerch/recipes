import { Recipe } from '../../types/Recipe';

export const lasagna: Recipe = {
  id: "lasagna",
  name: "Classic Lasagna",
  isAiGenerated: true,
  category: "dinner",
  prepTime: { amount: 90, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1640063414338-af9faa0c2485?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Meat Sauce",
      ingredients: [
        { name: "ground beef", amount: "500", unit: "g" },
        { name: "onion", amount: "1", unit: "large" },
        { name: "garlic", amount: "3", unit: "cloves" },
        { name: "crushed tomatoes", amount: "2", unit: "cans" },
        { name: "tomato paste", amount: "2", unit: "tbsp" },
        { name: "dried oregano", amount: "1", unit: "tsp" },
        { name: "dried basil", amount: "1", unit: "tsp" },
        { name: "salt", amount: "1", unit: "tsp" },
        { name: "black pepper", amount: "1/2", unit: "tsp" }
      ]
    },
    {
      name: "Cheese Mixture",
      ingredients: [
        { name: "ricotta cheese", amount: "500", unit: "g" },
        { name: "parmesan cheese", amount: "1/2", unit: "cup" },
        { name: "egg", amount: "1", unit: "large" },
        { name: "salt", amount: "1/4", unit: "tsp" },
        { name: "black pepper", amount: "1/8", unit: "tsp" }
      ]
    },
    {
      name: "Other Ingredients",
      ingredients: [
        { name: "lasagna noodles", amount: "12", unit: "pieces" },
        { name: "mozzarella cheese", amount: "2", unit: "cups" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Prepare Meat Sauce",
      steps: [
        "In a large skillet, cook ground beef over medium heat until browned. Drain excess fat.",
        "Add diced onion and minced garlic to the skillet. Cook until softened.",
        "Stir in crushed tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20 minutes."
      ]
    },
    {
      name: "Prepare Cheese Mixture",
      steps: [
        "In a bowl, mix ricotta cheese, grated parmesan cheese, egg, salt, and pepper until well combined."
      ]
    },
    {
      name: "Assemble Lasagna",
      steps: [
        "Preheat oven to 375°F (190°C).",
        "Spread a thin layer of meat sauce on the bottom of a 9x13 inch baking dish.",
        "Place a layer of lasagna noodles over the sauce.",
        "Spread a layer of the cheese mixture over the noodles, followed by a layer of meat sauce and a sprinkle of shredded mozzarella cheese.",
        "Repeat layers until all ingredients are used, ending with a layer of mozzarella cheese on top."
      ]
    },
    {
      name: "Bake",
      steps: [
        "Cover the baking dish with aluminum foil and bake for 25 minutes.",
        "Remove the foil and bake for an additional 20 minutes, or until the cheese is bubbly and golden brown.",
        "Let the lasagna cool for 10 minutes before serving."
      ]
    }
  ]
};