// models/Transaction.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const transactionSchema = new Schema(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    buyer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    material: {
      type: Schema.Types.ObjectId,
      ref: "Material",
      required: true,
    },

    quantityKg: {
      type: Number,
      required: true,
      min: 0,
    },

    pricePerKg: {
      type: Number,
      required: true,
      min: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    location: {
      area: String,
      pincode: String,
      city: String,
    },

    transactionDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
