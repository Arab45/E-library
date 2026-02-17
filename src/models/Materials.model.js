import mongoose from "mongoose";
import slug from "slug";

const materialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    description: String,

    category: {
      type: String,
      enum: ["textbook", "past-question", "note", "video"],
      required: true,
      index: true,
    },

    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AcademicSubject",
      required: true,
      index: true,
    },

    classLevelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClassLevel",
      required: true,
      index: true,
    },

    file: {
      url: { type: String, required: true },
    },

    term: {
      type: String,
      enum: ["first", "second", "third", null],
      default: null,
    },

    year: Number,

    author: String,

    version: String,

    downloadCount: {
      type: Number,
      default: 0,
    },

    viewCount: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
      index: true,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },

    addedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);


materialSchema.pre("validate", function () {
  if (this.isNew && !this.slug) {
    this.slug = slug(this.title, { lower: true });
  }
});

export const Material = mongoose.model("Material", materialSchema);
