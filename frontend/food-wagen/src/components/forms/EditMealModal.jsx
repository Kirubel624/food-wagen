import React, { useState } from "react";
import { Modal, Form, Input, Select, message, Rate, InputNumber } from "antd";
import { updateFood } from "../../services/foodService";

const { Option } = Select;

const EditMealModal = ({ visible, onClose, onSuccess, food }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (food) {
      form.setFieldsValue({
        ...food,
        foodRating: Number(food.foodRating),
        foodPrice: food.foodPrice ? Number(food.foodPrice) : undefined,
      });
    }
  }, [food, form]);

  const handleEdit = async (data) => {
    try {
      setLoading(true);
      await updateFood(food.id, data);
      message.success("Meal updated successfully");
      form.resetFields();
      onClose();
      onSuccess && onSuccess();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        message.error(err.response.data.message);
      } else {
        message.error("Failed to update meal");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      confirmLoading={loading}
      footer={null}
      destroyOnClose
    >
      <h1 className="text-2xl pb-4 text-center font-[700] text-[#FF9A0E]">
        Edit Meal
      </h1>
      <Form
        form={form}
        className="!px-10"
        onFinish={handleEdit}
        layout="vertical"
        preserve={false}
      >
        <Form.Item
          name="foodName"
          label="Food Name"
          rules={[{ required: true, message: "Please enter the food name" }]}
        >
          <Input placeholder="e.g. Paneer Tikka" />
        </Form.Item>
        <div className="flex items-center justify-between gap-x-3">
          <Form.Item
            name="foodPrice"
            label="Food Price"
            rules={[{ required: true, message: "Please enter the food price" }]}
          >
            <InputNumber
              type="number"
              placeholder="e.g. 1.99"
              className="!w-full"
            />
          </Form.Item>
          <Form.Item
            name="foodRating"
            label="Food Rating"
            rules={[
              { required: true, message: "Please enter the food rating" },
            ]}
          >
            <Rate allowHalf />
          </Form.Item>
        </div>
        <Form.Item
          name="foodImage"
          label="Food Image URL"
          rules={[
            { required: true, message: "Please enter the food image URL" },
          ]}
        >
          <Input placeholder="e.g. https://..." />
        </Form.Item>
        <Form.Item
          name="restaurantName"
          label="Restaurant Name"
          rules={[
            { required: true, message: "Please enter the restaurant name" },
          ]}
        >
          <Input placeholder="e.g. Spice Villa" />
        </Form.Item>
        <Form.Item
          name="restaurantImage"
          label="Restaurant Image URL"
          rules={[
            {
              required: true,
              message: "Please enter the restaurant image URL",
            },
          ]}
        >
          <Input placeholder="e.g. https://..." />
        </Form.Item>
        <Form.Item
          name="restaurantStatus"
          label="Restaurant Status"
          rules={[
            { required: true, message: "Please select the restaurant status" },
          ]}
        >
          <Select placeholder="Select status">
            <Option value="open">Open</Option>
            <Option value="closed">Closed</Option>
          </Select>
        </Form.Item>
        <Form.Item className="w-full">
          <div className="flex w-full gap-x-3">
            <button
              type="submit"
              className="bg-[#FFBA26] font-semibold flex-1 rounded-lg px-6 py-2 text-black"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-[#FFBA26] font-semibold flex-1 rounded-lg px-6 py-2 text-black"
            >
              Cancel
            </button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditMealModal;
