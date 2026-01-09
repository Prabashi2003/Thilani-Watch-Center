import axios from "axios";
import type { Cart } from "../types/cart";


const API_BASE = "http://localhost:5000/api/cart";

// Create or update cart
export const createOrUpdateCart = async (cartData: {
  userId: string;
  items: { productId: string; quantity: number }[];
}): Promise<Cart> => {
  const { data } = await axios.post(`${API_BASE}`, cartData);
  return data;
};

// Get cart by userId
export const getCartByUserId = async (userId: string): Promise<Cart> => {
  const { data } = await axios.get(`${API_BASE}/${userId}`);
  return data;
};

// Delete cart by userId
export const deleteCartByUserId = async (userId: string): Promise<{ message: string }> => {
  const { data } = await axios.delete(`${API_BASE}/${userId}`);
  return data;
};
