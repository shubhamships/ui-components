import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

export const CustomRecipe = () => {
  const [recipe, setRecipe] = useState<IRecipeData[]>([]);

  const location = useLocation();
  useEffect(() => {
    const storedRecipe = localStorage.getItem("customRecipe");
    if (storedRecipe) {
      setRecipe(JSON.parse(storedRecipe));
    }
  }, [location]);

  console.log(recipe, "Recipe");
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="min-h-screen bg-recipebg w-full relative">
      <div className="bg-teal-600 p-4 rounded-md shadow-md lg:mx-96">
        <div className="flex flex-col justify-center items-center text-white bg-transparent text-4xl font-semibold pt-10 pb-5">
          <h1 className="text-center">Custom Recipes</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          {recipe.map((recipe, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md w-full mb-4">
              <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
              {recipe.strMealThumb && (
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover mt-2" />
              )}
              <p className="mt-2">{recipe.strInstructions}</p>
              <p className="mt-2">Category: {recipe.strCategory}</p>
              <p className="mt-2">Area: {recipe.strArea}</p>
              <p className="mt-2">Tags: {recipe.strTags}</p>
              {recipe.strYoutube && (
                <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2">
                  Watch on YouTube
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
