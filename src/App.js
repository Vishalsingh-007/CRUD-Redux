import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Bank from './component/Bank';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Bank/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
  ]);
  return (
    <>
    <Navbar />
    <RouterProvider router={router} />
    </>
  );
}

export default App;
