const express = require("express");
const router = express.Router();
const restaurantController = require("../controller/restaurantController");
const { restaurantUpload } = require("../middleware/upload");

router.get("/", restaurantController.getRestaurants);
router.post("/", restaurantController.createRestaurant);
router.put("/:id", restaurantController.updateRestaurant);
router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;
