import { ChevronLeft, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IRecipeData } from "@/lib/interfaces";
import { apiClient } from "@/api/apiClient";
import Button from "@/components/ui/personal/Button";

export const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<IRecipeData | null>(null);
  const [istimeout, setIsTimeOut] = useState<boolean>(false);

  const fetchRecipeDetail = async (id?: string) => {
    try {
      const res = await apiClient.get(`lookup.php?i=${id}`);
      const data = res.data.meals[0];
      setRecipe(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsTimeOut(false);
    }, 1000);
    if (id) {
      fetchRecipeDetail(id);
    }
    setIsTimeOut(false);
  }, [id]);

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
  const steps = recipe.strInstructions.split(/(?:STEP\s*\d*[:.]?\s*)/i).filter((step) => step.trim() !== "");
  return (
    <>
      <div className="bg-recipebg w-full min-h-screen">
        <div className="container mx-auto p-4 px-4">
          <Button
            title=""
            size="icon"
            iconName={<ChevronLeft />}
            className="bg-recipeCardBg hover:bg-recipeCardBg border-none hover:bg-opacity-75"
            onClick={() => navigate(-1)}
          />
          <div className="text-white bg-transparent text-4xl font-semibold pt-10 pb-5">
            <h1 className="text-center">Recipe Detail</h1>
          </div>
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
              {steps.map((step, index) => (
                <div key={index} className="mb-4">
                  {steps.length > 1 && <span className="font-semibold">STEP {index + 1} :</span>} {step.trim()}
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center lg:items-baseline justify-between gap-5 mt-5">
              <div className="text-white m-4 px-4 md:p-5 w-full">
                <div className="bg-recipeDetailsBg px-4 rounded-lg shadow-lg">
                  <div className="text-xl font-bold text-recipeDetailColor pt-2">Ingredients List</div>
                  <ul className="text-lg mt-2 pr-2 pb-4 text-nowrap">
                    {ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-white bg-recipeDetailsBg m-4 p-4 rounded-lg shadow-lg flex flex-col items-center w-full">
                <div className="text-xl font-bold text-recipeDetailColor">Recipe Instruction Video</div>
                {recipe.strYoutube && (
                  <div className="w-full h-full">
                    <iframe
                      src={recipe.strYoutube.replace("watch?v=", "embed/")}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                      className="w-full min-h-52 mt-2 rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
