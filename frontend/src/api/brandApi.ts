import axios from "axios";
import type { Brand } from './../types/Brand';

const API_URL = "http://localhost:5000/api/brand";

// Get all brands
export const getAllBrands = async (): Promise<Brand[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Get brand by ID
export const getBrandById = async (id: string): Promise<Brand> => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// Create brand
export const createBrand = async (data: { name: string; country: string }): Promise<Brand> => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

// Update brand
export const updateBrand = async (id: string, data: { name?: string; country?: string }): Promise<Brand> => {
  const res = await axios.patch(`${API_URL}/${id}`, data);
  return res.data;
};

// Delete brand
export const deleteBrand = async (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};
