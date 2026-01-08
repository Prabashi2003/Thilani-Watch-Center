import { Schema, model, Document } from "mongoose";


interface IOrderItem {
  watchId: string;
  quantity: number;
  price: number;
}


export interface IOrder extends Document {
  userId: string;
  watches: IOrderItem[];
  totalPrice: number;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  createdAt: string;
  updatedAt?: string;
}


const OrderItemSchema = new Schema<IOrderItem>(
  {
    watchId: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { _id: false } 
);



const OrderSchema = new Schema<IOrder>(
  {
    userId: { type: String, required: true },
    watches: { type: [OrderItemSchema], required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    createdAt: { type: String, default: () => new Date().toISOString() },
    updatedAt: { type: String },
  },
  { timestamps: true } 
);


export const Order = model<IOrder>("Order", OrderSchema);
