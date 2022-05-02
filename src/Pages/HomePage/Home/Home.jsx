import React, { useEffect } from "react";
import InventoryItems from "../../InventoryPage/InventoryItems/InventoryItems";
import Banner from "../Banner/Banner";
import WhyGreatSection from "../homeSection/WhyGreatSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <InventoryItems />
      <WhyGreatSection />
    </>
  );
};

export default Home;
