import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import LeaderBoard from "../pages/LeaderBoard";
import Room from "../pages/Room";

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
  {
    path : 'room',
    element : <Room/>
  }
]);
