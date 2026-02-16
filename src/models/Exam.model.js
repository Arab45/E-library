import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
  {
    examId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    targetClasses: {
      type: String,
      required: true,
    },

    subjectsCount: {
      type: Number,
      default: 0,
    },

    papersCount: {
      type: Number,
      default: 0,
    },

    yearsAvailable: {
      type: String,
      default: "0",
    },

    fileFormat: {
      type: String,
      enum: ["PDF", "DOC", "DOCX"],
      default: "PDF",
    },

    color: {
      type: String,
      default: "blue",
    },

    badges: [
      {
        type: String,
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  }
);

export const Exam = mongoose.model("Exam", examSchema);
