import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },

    examBodyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
      index: true,
    },

    examBody: {
      name: {
        type: String,
        required: true,
      },
      fullName: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
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

export const Subject = mongoose.model("Subject", subjectSchema);
