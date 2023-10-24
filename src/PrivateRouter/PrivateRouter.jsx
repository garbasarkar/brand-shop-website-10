import { createBrowserRouter } from "react-router-dom";
import ErrorHandle from "../ErrorHandle/ErrorHandle";
import RootHome from "./RootHome";
import HomeSection from "../AllConponent/HomeSection";
import Register from "../UserCreate/Register";
import LoginPage from "../UserCreate/LoginPage";
import ProductCreate from "../PrivateNavbar/ProductCreate";
import UserProduct from "../PrivateNavbar/UserProduct";
import ProductUpdate from "../PrivateNavbar/ProductUpdate";
import ProductDetails from "../PrivateNavbar/ProductDetails";
import BrandProducts from "../AllConponent/BrandProducts";
import AddToCart from "../AllConponent/AddToCart";
import ServicePage from "../AllConponent/ServicePage";
import HomePage from "../AllConponent/HomePage";
import SpecialRouter from "../PrivateAuth/SpecialRouter";

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

      {
        path: "/productCreate",
        element: <ProductCreate></ProductCreate>,
      },
      {
        path: "/productAdd",
        element: (
          <SpecialRouter>
            <UserProduct></UserProduct>
          </SpecialRouter>
        ),
        loader: () => fetch(`http://localhost:5000/brand`),
      },
      {
        path: "/brands/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch(`http://localhost:5000/brand`),
      },
      {
        path: "/brand/:id",
        element: <ProductUpdate></ProductUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brand/${params.id}`),
      },
      {
        path: "/image/:id",
        element: (
          <SpecialRouter>
            <BrandProducts></BrandProducts>
          </SpecialRouter>
        ),
        loader: ({ params }) => fetch(`/WebLogo.json/${params.id}`),
      },
      {
        path: "/cards",
        element: (
          <SpecialRouter>
            <AddToCart></AddToCart>
          </SpecialRouter>
        ),
        loader: () => fetch(`http://localhost:5000/cart`),
      },
      {
        path: "/service",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "/home",
        element: <HomePage></HomePage>,
        loader: () => fetch(`/serviceCar.json`),
      },
    ],
  },
]);

export default router;
