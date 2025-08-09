const express = require("express");
const router = express.Router();
const foodController = require("../controller/foodController");
const { foodUpload } = require("../middleware/upload");

router.get("/", foodController.getFoods);
router.post("/", foodController.createFood);
router.put("/:id", foodController.updateFood);
router.delete("/:id", foodController.deleteFood);

module.exports = router;
