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

    examBody: {
      name: { type: String, required: true },
      fullName: { type: String, required: true },
      slug: { type: String, required: true },
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
  }
);


subjectSchema.pre("validate", function (next) {
  // only generate when creating new document
  if (this.isNew && !this.slug) {
    this.slug = slug(this.name, { lower: true });
  }
  next();
});



export const Subject = mongoose.model("Subject", subjectSchema);
