import React from "react";
import { FaTag } from "react-icons/fa6";
import { Tag } from "antd";
import { FaStar } from "react-icons/fa";
export default function FoodCard({
  foodName,
  foodRating,
  foodPrice,
  foodImage,
  restaurantName,
  restaurantImage,
  restaurantStatus,
}) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white relative font-sans">
      <div className="relative">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 left-3 bg-orange-600 text-white px-3 py-1 rounded-lg flex items-center gap-1 shadow-lg">
          <FaTag className="text-white" />
          <span className="font-semibold">
            {foodPrice ? `$${foodPrice}` : "No price"}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            {restaurantImage ? (
              <img
                src={restaurantImage}
                alt={restaurantName}
                className="w-full h-full object-cover"
              />
            ) : (
              restaurantName?.charAt(0) || "R"
            )}
          </div>
          <div>
            <p className="text-gray-800 font-semibold truncate">{foodName}</p>
            <div className="flex items-center gap-1 text-yellow-500 font-semibold">
              <FaStar />
              <span>{foodRating}</span>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold 
              ${
                restaurantStatus === "open"
                  ? "bg-green-100 text-green-700 border border-green-400"
                  : "bg-red-100 text-red-700 border border-red-400"
              }
            `}
          >
            {restaurantStatus === "open" ? "Open" : "Closed"}
          </div>
        </div>
      </div>
    </div>
  );
}
