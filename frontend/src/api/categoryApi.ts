import axios from "axios";
import type { Category } from "../types/category";

const API_URL = "http://localhost:5000/api/category";

// Get all categories
export const getAllCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>(API_URL);
  return response.data;
};

// Get category by ID
export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await axios.get<Category>(`${API_URL}/${id}`);
  return response.data;
};

// Create category
export const createCategory = async (data: {
  name: string;
}): Promise<Category> => {
  const response = await axios.post<Category>(API_URL, data);
  return response.data;
};

// Update category
export const updateCategory = async (
  id: string,
  data: Partial<{ name: string; isActive: boolean }>
): Promise<Category> => {
  const response = await axios.put<Category>(`${API_URL}/${id}`, data);
  return response.data;
};

// Delete category
export const deleteCategory = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
