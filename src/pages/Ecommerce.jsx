import React, { useEffect } from "react";
import EcommerceBanner from "../components/Services/Ecommerce/EcommerceBanner";
import Infrastructure from "../components/Services/Ecommerce/Infrastructure";
import SellProducts from "../components/Services/Ecommerce/SellProducts";
import Minimize from "../components/Minimize";

const Ecommerce = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <EcommerceBanner />
      <Infrastructure/>
      <SellProducts/>
      <Minimize/>
    </>
  );
};

export default Ecommerce;
