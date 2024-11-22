import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
