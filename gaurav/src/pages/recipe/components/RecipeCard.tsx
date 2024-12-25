import React from 'react';
import { Check, MapPin, Plus, Tags, Utensils } from 'lucide-react';
import { CardSmallDetail } from './CardSmallDetail';

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
  handleClick: (id: string) => void;
  savedStatus: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, handleSavedRecipe, handleClick, savedStatus }) => {
  return (
    <div className="flex justify-center items-center hover:scale-105 duration-200">
      <div className="max-w-80 relative rounded-lg shadow-lg bg-recipeCardBg overflow-hidden h-96 overflow-y-hidden">
        <div
          className="absolute right-2 top-2 p-1 text-xs font-semibold px-1 rounded-full bg-white cursor-pointer border"
          onClick={() => handleSavedRecipe(recipe.idMeal)}
        >
          {savedStatus ? (
            <Check className="h-4 w-4 text-green-500 border-green-500" />
          ) : (
            <Plus className="h-4 w-4 text-green-500 border-green-500" />
          )}
        </div>
        <div className="w-full">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover" />
        </div>
        <div className="px-4 pb-2 cursor-pointer" onClick={() => handleClick(recipe.idMeal)}>
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
  );
};

export default RecipeCard;