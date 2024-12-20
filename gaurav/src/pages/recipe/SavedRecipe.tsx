import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface IRecipeData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strInstructions: string;
  strArea: string;
  [key: string]: any;
}

export const SavedRecipe = () => {
  const location = useLocation();
  const [searchresults, setSearchResults] = useState<IRecipeData[]>([]);

  useEffect(() => {
    const state = location.state as { savedRecipe: IRecipeData[] };
    if (state && state.savedRecipe) {
      setSearchResults(state.savedRecipe);
    }
  }, []);
  console.log(searchresults)
  return (
    <>
      <div className="bg-recipebg w-full min-h-screen">
        <div className="container mx-auto p-4 px-4">
          <div>
            <h1 className="text-white text-4xl font-semibold mt-10 p-10 text-center">Saved Recipes</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-around items-center mx-2 pb-16 lg:mx-40">
              {searchresults.length > 0 &&
                searchresults.map((recipe, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center cursor-pointer pt-10 pb-20 m-2 hover:scale-105 duration-200"
                  >
                    <div className="max-w-80 rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
                      <div className="w-full">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover" />
                      </div>
                      <div className="p-4">
                        <div className="text-white font-semibold text-xl">{recipe.strMeal}</div>
                        <p className="text-white mt-1">
                          <span className="font-semibold">tags:</span> {recipe.strTags}
                        </p>
                        <p className="text-white text-balance text-ellipsis">
                          <span className="font-semibold text-white">Instruction:</span>
                          {recipe.strInstructions.split(" ").slice(0, 40).join(" ") + ". . . "}
                        </p>
                        <div>
                          <span className="text-sm font-semibold text-white">Read More . . .</span>
                        </div>
                        <a href={recipe.strYoutube} className="text-sm text-white">
                          <span className="w-2 h-2">
                            <Play />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
