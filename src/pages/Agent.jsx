import React, { useEffect } from "react";
import AgentBanner from "../components/Partnership/Agent/AgentBanner";
import AgentProgram from "../components/Partnership/Agent/AgentProgram";
import StartEarning from "../components/Partnership/Agent/StartEarning";
import AgentForm from "../components/Partnership/Agent/AgentForm";

const Agent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <AgentBanner />
      <AgentProgram />
      <StartEarning />
      <AgentForm/>
    </>
  );
};

export default Agent;
