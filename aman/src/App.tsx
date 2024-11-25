import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from "@/template/DashboardLayout";
import EditAccount from "./pages/dashboard/EditAccount";
import Logout from "./pages/dashboard/Logout";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "*", element: <h4 className="ml-24">Page not found</h4> },
        { path: "edit-account", element: <EditAccount /> },
        { path: "log-out", element: <Logout /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
