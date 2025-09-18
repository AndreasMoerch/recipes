import { Recipe } from '../../types/Recipe';

export const spaghettiCarbonara: Recipe = {
  id: "spaghetti-carbonara",
  name: "Spaghetti Carbonara",
  ingredients: [
    { name: "spaghetti", amount: "400", unit: "g" },
    { name: "pancetta", amount: "150", unit: "g" },
    { name: "eggs", amount: "3", unit: "large" },
    { name: "parmesan cheese", amount: "100", unit: "g" },
    { name: "black pepper", amount: "1", unit: "tsp" },
    { name: "salt", amount: "1", unit: "tsp" }
  ],
  steps: [
    "Bring a large pot of salted water to boil and cook spaghetti according to package directions until al dente.",
    "While pasta cooks, cut pancetta into small cubes and cook in a large skillet over medium heat until crispy.",
    "In a bowl, whisk together eggs, grated parmesan cheese, and freshly ground black pepper.",
    "Reserve 1 cup of pasta cooking water, then drain the pasta.",
    "Add hot pasta to the skillet with pancetta and toss to combine.",
    "Remove from heat and quickly stir in the egg mixture, adding pasta water as needed to create a creamy sauce.",
    "Serve immediately with extra parmesan cheese and black pepper."
  ]
};