import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import DashboardLayout from "../layouts/DashboardLayout";
// import PrivateRoute from "./private/PrivateRoute";
// import Overview from "../pages/dashboard/Overview";
// import SellerRoute from "./private/SellerRoute";
// import MyProducts from "../pages/dashboard/seller/MyProducts";
// import AddProduct from "../pages/dashboard/seller/AddProduct";

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
        path: "/services",
        element: <Home />,
      },
      {
        path: "/reports",
        element: <Home />,
      },
      {
        path: "/hr",
        element: <Home />,
      },
      {
        path: "/sheets",
        element: <Home />,
      },
      {
        path: "/admin",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <Home />,
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
  // {
  //   path: "/dashboard",
  //   element: <PrivateRoute>
  //     <DashboardLayout />
  //   </PrivateRoute>,
  //   children: [
  //     {
  //       path: "/dashboard/overview",
  //       element: <Overview />,
  //     },
  //     // seller Routes
  //     {
  //       path: "/dashboard/my-products",
  //       element: <SellerRoute><MyProducts /></SellerRoute>
  //     },
  //     {
  //       path: "/dashboard/add-products",
  //       element: <SellerRoute><AddProduct /></SellerRoute>
  //     },
  //   ],
  // },
]);

