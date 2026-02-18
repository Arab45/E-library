import express from "express";
import {
  createMaterial,
  deleteMaterial,
  getAllMaterials,
  getSingleMaterial,
  updateMaterial,
} from "../controller/material.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Materials
 *   description: Learning material management APIs
 */

/**
 * @swagger
 * /api/materials:
 *   post:
 *     summary: Create a new material
 *     tags: [Materials]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               title: Algebra Basics
 *               description: Introduction to algebra concepts
 *               subjectId: 65f1a2b3c4d5e6f789012345
 *               classLevelId: 65f1a2b3c4d5e6f789012346
 *               fileUrl: https://example.com/material.pdf
 *               fileType: PDF
 *               isPremium: false
 *               isActive: true
 *     responses:
 *       200:
 *         description: Material created successfully
 */
router.post("/", createMaterial);

/**
 * @swagger
 * /api/materials/get-allMaterials:
 *   get:
 *     summary: Get all materials
 *     tags: [Materials]
 *     responses:
 *       200:
 *         description: List of learning materials
 */
router.get("/get-allMaterials", getAllMaterials);

/**
 * @swagger
 * /api/materials/get-single/{id}:
 *   get:
 *     summary: Get single material
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Material fetched successfully
 *       404:
 *         description: Material not found
 */
router.get("/get-single/:id", getSingleMaterial);

/**
 * @swagger
 * /api/materials/update/{id}:
 *   put:
 *     summary: Update a material
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Material updated successfully
 */
router.put("/update/:id", updateMaterial);

/**
 * @swagger
 * /api/materials/delete/{id}:
 *   delete:
 *     summary: Delete a material
 *     tags: [Materials]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Material deleted successfully
 */
router.delete("/delete/:id", deleteMaterial);

/**
 * @swagger
 * /api/materials/get-bySlug:
 *   get:
 *     summary: Get single material by slug
 *     tags: [Materials]
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Material slug
 *         example: algebra-basics
 *     responses:
 *       200:
 *         description: Material fetched successfully
 */
router.get("/get-bySlug", getSingleMaterialBySlug);

export default router;
