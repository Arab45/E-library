import mongoose from "mongoose";
import slug from "slug";

const classLevelSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },

    level: {
      type: String,
      enum: ["junior", "senior"],
      required: true,
      index: true,
    },

    year: {
      type: Number,
      required: true,
    },

    subjectsCount: {
      type: Number,
      default: 0,
    },

    materialsCount: {
      type: Number,
      default: 0,
    },

    color: {
      type: String,
      default: "blue",
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);


classLevelSchema.pre("validate", function () {
  if (this.isNew && !this.slug) {
    this.slug = slug(this.code || this.name, { lower: true });
  }
});

export const ClassLevel = mongoose.model(
  "ClassLevel",
  classLevelSchema
);
