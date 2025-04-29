import React, { useEffect } from "react";
import MobilePaymentBanner from "../components/Services/MobilePayment/MobilePaymentBanner";

const MobilePayment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <MobilePaymentBanner />
    </>
  );
};

export default MobilePayment;
