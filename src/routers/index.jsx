import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import LeaderBoard from "../pages/LeaderBoard";

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
  {
    path: "leaderboard",
    element: <LeaderBoard />,
  },
]);
