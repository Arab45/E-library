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
      .lean();

    return sendSuccess(res, "Papers fetched successfully", papers);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};


export const getSinglePaper = async (req, res) => {
  try {
    const { id } = req.params;

    const paper = await Paper.findById(id);

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
    );

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
