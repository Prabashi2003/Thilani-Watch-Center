import { Schema, model, Document } from "mongoose";

export interface IBrand extends Document {
  name: string;
  country?: string;
}

const brandSchema = new Schema<IBrand>(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    country: {
      type: String
    }
  },
  { timestamps: true }
);

export const Brand = model<IBrand>("Brand", brandSchema);
