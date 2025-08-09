const express = require("express");
const router = express.Router();
const foodRouter = require("./foodRoutes");
const restaurantRouter = require("./restaurantRoutes");
const defaultRoutes = [
  {
    path: "/foods",
    route: foodRouter,
  },
  {
    path: "/restaurants",
    route: restaurantRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
