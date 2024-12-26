import Input from "@/components/ui/Input";
import Button from "@/components/ui/personal/Button";
import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "./components/Pagination";
import { Toast } from "./components/Toast";
import { Header } from "./components/Header";
import RecipeCard from "./components/RecipeCard";
import { Filters } from "./components/Filters";
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

export const HomePage = () => {
  const [recipes, setRecipes] = useState<IData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedRecipe, setSavedRecipe] = useState<IData[]>([]);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [categories, setCategories] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(3);
  const [savedStatus, setSavedStatus] = useState<{ [key: string]: boolean }>({});

  const navigate = useNavigate();

  const fetchRecipes = async (query = "", category = "all", area = "all") => {
    try {
      let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      if (category !== "all") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      }
      if (area !== "all") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
      }
      const res = await axios.get(url);
      const data = res.data;
      return data.meals || [];
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
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
      return res.data.meals.map((meal: { strCategory: string }) => meal.strCategory);
    } catch (error) {
      console.log("Error fetching categories", error);
      return [];
    }
  };
  console.log();
  const fetchAreas = async () => {
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
      return res.data.meals.map((meal: { strArea: string }) => meal.strArea);
    } catch (error) {
      console.log("Error fetching areas", error);
      return [];
    }
  };
  console.log(fetchAreas, "fetchAreas");
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

  // const navigatetoSaved = () => {
  //   navigate("saved", { state: { savedRecipe } });
  // };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe?.strMeal?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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

  if (!filteredRecipes) {
    return <div className="h-screen bg-recipebg text-white cursor-wait flex items-center justify-center">Loading</div>;
  }

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

  console.log(filteredRecipes, "Filtered Recipes");
  console.log(recipes, "Recipes");
  console.log(savedRecipe, "Saved Recipe");
  return (
    <>
      <div className="min-h-screen bg-recipebg w-full relative">
        <div className="absolute top-0 right-0">{showToast && <Toast message={toastMessage} />}</div>
        <Header />
        <div className="px-4 md:px-20 lg:px-40 xl:px-80 2xl:px-96 mt-5 shadow-inner">
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
          <div className="flex md:flex-row justify-between items-center gap-2">
            {/* <Button
              title="Saved Recipes"
              className="bg-recipeCardBg hover:bg-recipeCardBg border-none hover:bg-opacity-75 mt-2"
              onClick={navigatetoSaved}
            /> */}
            <Filters
              categories={categories}
              selectedCategory={selectedCategory}
              handleCategoryChange={handleCategoryChange}
              areas={areas}
              selectedArea={selectedArea}
              handleAreaChange={handleAreaChange}
            />
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
    </>
  );
};
