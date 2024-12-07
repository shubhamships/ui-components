import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import { Orders } from "./pages/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },  
  {
    path:"/orders",
    element:<Orders/>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
