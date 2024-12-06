
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import { Carousel } from "./components/UserCarousel";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path:"/carousel",
    element: <Carousel/>,
  },

  
]);

export default function App() {
  return <RouterProvider router={router} />;
}
