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
 *   name: Class Levels
 *   description: Class level management APIs
 */

/**
 * @swagger
 * /api/class-levels:
 *   post:
 *     summary: Create a new class level
 *     tags: [Class Levels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               code: JSS1
 *               name: Junior Secondary School 1
 *               level: junior
 *               year: 1
 *               subjectsCount: 8
 *               materialsCount: 50
 *               color: red
 *               isActive: true
 *     responses:
 *       200:
 *         description: Class level created successfully
 */
router.post("/", createClassLevel);

/**
 * @swagger
 * /api/class-levels/get-allClassLevels:
 *   get:
 *     summary: Get all class levels
 *     tags: [Class Levels]
 *     responses:
 *       200:
 *         description: List of class levels
 */
router.get("/get-allClassLevels", getAllClassLevels);

/**
 * @swagger
 * /api/class-levels/get-single/{id}:
 *   get:
 *     summary: Get single class level
 *     tags: [Class Levels]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Class level fetched successfully
 *       404:
 *         description: Class level not found
 */
router.get("/get-single/:id", getSingleClassLevel);

/**
 * @swagger
 * /api/class-levels/update/{id}:
 *   put:
 *     summary: Update a class level
 *     tags: [Class Levels]
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
 *     summary: Delete a class level
 *     tags: [Class Levels]
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
