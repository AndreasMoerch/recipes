import { Recipe } from '../../types/Recipe';

export const bruschetta: Recipe = {
  id: "bruschetta",
  name: "Tomato Bruschetta",
  category: "snack",
  prepTime: { amount: 15, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Topping",
      ingredients: [
        { name: "baguette slices", amount: "1", unit: "loaf" },
        { name: "tomatoes", amount: "3", unit: "medium" },
        { name: "basil", amount: "1/4", unit: "cup" },
        { name: "garlic", amount: "1", unit: "clove" },
        { name: "olive oil", amount: "2", unit: "tbsp" }
      ]
    }
  ],
  stepGroups: [
    {
      name: "Assemble",
      steps: [
        "Toast baguette slices, mix diced tomatoes with basil, garlic and olive oil, spoon on toast and serve."
      ]
    }
  ]
};