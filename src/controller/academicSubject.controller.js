import { AcademicSubject } from "../models/Academy.model.js";
import { sendSuccess, sendError } from "../middleware/index.middleware.js";

export const createAcademicSubject = async (req, res) => {
  try {
    const subject = await AcademicSubject.create(req.body);
    return sendSuccess(res, "Subject created", subject);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const getAllAcademicSubjects = async (req, res) => {
  try {
    const data = await AcademicSubject.find()
      .populate("classLevelId", "name code");

    return sendSuccess(res, "Subjects fetched", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const getSingleAcademicSubject = async (req, res) => {
  try {
    const data = await AcademicSubject.findById(req.params.id);

    if (!data) return sendError(res, "Not found", 404);

    return sendSuccess(res, "Subject fetched", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const updateAcademicSubject = async (req, res) => {
  try {
    const data = await AcademicSubject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return sendSuccess(res, "Updated successfully", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const deleteAcademicSubject = async (req, res) => {
  try {
    await AcademicSubject.findByIdAndDelete(req.params.id);
    return sendSuccess(res, "Deleted successfully");
  } catch (err) {
    return sendError(res, err.message);
  }
};
