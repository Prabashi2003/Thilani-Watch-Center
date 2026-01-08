import { Schema, model, Document } from "mongoose";

// TypeScript interface for a cart item
interface ICartItem {
  watchId: string;
  quantity: number;
}

// TypeScript interface for Cart document
export interface ICart extends Document {
  userId: string;
  items: ICartItem[];
  createdAt: string;
  updatedAt?: string;
}

// Schema for individual cart items
const CartItemSchema = new Schema<ICartItem>(
  {
    watchId: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false } // Prevent separate _id for each item
);

// Main Cart schema
const CartSchema = new Schema<ICart>(
  {
    userId: { type: String, required: true },
    items: { type: [CartItemSchema], required: true },
    createdAt: { type: String, default: () => new Date().toISOString() },
    updatedAt: { type: String },
  },
  { timestamps: true } // auto-manage createdAt & updatedAt
);

export const Cart = model<ICart>("Cart", CartSchema);
