import { Router } from "express";
import {
  createWatch,
  getAllWatches,
  getWatchById,
  updateWatch,
  deleteWatch
} from "../controllers/watchController";

const router = Router();

router.post("/", createWatch);
router.get("/", getAllWatches);
router.get("/:id", getWatchById);
router.put("/:id", updateWatch);
router.delete("/:id", deleteWatch);

export default router;
