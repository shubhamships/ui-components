import Input from "@/components/ui/Input";
import Button from "@/components/ui/personal/Button";
import { useState } from "react";
import { CustomRecipe } from "./CustomRecipe";

interface IRecipeData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  idMeal: string;
  strYoutube: string;
}

export const AddRecipe = () => {
  const initialRecipeState = {
    strMeal: "",
    strMealThumb: "",
    strTags: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    idMeal: "",
    strYoutube: "",
  };
  const [recipe, setRecipe] = useState<IRecipeData>(initialRecipeState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
    console.log(recipe);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log(recipe);
    const storedRecipes = localStorage.getItem("customRecipe");
    const existingRecipes: IRecipeData[] = storedRecipes ? JSON.parse(storedRecipes) : [];
    const updatedRecipes = [...existingRecipes, recipe];
    localStorage.setItem("customRecipe", JSON.stringify(updatedRecipes));
    setRecipe(initialRecipeState); // Reset the form
  };

  return (
    <div className="min-h-screen bg-recipebg w-full relative">
      <div className="bg-teal-600 p-4 rounded-md shadow-md lg:mx-96">
        <div className="flex flex-col justify-center items-center text-white bg-transparent text-4xl font-semibold pt-10 pb-5">
          <h1 className="text-center">Add Recipe</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input
                labelData="Recipe Name"
                type="text"
                id=""
                name="strMeal"
                value={recipe.strMeal}
                onChange={handleChange}
                placeholder="Recipe Name"
                required
              />
              <Input
                labelData="Upload Image"
                type="file"
                id=""
                name="strMealThumb"
                value={recipe.strMealThumb}
                onChange={handleChange}
                placeholder="Image Url"
                required
              />
              <Input
                labelData="tags"
                type="text"
                id=""
                name="strTags"
                value={recipe.strTags}
                onChange={handleChange}
                placeholder="Tags"
                required
              />
              <Input
                labelData="Category"
                type="text"
                id=""
                name="strCategory"
                value={recipe.strCategory}
                onChange={handleChange}
                placeholder="Category"
                required
              />
              <Input
                labelData="Area"
                type="text"
                id=""
                name="strArea"
                value={recipe.strArea}
                onChange={handleChange}
                placeholder="Area"
                required
              />
              {/* <Input
                type="text-area"
                id=""
                name="strInstructions"
                value={recipe.strInstructions}
                onChange={handleChange}
                placeholder="Instructions"
                required
              /> */}
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="strInstructions" className="text-sm font-normal leading-none">
                  Instructions <span className="text-red-primary">*</span>
                </label>
                <textarea
                  className="rounded-md"
                  name="strInstructions"
                  value={recipe.strInstructions}
                  onChange={handleChange}
                  id=""
                />
              </div>
              <Input
                labelData="Youtube Url"
                type="url"
                id=""
                name="strYoutube"
                value={recipe.strYoutube}
                onChange={handleChange}
                placeholder="Youtube Url"
              />
              <Input
                labelData="Meal Id"
                type="text"
                id=""
                name="idMeal"
                value={recipe.idMeal}
                onChange={handleChange}
                placeholder="Meal Id"
                required
              />
            </div>
            <Button
              title="Submit"
              type="submit"
              className="bg-recipeCardBg hover:bg-recipeCardBg border-none hover:bg-opacity-75"
            />
          </form>
        </div>
      </div>
      <CustomRecipe />
    </div>
  );
};
