const { Foods } = require("../models");

async function createFood(req, res) {
  try {
    const {
      foodName,
      foodRating,
      foodPrice,
      foodImage,
      restaurantName,
      restaurantImage,
      restaurantStatus,
    } = req.body;

    if (!foodName || typeof foodRating === "undefined" || !foodImage) {
      return res.status(400).json({ message: "Invalid food data" });
    }
    const food = await Foods.create({
      foodName,
      foodRating,
      foodPrice,
      foodImage,
      restaurantName,
      restaurantImage,
      restaurantStatus,
    });
    console.log("Food created:", food);
    res.status(201).json({ message: "Food created", data: food });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

// Get all foods or search by foodName
async function getFoods(req, res) {
  try {
    const { foodName } = req.query;
    let where = {};
    if (foodName) {
      where.foodName = { [require("sequelize").Op.iLike]: `%${foodName}%` };
    }
    const foods = await Foods.findAll({ where });
    res.json({ data: foods });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

// Update food
async function updateFood(req, res) {
  try {
    const id = req.params.id;
    const {
      foodName,
      foodRating,
      foodPrice,
      foodImage,
      restaurantName,
      restaurantImage,
      restaurantStatus,
    } = req.body;

    const food = await Foods.findByPk(id);
    if (!food) return res.status(404).json({ message: "Food not found" });
    if (foodName) food.foodName = foodName;
    if (typeof foodRating !== "undefined") food.foodRating = foodRating;
    if (typeof foodPrice !== "undefined") food.foodPrice = foodPrice;
    if (foodImage) food.foodImage = foodImage;
    if (restaurantName) food.restaurantName = restaurantName;
    if (restaurantImage) food.restaurantImage = restaurantImage;
    if (restaurantStatus) food.restaurantStatus = restaurantStatus;
    await food.save();

    res.json({ message: "Food updated", data: food });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

// Delete food
async function deleteFood(req, res) {
  try {
    const id = req.params.id;
    const food = await Foods.findByPk(id);
    if (!food) return res.status(404).json({ message: "Food not found" });
    await food.destroy();
    res.json({ message: "Food deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
}

module.exports = {
  createFood,
  getFoods,
  updateFood,
  deleteFood,
};
