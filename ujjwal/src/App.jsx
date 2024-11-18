import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Home from "./Pages/HomePage/Home";
import CustomError from "./Pages/CustomError";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <CustomError />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return (
    <>
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>

    </>
  );
}
export default App;
