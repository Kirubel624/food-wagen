import React from "react";
import { FaTag } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";
import { Popover, message } from "antd";
import { useState } from "react";
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
    ...rest
  } = props;
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      await deleteFood(id);
      message.success("Meal deleted successfully");
      setDeleteOpen(false);
      setPopoverOpen(false);
      if (props.onChange) props.onChange();
    } catch (err) {
      message.error("Failed to delete meal");
    }
  };

  const handleEditSuccess = () => {
    setEditOpen(false);
    setPopoverOpen(false);
    if (props.onChange) props.onChange();
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
        <Popover
          placement="bottomRight"
          trigger="click"
          open={popoverOpen}
          onOpenChange={setPopoverOpen}
          content={
            <div className="flex flex-col">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setEditOpen(true);
                  setPopoverOpen(false);
                }}
              >
                Edit
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={() => {
                  setDeleteOpen(true);
                  setPopoverOpen(false);
                }}
              >
                Delete
              </button>
            </div>
          }
        >
          <button
            type="button"
            className="p-2 rounded-full hover:bg-gray-100 focus:outline-none ml-auto absolute top-3 right-3"
            tabIndex={0}
          >
            <FaEllipsisV className="text-gray-500" />
          </button>
        </Popover>
        <EditMealModal
          visible={editOpen}
          onClose={() => setEditOpen(false)}
          onSuccess={handleEditSuccess}
          food={{
            foodName,
            foodRating,
            foodPrice,
            foodImage,
            restaurantName,
            restaurantImage,
            restaurantStatus,
            id: rest.id,
          }}
        />
        <DeleteMealModal
          visible={deleteOpen}
          onClose={() => setDeleteOpen(false)}
          onDelete={handleDelete}
          food={{
            foodName,
            id: rest.id,
          }}
        />
        <div className="p-4">
          <p className="text-gray-800 font-semibold truncate">{foodName}</p>
          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <FaStar />
            <span>{foodRating}</span>
          </div>
          <div className="flex items-start mt-2">
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
    </div>
  );
}
