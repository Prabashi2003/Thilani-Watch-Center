import { Schema, model, Document, Types } from "mongoose";

export interface IWatch extends Document {
  name: string;
  price: number;
  description: string[];
  images: string[];
  category: Types.ObjectId;
  brand: Types.ObjectId;
  stock: number;
  isActive: boolean;
}

const watchSchema = new Schema<IWatch>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: [String],
      required: false,
      default: [],
    },
    images: {
      type: [String],
      default: [],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const Watch = model<IWatch>("Watch", watchSchema);
