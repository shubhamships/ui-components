import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import { Blank } from "./pages/Blank";
import { BackToLogin } from "./pages/BackToLogin";
import { HomePage } from "./pages/HomePage";
console.log("commit message");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/blank",
    element: <Blank />,
  },
  {
    path: "/backtologin",
    element: <BackToLogin />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
