import Input from "@/components/ui/Input";
import Button from "@/components/ui/personal/Button";
import axios from "axios";
import { Play, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strInstructions: string;
  idMeal: string;
  savedRecipe: string[];
}

export const HomePage = () => {
  const [recipes, setRecipes] = useState<IData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedRecipe, setSavedRecipe] = useState<IData[]>([]);
  const navigate = useNavigate();

  const fetchRecipes = async (query = "") => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = res.data;
      return data.meals;
    } catch (error) {
      console.log("Error fetching Recipes", error);
    }
  };
  useEffect(() => {
    const loadData = async () => {
      const result = await fetchRecipes();
      setRecipes(result);
    };
    loadData();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await fetchRecipes(searchQuery);
    navigate(`/searchresults?query=${searchQuery}`);
    setRecipes(result);
  };
  const handleClick = (id: string) => {
    navigate(`/recipedetail/${id}`);
  };

  const handleSavedRecipe = (id: string): void => {
    const recipe = recipes.find((recipe) => recipe.idMeal === id);
    if (recipe) {
      const duplicate = savedRecipe.find((item) => item.strMeal === recipe.strMeal);
      if(!duplicate) {
        const updatedRecipe = [...savedRecipe, recipe];
        setSavedRecipe(updatedRecipe);
        localStorage.setItem("savedRecipe", JSON.stringify(updatedRecipe));
        alert("Recipe Saved");
      } else {
        alert("Recipe Already Saved");
      }
      
    }
  };

  const navigatetoSaved = () => {
    navigate("saved", { state: { savedRecipe } });
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe?.strMeal?.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  console.log(filteredRecipes, "Filtered Recipes");
  console.log(recipes, "Recipes");
  console.log(savedRecipe, "Saved Recipe");
  return (
    <>
      <div className="bg-recipebg w-full min-h-screen">
        <div className="text-white text-4xl font-semibold mt-10 p-10">
          <h1 className="text-center">
            Find Recipies. Learn Ingredients.
            <br /> Taste It!
          </h1>
        </div>
        <div className="px-4 md:px-20 lg:px-64 mt-5 shadow-inner">
          <Input
            type="text"
            id="recipe-input"
            placeholder="Search Your Favorite Recipe. . ."
            className="border-none focus:disabled focus:outline-none focus:border-none focus-visible:ring-0 accent-transparent bg-white bg-opacity-75"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e: any) => e.key === "Enter" && handleSearch(e)}
          >
            <div className="px-2 cursor-pointer">
              <Search onClick={handleSearch} />
            </div>
          </Input>
          <Button
            title="Saved Recipes"
            className="bg-recipeCardBg hover:bg-recipeCardBg border-none hover:bg-opacity-75 mt-2"
            onClick={navigatetoSaved}
          />
        </div>
        <div className="flex justify-center items-center mx-2 pb-16">
          <div className="flex flex-col lg:flex-row justify-center items-start mt-10 pt-10 pb-20 m-2 gap-8">
            {recipes.length > 0 &&
              recipes.slice(0, 3).map((recipe, index) => (
                <div key={index} className="flex justify-center items-center hover:scale-105 duration-200">
                  <div className="max-w-80 relative rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
                    <div
                      className="absolute right-2 top-2 p-1 text-xs font-semibold px-2 text-red-500 rounded-full bg-white cursor-pointer border border-red-500"
                      onClick={() => handleSavedRecipe(recipe.idMeal)}
                    >
                      save
                    </div>
                    <div className="w-full">
                      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-40 object-cover" />
                    </div>
                    <div className="p-4 cursor-pointer" onClick={() => handleClick(recipe.idMeal)}>
                      <div className="text-white font-semibold text-xl">{recipe.strMeal}</div>
                      <p className="text-white mt-1">
                        <span className="font-semibold">tags:</span> {recipe.strTags}
                      </p>
                      <p className="text-white text-balance text-ellipsis">
                        <span className="font-semibold text-white">Instruction:</span>
                        {recipe.strInstructions.split(" ").slice(0, 40).join(" ") + " "}
                        <span className="cursor-pointer text-sm font-semibold">Read More . . .</span>
                      </p>
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
    </>
  );
};
