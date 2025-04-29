import React, { useEffect } from "react";
import WirelessBanner from "../components/Services/Wireless/WirelessBanner";
import Minimize from "../components/Minimize";
import TerminalWirelessMachines from "../components/Services/Wireless/TerminalWirelessMachines";

const Wireless = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <WirelessBanner/>
      <TerminalWirelessMachines/>
      <Minimize/>
    </>
  );
};

export default Wireless;
