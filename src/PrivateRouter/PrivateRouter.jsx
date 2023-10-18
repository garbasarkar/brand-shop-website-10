import { createBrowserRouter } from "react-router-dom";
import ErrorHandle from "../ErrorHandle/ErrorHandle";
import RootHome from "./RootHome";
import HomeSection from "../AllConponent/HomeSection";

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
    ],
  },
]);

export default router;
