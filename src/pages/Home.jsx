import { useEffect } from "react";
import BannerCarousel from "../components/home/BannerCarousel";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <BannerCarousel />
    </>
  );
};

export default Home;
