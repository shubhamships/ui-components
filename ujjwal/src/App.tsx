import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./Components/Card";
import LoginSignUp from "./Pages/LoginSignUp";
function App() {
  const router = createBrowserRouter([
    {
      path: "/card",
      element: <Card />,
    },
    {
      path: "/LoginSignup",
      element: <LoginSignUp/>
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
