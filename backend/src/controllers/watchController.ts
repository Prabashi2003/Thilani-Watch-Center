import { Request, Response } from "express";
import { Watch } from "../models/watch";

/**
 * CREATE WATCH
 */
export const createWatch = async (req: Request, res: Response) => {
  try {
    const watch = await Watch.create(req.body);
    res.status(201).json(watch);
  } catch (error) {
    res.status(400).json({ message: "Failed to create watch", error });
  }
};

/**
 * GET ALL WATCHES
 */
export const getAllWatches = async (_: Request, res: Response) => {
  try {
    const watches = await Watch.find()
      .populate("brand", "name")
      .populate("category", "name");

    // Ensure null safety for frontend
    const safeWatches = watches.map(w => ({
      ...w.toObject(),
      brand: w.brand || null,
      category: w.category || null,
    }));

    res.json(safeWatches);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch watches", error });
  }
};

/**
 * GET WATCH BY ID
 */
export const getWatchById = async (req: Request, res: Response) => {
  try {
    const watch = await Watch.findById(req.params.id)
      .populate("brand", "name")
      .populate("category", "name");

    if (!watch) {
      return res.status(404).json({ message: "Watch not found" });
    }

    res.json({
      ...watch.toObject(),
      brand: watch.brand || null,
      category: watch.category || null,
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID", error });
  }
};

/**
 * UPDATE WATCH
 */
export const updateWatch = async (req: Request, res: Response) => {
  try {
    const watch = await Watch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .populate("brand", "name")
      .populate("category", "name");

    if (!watch) {
      return res.status(404).json({ message: "Watch not found" });
    }

    res.json({
      ...watch.toObject(),
      brand: watch.brand || null,
      category: watch.category || null,
    });
  } catch (error) {
    res.status(400).json({ message: "Update failed", error });
  }
};

/**
 * DELETE WATCH
 */
export const deleteWatch = async (req: Request, res: Response) => {
  try {
    const watch = await Watch.findByIdAndDelete(req.params.id);

    if (!watch) {
      return res.status(404).json({ message: "Watch not found" });
    }

    res.json({ message: "Watch deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed", error });
  }
};
