import React, { useState } from "react";
import { FaMotorcycle, FaLock, FaSearch } from "react-icons/fa";

export default function FoodSearchBanner() {
  const [deliveryType, setDeliveryType] = useState("delivery");

  return (
    <div className="relative w-full min-h-[400px] flex items-center justify-center bg-yellow-500 px-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left">
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
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md">
                Find Meal
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 bg-gray-300 rounded-full flex items-center justify-center">
            <img
              src="./Overlay.png"
              alt="Overlay"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
