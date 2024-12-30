import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./routes/Root";
import { SearchResults } from "./pages/recipe/SearchResults";
import { RecipeDetail } from "./pages/recipe/RecipeDetail";
import { SavedRecipe } from "./pages/recipe/SavedRecipe";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="search-results" element={<SearchResults />} />
        <Route path="recipe-detail/:id" element={<RecipeDetail />} />
        <Route path="saved" element={<SavedRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
