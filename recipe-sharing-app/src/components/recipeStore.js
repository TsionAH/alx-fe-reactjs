import { create } from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [], // initial empty list
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })), // add new recipe
  setRecipes: (recipes) => set({ recipes }) // replace the whole list
}));

export { useRecipeStore };
