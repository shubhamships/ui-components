import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import { Blank } from './pages/Blank';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path:'/blank',
    element:<Blank/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
