import React, { useEffect } from "react";
import WirelessBanner from "../components/Services/Wireless/WirelessBanner";

const Wireless = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <WirelessBanner/>
    </>
  );
};

export default Wireless;
