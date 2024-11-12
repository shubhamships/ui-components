import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root";
import { LoginPage } from "./pages/LoginPage";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
