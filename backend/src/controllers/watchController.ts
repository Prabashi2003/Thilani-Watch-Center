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
      .populate("category")
      .populate("brand");

    res.json(watches);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch watches" });
  }
};

/**
 * GET WATCH BY ID
 */
export const getWatchById = async (req: Request, res: Response) => {
  try {
    const watch = await Watch.findById(req.params.id)
      .populate("category")
      .populate("brand");

    if (!watch) {
      return res.status(404).json({ message: "Watch not found" });
    }

    res.json(watch);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

/**
 * DELETE WATCH
 */
export const deleteWatch = async (req: Request, res: Response) => {
  try {
    await Watch.findByIdAndDelete(req.params.id);
    res.json({ message: "Watch deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Delete failed" });
  }
};
