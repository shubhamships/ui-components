import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { Root } from "./routes/Root";
import Button from "./components/ui/personal/Button";
import { SearchResults } from "./pages/recipe/SearchResults";
import { RecipeDetail } from "./pages/recipe/RecipeDetail";
import { SavedRecipe } from "./pages/recipe/SavedRecipe";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="searchresults" element={<SearchResults />} />
        <Route path="recipedetail/:id" element={<RecipeDetail />} />
        <Route path="saved" element={<SavedRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
