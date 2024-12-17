import Input from "@/components/ui/Input";
import axios from "axios";
import { ChevronDown, Play, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface IData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strInstructions: string;
}
export const SearchResults = () => {
  const [searchresults, setSearchResults] = useState<IData[]>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const fetchRecipes = async (query = "") => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = res.data;
      setSearchResults(data.meals || []);
    } catch (error) {
      console.log("Error fetching Recipes", error);
    }
  };

  useEffect(() => {
    fetchRecipes(query || "");
  }, [query]);
  return (
    <>
      <div className="bg-[#083344]">
        <div className="px-4 md:px-20 lg:px-96">
          <Input
            type="text"
            id="recipe-input"
            placeholder="Search Your Favorite Recipe. . ."
            className="border-none focus:disabled outline-border-none"
          >
            <div className="px-2 cursor-pointer">
              <Search />
            </div>
          </Input>
        </div>

        <div className="gap-2 mt-2 mx-4 flex justify-start items-center md:mx-20">
          <div className="bg-white text-gray-500 flex rounded-sm px-2">
            <div>filter</div>
            <ChevronDown className="" />
          </div>
          <div className="bg-white text-gray-500 flex rounded-sm px-4">
            <div>sort</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mx-2 pb-16">
          {searchresults.length > 0 &&
            searchresults.map((recipe, index) => (
              <div
                key={index}
                className="flex justify-center items-center mt-10 pt-10 pb-20 m-2 hover:scale-105 duration-200"
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
                    <p className="text-white">
                      <span className="font-semibold text-white">Instruction:</span>
                      {recipe.strInstructions.split(". ").slice(0, 2).join(". ")}
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
