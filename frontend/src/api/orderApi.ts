import axios from "axios";
import type { IOrder } from "../types/order";

const API_URL = "http://localhost:5000/api/orders"; 

// Get all orders
export const getAllOrders = async (): Promise<IOrder[]> => {
  const response = await axios.get<IOrder[]>(API_URL);
  return response.data;
};

// Get order by ID
export const getOrderById = async (id: string): Promise<IOrder> => {
  const response = await axios.get<IOrder>(`${API_URL}/${id}`);
  return response.data;
};

// Create new order
export const createOrder = async (orderData: {
  userId: string;
  watches: {
    watchId: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
  status?: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
}): Promise<IOrder> => {
  const response = await axios.post<IOrder>(API_URL, orderData);
  return response.data;
};

// Update order
export const updateOrder = async (
  id: string,
  orderData: Partial<{
    watches: {
      watchId: string;
      quantity: number;
      price: number;
    }[];
    totalPrice: number;
    status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  }>
): Promise<IOrder> => {
  const response = await axios.put<IOrder>(`${API_URL}/${id}`, orderData);
  return response.data;
};

// Delete order
export const deleteOrder = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
