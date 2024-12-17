import Input from "@/components/ui/Input";
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
}
export const HomePage = () => {
  const [recipes, setRecipes] = useState<IData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredRecipes = recipes.filter((recipe) =>
    recipe?.strMeal?.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  console.log(filteredRecipes, "Filtered Recipes");
  console.log(recipes, "Recipes");
  return (
    <>
      <div className="bg-recipebg w-full min-h-screen">
        <div className="text-white text-4xl font-semibold mt-10 p-10">
          <h1 className="text-center">
            Find Recipies. Learn Ingredients.
            <br /> Taste It!
          </h1>
        </div>
        <div className="px-4 md:px-20 lg:px-96 mt-5">
          <Input
            type="text"
            id="recipe-input"
            placeholder="Search Your Favorite Recipe. . ."
            className="border-none focus:disabled outline-border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          >
            <div className="px-2 cursor-pointer">
              <Search onClick={handleSearch} />
            </div>
          </Input>
        </div>
        <div className="flex  justify-center items-center mx-2 pb-16">
          <div className="flex flex-col md:flex-row justify-center items-start mt-10 pt-10 pb-20 m-2 gap-8">
            {recipes.length > 0 &&
              recipes.slice(0, 3).map((recipe, index) => (
                <div key={index} className="flex justify-center items-center hover:scale-105 duration-200">
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
                        {recipe.strInstructions.split(" ").slice(0, 40).join(" ") + " "}
                        <span className="cursor-pointer text-sm font-semibold">Read More . . .</span>
                      </p>
                      <a
                        href={recipe.strYoutube}
                        className="text-sm text-red-500 flex items-center justify-center w-20 bg-red-100 border border-red-500 shadow-md p-1 mt-2 rounded-md"
                      >
                        <span className="text-sm font-semibold">watch</span>
                        <Play className="h-4 w-4" />
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
