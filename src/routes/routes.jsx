import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import Referral from "../pages/Referral";
import Reseller from "../pages/Reseller";
import SubmitReferralForm from "../components/Partnership/SubmitReferral/SubmitReferralForm";
import SubmitReferral from "../pages/SubmitReferral";
import Agent from "../pages/Agent";

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
      {
        path: "/reseller",
        element: <Reseller/>,
      },
      {
        path: "/submit-referral",
        element: <SubmitReferral/>,
      },
      {
        path: "/agent",
        element: <Agent/>,
      },
    ],
  },

]);
