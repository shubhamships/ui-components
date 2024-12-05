import { MarkTime } from "./components/MarkTime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/Root";
import { Log } from "./components/Log";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "timelog",
          element: <MarkTime />,
        },
        {
          path: "login",
          element: <Log />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
