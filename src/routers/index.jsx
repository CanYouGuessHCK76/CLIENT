import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";

export const router = createBrowserRouter([
  {
    path: "landing",
    element: <Landing />,
  },
  {
    path: "homepage",
    element: <Home />,
  },
  {
    path: "quiz",
    element: <Quiz />,
  },
]);
