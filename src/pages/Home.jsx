import { useEffect } from "react";
// import BannerCarousel from "../components/home/BannerCarousel";
import Features from "../components/home/Features";
import POSSection from "../components/home/POSSection";
import Consistency from "../components/home/Consistency";
import PosSolution from "../components/home/PosSolution";
import EarnRewards from "../components/home/EarnRewards";
import Banner from "../components/home/Banner";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <Banner />
      {/* <BannerCarousel /> */}
      <Features />
      <POSSection />
      <Consistency />
      <PosSolution />
      <EarnRewards />
    </>
  );
};

export default Home;
