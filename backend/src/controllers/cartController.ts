import { Request, Response } from "express";
import { Cart } from "../models/cart";

// Create or replace cart for a user
export const createOrUpdateCart = async (req: Request, res: Response) => {
  try {
    const { userId, items } = req.body;

    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = items;
      cart.updatedAt = new Date().toISOString();
      await cart.save();
    } else {
      cart = new Cart({ userId, items });
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to create/update cart", error: err });
  }
};

// Get cart for a user
export const getCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to get cart", error: err });
  }
};

// Delete cart for a user
export const deleteCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const cart = await Cart.findOneAndDelete({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete cart", error: err });
  }
};
