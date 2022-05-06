import React, { useEffect } from "react";
import InventoryItems from "../../InventoryPage/InventoryItems/InventoryItems";
import Banner from "../Banner/Banner";
import BestOffer from "../BestOffer/BestOffer";
import Demo from "../Demo/Demo";
import WhyGreatSection from "../homeSection/WhyGreatSection";
import Map from "../Map/Map";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <div className="bg-gray-100">
        <InventoryItems />
        <Demo />
        <WhyGreatSection />
        <Map />
        <BestOffer />
      </div>
    </>
  );
};

export default Home;
