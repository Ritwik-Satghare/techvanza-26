
// models/Material.js
import mongoose from "mongoose";
const materialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // e.g. Plastic PET
      unique: true,
    },

    category: {
      type: String,
      enum: ["plastic", "paper", "metal", "glass", "organic"],
      required: true,
    },

    unit: {
      type: String,
      default: "kg",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Material", materialSchema);