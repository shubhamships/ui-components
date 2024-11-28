import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./pages/Dashboard";
// import HomePage from "./portfolio/HomePage";
import Illustrations from "./portfolio/Illustrations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/illustrations",
    element: <Illustrations />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
