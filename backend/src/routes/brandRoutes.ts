import { Router } from "express";
import {
  createBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand
} from "../controllers/brandController";

const router = Router();

// CREATE brand
router.post("/", createBrand);

// GET all brands
router.get("/", getAllBrands);

// GET brand by ID
router.get("/:id", getBrandById);

// UPDATE brand
router.patch("/:id", updateBrand);

// DELETE brand
router.delete("/:id", deleteBrand);

export default router;
