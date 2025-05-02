import { useEffect } from "react";
import AboutBanner from "../components/About/AboutBanner";
import PosSystems from "../components/About/PosSystems";
import TailoringPos from "../components/About/TailoringPos";
import YourCustomers from "../components/About/YourCustomers";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      {/* <AboutBanner /> */}
      <PosSystems/>
      <TailoringPos/>
      {/* <YourCustomers/> */}
    </>
  );
};

export default About;
