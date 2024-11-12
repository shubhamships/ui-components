import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  const router = createBrowserRouter([
    {path:"/",
    element:<Login/>}
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
  
}

export default App;
