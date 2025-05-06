import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import Referral from "../pages/Referral";
import Reseller from "../pages/Reseller";
import SubmitReferral from "../pages/SubmitReferral";
import Agent from "../pages/Agent";
import Ecommerce from "../pages/Ecommerce";
import PoSservice from "../pages/PoSservice";
import Restaurant from "../pages/Restaurant";
import DesktopTerminal from "../pages/DesktopTerminal";
import Pay from "../pages/Pay";
import Wireless from "../pages/Wireless";
import MobilePayment from "../pages/MobilePayment";
import Service from "../pages/Service";
import Partnership from "../pages/Partnership";
import Demo from "../components/Demo";

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
        path: "/services",
        element: <Service/>
      },
      {
        path: "/partnership",
        element: <Partnership/>
      },
      {
        path: "/clover-flex",
        element: <Demo/>,
      },
      {
        path: "/clover-duo",
        element: <Demo/>,
      },
      {
        path: "/android",
        element: <Demo/>,
      },
      {
        path: "/desktop",
        element: <Demo/>,
      },
      {
        path: "/counter",
        element: <Demo/>,
      },
      {
        path: "/wireless",
        element: <Demo/>,
      },
      {
        path: "/smart",
        element: <Demo/>,
      },
      {
        path: "/poynt",
        element: <Demo/>,
      },
      // {
      //   path: "/referral",
      //   element: <Referral/>,
      // },
      // {
      //   path: "/reseller",
      //   element: <Reseller/>,
      // },
      // {
      //   path: "/submit-referral",
      //   element: <SubmitReferral/>,
      // },
      // {
      //   path: "/agent",
      //   element: <Agent/>,
      // },
      // {
      //   path: "/ecommerce",
      //   element: <Ecommerce/>,
      // },
      // {
      //   path: "/pos-service",
      //   element: <PoSservice/>,
      // },
      // {
      //   path: "/restaurant",
      //   element: <Restaurant/>,
      // },
      // {
      //   path: "/desktop-terminal",
      //   element: <DesktopTerminal/>,
      // },
      // {
      //   path: "/pay",
      //   element: <Pay/>,
      // },
      // {
      //   path: "/wireless",
      //   element: <Wireless/>,
      // },
      // {
      //   path: "/mobile-payment",
      //   element: <MobilePayment/>,
      // },
    ],
  },

]);
