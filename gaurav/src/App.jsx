import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root";
import { LoginPage } from "./pages/LoginPage";
import { ForgotPage } from "./pages/ForgotPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/forgot",
      element: <ForgotPage />,
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
