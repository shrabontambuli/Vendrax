import React, { useEffect } from "react";
import RestaurantBanner from "../components/Services/Restaurant/RestaurantBanner";
import Analytics from "../components/Services/Restaurant/Analytics";
import Minimize from "../components/Minimize";
import YourRestaurant from "../components/Services/Restaurant/YourRestaurant";

const Restaurant = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <RestaurantBanner />
      <YourRestaurant/>
      <Analytics/>
      <Minimize/>
    </>
  );
};

export default Restaurant;
