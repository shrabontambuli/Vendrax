import React, { useEffect } from "react";
import MobilePaymentBanner from "../components/Services/MobilePayment/MobilePaymentBanner";
import EasyPayments from "../components/Services/MobilePayment/EasyPayments";
import AcceptPayments from "../components/Services/MobilePayment/AcceptPayments";
import Minimize from "../components/Minimize";

const MobilePayment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <MobilePaymentBanner />
      <EasyPayments />
      <AcceptPayments />
      <Minimize />
    </>
  );
};

export default MobilePayment;
