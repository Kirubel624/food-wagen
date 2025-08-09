const { Task } = require("../models");

const createTask = async (req, res, next) => {
  const data = req.body;
  try {
    const newTask = await Task.create(data);

    return res
      .status(201)
      .json({ message: "Task created successfully", data: newTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
module.exports = {
  createTask,
};
