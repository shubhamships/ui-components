import { Bookmark, BookmarkCheck, MapPin, Plus, Tags, Trash2, Utensils } from "lucide-react";
import { CardSmallDetail } from "./CardSmallDetail";

interface IData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strInstructions: string;
  idMeal: string;
  strCategory: string;
  strArea: string;
  savedRecipe: string[];
}

interface RecipeCardProps {
  recipe: IData;
  handleSavedRecipe: (id: string) => void;
  handleRemoveRecipe: (id: string) => void;
  handleClick: (id: string) => void;
  savedStatus: boolean;
}

const RecipeCard = ({ recipe, handleSavedRecipe, handleRemoveRecipe, handleClick, savedStatus }: RecipeCardProps) => {
  const iconStyle = "w-3 h-3 mr-1";
  return (
    <div className="flex justify-center items-center hover:scale-105 duration-200">
      <div className="max-w-80 relative rounded-lg shadow-lg bg-recipeCardBg overflow-hidden min-h-96 pb-2 overflow-y-hidden">
        <div className="absolute right-2 top-2 p-1 text-xs font-semibold px-1 rounded-full bg-white scale-125 cursor-pointer border">
          {savedStatus ? (
            <BookmarkCheck
              className="h-4 w-4 text-green-500 border-green-500 transition-all duration-200 transform hover:scale-110"
              onClick={() => handleRemoveRecipe(recipe.idMeal)}
            />
          ) : (
            <Bookmark
              className="h-4 w-4 text-green-500 border-green-500 transition-all duration-200 transform hover:scale-110"
              onClick={() => handleSavedRecipe(recipe.idMeal)}
            />
          )}
        </div>
        <div className="w-full">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover" />
        </div>
        <div className="px-4 pb-2 cursor-pointer pt-2" onClick={() => handleClick(recipe.idMeal)}>
          <div className="text-white font-semibold text-xl">{recipe.strMeal}</div>
          <div className="pt-1">
            <div className="flex flex-wrap gap-2">
              <CardSmallDetail iconName={<Tags className={iconStyle} />} detail={recipe.strTags} />
              <CardSmallDetail iconName={<MapPin className={iconStyle} />} detail={recipe.strArea} />
              <CardSmallDetail iconName={<Utensils className={iconStyle} />} detail={recipe.strCategory} />
            </div>
          </div>
          <p className="text-white text-balance text-ellipsis pt-1">
            <span className="font-semibold text-white">Instruction: </span>
            {recipe.strInstructions ? (
              <>
                <span className="text-sm">{recipe.strInstructions.split(" ").slice(0, 25).join(" ") + " "}</span>
                <span className="text-recipebg text-opacity-75 hover:underline cursor-pointer text-xs font-semibold">
                  Read More . . .
                </span>
              </>
            ) : (
              "No Instructions"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
