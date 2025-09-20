import { Recipe } from '../../types/Recipe';

export const spaghettiCarbonara: Recipe = {
  id: "spaghetti-carbonara",
  name: "Spaghetti Carbonara",
  category: "dinner",
  prepTime: { amount: 15, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Pasta",
      ingredients: [
        { name: "spaghetti", amount: "400", unit: "g" },
        { name: "salt", amount: "1", unit: "tsp" }
      ]
    },
    {
      name: "Carbonara Sauce",
      ingredients: [
        { name: "pancetta", amount: "150", unit: "g" },
        { name: "eggs", amount: "3", unit: "large" },
        { name: "parmesan cheese", amount: "100", unit: "g" },
        { name: "black pepper", amount: "1", unit: "tsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Prepare Pasta",
      steps: [
        "Bring a large pot of salted water to boil.",
        "Cook spaghetti according to package directions until al dente.",
        "Reserve 1 cup of pasta cooking water, then drain the pasta."
      ]
    },
    {
      name: "Prepare Sauce",
      steps: [
        "While pasta cooks, cut pancetta into small cubes and cook in a large skillet over medium heat until crispy.",
        "In a bowl, whisk together eggs, grated parmesan cheese, and freshly ground black pepper."
      ]
    },
    {
      name: "Combine and Serve",
      steps: [
        "Add hot pasta to the skillet with pancetta and toss to combine.",
        "Remove from heat and quickly stir in the egg mixture, adding pasta water as needed to create a creamy sauce.",
        "Serve immediately with extra parmesan cheese and black pepper."
      ]
    }
  ]
};