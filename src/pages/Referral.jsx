import React, { useEffect } from "react";
import ReferralBanner from "../components/Partnership/Referral/ReferralBanner";
import MaximizeEarnings from "../components/Partnership/Referral/MaximizeEarnings";
import Refer from "../components/Partnership/Referral/Refer";

const Referral = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <ReferralBanner />
      <MaximizeEarnings/>
      <Refer/>
    </>
  );
};

export default Referral;
