import { Recipe } from '../../types/Recipe';

export const pastaSalat: Recipe = {
  id: "pasta-salat",
  name: "Pasta Salat",
  category: "dinner",
  prepTime: { amount: 40, unit: "minutes" },
  imageUrl: "https://images.unsplash.com/photo-1639585947469-d7365ce62555?w=800&h=600&fit=crop&crop=center",
  ingredientGroups: [
    {
      name: "Dressing x2",
      ingredients: [
        { name: "Sennep", amount: "1", unit: "spsk" },
        { name: "olie", amount: "1", unit: "dl" },
        { name: "hvidløg", amount: "1-2", unit: "fed" },
        { name: "vand", amount: "2", unit: "spsk" },
        { name: "basilikum (tørret)", amount: "1-2", unit: "tsk" },
      ]
    },
    {
        name: "Pasta Salat",
        ingredients: [
            { name: "tre-farvet pasta", amount: "500", unit: "g" },
            { name: "gulerødder", amount: "5-6", unit: "stks" },
            { name: "hamburgerryg", amount: "150", unit: "g" },
            { name: "mandelsplitter", amount: "200", unit: "g" },
        ]
    }
  ],
  stepGroups: [
    {
      name: "Dressing (lav af 2 omgange)",
      steps: [
        "Bland sennep og vand i en skål.",
        "Langsomt tilføj olie under omrøring (pas på det ikke skiller).",
        "Tilsæt hakket/presset hvidløg og basilikum",
      ]
    },
    {
      name: "Salat",
      steps: [
        "Kog pasta - når det er færdigt, hæld vand fra og lad det køle.",
        "Skær gulerødder i små stykker.",
        "Skær hamburgerryg i små tern.",
        "Rist mandelsplitterne på panden, så de bliver pænt brune."
      ]
    },
    {
      name: "Færddiggør",
      steps: [
        "Bland kold pasta, gulerødder, hamburgerryg og mandelsplitter i en skål.",
        "Tilføj dressing til skålen og rør rundt.",
      ]
    }
  ]
};