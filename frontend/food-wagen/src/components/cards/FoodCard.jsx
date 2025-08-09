import React, { useState } from "react";
import { FaTag } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";
import { Popover, message } from "antd";
import EditMealModal from "../forms/EditMealModal";
import DeleteMealModal from "../forms/DeleteMealModal";
import { deleteFood } from "../../services/foodService";
import { FaStar } from "react-icons/fa";
export default function FoodCard(props) {
  const {
    foodName,
    foodRating,
    foodPrice,
    foodImage,
    restaurantName,
    restaurantImage,
    restaurantStatus,
  } = props;
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteFood(props.id);
      message.success("Meal deleted successfully");
      setDeleteOpen(false);
      // Optionally trigger a refresh in parent
      if (props.onChange) props.onChange();
    } catch (err) {
      message.error("Failed to delete meal");
    } finally {
      setLoading(false);
    }
  };
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
          <Popover
            placement="bottomRight"
            trigger="click"
            content={
              <div className="flex flex-col">
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setEditOpen(true)}
                >
                  Edit
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  onClick={() => setDeleteOpen(true)}
                >
                  Delete
                </button>
              </div>
            }
          >
            <button
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none ml-auto"
              tabIndex={0}
            >
              <FaEllipsisV className="text-gray-500" />
            </button>
          </Popover>
          <EditMealModal
            visible={editOpen}
            onClose={() => setEditOpen(false)}
            onSuccess={props.onChange}
            food={props}
          />
          <DeleteMealModal
            visible={deleteOpen}
            onClose={() => setDeleteOpen(false)}
            onDelete={handleDelete}
            food={props}
          />
        </div>

        <div className="flex items-start">
          <div
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold 
              ${
                restaurantStatus === "open"
                  ? "bg-[#79B93C33] text-[#79B93C]"
                  : "bg-[#F1722833] text-[#F17228] "
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
