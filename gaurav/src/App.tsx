import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Root } from "./routes/Root";
import Button from "./components/ui/personal/Button";
import { SearchResults } from "./pages/recipe/SearchResults";
import { RecipeDetail } from "./pages/recipe/RecipeDetail";
import { SavedRecipe } from "./pages/recipe/SavedRecipe";
function App() {
  const styleClass = "w-40 h-30 text-gray-500";
  // Reset Logic
  const handleReset = () => {
    try {
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleNavigate = () => {
  //   try {
  //     navigate("saved");
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <BrowserRouter>
        <div className="flex justify-center items-center w-full z-20 ">
          <ul className="flex justify-between items-center bg-recipebg md:gap-6 p-2 px-2 lg:px-8 w-full">
            <MenuLink
              route="/"
              className="text-white text-3xl font-bold"
              iconName={<img src="/recipe/logo.png" alt="Recipe Logo" className="object-center h-14" />}
            />
            <div className="flex justify-center items-center gap-2">
              <Button
                title="Saved Recipes"
                className="bg-transparent text-sm shadow-none hover:bg-transparent border-none hover:bg-opacity-75"
                // onClick={handleNavigate}
              />
              <Button
                title="Reset"
                className="bg-recipeCardBg hover:bg-recipeCardBg border-none hover:bg-opacity-75"
                onClick={handleReset}
              />
            </div>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="searchresults" element={<SearchResults />} />
            <Route path="recipedetail/:id" element={<RecipeDetail />} />
            <Route path="saved" element={<SavedRecipe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

const MenuLink = ({
  name,
  iconName,
  route,
  className,
}: {
  name?: string;
  iconName?: React.ReactNode;
  route: string;
  className?: string;
}) => {
  return (
    <li className={`text-gray-200 font-medium ${className}`}>
      <Link to={route}>
        <div className={`flex flex-col justify-center items-center text-gray-500 ${className}`}>
          <span>{iconName}</span>
          <div className={`text-xs ${className}`}>{name}</div>
        </div>
      </Link>
    </li>
  );
};

export default App;
