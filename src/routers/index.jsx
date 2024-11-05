import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";

export const router = createBrowserRouter([
    {
        path : "landing",
        element : <Landing/>
    }
])