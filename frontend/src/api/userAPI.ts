import axios from "axios";
import type { Iuser } from "../types/user";

const API_URL = "http://localhost:5000/api/users"; // Replace with your backend URL

// Get all users
export const getAllUsers = async (): Promise<Iuser[]> => {
  const response = await axios.get<Iuser[]>(API_URL);
  return response.data;
};

// Get a single user by ID
export const getUserById = async (id: string): Promise<Iuser> => {
  const response = await axios.get<Iuser>(`${API_URL}/${id}`);
  return response.data;
};

// Create a new user
export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "customer";
}): Promise<Iuser> => {
  const response = await axios.post<Iuser>(API_URL, userData);
  return response.data;
};

// Update user
export const updateUser = async (
  id: string,
  userData: Partial<{
    name: string;
    email: string;
    password: string;
    role: "admin" | "customer";
  }>
): Promise<Iuser> => {
  const response = await axios.put<Iuser>(`${API_URL}/${id}`, userData);
  return response.data;
};

// Delete user
export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
