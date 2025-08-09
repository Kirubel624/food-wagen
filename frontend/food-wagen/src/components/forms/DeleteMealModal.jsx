import React from "react";
import { Modal } from "antd";

const DeleteMealModal = ({ visible, onClose, onDelete, food }) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      onOk={onDelete}
      okText="Delete"
      okButtonProps={{ danger: true }}
      cancelText="Cancel"
      destroyOnHidden
    >
      <div className="text-center">
        <h1 className="text-2xl pb-4 text-center font-[700] text-[#FF9A0E]">
          Delete Meal
        </h1>
        <p>
          Are you sure you want to delete{" "}
          <span className="font-semibold">{food?.foodName}</span>? Actions
          cannot be reversed.
        </p>
      </div>
    </Modal>
  );
};

export default DeleteMealModal;
