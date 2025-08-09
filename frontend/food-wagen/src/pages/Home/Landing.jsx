import React, { useState } from "react";
import { FaMotorcycle, FaLock, FaSearch } from "react-icons/fa";
import Button from "../../components/ui/button";
import LandingImage from "../../assets/food.png";
export default function FoodSearchBanner() {
  const [deliveryType, setDeliveryType] = useState("delivery");

  return (
    <div className="relative w-full min-h-[400px] pt-10 flex  justify-center bg-[#FFB30E] px-6">
      <div className="max-w-5xl w-full flex flex-col  md:flex-row items-end  justify-between gap-8">
        <div className="flex-1 text-center self-center md:text-left">
          <h1 className="text-white text-5xl font-bold mb-2">
            Are you <span className="text-white">starving?</span>
          </h1>
          <p className="text-white/90 mb-6">
            Within a few clicks, find meals that are accessible near you
          </p>

          <div className="bg-white rounded-xl p-4 shadow-lg max-w-xl">
            <div className="flex mb-4">
              <button
                onClick={() => setDeliveryType("delivery")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                  deliveryType === "delivery"
                    ? "bg-orange-200 text-orange-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FaMotorcycle /> Delivery
              </button>
              <button
                onClick={() => setDeliveryType("pickup")}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                  deliveryType === "pickup"
                    ? "bg-orange-200 text-orange-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FaLock /> Pickup
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center flex-1 bg-gray-100 rounded-md px-3">
                <FaSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="What do you like to eat today?"
                  className="bg-transparent w-full py-2 px-2 text-gray-700 focus:outline-none"
                />
              </div>
              <Button className="flex items-center gap-2" variant="orange">
                <FaSearch />
                Find Meal
              </Button>
            </div>
          </div>
        </div>

        <div className="">
          <img
            src={LandingImage}
            alt="Overlay"
            className="h-72 self-end object-cover "
          />
        </div>
      </div>
    </div>
  );
}
