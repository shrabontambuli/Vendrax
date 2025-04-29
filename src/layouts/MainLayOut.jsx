import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const MainLayOut = () => {
  const location = useLocation();

  const noHeader =
    location.pathname.includes("reseller") || location.pathname.includes("agent");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      {noHeader || <Navbar />}
      <Outlet></Outlet>
     <Footer />
    </div>
  );
};

export default MainLayOut;
