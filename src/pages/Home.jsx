import { useEffect } from "react";
import BannerCarousel from "../components/home/BannerCarousel";
import Features from "../components/home/Features";
import POSSection from "../components/home/POSSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <BannerCarousel />
      <Features/>
      <POSSection/>
    </>
  );
};

export default Home;
