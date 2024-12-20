import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import axios from "axios";
import { ChevronDown, Play, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strInstructions: string;
  idMeal: string;
}

export const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchresults, setSearchResults] = useState<IData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [savedRecipe, setSavedRecipe] = useState<IData[]>([]);

  const query = new URLSearchParams(location.search).get("query");

  const fetchRecipes = async (query = ""): Promise<IData[]> => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      // www.themealdb.com/api/json/v1/1/search.php?f=a
      const data = res.data;
      setSearchResults(data.meals || []);
      return data.meals || [];
    } catch (error) {
      console.log("Error fetching Recipes", error);
      return [];
    }
  };

  useEffect(() => {
    fetchRecipes(query || "");
  }, [query]);

  useEffect(() => {
    const savedRecipe = localStorage.getItem("savedRecipe");
    if (savedRecipe) {
      setSavedRecipe(JSON.parse(savedRecipe));
    }
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await fetchRecipes(searchQuery);
    setSearchResults(result);
    navigate(`/searchresults?query=${searchQuery}`);
  };

  const handleClick = (id: string) => {
    navigate(`/recipedetail/${id}`);
  };

  const handleSavedRecipe = (id: string): void => {
    const recipe = searchresults.find((recipe) => recipe.idMeal === id);
    if (recipe) {
      const isAlreadySaved = savedRecipe.some((saved) => saved.idMeal === id);
      if (!isAlreadySaved) {
        const updatedSavedRecipes = [...savedRecipe, recipe];
        setSavedRecipe(updatedSavedRecipes);
        localStorage.setItem("savedRecipe", JSON.stringify(updatedSavedRecipes));
        alert("Recipe Saved");
      } else {
        alert("Recipe already saved");
      }
    }
  };

  return (
    <>
      <div className="bg-[#083344] min-h-screen">
        <div className="px-4 md:px-20 lg:px-64">
          <Input
            type="text"
            id="recipe-input"
            placeholder="Search Your Favorite Recipe. . ."
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e: any) => e.key === "Enter" && handleSearch(e)}
          >
            <div className="px-2 cursor-pointer">
              <Search onClick={handleSearch} />
            </div>
          </Input>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 justify-around items-center lg:pb-16 lg:mx-20">
          {searchresults.length > 0 &&
            searchresults.map((recipe, index) => (
              <div
                key={index}
                className="flex justify-center items-center cursor-pointer pt-10 pb-20 m-2 hover:scale-105 duration-200"
              >
                <div className="max-w-96 relative rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
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
    </>
  );
};
