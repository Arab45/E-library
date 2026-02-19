import { Paper } from "../models/Paper.model.js";
import { sendError, sendSuccess } from "../middleware/index.middleware.js";

export const createPaper = async (req, res) => {
  try {
    const paper = await Paper.create(req.body);

    return sendSuccess(res, "Paper created successfully", paper);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const getAllPapers = async (req, res) => {
  try {
    const papers = await Paper.find()
      .sort({ createdAt: -1 })
      .populate("subjectId", "name slug") // Populate subject with selected fields
      .populate("examBodyId", "name fullName slug") // Populate exam body with selected fields
      .lean();

    return sendSuccess(res, "Papers fetched successfully", papers);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const getSinglePaper = async (req, res) => {
  try {
    const { id } = req.params;

    const paper = await Paper.findById(id)
      .populate("subjectId", "name slug")
      .populate("examBodyId", "name fullName slug");

    if (!paper) {
      return sendError(res, "Paper not found", 404);
    }

    return sendSuccess(res, "Paper fetched successfully", paper);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const updatePaper = async (req, res) => {
  try {
    const { id } = req.params;

    const paper = await Paper.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    )
      .populate("subjectId", "name slug")
      .populate("examBodyId", "name fullName slug");

    if (!paper) {
      return sendError(res, "Paper not found", 404);
    }

    return sendSuccess(res, "Paper updated successfully", paper);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const deletePaper = async (req, res) => {
  try {
    const { id } = req.params;

    const paper = await Paper.findByIdAndDelete(id);

    if (!paper) {
      return sendError(res, "Paper not found", 404);
    }

    return sendSuccess(res, "Paper deleted successfully");
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

// Optional: Add a method to get papers by subject or exam body
export const getPapersBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const papers = await Paper.find({ subjectId, isActive: true })
      .sort({ year: -1 })
      .populate("subjectId", "name slug")
      .populate("examBodyId", "name fullName slug")
      .lean();

    return sendSuccess(res, "Papers fetched successfully", papers);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const getPapersByExamBody = async (req, res) => {
  try {
    const { examBodyId } = req.params;

    const papers = await Paper.find({ examBodyId, isActive: true })
      .sort({ year: -1 })
      .populate("subjectId", "name slug")
      .populate("examBodyId", "name fullName slug")
      .lean();

    return sendSuccess(res, "Papers fetched successfully", papers);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};