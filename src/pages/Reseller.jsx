import React, { useEffect } from "react";
import ResellerBanner from "../components/Partnership/Reseller/ResellerBanner";
import ResellerProgram from "../components/Partnership/Reseller/ResellerProgram";
import ResellerPartnership from "../components/Partnership/Reseller/ResellerPartnership";
import PartnerProgramForm from "../components/Partnership/Reseller/PartnerProgramForm";
import Navbar2 from "../components/Navbar2";

const Reseller = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Navbar2 />
      <ResellerBanner />
      <ResellerProgram />
      <ResellerPartnership />
      <PartnerProgramForm />
    </>
  );
};

export default Reseller;
