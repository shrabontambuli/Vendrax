import React, { useEffect } from "react";
import PoSserviceBanner from "../components/Services/PoSservice/PoSserviceBanner";

const PoSservice = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <PoSserviceBanner />
    </>
  );
};

export default PoSservice;
