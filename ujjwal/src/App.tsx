import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./Components/Card";
function App() {
  const router = createBrowserRouter([
    {
      path: "/card",
      element: <Card />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
