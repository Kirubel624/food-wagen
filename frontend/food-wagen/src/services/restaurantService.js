import api from "../utils/api";

export const getRestaurants = (name: string) =>
  api.get(`/restaurants${name ? `?name=${name}` : ""}`);
export const createRestaurant = (data: string) =>
  api.post("/restaurants", data);
export const updateRestaurant = (id: string, data: string) =>
  api.put(`/restaurants/${id}`, data);
export const deleteRestaurant = (id: string) =>
  api.delete(`/restaurants/${id}`);
