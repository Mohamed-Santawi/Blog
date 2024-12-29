import Home from "../src/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Home page for the root route
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
