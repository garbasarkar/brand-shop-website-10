import { createBrowserRouter } from "react-router-dom";
import ErrorHandle from "../ErrorHandle/ErrorHandle";
import RootHome from "./RootHome";
import HomeSection from "../AllConponent/HomeSection";
import Register from "../UserCreate/Register";
import LoginPage from "../UserCreate/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorHandle></ErrorHandle>,
    element: <RootHome></RootHome>,
    children: [
      {
        path: "/",
        element: <HomeSection></HomeSection>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
