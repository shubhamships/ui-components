import Input from "@/components/ui/Input";
import axios from "axios";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IData {
  strMeal: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
}
export const HomePage = () => {
  const [recipes, setRecipes] = useState<IData[]>([]);
  const navigate = useNavigate();

  const fetchRecipes = async () => {
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772");
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
  console.log(recipes, "Recipes");
  return (
    <>
      <div className="bg-[#083344] w-full">
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
          >
            <div className="px-2 cursor-pointer">
              <Search onClick={() => navigate("login")} />
            </div>
          </Input>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mx-2 pb-16">
          <div className="flex justify-center items-center mt-10 pt-10 pb-20 m-2 hover:scale-105 duration-200">
            <div className="max-w-80 rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
              <div className="w-full">
                <img src="/recipe/pasta.jpg" alt="pasta" className="w-full h-40 object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-semibold text-xl">Description</div>
                <p className="text-white mt-1">
                  Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook
                  according to the package instructions, about 9 minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 pt-10 pb-20 m-2 hover:scale-105 duration-200">
            <div className="max-w-80 rounded-lg shadow-lg bg-recipeCardBg overflow-hidden">
              <div className="w-full">
                <img src="/recipe/pasta.jpg" alt="pasta" className="w-full h-40 object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-semibold text-xl">Description</div>
                <p className="text-white mt-1">
                  Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook
                  according to the package instructions, about 9 minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 pt-10 pb-20 m-2 hover:scale-105 duration-200">
            {recipes.length > 0 &&
              recipes.map((recipe, index) => (
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
                      <a href={recipe.strYoutube}></a>
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
