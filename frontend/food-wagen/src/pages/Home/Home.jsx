import React from "react";
import FeaturedMeals from "./FeaturedMeals";
import FoodSearchBanner from "./Landing";

const Home = () => {
  return (
    <div className="">
      <FoodSearchBanner />
      <FeaturedMeals />
    </div>
  );
};

export default Home;
