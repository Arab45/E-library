import { Exam } from "../models/Exam.model.js";
import { sendError, sendSuccess } from "../middleware/index.middleware.js";


export const createExam = async (req, res) => {
  try {
    const exam = await Exam.create(req.body);

    return sendSuccess(res, "Exam created successfully", exam);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};


export const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find().sort({ createdAt: -1 });

    return sendSuccess(res, "Exams fetched successfully", exams);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};


export const getSingleExam = async (req, res) => {
  try {
    const { id } = req.params;

    const exam = await Exam.findById(id);

    if (!exam) {
      return sendError(res, "Exam not found", 404);
    }

    return sendSuccess(res, "Exam fetched successfully", exam);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};


export const updateExam = async (req, res) => {
  try {
    const { id } = req.params;

    const exam = await Exam.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!exam) {
      return sendError(res, "Exam not found", 404);
    }

    return sendSuccess(res, "Exam updated successfully", exam);
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};


export const deleteExam = async (req, res) => {
  try {
    const { id } = req.params;

    const exam = await Exam.findByIdAndDelete(id);

    if (!exam) {
      return sendError(res, "Exam not found", 404);
    }

    return sendSuccess(res, "Exam deleted successfully");
  } catch (error) {
    return sendError(res, error.message, 500);
  }
};
