import React, { useEffect } from "react";
import AgentBanner from "../components/Partnership/Agent/AgentBanner";
import AgentProgram from "../components/Partnership/Agent/AgentProgram";
import StartEarning from "../components/Partnership/Agent/StartEarning";
import AgentForm from "../components/Partnership/Agent/AgentForm";
import Navbar2 from "../components/Navbar2";

const Agent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Navbar2 />
      <AgentBanner />
      <AgentProgram />
      <StartEarning />
      <AgentForm />
    </>
  );
};

export default Agent;
