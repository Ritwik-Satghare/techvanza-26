// models/User.js
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
     type: String,
     required: true 
    },
    
    role: {
      type: String,
      enum: ["seller", "buyer"],
      required: true,
    },

    preferredLanguage: {
      type: String,
      enum: ["hi", "en"],
      default: "hi",
    },

    location: {
      area: String,
      pincode: String,
      city: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);