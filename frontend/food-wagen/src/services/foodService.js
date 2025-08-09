import api from "../utils/api";

export const getFoods = (name) =>
  api.get(`/foods${name ? `?name=${name}` : ""}`);
export const createFood = (data) => api.post("/foods", data);
export const updateFood = (id, data) => api.put(`/foods/${id}`, data);
export const deleteFood = (id) => api.delete(`/foods/${id}`);
