import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Dashboard from "./pages/Dashboard";
import Illustrations from "./portfolio/Illustrations";
import Project1 from "./portfolio/Project1";

import Graphics from "./portfolio/Graphics";
import Contact from "./portfolio/Contact";
import Page2 from "./animation/Page2";
import Page3 from "./animation/Page3";

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
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
