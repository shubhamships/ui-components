
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Root} from "./Root";
import { Blank } from "./pages/Blank";
import { BackToLogin } from "./pages/BackToLogin";
import { HomePage } from "./pages/HomePage";

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
    path: "/back-to-login",
    element: <BackToLogin />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}


