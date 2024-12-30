import Input from "@/components/ui/Input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import { Pagination } from "./components/Pagination";
import { Toast } from "./components/Toast";
import { IRecipeData } from "@/lib/interfaces";
import { apiClient } from "@/api/apiClient";

export const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchresults, setSearchResults] = useState<IRecipeData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [savedRecipe, setSavedRecipe] = useState<IRecipeData[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [savedStatus, setSavedStatus] = useState<{ [key: string]: boolean }>({}); // {idMeal: true}
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(6);

  const query = new URLSearchParams(location.search).get("query");

  const fetchRecipes = async (query = ""): Promise<IRecipeData[]> => {
    try {
      const res = await apiClient.get(`search.php?s=${query}`);
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
    navigate(`/search-results?query=${searchQuery}`);
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
    navigate(`/recipe-detail/${id}`);
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
      <div className="bg-recipebg min-h-screen relative">
        {showToast && (
          <div className="absolute top-2 right-2">
            <Toast message={toastMessage} />
          </div>
        )}
        <div className="text-white bg-transparent text-4xl font-semibold pt-10 pb-5">
          <h1 className="text-center">Search Results</h1>
        </div>
        <div className="flex-grow justify-center items-center">
          <div className="px-4 md:mx-16">
            {/* Add a max-width wrapper */}
            <div className="max-w-4xl mx-auto">
              <Input
                type="text"
                id="recipe-input"
                placeholder="Search Your Favorite Recipe. . ."
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e: any) => e.key === "Enter" && handleSearch(e)}
                className="appearance-none border-none focus:disabled focus:outline-none focus:border-none focus-visible:ring-0 accent-transparent bg-white bg-opacity-75"
              >
                <div className="px-2 cursor-pointer">
                  <Search onClick={handleSearch} />
                </div>
              </Input>
            </div>
          </div>
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
