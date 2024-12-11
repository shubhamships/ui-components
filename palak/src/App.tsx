import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./pages/Dashboard";
import Illustrations from "./portfolio/Illustrations";
import Project1 from "./portfolio/Project1";
import { AnimatePresence } from "framer-motion";
import Graphics from "./portfolio/Graphics";
import Contact from "./portfolio/Contact";
import Page2 from "./animation/Page2";
import Page3 from "./animation/Page3";
import Page4 from "./animation/Page4";
import InteriorPage from "./animation/InteriorPage";
import InteriorPage2 from "./animation/InteriorPage2";
import InteriorPage3 from "./animation/InteriorPage3";
import Home from "./animation/Home";
import Toggle from "./animation/Toggle";
import LoginPage from "./animation/LoginPage";
import DashBoard from "./animation/DashBoard";
import ViewOrder from "./animation/ViewOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/illustrations",
    element: <Illustrations />,
  },
  {
    path: "/project1",
    element: <Project1 />,
  },
  {
    path: "/graphics",
    element: <Graphics />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
  {
    path: "/page4",
    element: <Page4 />,
  },
  {
    path: "/toggle",
    element: <Toggle />,
  },
  {
    path: "/Interiorpage",
    element: <InteriorPage />,
  },
  {
    path: "/InteriorPage2",
    element: <InteriorPage2 />,
  },
  {
    path: "/InteriorPage3",
    element: <InteriorPage3 />,
  },
  {
    path: "/Loginpage",
    element: <LoginPage />,
  },
  {
    path: "/dash",
    element: <DashBoard />,
  },
  {
    path: "/Vieworder",
    element: <ViewOrder />,
  },
]);

function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;
