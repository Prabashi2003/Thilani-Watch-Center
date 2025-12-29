import { Request, Response } from "express";
import { Brand } from "../models/brand";

/**
 * @desc    Create a new brand
 * @route   POST /api/brands
 * @access  Admin
 */
export const createBrand = async (req: Request, res: Response) => {
  try {
    const { name, country } = req.body;

    // Check if brand exists
    const exists = await Brand.findOne({ name });
    if (exists) {
      return res.status(400).json({ message: "Brand already exists" });
    }

    const brand = await Brand.create({ name, country });
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ message: "Failed to create brand" });
  }
};

/**
 * @desc    Get all brands
 * @route   GET /api/brands
 * @access  Public
 */
export const getAllBrands = async (_: Request, res: Response) => {
  try {
    const brands = await Brand.find().sort({ createdAt: -1 });
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch brands" });
  }
};

/**
 * @desc    Get brand by ID
 * @route   GET /api/brands/:id
 * @access  Public
 */
export const getBrandById = async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json(brand);
  } catch (error) {
    res.status(400).json({ message: "Invalid brand ID" });
  }
};

/**
 * @desc    Update brand
 * @route   PATCH /api/brands/:id
 * @access  Admin
 */
export const updateBrand = async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json(brand);
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};

/**
 * @desc    Delete brand
 * @route   DELETE /api/brands/:id
 * @access  Admin
 */
export const deleteBrand = async (req: Request, res: Response) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json({ message: "Brand deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed" });
  }
};
