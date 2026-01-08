import { Router } from "express";
import { createOrUpdateCart, getCart, deleteCart } from "../controllers/cartController";

const router = Router();

// Cart routes
router.post("/", createOrUpdateCart);          
router.get("/:userId", getCart);               
router.delete("/:userId", deleteCart);         

export default router;