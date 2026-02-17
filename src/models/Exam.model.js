import mongoose from "mongoose";
import slug from "slug"

const examSchema = new mongoose.Schema(
  {
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
    timestamps: true, 
  }
);

examSchema.pre("validate", async function () {
  // generate slug ONLY when creating new exam
  if (this.isNew && !this.slug) {
    const base = this.fullName || this.name;
    const generatedSlug = slug(base || "", { lower: true });
    if (!generatedSlug) {
      return next(new Error("Invalid exam name for slug generation"));
    }
    this.slug = generatedSlug;
  }
});



export const Exam = mongoose.model("Exam", examSchema);
