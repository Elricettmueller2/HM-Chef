import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Recipe type
export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUri?: string; // Optional image URI
}

// Define the context type
interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (recipe: Omit<Recipe, 'id'>) => void;
  updateRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: string) => void;
}

// Create the context with default values
const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  addRecipe: () => {},
  updateRecipe: () => {},
  deleteRecipe: () => {},
});

// Custom hook to use the recipe context
export const useRecipes = () => useContext(RecipeContext);

export const RecipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  // Add a new recipe
  const addRecipe = (recipeData: Omit<Recipe, 'id'>) => {
    const newRecipe: Recipe = {
      ...recipeData,
      id: Date.now().toString(),
    };
    setRecipes([...recipes, newRecipe]);
  };

  // Update an existing recipe
  const updateRecipe = (updatedRecipe: Recipe) => {
    setRecipes(
      recipes.map((recipe) => 
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  // Delete a recipe
  const deleteRecipe = (id: string) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        addRecipe,
        updateRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
