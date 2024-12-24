import Input from "@/components/ui/Input";
import Button from "@/components/ui/personal/Button";
import Select from "@/components/ui/Select";
import axios from "axios";
import { ChevronDown, MapPin, Search, Tags, Utensils } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "./components/Pagination";
import { CardSmallDetail } from "./components/CardSmallDetail";
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
        handleShowToast("Recipe Already Saved");
      } else {
        handleShowToast("Recipe Saved Successfully");
      }
    }
  };

  const navigatetoSaved = () => {
    navigate("saved", { state: { savedRecipe } });
  };

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

  // Toast
  const handleShowToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  console.log(filteredRecipes, "Filtered Recipes");
  console.log(recipes, "Recipes");
  console.log(savedRecipe, "Saved Recipe");
  return (
    <>
      <div className="min-h-screen bg-recipebg w-full relative">
        <div className="absolute top-0 right-0">
          {showToast && <Toast message={toastMessage} onClose={handleCloseToast} />}
        </div>
        <div className="text-white text-4xl font-semibold mt-10">
          <h1 className="text-center">
            Find Recipies. Learn Ingredients.
            <div> Taste It!</div>
          </h1>
        </div>
        <div className="px-4 md:px-20 lg:px-96 mt-5 shadow-inner">
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
            <Button
              title="Saved Recipes"
              className="bg-recipeCardBg hover:bg-recipeCardBg border-none hover:bg-opacity-75 mt-2"
              onClick={navigatetoSaved}
            />
            <div className="gap-2 flex justify-end items-center mt-2">
              <div className="relative w-full">
                <Select
                  title="Select Category"
                  id="category-select"
                  options={categories.map((category) => ({ value: category, label: category }))}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="appearance-none px-1 text-xs h-8"
                />
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 pr-1 pointer-events-none" />
              </div>
              <div className="relative w-full">
                <Select
                  title="Select Area"
                  id="Area-select"
                  options={areas.map((category) => ({ value: category, label: category }))}
                  value={selectedArea}
                  onChange={handleAreaChange}
                  className="appearance-none px-2 text-xs h-8"
                />
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 pr-1 pointer-events-none"/>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mx-2 pb-28">
          <div className="flex flex-col lg:flex-row justify-center items-start pt-5 pb-2 m-2 gap-8">
            {currentRecipes.length > 0 &&
              currentRecipes.map((recipe, index) => (
                <div key={index} className="flex justify-center items-center hover:scale-105 duration-200">
                  <div className="max-w-80 relative rounded-lg shadow-lg bg-recipeCardBg overflow-hidden h-96 overflow-y-hidden">
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
                      <div className="pt-1">
                        <div className="flex flex-wrap gap-2">
                          <CardSmallDetail iconName={<Tags className="w-3 h-3 mr-1" />} detail={recipe.strTags} />
                          <CardSmallDetail iconName={<MapPin className="w-3 h-3 mr-1" />} detail={recipe.strArea} />
                          <CardSmallDetail
                            iconName={<Utensils className="w-3 h-3 mr-1" />}
                            detail={recipe.strCategory}
                          />
                        </div>
                      </div>
                      <p className="text-white text-balance text-ellipsis pt-1">
                        <span className="font-semibold text-white">Instruction: </span>
                        {recipe.strInstructions ? (
                          <>
                            <span className="text-sm">
                              {recipe.strInstructions.split(" ").slice(0, 25).join(" ") + " "}
                            </span>
                            <span className="cursor-pointer text-xs font-semibold">Read More . . .</span>
                          </>
                        ) : (
                          "No Instructions"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* <CardDetail currentRecipes={currentRecipes} savedRecipe={handleSavedRecipe} recipeId={(recipe) => recipe.idMeal} /> */}
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
