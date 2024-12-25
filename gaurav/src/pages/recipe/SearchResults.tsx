import Input from "@/components/ui/Input";
import axios from "axios";
import { Check, MapPin, Play, Plus, Search, Tags, Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardSmallDetail } from "./components/CardSmallDetail";
import RecipeCard from "./components/RecipeCard";

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

export const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchresults, setSearchResults] = useState<IData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [savedRecipe, setSavedRecipe] = useState<IData[]>([]);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [savedStatus, setSavedStatus] = useState<{ [key: string]: boolean }>({});

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
        handleShowToast("Recipe Saved Successfully");
        setSavedStatus((prevStatus) => ({ ...prevStatus, [id]: true }));
        localStorage.setItem("savedStatus", JSON.stringify({ ...savedStatus, [id]: true }));
      } else {
        handleShowToast("Recipe Already Saved");
      }
    }
  };

  useEffect(() => {
    const savedRecipeStatus = localStorage.getItem("savedStatus");
    if (savedRecipeStatus) {
      setSavedStatus(JSON.parse(savedRecipeStatus));
    }
  }, []);

  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start pt-5 pb-2 m-2 gap-8">
          {searchresults.length > 0 &&
            searchresults.map((recipe, index) => (
              <RecipeCard
                key={index}
                recipe={recipe}
                handleSavedRecipe={handleSavedRecipe}
                handleClick={handleClick}
                savedStatus={savedStatus[recipe.idMeal] || false}
              />
            ))}
        </div>
      </div>
    </>
  );
};
