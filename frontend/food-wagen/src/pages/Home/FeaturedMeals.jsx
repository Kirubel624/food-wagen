import React, { useEffect, useState } from "react";
import FoodCard from "../../components/cards/FoodCard";
import { getFoods } from "../../services/foodService";
import Button from "../../components/ui/button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const FeaturedMeals = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  const getFoodsData = async () => {
    try {
      const response = await getFoods();
      console.log(response.data.data, "resposjfeopjfpose");
      setFeaturedFoods(response.data.data);
    } catch (error) {
      console.error("Error fetching foods:", error);
    }
  };
  useEffect(() => {
    getFoodsData();
  }, []);
  return (
    <div className="w-full text-center flex flex-col items-center justify-center">
      <span className="text-2xl font-[700] ">Featured Meals</span>
      <div className="w-full overflow-y-auto flex flex-row self-center items-center justify-center pt-10  gap-4 p-4">
        {featuredFoods.length === 0 ? (
          <p>No featured meals available</p>
        ) : (
          featuredFoods.map((food) => <FoodCard {...food} />)
        )}
      </div>
      {featuredFoods.length === 0 &&
        featuredFoods.map((food) => <FoodCard {...food} />)}
      <Button className="my-10 flex items-center justify-center">
        Load More
        <MdOutlineKeyboardArrowRight className="ml-2" />
      </Button>
    </div>
  );
};

export default FeaturedMeals;
