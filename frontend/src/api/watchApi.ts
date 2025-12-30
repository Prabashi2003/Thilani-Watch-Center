import axios from "axios";
import type { Watch } from "../types/watch";

const API_URL = "http://localhost:5000/api/watches";

export const getAllWatches = async (): Promise<Watch[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createWatch = async (data: Partial<Watch>) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const deleteWatch = async (id: string) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const getWatchById = async (id: string) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const updateWatch = async (id: string, data: Partial<Watch>) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};