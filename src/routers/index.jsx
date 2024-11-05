import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "landing",
    element: <Landing />,
  },
  {
    path: "homepage",
    element: <Home />,
  },
]);
