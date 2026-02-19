import mongoose from "mongoose";
import slug from "slug";

const subjectSchema = new mongoose.Schema(
  {
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

    examBodyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
      index: true,
    },

    papersCount: {
      type: Number,
      default: 0,
    },

    yearsAvailable: {
      type: String,
      default: "",
    },

    isComingSoon: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

subjectSchema.pre("validate", async function () {
  // only generate when creating new document
  if (this.isNew && !this.slug) {
    this.slug = slug(this.name, { lower: true });
  }
});

export const Subject = mongoose.model("Subject", subjectSchema);
