import Input from "@/components/ui/Input";
import { Loader, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "./components/Pagination";
import { Toast } from "./components/Toast";
import { Header } from "./components/Header";
import RecipeCard from "./components/RecipeCard";
import { Filters } from "./components/Filters";
import { IRecipeData } from "@/lib/interfaces";
import { apiClient } from "@/api/apiClient";

export const HomePage = () => {
  const [recipes, setRecipes] = useState<IRecipeData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedRecipe, setSavedRecipe] = useState<IRecipeData[]>([]);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [categories, setCategories] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(6);
  const [savedStatus, setSavedStatus] = useState<{ [key: string]: boolean }>({});

  const navigate = useNavigate();

  const fetchRecipes = async (query = "", category = "all", area = "all") => {
    try {
      let url = `search.php?s=${query}`;
      if (category !== "all") {
        url = `filter.php?c=${category}`;
      }
      if (area !== "all") {
        url = `filter.php?a=${area}`;
      }
      const res = await apiClient.get(url);
      if (res.data.meals) {
        return res.data.meals;
      } else {
        return [];
      }
    } catch (error) {
      console.log("Error fetching Recipes", error);
      return [];
    }
  };

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      const result = await fetchRecipes();
      setRecipes(result);
      const [categoriesData, areasData] = await Promise.all([fetchCategories(), fetchAreas()]);
      setCategories(["all", ...categoriesData]);
      setAreas(["all", ...areasData]);
    };
    loadData();
    setLoading(false);
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await apiClient.get("list.php?c=list");
      return res.data.meals.map((meal: { strCategory: string }) => meal.strCategory);
    } catch (error) {
      console.log("Error fetching categories", error);
      return [];
    }
  };

  const fetchAreas = async () => {
    try {
      const res = await apiClient.get("list.php?a=list");
      return res.data.meals.map((meal: { strArea: string }) => meal.strArea);
    } catch (error) {
      console.log("Error fetching areas", error);
      return [];
    }
  };

  const handleCategoryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    const result = await fetchRecipes(searchQuery, category, selectedArea);
    setRecipes(result);
  };

  const handleAreaChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const area = e.target.value;
    setSelectedArea(area);
    const result = await fetchRecipes(searchQuery, selectedCategory, area);
    setRecipes(result);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      handleShowToast("Please enter a search query");
      return;
    }
    const result = await fetchRecipes(searchQuery);
    navigate(`/search-results?query=${searchQuery}`);
    setRecipes(result);
  };
  const handleClick = (id: string) => {
    navigate(`/recipe-detail/${id}`);
  };

  // save recipe
  const handleSavedRecipe = (id: string): void => {
    const recipe = recipes.find((recipe) => recipe.idMeal === id);
    if (recipe) {
      const duplicate = savedRecipe.find((item) => item.strMeal === recipe.strMeal);
      if (!duplicate) {
        const updatedRecipe = [...savedRecipe, recipe];
        setSavedRecipe(updatedRecipe);
        localStorage.setItem("savedRecipe", JSON.stringify(updatedRecipe));
        handleShowToast("Recipe Saved Successfully");
        setSavedStatus((prevStatus) => ({ ...prevStatus, [id]: true }));
        localStorage.setItem("savedStatus", JSON.stringify({ ...savedStatus, [id]: true }));
      } else {
        handleShowToast("Recipe Already Saved");
      }
    }
  };

  // Remove saved recipe
  const handleRemoveRecipe = (id: string): void => {
    const updatedRecipe = savedRecipe.filter((recipe) => recipe.idMeal !== id);
    setSavedRecipe(updatedRecipe);
    localStorage.setItem("savedRecipe", JSON.stringify(updatedRecipe));
    handleShowToast("Recipe Removed Successfully");
    setSavedStatus((prevStatus) => ({ ...prevStatus, [id]: false }));
    localStorage.setItem("savedStatus", JSON.stringify({ ...savedStatus, [id]: false }));
  };

  // pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // auto result
  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.length >= 3) {
        const result = await fetchRecipes(searchQuery);
        setRecipes(result);
      }
    };
    fetchData();
  }, [searchQuery]);

  useEffect(() => {
    const savedRecipeStatus = localStorage.getItem("savedStatus");
    if (savedRecipeStatus) {
      setSavedStatus(JSON.parse(savedRecipeStatus));
    }
  }, []);
  useEffect(() => {
    // Load saved recipes from localStorage
    const savedRecipesFromStorage = localStorage.getItem("savedRecipe");
    if (savedRecipesFromStorage) {
      setSavedRecipe(JSON.parse(savedRecipesFromStorage));
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
      {currentRecipes.length === 0 ? (
        <div className="h-screen bg-recipebg w-full text-white cursor-wait flex items-center justify-center">
          Loading <Loader className="animate-spin w-5 h-5 mx-2" />
        </div>
      ) : (
        <div className="min-h-screen bg-recipebg w-full relative">
          {showToast && (
            <div className="absolute top-0 right-0">
              <Toast message={toastMessage} />
            </div>
          )}
          <Header />
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5">
              <div className="w-full md:w-3/4">
                <Input
                  type="text"
                  id="recipe-input"
                  placeholder="Search Your Favorite Recipe. . ."
                  className="w-full border-none focus:disabled focus:outline-none focus:border-none focus-visible:ring-0 accent-transparent bg-white bg-opacity-75"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e: any) => e.key === "Enter" && handleSearch(e)}
                >
                  <div className="px-2 cursor-pointer">
                    <Search onClick={handleSearch} />
                  </div>
                </Input>
              </div>

              <div className="w-full md:w-1/4 pl-2">
                <Filters
                  categoryTitle={selectedCategory === "all" ? "All Categories" : selectedCategory}
                  areaTitle={selectedArea === "all" ? "All Areas" : selectedArea}
                  categories={categories}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={handleCategoryChange}
                  areas={areas}
                  selectedArea={selectedArea}
                  handleAreaChange={handleAreaChange}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mx-2 pb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start pt-5 pb-2 m-2 gap-8">
              {currentRecipes.length > 0 &&
                currentRecipes.map((recipe, index) => (
                  <RecipeCard
                    key={index}
                    recipe={recipe}
                    handleSavedRecipe={handleSavedRecipe}
                    handleClick={handleClick}
                    handleRemoveRecipe={handleRemoveRecipe}
                    savedStatus={savedStatus[recipe.idMeal] || false}
                  />
                ))}
            </div>
          </div>

          <div className="absolute bottom-0 w-full mt-10 flex justify-center items-center">
            <Pagination
              totalRecipe={recipes.length}
              totalRecipePerPage={recipesPerPage}
              setCurrentPages={setCurrentPage}
            />
          </div>
        </div>
      )}
    </>
  );
};
