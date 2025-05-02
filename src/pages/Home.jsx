import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import Features from "../components/home/Features";
import POSSection from "../components/home/POSSection";
import Consistency from "../components/home/Consistency";
import PosSolution from "../components/home/PosSolution";
import EarnRewards from "../components/home/EarnRewards";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <HeroSection />
      {/* <Features /> */}
      {/* <POSSection /> */}
      <Consistency />
      {/* <PosSolution /> */}
      {/* <EarnRewards /> */}
    </>
  );
};

export default Home;
