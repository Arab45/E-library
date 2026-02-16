import mongoose from "mongoose";

const paperSchema = new mongoose.Schema(
  {
    year: {
      type: Number,
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      required: true,
      index: true,
    },


    examBodyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
      index: true,
    },


    file: {
      url: {
        type: String,
        required: true,
      },
    },


    addedDate: {
      type: Date,
      default: Date.now,
    },


    downloadCount: {
      type: Number,
      default: 0,
    },

    viewCount: {
      type: Number,
      default: 0,
    },


    isLatest: {
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


paperSchema.index(
  { subjectId: 1, year: 1 },
  { unique: true }
);

export const Paper = mongoose.model("Paper", paperSchema);
