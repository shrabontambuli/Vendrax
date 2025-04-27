import { useEffect } from "react";
import BannerCarousel from "../components/home/BannerCarousel";
import Features from "../components/home/Features";
import POSSection from "../components/home/POSSection";
import Consistency from "../components/home/Consistency";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <BannerCarousel />
      <Features/>
      <POSSection/>
      <Consistency/>
    </>
  );
};

export default Home;
