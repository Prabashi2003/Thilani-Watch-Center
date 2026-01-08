import { Request, Response } from "express";
import { Order, IOrder } from "../models/order";

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, watches, totalPrice, status } = req.body;

    const newOrder = new Order({
      userId,
      watches,
      totalPrice,
      status: status || "Pending",
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: "Failed to create order", error: err });
  }
};

// Get all orders
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err });
  }
};

// Get a single order by ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch order", error: err });
  }
};

// Update order status
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, watches, totalPrice } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status, watches, totalPrice, updatedAt: new Date().toISOString() },
      { new: true }
    );

    if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: "Failed to update order", error: err });
  }
};

// Delete an order
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) return res.status(404).json({ message: "Order not found" });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete order", error: err });
  }
};
