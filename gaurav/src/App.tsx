import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./routes/Root";
import { SearchResults } from "./pages/recipe/SearchResults";
import { RecipeDetail } from "./pages/recipe/RecipeDetail";
import { SavedRecipe } from "./pages/recipe/SavedRecipe";
import { AddRecipe } from "./pages/recipe/AddRecipe";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="searchresults" element={<SearchResults />} />
        <Route path="recipedetail/:id" element={<RecipeDetail />} />
        <Route path="saved" element={<SavedRecipe />} />
        <Route path="add" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
