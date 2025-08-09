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
      destroyOnClose
    >
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2 text-red-600">Delete Meal</h2>
        <p>
          Are you sure you want to delete{" "}
          <span className="font-semibold">{food?.foodName}</span>?
        </p>
      </div>
    </Modal>
  );
};

export default DeleteMealModal;
