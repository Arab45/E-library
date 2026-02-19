import { ClassLevel } from "../models/Class.model.js";
import { sendSuccess, sendError } from "../middleware/index.middleware.js";

export const createClassLevel = async (req, res) => {
  try {
    const data = await ClassLevel.create(req.body);
    return sendSuccess(res, "Class level created", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const getAllClassLevels = async (req, res) => {
  try {
    const data = await ClassLevel.find().sort({ createdAt: -1 });
    return sendSuccess(res, "Class levels fetched", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const getSingleClassLevel = async (req, res) => {
  try {
    const data = await ClassLevel.findById(req.params.id);
    if (!data) return sendError(res, "Not found", 404);

    return sendSuccess(res, "Class level fetched", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

// NEW: Get class level by slug
export const getClassLevelBySlug = async (req, res) => {
  try {
    const { slug } = req.query;

    // Validate query
    if (!slug) {
      return sendError(res, "Slug query is required", 400);
    }

    const data = await ClassLevel.findOne({ 
      slug, 
      isActive: true // Optional: only return active class levels
    });

    if (!data) {
      return sendError(res, "Class level not found", 404);
    }

    return sendSuccess(res, "Class level fetched successfully", data);
  } catch (err) {
    return sendError(res, err.message, 500);
  }
};

export const updateClassLevel = async (req, res) => {
  try {
    const data = await ClassLevel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!data) {
      return sendError(res, "Class level not found", 404);
    }

    return sendSuccess(res, "Updated successfully", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const deleteClassLevel = async (req, res) => {
  try {
    const data = await ClassLevel.findByIdAndDelete(req.params.id);
    
    if (!data) {
      return sendError(res, "Class level not found", 404);
    }

    return sendSuccess(res, "Deleted successfully");
  } catch (err) {
    return sendError(res, err.message);
  }
};