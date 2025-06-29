import React from "react";
import { FeaturedCars, Hero } from "../components";

const Home = () => {
  return (
    <div className="global-padding">
      <Hero />
      <FeaturedCars />
    </div>
  );
};

export default Home;
