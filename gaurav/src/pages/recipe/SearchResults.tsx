import Input from "@/components/ui/Input";
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
}
export const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchresults, setSearchResults] = useState<IData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filter, setfilter] = useState<string>("");

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

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await fetchRecipes(searchQuery);
    setSearchResults(result);
    navigate(`/searchresults?query=${searchQuery}`);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setfilter(e.target.value);
  };
  return (
    <>
      <div className="bg-[#083344] min-h-screen">
        <div className="px-4 md:px-20 lg:px-96">
          <Input
            type="text"
            id="recipe-input"
            placeholder="Search Your Favorite Recipe. . ."
            onChange={(e) => setSearchQuery(e.target.value)}
          >
            <div className="px-2 cursor-pointer">
              <Search onClick={handleSearch} />
            </div>
          </Input>
        </div>

        <div className="gap-2 mt-2 mx-4 flex justify-start items-center md:mx-96">
          <div className="bg-white text-gray-500 flex rounded-sm px-2">
            <div>sort by</div>
            <ChevronDown className="" />
          </div>
          <div className="bg-white text-gray-500 flex rounded-sm px-4">
            <div>filter</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center mx-2 pb-16 lg:mx-40 lg:px-64">
          {searchresults.length > 0 &&
            searchresults.map((recipe, index) => (
              <div
                key={index}
                className="flex justify-center items-center pt-10 pb-20 m-2 hover:scale-105 duration-200"
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
