import { Request, Response } from "express";
import { Category } from "../models/category";

/**
 * @desc    Create Category
 * @route   POST /api/categories
 * @access  Admin
 */
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    // check existing
    const exists = await Category.findOne({ name });
    if (exists) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = await Category.create({
      name,
      description
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Failed to create category" });
  }
};

/**
 * @desc    Get All Categories
 * @route   GET /api/categories
 * @access  Public
 */
export const getAllCategories = async (_: Request, res: Response) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
};

/**
 * @desc    Get Category By ID
 * @route   GET /api/categories/:id
 * @access  Public
 */
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(400).json({ message: "Invalid category ID" });
  }
};

/**
 * @desc    Update Category
 * @route   PATCH /api/categories/:id
 * @access  Admin
 */
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    res.status(400).json({ message: "Update failed" });
  }
};

/**
 * @desc    Delete Category
 * @route   DELETE /api/categories/:id
 * @access  Admin
 */
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed" });
  }
};
