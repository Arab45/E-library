import { Subject } from "../models/Subject.model.js";
import { sendError, sendSuccess } from "../middleware/index.middleware.js";

export const createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    return sendSuccess(res, "Subject created successfully", subject);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find()
      .sort({ createdAt: -1 })
      .populate("examBodyId", "name fullName slug")
      .lean();

    return sendSuccess(res, "Subjects fetched successfully", subjects);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const getSingleSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const subject = await Subject.findById(id).populate(
      "examBodyId",
      "name fullName slug",
    );

    if (!subject) {
      return sendError(res, "Subject not found", 404);
    }

    return sendSuccess(res, "Subject fetched successfully", subject);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const subject = await Subject.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    }).populate("examBodyId", "name fullName slug"); 

    if (!subject) {
      return sendError(res, "Subject not found", 404);
    }

    return sendSuccess(res, "Subject updated successfully", subject);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const subject = await Subject.findByIdAndDelete(id);

    if (!subject) {
      return sendError(res, "Subject not found", 404);
    }

    return sendSuccess(res, "Subject deleted successfully");
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};

export const getSubjectBySlug = async (req, res) => {
  try {
    const { slug } = req.query;

    // validate query
    if (!slug) {
      return sendError(res, "Slug query is required", 400);
    }

    const subject = await Subject.findOne({
      slug,
      isActive: true, // optional filter
    })
      .populate("examBodyId", "name fullName slug") // Added populate
      .lean();

    if (!subject) {
      return sendError(res, "Subject not found", 404);
    }

    return sendSuccess(res, "Subject fetched successfully", subject);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};
