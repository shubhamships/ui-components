import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Front from "./pages/Front";
// import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/front",
    element: <Front />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
