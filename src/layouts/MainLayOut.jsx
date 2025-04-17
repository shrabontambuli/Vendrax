import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const MainLayOut = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayOut;
