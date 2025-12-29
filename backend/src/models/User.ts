import { Schema, model, Document } from "mongoose";

export interface Iuser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "customer";
  createdAt: Date;
}

const userSchema = new Schema<Iuser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
  },
  { timestamps: true }
);

export const User = model<Iuser>("User", userSchema);