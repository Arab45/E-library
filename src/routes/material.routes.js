import express from "express";
import controller, { createMaterial, deleteMaterial, getAllMaterials, getSingleMaterial, updateMaterial } from "../controller/material.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Material
 *   description: Learning materials
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Material:
 *       type: object
 *       required:
 *         - title
 *         - category
 *         - subjectId
 *         - classLevelId
 *       properties:
 *         title:
 *           type: string
 *           example: Mathematics Textbook
 *         category:
 *           type: string
 *           example: textbook
 *         subjectId:
 *           type: string
 *         classLevelId:
 *           type: string
 *         file:
 *           type: object
 *           properties:
 *             url:
 *               type: string
 */

/**
 * @swagger
 * /api/materials:
 *   post:
 *     summary: Create material
 *     tags: [Material]
 *  *     responses:
 *       200:
 *         description: Successfully created material
 */
router.post("/", createMaterial);

/**
 * @swagger
 * /api/materials/getAllMaterials:
 *   get:
 *     summary: Get all materials
 *     tags: [Material]
 *  *     responses:
 *       200:
 *         description: List of materials
 */
router.get("/getAllMaterials", getAllMaterials);

/**
 * @swagger
 * /api/materials/getSingleMaterial/{id}:
 *   get:
 *     summary: Get single material
 *     tags: [Material]
parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Material fetched successfully
 */
router.get("/getSingleMaterial/:id", getSingleMaterial);

/**
 * @swagger
 * /api/materials/update/{id}:
 *   put:
 *     summary: Update material
 *     tags: [Material]
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
 *     summary: Delete material
 *     tags: [Material]
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

export default router;
