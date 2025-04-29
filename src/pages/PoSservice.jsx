import React, { useEffect } from "react";
import PoSserviceBanner from "../components/Services/PoSservice/PoSserviceBanner";
import ReliableSolutions from "../components/Services/PoSservice/ReliableSolutions";
import SimplyProcess from "../components/Services/PoSservice/SimplyProcess";
import Minimize from "../components/Minimize";

const PoSservice = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <PoSserviceBanner />
      <ReliableSolutions />
      <SimplyProcess />
      <Minimize/>
    </>
  );
};

export default PoSservice;
