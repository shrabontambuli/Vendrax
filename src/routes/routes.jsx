import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import Referral from "../pages/Referral";

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
        path: "/about",
        element: <About/>,
      },
      {
        path: "/features",
        element: <Features/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/referral",
        element: <Referral/>,
      },
    ],
  },

]);
