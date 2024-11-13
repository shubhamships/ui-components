import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
function App() {
  const router = createBrowserRouter([
    {path:"/",
    element:<Home/>},
    {path:"/dashboard",
      element:<Dashboard/>}
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
  
}

export default App;
