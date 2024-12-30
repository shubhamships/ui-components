import axios from "axios";
import { useState } from "react";

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
const useRecipes = () => {
  const [recipes, setRecipes] = useState<IData[]>([]);
  const [loading, setLoading] = useState(true);

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

  return { recipes, setRecipes, loading, setLoading, fetchRecipes };
};

export { useRecipes };
