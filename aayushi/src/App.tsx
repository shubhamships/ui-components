
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  

  
]);

export default function App() {
  return <RouterProvider router={router} />;
}
