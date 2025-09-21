<!-- .github/copilot-instructions.md -->

# Repository guidance for AI coding agents

Purpose: quick, actionable info to help an AI agent be productive in this small React + TypeScript app that lists recipes and shows recipe details.

- Project root: `package.json` defines two primary scripts: `npm start` (dev server) and `npm run build` (production build).
- App entry: `src/index.tsx` -> `src/App.tsx` (uses `HashRouter` and two routes: `/` -> `RecipeList`, `/recipe/:id` -> `RecipeDetail`).

Key concepts and files
- Data model: `src/types/Recipe.ts` — the canonical Recipe shape (id, name, category, ingredientGroups, stepGroups, prepTime, optional imageUrl). Use this type when creating or updating recipes.
- All recipes registry: `src/data/allRecipes.ts` — central array `allRecipes: Recipe[]` and computed `allCategories`. When adding a new recipe, export it from `src/data/recipes/*.ts` and add it to this array.
- Hooks: state and filtering live in `src/hooks`:
  - `useRecipeData.ts` — single-recipe lookup by `id`; redirects to home if missing.
  - `useFilterSelection.ts` — UI selection state for filters (category and max prep time).
  - `useFilterRecipes.ts` — pure filtering logic used by `RecipeList`.

Patterns and conventions (copyable examples)
- Recipe files live at `src/data/recipes/*.ts` and export a single named `Recipe` object. Example: `export const pancakes: Recipe = { id: 'pancakes', name: 'Pancakes', ... }`.
- Always update `src/data/allRecipes.ts` to include newly exported recipes; `allCategories` is derived from the `category` field of items in `allRecipes`.
- UI state separation: selection (what the user chose) is in `useFilterSelection`, pure filtering is in `useFilterRecipes` — prefer adding changes to the appropriate layer.
- Redirect-on-missing: `useRecipeData` uses `useNavigate()` to redirect when a recipe `id` cannot be found. Do not assume an undefined recipe will be rendered — the hook enforces navigation away.

Editing guidelines for common tasks
- Add a new recipe:
  1. Create `src/data/recipes/<name>.ts` exporting a `Recipe` object typed with `Recipe` from `src/types/Recipe.ts`.
  2. Import and add it to `src/data/allRecipes.ts` (maintain the array order if you care about display ordering).
  3. If you added a new `category` value, `allCategories` will include it automatically (it's derived from `allRecipes`).

- Change filtering behavior:
  - UI toggles live in `useFilterSelection.ts` — update toggle logic if you need different UX.
  - Filtering rules belong in `useFilterRecipes.ts` — it's pure and easy to unit test. Add new filter criteria here and pass them from `FilterBar` props.

Developer workflows and commands
- Run dev server: `npm start` (starts `react-scripts start` on port 3000).
- Build production bundle: `npm run build` (creates `build/`).
- TypeScript types: this is a TypeScript project but there is no separate `tsc` build script; `react-scripts` runs TypeScript checks during dev/build. Keep exported recipe objects fully typed.

Testing and safety
- There are no unit tests in the repo. If you add tests, put them alongside modules using the repository style (e.g., `src/hooks/useFilterRecipes.test.ts`) and run them with a test runner you add (not yet present).
- Linting: repo uses `react-app` ESLint config; prefer small, local changes to avoid large stylistic churn.

Edge cases and gotchas
- Recipe identity: `id` must be unique across `allRecipes`. Several hooks rely on `id` to find recipes — duplicate ids will break lookups and navigation.
- Redirect behavior: `useRecipeData` will navigate back to `/` for missing IDs. If testing components in isolation, stub or mock `useNavigate` to avoid unexpected navigation.
- Prep time filtering compares `prepTime.amount` to numeric max; ensure `prepTime.amount` is a number (not string).

Integration points and external dependencies
- No external APIs — all data is local under `src/data/`.
- Primary dependencies: `react`, `react-dom`, `react-router-dom`, and `react-scripts`. See `package.json` for exact versions.

What an AI agent should do first (priority list)
1. When adding or editing recipes, update `src/data/recipes/*.ts` and `src/data/allRecipes.ts` together.
2. When modifying filters, change UI state in `useFilterSelection.ts` and filtering logic in `useFilterRecipes.ts`.
3. When changing routing or page structure, update `src/App.tsx` and verify `HashRouter` usage aligns with hosting (GitHub Pages uses hash routing here).

References (examples to inspect)
- `src/types/Recipe.ts` — canonical types
- `src/data/allRecipes.ts` — registry and categories derivation
- `src/hooks/useRecipeData.ts`, `useFilterSelection.ts`, `useFilterRecipes.ts`
- `src/App.tsx`, `src/index.tsx` — routing and app bootstrap

If something in this file is unclear or missing, ask for the specific area you want clarified (e.g., build steps on CI, preferred test runner, or rules for adding categories).
