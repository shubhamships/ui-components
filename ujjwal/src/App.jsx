import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<LoginPage/>,
    }
  ])

  return <>
    <RouterProvider router={router} />
  </>
}

export default App;
