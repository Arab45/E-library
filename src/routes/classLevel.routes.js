import express from "express";
import {
  createClassLevel,
  deleteClassLevel,
  getAllClassLevels,
  getSingleClassLevel,
  updateClassLevel,
} from "../controller/classLevel.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ClassLevel
 *   description: Class level management
 */

/**
 * @swagger
 * /api/class-levels:
 *   post:
 *     summary: Create class level
 *     tags: [ClassLevel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClassLevel'
 *     responses:
 *       200:
 *         description: Class level created successfully
 */
router.post("/", createClassLevel);

/**
 * @swagger
 * /api/class-levels/getAllClassLevels:
 *   get:
 *     summary: Get all class levels
 *     tags: [ClassLevel]
 *     responses:
 *       200:
 *         description: List of class levels
 */
router.get("/getAllClassLevels", getAllClassLevels);

/**
 * @swagger
 * /api/class-levels/getSingleClassLevel/{id}:
 *   get:
 *     summary: Get single class level
 *     tags: [ClassLevel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Class level fetched successfully
 */
router.get("/getSingleClassLevel/:id", getSingleClassLevel);

/**
 * @swagger
 * /api/class-levels/update/{id}:
 *   put:
 *     summary: Update class level
 *     tags: [ClassLevel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Class level updated successfully
 */
router.put("/update/:id", updateClassLevel);

/**
 * @swagger
 * /api/class-levels/delete/{id}:
 *   delete:
 *     summary: Delete class level
 *     tags: [ClassLevel]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Class level deleted successfully
 */
router.delete("/delete/:id", deleteClassLevel);

export default router;
