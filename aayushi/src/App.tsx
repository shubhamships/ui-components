import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { Project2 } from "./portfolio/Project2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/project2",
    element: <Project2 />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
