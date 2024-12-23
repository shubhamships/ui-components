import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardSmallDetail } from "./components/CardSmallDetail";

interface IRecipeData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strInstructions: string;
  strArea: string;
  strCategory: string;
  [key: string]: any;
}

export const SavedRecipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchresults, setSearchResults] = useState<IRecipeData[]>([]);

  useEffect(() => {
    // const state = location.state as { savedRecipe: IRecipeData[] };
    // if (state && state.savedRecipe) {
    //   setSearchResults(state.savedRecipe);
    // }
    const savedRecipe = localStorage.getItem("savedRecipe");
    if (savedRecipe) {
      setSearchResults(JSON.parse(savedRecipe));
    }
  }, []);
  console.log(searchresults);

  const handleClick = (id: string) => {
    navigate(`/recipedetail/${id}`);
  };

  return (
    <>
      <div className="bg-recipebg w-full min-h-screen">
        <div className="container mx-auto p-4 px-4">
          <div>
            <h1 className="text-white text-4xl font-semibold mt-10 p-10 text-center">Saved Recipes</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-around items-center mx-2 pb-16 lg:mx-20">
              {searchresults.length > 0 &&
                searchresults.map((recipe, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center cursor-pointer pt-10 pb-20 m-2 hover:scale-105 duration-200"
                    onClick={() => {
                      handleClick(recipe.idMeal);
                    }}
                  >
                    <div className="max-w-80 rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
                      <div className="w-full">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover" />
                      </div>
                      <div className="p-4">
                        <CardSmallDetail label="Tags" detail={recipe.strTags} />
                        <CardSmallDetail label="Area" detail={recipe.strArea} />
                        <CardSmallDetail label="Category" detail={recipe.strCategory} />
                        <p className="text-white text-balance text-ellipsis">
                          <span className="font-semibold text-white">Instruction: </span>
                          {recipe.strInstructions.split(" ").slice(0, 20).join(" ") + ". . . "}
                        </p>
                        <div>
                          <span className="text-sm font-semibold text-white">Read More . . .</span>
                        </div>
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
