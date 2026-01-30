import mongoose from "mongoose";

const materialListingSchema = new mongoose.Schema(
  {
    // 🔗 Seller Reference
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    // ♻️ SECTION 2: Material Details
    category: {
      type: String,
      enum: [
        "plastic",
        "paper",
        "metal",
        "glass",
        "e-waste",
        "textile",
        "organic",
        "other",
      ],
      required: true,
    },

    // 📦 SECTION 3: Quantity & Quality
    quantity: {
      type: Number,
      required: true,
      min: 0.1,
    },

    grade: {
      type: String,
      enum: ["A", "B", "Mixed", "Recycled"],
      required: true,
    },

    // 📍 SECTION 4: Location
    location: {
      state: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },

    pickupAddress: {
      type: String,
      required: true,
    },

    // 💰 SECTION 5: Pricing
    pricing: {
      quantity: {
        type: Number,
        required: true,
      },
      pricePerUnit: {
        type: Number,
        required: true,
      },
    },

    // 📷 Image Upload (Cloudinary)
    imageUrl: {
      type: String,
    },

    // 🔁 Listing Lifecycle
    status: {
      type: String,
      enum: ["available", "matched", "sold", "cancelled"],
      default: "available",
    },

    // 🔔 Visibility & Matching
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Material", materialSchema);
