import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root";
import { ForgotPage } from "./pages/ForgotPage";
import EnhancedLoginPage from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/login",
      element: <EnhancedLoginPage />,
    },
    {
      path: "/forgot",
      element: <ForgotPage />,
    },
  ]);
  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
