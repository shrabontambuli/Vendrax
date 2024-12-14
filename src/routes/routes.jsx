import { createBrowserRouter, Routes } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../pages/dashboard/Overview";
import SellerRoute from "./private/SellerRoute";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProduct from "../pages/dashboard/seller/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>,
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },
      // seller Routes
      {
        path: "/dashboard/my-products",
        element: <SellerRoute><MyProducts /></SellerRoute>
      },
      {
        path: "/dashboard/add-products",
        element: <SellerRoute><AddProduct /></SellerRoute>
      },
    ],
  },
]);

