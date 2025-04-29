import React, { useEffect } from "react";
import RestaurantBanner from "../components/Services/Restaurant/RestaurantBanner";

const Restaurant = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <RestaurantBanner />
    </>
  );
};

export default Restaurant;
