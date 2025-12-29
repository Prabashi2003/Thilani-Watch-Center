import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} from "../controllers/categoryController";

const router = Router();

// CREATE category
router.post("/", createCategory);

// GET all categories
router.get("/", getAllCategories);

// GET category by ID
router.get("/:id", getCategoryById);

// UPDATE category
router.patch("/:id", updateCategory);

// DELETE category
router.delete("/:id", deleteCategory);

export default router;
