import { Recipe } from '../../types/Recipe';

export const poelsehorn: Recipe = {
  id: "poelsehorn",
  name: "Pølsehorn (32 stks)",
  category: "snack",
  prepTime: { amount: 30, unit: "minutes" },
  imageUrl: "https://images.pexels.com/photos/31346253/pexels-photo-31346253.jpeg?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Dej",
      ingredients: [
        { name: "gær", amount: "25", unit: "g" },
        { name: "sødmælk", amount: "3", unit: "dl" },
        { name: "smær", amount: "100", unit: "g" },
        { name: "salt", amount: "1", unit: "tsk" },
        { name: "sukker", amount: "1", unit: "tsk" },
        { name: "æg", amount: "1", unit: "stk" },
        { name: "hvedemel", amount: "600", unit: "g" },
      ]
    },
      {
      name: "Resten",
      ingredients: [
        { name: "brunch pølser", amount: "32", unit: "stk" },
        { name: "æg", amount: "1", unit: "stk" },
        { name: "ketchup", amount: "", unit: "" },
      ]
    }
  ],
  stepGroups: [
    {
      name: "Dej",
      steps: [
        "Mælk lunes, og gær røres i.",
        "Hæld mel i en skål, og smør smuldres i.",
        "Tilsælt mælk-gær blanding, salt, sukker og æg i melet. Der røres/æltes til det er en dej",
        "Lad dejen hvile overdækket i 60 minutter.",
      ]
    },
    {
      name: "Klargør til bagning",
      steps: [
        "Dejen æltes let, og deles i 4 kugler.",
        "Hver kugle rulles ud til en cirkel, hvorfra der skæres 8 trekanter.",
        "Tilsæt evt ketchup og pølse på enden af trekanten, og rul dejen om pølserne.",
        "Efterhæv pølsehornene i 30 minutter.",
      ]
    },
    {
      name: "Bagning",
      steps: [
        "Pølsehornene pensles med æg.",
        "Bag i 15-20 minutter ved 200°C.",
        "Server med ekstra ketchup",
      ]
    }
  ]
};