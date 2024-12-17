import axios from "axios";
import { Loader, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IRecipeData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strInstructions: string;
  strArea: string;
  [key: string]: any;
}
export const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<IRecipeData | null>(null);
  const [timeout, setTime] = useState<boolean>(false);

  const fetchRecipeDetail = async (id?: string) => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = res.data.meals[0];
      setRecipe(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setTime(false);
    }, 1000);
    if (id) {
      fetchRecipeDetail(id);
    }
    setTime(false);
  }, [id]);
  console.log(recipe);
  if (!recipe) {
    return (
      <div className="h-screen bg-recipebg text-white cursor-wait flex items-center justify-center">
        Loading <Loader className="animate-spin w-5 h-5 mx-2" />
      </div>
    );
  }
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(`${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`);
    }
  }
  return (
    <>
      <div className="bg-recipebg w-full min-h-screen">
        <div className="container mx-auto p-4 px-4">
          <div className="flex flex-col mt-5 md:mx-24 xl:mx-64 bg-recipeDetailsBg bg-opacity-50 rounded-lg">
            <div className="relative flex flex-col w-full">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full object-cover h-40 md:h-52 lg:h-64 rounded-lg"
              />
              <div className="-inset-7 flex items-end justify-center absolute">
                <div className="p-2 md:p-4 bg-white rounded-lg md:text-xl lg:text-2xl font-semibold md:px-40">
                  {recipe.strMeal}
                </div>
              </div>
            </div>
            <div className="text-white bg-recipeDetailsBg mt-20 m-4 p-5 rounded-lg shadow-lg">
              <div className="text-xl font-bold text-recipeDetailColor">Cooking Instruction</div>
              {recipe.strInstructions}
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-10 mt-5">
              <div className="text-white m-4 p-5 w-full">
                <div className="bg-recipeDetailsBg px-2 mt-4 rounded-lg shadow-lg">
                  <div className="text-xl font-bold text-recipeDetailColor">Ingredients List</div>
                  <ul className="text-lg mt-2 pr-2 pb-4 text-nowrap">
                    {ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-white bg-recipeDetailsBg m-4 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center w-full">
                <div className="text-xl font-bold text-recipeDetailColor">Recipe Instruction Video</div>
                {recipe.strYoutube && (
                  <a href={recipe.strYoutube} className="inline-block py-2 relative cursor-pointer">
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="h-64 w-96 object-cover brightness-50 rounded-md"
                    />
                    <div className="absolute flex justify-center items-center inset-0 ">
                      <span className="border-2 rounded-full p-2 ">
                        <Play className="w-8 h-8 text-white" />
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
