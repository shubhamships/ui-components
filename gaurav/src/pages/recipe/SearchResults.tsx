import Input from "@/components/ui/Input";
import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import { Pagination } from "./components/Pagination";
import { Toast } from "./components/Toast";

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
  const [savedStatus, setSavedStatus] = useState<{ [key: string]: boolean }>({}); // {idMeal: true}
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(6);

  const query = new URLSearchParams(location.search).get("query");

  const fetchRecipes = async (query = ""): Promise<IData[]> => {
    try {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = res.data;
      setSearchResults(data.meals || []);
      return data.meals || [];
    } catch (error) {
      handleShowToast("No Recipe Found");
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

  const handleRemoveRecipe = (id: string): void => {
    const updatedRecipe = savedRecipe.filter((recipe) => recipe.idMeal !== id);
    setSavedRecipe(updatedRecipe);
    localStorage.setItem("savedRecipe", JSON.stringify(updatedRecipe));
    handleShowToast("Recipe Removed Successfully");
    setSavedStatus((prevStatus) => ({ ...prevStatus, [id]: false }));
    localStorage.setItem("savedStatus", JSON.stringify({ ...savedStatus, [id]: false }));
  };

  const handleClick = (id: string) => {
    navigate(`/recipedetail/${id}`);
  };

  useEffect(() => {
    const savedRecipe = localStorage.getItem("savedRecipe");
    if (savedRecipe) {
      setSavedRecipe(JSON.parse(savedRecipe));
    }
  }, []);

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

  // Pagination Logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = searchresults.slice(indexOfFirstRecipe, indexOfLastRecipe);

  return (
    <>
      <div className="bg-[#083344] min-h-screen relative">
        {showToast && (
          <div className="absolute top-2 right-2">
            <Toast message={toastMessage} />
          </div>
        )}
        <div className="text-white bg-transparent text-4xl font-semibold pt-10 pb-5">
          <h1 className="text-center">Search Results</h1>
        </div>
        <div className="px-4 md:px-20 lg:px-32 xl:px-64 2xl:px-96">
          <Input
            type="text"
            id="recipe-input"
            placeholder="Search Your Favorite Recipe. . ."
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e: any) => e.key === "Enter" && handleSearch(e)}
            className="appearence-none border-none focus:disabled focus:outline-none focus:border-none focus-visible:ring-0 accent-transparent bg-white bg-opacity-75"
          >
            <div className="px-2 cursor-pointer">
              <Search onClick={handleSearch} />
            </div>
          </Input>
        </div>

        <div className="flex justify-center items-center mx-2 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start pt-5 pb-2 m-2 gap-4 lg:gap-8 lg:mx-8">
            {currentRecipes.length > 0 &&
              currentRecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  recipe={recipe}
                  handleSavedRecipe={handleSavedRecipe}
                  handleRemoveRecipe={handleRemoveRecipe}
                  handleClick={handleClick}
                  savedStatus={savedStatus[recipe.idMeal] || false}
                />
              ))}
          </div>
        </div>
        <div className="absolute bottom-0 w-full mt-10 flex justify-center items-center">
          <Pagination
            totalRecipe={searchresults.length}
            totalRecipePerPage={recipesPerPage}
            setCurrentPages={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};
