import mongoose from "mongoose";
import slug from "slug";

const academicSubjectSchema = new mongoose.Schema(
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

    description: {
      type: String,
      default: "",
    },

    classLevelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClassLevel",
      required: true,
      index: true,
    },

    materialsCount: {
      type: Number,
      default: 0,
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

academicSubjectSchema.pre("validate", function () {
  if (this.isNew && !this.slug) {
    this.slug = slug(this.name, { lower: true });
  }
});

export const AcademicSubject = mongoose.model(
  "AcademicSubject",
  academicSubjectSchema
);