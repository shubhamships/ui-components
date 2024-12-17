import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Root } from "./routes/Root";
import Button from "./components/ui/personal/Button";
import { SearchResults } from "./pages/recipe/SearchResults";
import { RecipeDetail } from "./pages/recipe/RecipeDetail";
function App() {
  const styleClass = "w-40 h-30 text-gray-500";
  return (
    <>
      <BrowserRouter>
        <div className="flex justify-center items-center w-full z-20 ">
          <ul className="flex justify-between items-center bg-[#083344] gap-6 p-2 px-8 w-full">
            <MenuLink name="Recipe" route="/" className="text-white text-xl" />
            <div className="flex justify-center items-center gap-2">
              <MenuLink route="login" iconName={<Button title="login" variant="soft" className="text-white bg-transparent border-none shadow-none"  />} />
              <MenuLink route="signup" iconName={<Button title="Sign Up" className="bg-recipeCardBg hover:bg-recipeCardBg border-none hover:bg-opacity-75" />} />
            </div>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="searchresults" element={<SearchResults />} />
            <Route path="recipedetail/:id" element={<RecipeDetail />} />
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
