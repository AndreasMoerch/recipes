import { Recipe } from '../../types/Recipe';

export const liquoriceCheesecake: Recipe = {
  id: "liquorice-cheesecake",
  name: "Liquorice Cheesecake",
  category: "dessert",
  ingredients: [
    { name: "digestive biscuits", amount: "200", unit: "g" },
    { name: "unsalted butter", amount: "80", unit: "g" },
    { name: "cream cheese", amount: "600", unit: "g" },
    { name: "caster sugar", amount: "150", unit: "g" },
    { name: "large eggs", amount: "3", unit: "whole" },
    { name: "double cream", amount: "300", unit: "ml" },
    { name: "black liquorice", amount: "100", unit: "g" },
    { name: "vanilla extract", amount: "1", unit: "tsp" },
    { name: "plain flour", amount: "2", unit: "tbsp" },
    { name: "liquorice powder", amount: "2", unit: "tsp" },
    { name: "salt", amount: "1/4", unit: "tsp" }
  ],
  steps: [
    "Preheat oven to 160°C (140°C fan). Grease and line a 23cm springform cake tin.",
    "Crush digestive biscuits into fine crumbs and mix with melted butter. Press firmly into the base of the prepared tin.",
    "Chop black liquorice into small pieces and melt with 2 tbsp of cream in a small saucepan over low heat, stirring until smooth. Set aside to cool.",
    "Beat cream cheese until smooth, then gradually add sugar, beating until light and fluffy.",
    "Beat in eggs one at a time, then add vanilla extract and the cooled liquorice mixture.",
    "Sift together flour, liquorice powder, and salt, then fold into the cream cheese mixture.",
    "Gradually fold in the remaining cream until just combined. Don't overmix.",
    "Pour mixture over the biscuit base and smooth the top.",
    "Bake for 50-60 minutes until the center is just set with a slight wobble.",
    "Turn off oven and leave cheesecake inside with door ajar for 1 hour to cool gradually.",
    "Refrigerate for at least 4 hours or overnight before serving.",
    "Remove from tin and dust with extra liquorice powder if desired before serving."
  ]
};