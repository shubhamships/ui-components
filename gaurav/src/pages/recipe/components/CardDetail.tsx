import { MapPin, Tags, Utensils } from "lucide-react";
import { CardSmallDetail } from "./CardSmallDetail";
interface IRecipeData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  idMeal: string;
  [key: string]: any;
}
interface ICardDetailProps {
  currentRecipes: IRecipeData[];
  onClick: any;
  recipeId: any;
  handleClick: (id: string) => void;
}
export const CardDetail = ({ currentRecipes }: ICardDetailProps) => {
  function handleSavedRecipe(idMeal: string): void {
      console.log(`Recipe with ID ${idMeal} saved.`);
      // Implement the logic to save the recipe, e.g., update state or make an API call
  }
  function handleClick(idMeal: string): void {
      throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="flex justify-center items-center mx-2 pb-16">
        <div className="flex flex-col lg:flex-row justify-center items-start pt-5 pb-2 m-2 gap-8">
          {currentRecipes.length > 0 &&
            currentRecipes.map((recipe, index) => (
              <div key={index} className="flex justify-center items-center hover:scale-105 duration-200">
                <div className="max-w-80 relative rounded-lg shadow-lg bg-recipeCardBg overflow-hidden h-96 overflow-y-hidden">
                  <div
                    className="absolute right-2 top-2 p-1 text-xs font-semibold px-2 text-red-500 rounded-full bg-white cursor-pointer border border-red-500"
                    onClick={() => handleSavedRecipe(recipe.idMeal)}
                  >
                    save
                  </div>
                  <div className="w-full">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover" />
                  </div>
                  <div
                    className="p-4 cursor-pointer"
                      onClick={() => handleClick(recipe.idMeal)}
                    // onClick={recipeId}
                  >
                    <div className="text-white font-semibold text-xl">{recipe.strMeal}</div>
                    <div className="pt-1">
                      <div className="flex flex-wrap gap-2">
                        <CardSmallDetail iconName={<Tags className="w-3 h-3 mr-1" />} detail={recipe.strTags} />
                        <CardSmallDetail iconName={<MapPin className="w-3 h-3 mr-1" />} detail={recipe.strArea} />
                        <CardSmallDetail iconName={<Utensils className="w-3 h-3 mr-1" />} detail={recipe.strCategory} />
                      </div>
                    </div>
                    <p className="text-white text-balance text-ellipsis pt-1">
                      <span className="font-semibold text-white">Instruction: </span>
                      {recipe.strInstructions ? (
                        <>
                          <span className="text-sm">
                            {recipe.strInstructions.split(" ").slice(0, 25).join(" ") + " "}
                          </span>
                          <span className="cursor-pointer text-xs font-semibold">Read More . . .</span>
                        </>
                      ) : (
                        "No Instructions"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
