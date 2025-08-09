const restaurants = [];
let restaurantId = 1;

// Create new restaurant
function createRestaurant(req, res) {
  const { name, logo, status } = req.body;
  if (!name || !logo || !["open", "closed"].includes(status)) {
    return res.status(400).json({ message: "Invalid restaurant data" });
  }
  const restaurant = { id: restaurantId++, name, logo, status };
  restaurants.push(restaurant);
  res.status(201).json({ message: "Restaurant created", data: restaurant });
}

// Get all restaurants or search by name
function getRestaurants(req, res) {
  const { name } = req.query;
  let result = restaurants;
  if (name) {
    result = restaurants.filter((r) =>
      r.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  res.json({ data: result });
}

// Update restaurant
function updateRestaurant(req, res) {
  const id = parseInt(req.params.id);
  const { name, logo, status } = req.body;
  const restaurant = restaurants.find((r) => r.id === id);
  if (!restaurant)
    return res.status(404).json({ message: "Restaurant not found" });
  if (name) restaurant.name = name;
  if (logo) restaurant.logo = logo;
  if (status && ["open", "closed"].includes(status)) restaurant.status = status;
  res.json({ message: "Restaurant updated", data: restaurant });
}

// Delete restaurant
function deleteRestaurant(req, res) {
  const id = parseInt(req.params.id);
  const idx = restaurants.findIndex((r) => r.id === id);
  if (idx === -1)
    return res.status(404).json({ message: "Restaurant not found" });
  restaurants.splice(idx, 1);
  res.json({ message: "Restaurant deleted" });
}

module.exports = {
  createRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
};
