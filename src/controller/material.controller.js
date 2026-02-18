import { Material } from "../models/Materials.model.js";
import { sendSuccess, sendError } from "../middleware/index.middleware.js";

export const createMaterial = async (req, res) => {
  try {
    const material = await Material.create(req.body);
    return sendSuccess(res, "Material created", material);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const getAllMaterials = async (req, res) => {
  try {
    const data = await Material.find()
      .populate("subjectId", "name")
      .populate("classLevelId", "name code");

    return sendSuccess(res, "Materials fetched", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const getSingleMaterial = async (req, res) => {
  try {
    const data = await Material.findById(req.params.id);

    if (!data) return sendError(res, "Not found", 404);

    return sendSuccess(res, "Material fetched", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const updateMaterial = async (req, res) => {
  try {
    const data = await Material.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return sendSuccess(res, "Updated successfully", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const deleteMaterial = async (req, res) => {
  try {
    await Material.findByIdAndDelete(req.params.id);
    return sendSuccess(res, "Deleted successfully");
  } catch (err) {
    return sendError(res, err.message);
  }
};

export const getSingleMaterialBySlug = async (req, res) => {
  try {
    const { slug } = req.query;

    if (!slug) {
      return sendError(res, "Slug is required", 400);
    }

    const data = await Material.findOne({ slug })
      .populate("subjectId", "name")
      .populate("classLevelId", "name code");

    if (!data) return sendError(res, "Not found", 404);

    return sendSuccess(res, "Material fetched", data);
  } catch (err) {
    return sendError(res, err.message);
  }
};

